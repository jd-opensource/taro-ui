import classNames from 'classnames'
import _toString from 'lodash/toString'
import PropTypes from 'prop-types'
import React from 'react'
import { Input, Text, View } from '@tarojs/components'
import { CommonEvent, ITouchEvent } from '@tarojs/components/types/common'
import { AtInputNumberProps, InputError } from '../../../types/input-number'
import { noop, pxTransform } from '../../common/utils'

// TODO: Check all types

// 实现两数相加并保留小数点后最短尾数
function addNum(num1: number, num2: number): number {
  let sq1: number, sq2: number
  try {
    sq1 = _toString(num1).split('.')[1].length
  } catch (e) {
    sq1 = 0
  }
  try {
    sq2 = _toString(num2).split('.')[1].length
  } catch (e) {
    sq2 = 0
  }
  const m = Math.pow(10, Math.max(sq1, sq2))
  return (Math.round(num1 * m) + Math.round(num2 * m)) / m
}

// 格式化数字，处理01变成1,并且不处理1. 这种情况
function parseValue(num: string): string {
  if (num === '') return '0'

  const numStr = _toString(num)
  if (numStr.indexOf('0') === 0 && numStr.indexOf('.') === -1) {
    // 处理01变成1,并且不处理1.
    return _toString(parseFloat(num))
  }
  return _toString(num)
}

type ExtendEvent = {
  target: {
    value: string | number
  }
}

function AtInputNumber({
  customStyle = {},
  className = '',
  disabled = false,
  disabledInput = false,
  type = 'number',
  width = 0,
  min = 0,
  max = 100,
  step = 1,
  size = 'normal',
  value,
  onChange = noop,
  onBlur,
  onErrorInput
}: AtInputNumberProps): JSX.Element {
  const handleError = (errorValue: InputError): void => {
    if (!onErrorInput) {
      return
    }
    onErrorInput(errorValue)
  }

  const handleValue = (val: string | number): string => {
    let resultValue = val === '' ? min : val
    // 此处不能使用 Math.max，会是字符串变数字，并丢失 .
    if (Number(resultValue) > max) {
      resultValue = max
      handleError({
        type: 'OVER',
        errorValue: resultValue
      })
    }
    if (Number(resultValue) < min) {
      resultValue = min
      handleError({
        type: 'LOW',
        errorValue: resultValue
      })
    }
    if (resultValue && !Number(resultValue)) {
      resultValue = parseFloat(String(resultValue)) || min

      handleError({
        type: 'OVER',
        errorValue: resultValue
      })
    }

    resultValue = parseValue(String(resultValue))
    return resultValue
  }

  const handleClick = (clickType: 'minus' | 'plus', e: CommonEvent): void => {
    const lowThanMin = clickType === 'minus' && Number(value) <= min
    const overThanMax = clickType === 'plus' && Number(value) >= max
    if (lowThanMin || overThanMax || disabled) {
      const deltaValue = clickType === 'minus' ? -step : step
      const errorValue = addNum(Number(value), deltaValue)
      if (disabled) {
        handleError({
          type: 'DISABLED',
          errorValue
        })
      } else {
        handleError({
          type: lowThanMin ? 'LOW' : 'OVER',
          errorValue
        })
      }
      return
    }
    const deltaValue = clickType === 'minus' ? -step : step
    let newValue = addNum(Number(value), deltaValue)
    newValue = Number(handleValue(newValue))
    onChange(newValue, e)
  }

  const handleInput = (e: CommonEvent & ExtendEvent): string => {
    const { value: inputVal } = e.target
    if (disabled) return ''

    const newValue = handleValue(inputVal)
    onChange(Number(newValue), e)
    return newValue
  }

  const handleBlur = (event: ITouchEvent): void => onBlur && onBlur(event)

  const inputStyle = {
    width: width ? `${pxTransform(width)}` : ''
  }
  const inputValue =
    typeof value !== 'undefined' ? Number(handleValue(value)) : null
  const rootCls = classNames(
    'at-input-number',
    {
      'at-input-number--lg': size === 'large'
    },
    className
  )
  const minusBtnCls = classNames('at-input-number__btn', {
    'at-input-number--disabled':
      (inputValue !== null && inputValue <= min) || disabled
  })
  const plusBtnCls = classNames('at-input-number__btn', {
    'at-input-number--disabled':
      (inputValue !== null && inputValue >= max) || disabled
  })

  return (
    <View className={rootCls} style={customStyle}>
      <View
        className={minusBtnCls}
        onClick={(e: CommonEvent) => handleClick('minus', e)}
      >
        <Text className='at-icon at-icon-subtract at-input-number__btn-subtract'></Text>
      </View>
      <Input
        className='at-input-number__input'
        style={inputStyle}
        type={type}
        value={inputValue !== null ? String(inputValue) : ''}
        disabled={disabledInput || disabled}
        onInput={handleInput}
        onBlur={handleBlur}
      />
      <View
        className={plusBtnCls}
        onClick={(e: CommonEvent) => handleClick('plus', e)}
      >
        <Text className='at-icon at-icon-add at-input-number__btn-add'></Text>
      </View>
    </View>
  )
}

AtInputNumber.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  type: PropTypes.oneOf(['number', 'digit']),
  disabled: PropTypes.bool,
  width: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  size: PropTypes.oneOf(['normal', 'large']),
  disabledInput: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onErrorInput: PropTypes.func
}

export default AtInputNumber
