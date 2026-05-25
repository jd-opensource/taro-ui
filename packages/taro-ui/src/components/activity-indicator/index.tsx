import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Text, View } from '@tarojs/components'
import { AtActivityIndicatorProps } from '../../../types/activity-indicator'
import AtLoading from '../loading/index'

function AtActivityIndicator({
  color = '',
  size = 0,
  mode = 'normal',
  content = '',
  className = '',
  isOpened = true
}: AtActivityIndicatorProps): JSX.Element {
  const rootClass = classNames(
    'at-activity-indicator',
    {
      'at-activity-indicator--center': mode === 'center',
      'at-activity-indicator--isopened': isOpened
    },
    className
  )

  return (
    <View className={rootClass}>
      <View className='at-activity-indicator__body'>
        <AtLoading size={size} color={color} />
      </View>
      {content && (
        <Text className='at-activity-indicator__content'>{content}</Text>
      )}
    </View>
  )
}

AtActivityIndicator.propTypes = {
  size: PropTypes.number,
  mode: PropTypes.string,
  color: PropTypes.string,
  content: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  isOpened: PropTypes.bool
}

export default AtActivityIndicator
