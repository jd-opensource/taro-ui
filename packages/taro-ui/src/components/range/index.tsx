import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { useEffect, useRef, useState } from 'react'
import { View } from '@tarojs/components'
import { CommonEvent, ITouchEvent } from '@tarojs/components/types/common'
import { AtRangeProps } from '../../../types/range'
import {
  delayQuerySelector,
  getEventDetail,
  mergeStyle
} from '../../common/utils'

function AtRange({
  customStyle = '',
  className = '',
  sliderStyle = {},
  railStyle = {},
  trackStyle = {},
  value = [0, 0],
  min = 0,
  max = 100,
  disabled = false,
  blockSize = 0,
  onChange,
  onAfterChange
}: AtRangeProps): JSX.Element {
  const widthRef = useRef(0)
  const leftRef = useRef(0)
  const deltaValueRef = useRef(max - min)
  const currentSliderRef = useRef('')
  const [{ aX, bX }, setAxis] = useState({ aX: 0, bX: 0 })
  const stateRef = useRef({ aX: 0, bX: 0 })
  stateRef.current = { aX, bX }

  deltaValueRef.current = max - min

  const triggerEvent = (funcName: string): void => {
    const { aX: stateAX, bX: stateBX } = stateRef.current
    const a = Math.round((stateAX / 100) * deltaValueRef.current) + min
    const b = Math.round((stateBX / 100) * deltaValueRef.current) + min
    const result = [a, b].sort((x, y) => x - y) as [number, number]

    if (funcName === 'onChange') {
      onChange && onChange(result)
    } else if (funcName === 'onAfterChange') {
      onAfterChange && onAfterChange(result)
    }
  }

  const setValue = (nextValue: number[]): void => {
    const aXVal = Math.round(
      ((nextValue[0] - min) / deltaValueRef.current) * 100
    )
    const bXVal = Math.round(
      ((nextValue[1] - min) / deltaValueRef.current) * 100
    )
    setAxis({ aX: aXVal, bX: bXVal })
  }

  const setSliderValue = (
    sliderName: string,
    targetValue: number,
    funcName: string
  ): void => {
    const distance = Math.min(Math.max(targetValue, 0), widthRef.current)
    const sliderValue = Math.floor((distance / widthRef.current) * 100)
    if (funcName) {
      setAxis(prev => {
        const next = { ...prev, [sliderName]: sliderValue }
        stateRef.current = next
        const a = Math.round((next.aX / 100) * deltaValueRef.current) + min
        const b = Math.round((next.bX / 100) * deltaValueRef.current) + min
        const result = [a, b].sort((x, y) => x - y) as [number, number]
        if (funcName === 'onChange') {
          onChange && onChange(result)
        } else if (funcName === 'onAfterChange') {
          onAfterChange && onAfterChange(result)
        }
        return next
      })
    } else {
      setAxis(prev => ({ ...prev, [sliderName]: sliderValue }))
    }
  }

  const updatePos = (): void => {
    delayQuerySelector('.at-range__container', 0).then(rect => {
      widthRef.current = Math.round(rect[0]?.width)
      leftRef.current = Math.round(rect[0]?.left)
    })
  }

  const handleClick = (event: CommonEvent): void => {
    if (currentSliderRef.current && !disabled) {
      let sliderValue = 0
      const detail = getEventDetail(event)
      sliderValue = detail.x - leftRef.current
      setSliderValue(currentSliderRef.current, sliderValue, 'onChange')
    }
  }

  const handleTouchMove = (sliderName: string, event: ITouchEvent): void => {
    if (disabled) return
    event.stopPropagation()

    const clientX = event.touches[0].clientX
    setSliderValue(sliderName, clientX - leftRef.current, 'onChange')
  }

  const handleTouchEnd = (sliderName: string): void => {
    if (disabled) return

    currentSliderRef.current = sliderName
    triggerEvent('onAfterChange')
  }

  useEffect(() => {
    updatePos()
    setValue(value)
    // componentDidMount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const prevValueRef = useRef(value)
  useEffect(() => {
    updatePos()
    if (
      prevValueRef.current?.[0] !== value?.[0] ||
      prevValueRef.current?.[1] !== value?.[1]
    ) {
      setValue(value)
    }
    prevValueRef.current = value
  }, [value, min, max])

  const rootCls = classNames(
    'at-range',
    {
      'at-range--disabled': disabled
    },
    className
  )

  const sliderCommonStyle = {
    width: blockSize ? `${blockSize}PX` : '',
    height: blockSize ? `${blockSize}PX` : '',
    marginLeft: blockSize ? `${-blockSize / 2}PX` : ''
  }
  const sliderAStyle = {
    ...sliderCommonStyle,
    left: `${aX}%`
  }
  const sliderBStyle = {
    ...sliderCommonStyle,
    left: `${bX}%`
  }
  const containerStyle = {
    height: blockSize ? `${blockSize}PX` : ''
  }
  const smallerX = Math.min(aX, bX)
  const deltaX = Math.abs(aX - bX)
  const atTrackStyle = {
    left: `${smallerX}%`,
    width: `${deltaX}%`
  }

  return (
    <View className={rootCls} style={customStyle} onClick={handleClick}>
      <View className='at-range__container' style={containerStyle}>
        <View className='at-range__rail' style={railStyle}></View>
        <View
          className='at-range__track'
          style={mergeStyle(atTrackStyle, trackStyle)}
        ></View>
        <View
          className='at-range__slider'
          style={mergeStyle(sliderAStyle, sliderStyle)}
          onTouchMove={(event: ITouchEvent) => handleTouchMove('aX', event)}
          onTouchEnd={() => handleTouchEnd('aX')}
        ></View>
        <View
          className='at-range__slider'
          style={mergeStyle(sliderBStyle, sliderStyle)}
          onTouchMove={(event: ITouchEvent) => handleTouchMove('bX', event)}
          onTouchEnd={() => handleTouchEnd('bX')}
        ></View>
      </View>
    </View>
  )
}

AtRange.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  sliderStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  railStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  trackStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  value: PropTypes.array,
  min: PropTypes.number,
  max: PropTypes.number,
  disabled: PropTypes.bool,
  blockSize: PropTypes.number,
  onChange: PropTypes.func,
  onAfterChange: PropTypes.func
}

export default AtRange
