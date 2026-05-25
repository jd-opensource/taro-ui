import classNames from 'classnames'
import React from 'react'
import { View } from '@tarojs/components'
import { AtActionSheetHeaderProps } from '../../../../types/action-sheet'

function AtActionSheetHeader({
  className,
  children
}: AtActionSheetHeaderProps): JSX.Element {
  const rootClass = classNames('at-action-sheet__header', className)

  return <View className={rootClass}>{children}</View>
}

export default AtActionSheetHeader
