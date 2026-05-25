import classNames from 'classnames'
import React from 'react'
import { View } from '@tarojs/components'
import { AtSwipeActionOptionsProps } from '../../../../types/swipe-action'

function AtSwipeActionOptions({
  className,
  componentId,
  customStyle,
  children
}: AtSwipeActionOptionsProps): JSX.Element {
  const rootClass = classNames('at-swipe-action__options', className)

  return (
    <View
      id={`swipeActionOptions-${componentId}`}
      className={rootClass}
      style={customStyle}
    >
      {children}
    </View>
  )
}

export default AtSwipeActionOptions
