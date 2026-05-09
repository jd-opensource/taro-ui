import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

export interface DocsHeaderProps {
  title?: string
}

export default class DocsHeader extends React.Component<DocsHeaderProps> {
  public static defaultProps: DocsHeaderProps
  public static propTypes: InferProps<DocsHeaderProps>

  public render(): JSX.Element {
    const { title } = this.props

    return (
      <View className='doc-header'>
        <Text className='doc-header__title'>{title}</Text>
        {process.env.TARO_ENV === 'rn' && <View className='doc-header__line' />}
      </View>
    )
  }
}

DocsHeader.defaultProps = {
  title: '标题'
}

DocsHeader.propTypes = {
  title: PropTypes.string
}
