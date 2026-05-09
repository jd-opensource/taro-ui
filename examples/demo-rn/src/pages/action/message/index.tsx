import React from 'react'
import { AtButton, AtMessage } from 'taro-ui'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

type MessageType = 'info' | 'success' | 'error' | 'warning'

export default class ToastPage extends React.Component {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI'
  }

  private handleClick(type: MessageType): void {
    Taro.atMessage({
      message: '消息通知',
      type
    })
  }

  public render(): JSX.Element {
    return (
      <View className='page toast-page'>
        {/* S Header */}
        <DocsHeader title='Message 消息通知' />
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          <View className='doc-body--panel'>
            <View className='panel__title'>基本案例</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <View style={{ flex: 1 }}>
                  <AtButton onClick={this.handleClick.bind(this, '')}>
                    普通消息
                  </AtButton>
                </View>
              </View>
              <View className='panel__content--example-item'>
                <View style={{ flex: 1 }}>
                  <AtButton onClick={this.handleClick.bind(this, 'success')}>
                    成功消息
                  </AtButton>
                </View>
              </View>
              <View className='panel__content--example-item'>
                <View style={{ flex: 1 }}>
                  <AtButton onClick={this.handleClick.bind(this, 'error')}>
                    错误消息
                  </AtButton>
                </View>
              </View>
              <View className='panel__content--example-item'>
                <View style={{ flex: 1 }}>
                  <AtButton onClick={this.handleClick.bind(this, 'warning')}>
                    警告消息
                  </AtButton>
                </View>
              </View>
              <View className='panel__content--example-item'>
                <View style={{ flex: 1 }}>
                  <AtButton onClick={this.handleClick.bind(this, 'info')}>
                    提示消息
                  </AtButton>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
        <AtMessage />
      </View>
    )
  }
}
