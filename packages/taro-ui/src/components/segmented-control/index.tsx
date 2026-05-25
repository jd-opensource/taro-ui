import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { AtSegmentedControlProps } from '../../../types/segmented-control'
import { mergeStyle, noop, pxTransform } from '../../common/utils'

function AtSegmentedControl({
  customStyle = '',
  className = '',
  disabled = false,
  values = [],
  selectedColor = '',
  current = 0,
  color = '',
  fontSize = 28,
  onClick = noop
}: AtSegmentedControlProps): JSX.Element {
  const handleClick = (index: number, event: CommonEvent): void => {
    if (disabled) return
    onClick(index, event)
  }

  const rootStyle = {
    borderColor: selectedColor
  }
  const itemStyle = {
    color: selectedColor,
    fontSize: pxTransform(fontSize),
    borderColor: selectedColor,
    backgroundColor: color
  }
  const selectedItemStyle = {
    color,
    fontSize: pxTransform(fontSize),
    borderColor: selectedColor,
    backgroundColor: selectedColor
  }
  const rootCls = classNames(
    'at-segmented-control',
    {
      'at-segmented-control--disabled': disabled
    },
    className
  )

  return (
    <View className={rootCls} style={mergeStyle(rootStyle, customStyle)}>
      {values.map((value, i) => (
        <View
          className={classNames('at-segmented-control__item', {
            'at-segmented-control__item--active': current === i
          })}
          style={current === i ? selectedItemStyle : itemStyle}
          key={value}
          onClick={event => handleClick(i, event)}
        >
          {value}
        </View>
      ))}
    </View>
  )
}

AtSegmentedControl.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  current: PropTypes.number,
  color: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  values: PropTypes.array,
  onClick: PropTypes.func
}

export default AtSegmentedControl
