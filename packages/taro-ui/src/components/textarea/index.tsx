import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Textarea, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import Taro from '@tarojs/taro'
import { AtTextareaProps } from '../../../types/textarea'
import { noop, pxTransform } from '../../common/utils'

type ExtendEvent = {
  target: {
    value: string
  }
}

function getMaxLength(
  maxLength: number,
  textOverflowForbidden: boolean
): number {
  if (!textOverflowForbidden) {
    return maxLength + 500
  }
  return maxLength
}

function AtTextarea({
  customStyle = '',
  className = '',
  cursorSpacing = 100,
  maxLength = 200,
  placeholder = '',
  disabled = false,
  autoFocus = false,
  focus = false,
  showConfirmBar = false,
  selectionStart = -1,
  selectionEnd = -1,
  count = true,
  fixed = false,
  height = '',
  textOverflowForbidden = true,
  value,
  placeholderStyle,
  placeholderClass,
  onChange = noop,
  onFocus,
  onBlur,
  onConfirm,
  onLinechange
}: AtTextareaProps): JSX.Element {
  const ENV = Taro.getEnv()

  const handleInput = (event: CommonEvent & ExtendEvent): void => {
    onChange(event.detail.value, event)
  }

  const handleFocus = (event: CommonEvent): void => {
    onFocus && onFocus(event)
  }

  const handleBlur = (event: CommonEvent): void => {
    onBlur && onBlur(event)
  }

  const handleConfirm = (event: CommonEvent): void => {
    onConfirm && onConfirm(event)
  }

  const handleLinechange = (event: CommonEvent): void => {
    onLinechange && onLinechange(event)
  }

  const _maxLength = parseInt(maxLength.toString())
  const actualMaxLength = getMaxLength(_maxLength, textOverflowForbidden)
  const textareaStyle = height ? `height:${pxTransform(Number(height))}` : ''
  const rootCls = classNames(
    'at-textarea',
    `at-textarea--${ENV}`,
    {
      'at-textarea--error': _maxLength < (value || '').length
    },
    className
  )
  const placeholderCls = classNames('placeholder', placeholderClass)

  return (
    <View className={rootCls} style={customStyle}>
      <Textarea
        className='at-textarea__textarea'
        style={textareaStyle}
        placeholderStyle={placeholderStyle}
        placeholderClass={placeholderCls}
        cursorSpacing={cursorSpacing}
        value={value || ''}
        maxlength={actualMaxLength}
        placeholder={placeholder}
        disabled={disabled}
        autoFocus={autoFocus}
        focus={focus}
        showConfirmBar={showConfirmBar}
        selectionStart={selectionStart}
        selectionEnd={selectionEnd}
        fixed={fixed}
        onInput={handleInput}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onConfirm={handleConfirm}
        onLineChange={handleLinechange}
      />
      {count && (
        <View className='at-textarea__counter'>
          {(value || '').length}/{_maxLength}
        </View>
      )}
    </View>
  )
}

AtTextarea.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  value: PropTypes.string,
  cursorSpacing: PropTypes.number,
  maxLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholderClass: PropTypes.string,
  placeholderStyle: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  focus: PropTypes.bool,
  showConfirmBar: PropTypes.bool,
  selectionStart: PropTypes.number,
  selectionEnd: PropTypes.number,
  count: PropTypes.bool,
  textOverflowForbidden: PropTypes.bool,
  fixed: PropTypes.bool,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onLinechange: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onConfirm: PropTypes.func
}

export default AtTextarea
