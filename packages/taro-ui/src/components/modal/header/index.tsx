import classNames from 'classnames'
import React from 'react'
import { View } from '@tarojs/components'
import { AtModalHeaderProps } from '../../../../types/modal'

function AtModalHeader({
  className,
  children
}: AtModalHeaderProps): JSX.Element {
  const rootClass = classNames('at-modal__header', className)
  return <View className={rootClass}>{children}</View>
}

export default AtModalHeader
