import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Text, View } from '@tarojs/components'
import { AtProgressProps } from '../../../types/progress'

export default function AtProgress({
  color,
  percent: percentProp,
  strokeWidth,
  status,
  isHidePercent,
  className
}: AtProgressProps): JSX.Element {
  let percent = percentProp
  if (typeof percent !== 'number') {
    percent = 0
  }

  if (percent < 0) {
    percent = 0
  } else if (percent > 100) {
    percent = 100
  }

  const rootClass = classNames(
    'at-progress',
    {
      [`at-progress--${status}`]: !!status
    },
    className
  )
  const iconClass = classNames('at-icon', {
    'at-icon-close-circle': status === 'error',
    'at-icon-check-circle': status === 'success'
  })

  const progressStyle = {
    width: percent && `${+percent}%`,
    height: strokeWidth && `${+strokeWidth}px`,
    backgroundColor: color
  }

  return (
    <View className={rootClass}>
      <View className='at-progress__outer'>
        <View className='at-progress__outer-inner'>
          <View
            className='at-progress__outer-inner-background'
            style={progressStyle}
          />
        </View>
      </View>

      {!isHidePercent && (
        <View className='at-progress__content'>
          {!status || status === 'progress' ? (
            `${percent}%`
          ) : (
            <Text className={iconClass}></Text>
          )}
        </View>
      )}
    </View>
  )
}

AtProgress.propTypes = {
  color: PropTypes.string,
  status: PropTypes.string,
  percent: PropTypes.number,
  strokeWidth: PropTypes.number,
  isHidePercent: PropTypes.bool
}
