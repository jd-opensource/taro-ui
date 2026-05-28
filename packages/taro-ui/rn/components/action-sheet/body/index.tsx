import classNames from 'classnames'
import React from 'react'
import { View } from '@tarojs/components'
import { AtActionSheetBodyProps } from '../../../../types/action-sheet'

export default class AtActionSheetBody extends React.Component<AtActionSheetBodyProps> {
  public render(): JSX.Element {
    const rootClass = classNames('at-action-sheet__body', this.props.className)
    return <View className={rootClass}>{this.props.children}</View>
  }
}
