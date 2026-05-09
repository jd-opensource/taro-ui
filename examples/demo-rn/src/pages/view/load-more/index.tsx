import React from 'react'
import { AtLoadMore } from 'taro-ui'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

interface LoadMorePageState {
  status: 'more' | 'loading' | 'noMore'
}

export default class LoadMorePage extends React.Component<
  {},
  LoadMorePageState
> {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI'
  }

  public constructor(props: any) {
    super(props)
    this.state = {
      status: 'more'
    }
  }

  private handleClick(): void {
    this.setState({
      status: 'loading'
    })
    setTimeout(() => {
      this.setState({
        status: 'noMore'
      })
    }, 2000)
  }

  public render(): JSX.Element {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='LoadMore 页面提示'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 文字 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>一般用法</View>
            <View className='panel__content no-padding'>
              <AtLoadMore
                onClick={this.handleClick.bind(this)}
                status={this.state.status}
              />
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
