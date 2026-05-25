import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { Slider, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { AtSliderProps } from '../../../types/slider'

function clampNumber(value: number, lower: number, upper: number): number {
  return Math.max(lower, Math.min(upper, value))
}

function AtSlider({
  customStyle = '',
  className = '',
  min = 0,
  max = 100,
  step = 1,
  value = 0,
  disabled = false,
  activeColor = '#6190e8',
  backgroundColor = '#e9e9e9',
  blockSize = 28,
  blockColor = '#ffffff',
  showValue = false,
  onChange,
  onChanging
}: AtSliderProps): JSX.Element {
  const [_value, setValue] = useState(() => clampNumber(value, min, max))

  useEffect(() => {
    setValue(clampNumber(value, min, max))
  }, [value, min, max])

  const handleChanging = (e: CommonEvent): void => {
    const { value: detailValue }: { value: number } = e.detail

    if (detailValue !== _value) {
      setValue(detailValue)
    }
    onChanging && onChanging(detailValue)
  }

  const handleChange = (e: CommonEvent): void => {
    const { value: detailValue } = e.detail

    setValue(detailValue)
    onChange && onChange(detailValue)
  }

  return (
    <View
      className={classNames(
        {
          'at-slider': true,
          'at-slider--disabled': disabled
        },
        className
      )}
      style={customStyle}
    >
      <View className='at-slider__inner'>
        <Slider
          min={min}
          max={max}
          step={step}
          value={_value}
          disabled={disabled}
          activeColor={activeColor}
          backgroundColor={backgroundColor}
          blockSize={blockSize}
          blockColor={blockColor}
          onChanging={handleChanging}
          onChange={handleChange}
        ></Slider>
      </View>
      {showValue && <View className='at-slider__text'>{`${_value}`}</View>}
    </View>
  )
}

AtSlider.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number,
  disabled: PropTypes.bool,
  activeColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  blockSize: PropTypes.number,
  blockColor: PropTypes.string,
  showValue: PropTypes.bool,
  onChange: PropTypes.func,
  onChanging: PropTypes.func
}

export default AtSlider
