import classNames from 'classnames'
import React from 'react'
import { View } from '@tarojs/components'
import { AtActionSheetBodyProps } from '../../../../types/action-sheet'

function AtActionSheetBody({
  className,
  children
}: AtActionSheetBodyProps): JSX.Element {
  const rootClass = classNames('at-action-sheet__body', className)
  return <View className={rootClass}>{children}</View>
}

export default AtActionSheetBody
