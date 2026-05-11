import React from 'react'
import { AtActivityIndicator, AtSwitch } from 'taro-ui'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

interface ActivityIndicatorPageState {
  isOpened: boolean
}

export default class ActivityIndicatorPage extends React.Component<
  {},
  ActivityIndicatorPageState
> {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI'
  }

  public constructor(props: any) {
    super(props)
    this.state = {
      isOpened: true
    }
  }

  private handleChange(value: boolean): void {
    this.setState({
      isOpened: value
    })
  }

  public render(): JSX.Element {
    return (
      <View className='page activity-indicator-page'>
        {/* S Header */}
        <DocsHeader title='Activity Indicator 活动指示器'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 自定义尺寸 */}
          <View className='panel'>
            <View className='panel__title'>自定义尺寸</View>
            <View className='panel__content'>
              <View className='example-item'>
                <View className='subitem'>
                  <AtActivityIndicator size={20}></AtActivityIndicator>
                </View>
                <View className='subitem'>
                  <AtActivityIndicator size={24} />
                </View>
                <View className='subitem'>
                  <AtActivityIndicator size={32} />
                </View>
              </View>
            </View>
          </View>

          {/* 自定义颜色 */}
          <View className='panel'>
            <View className='panel__title'>自定义颜色</View>
            <View className='panel__content'>
              <View className='example-item'>
                <View className='subitem'>
                  <AtActivityIndicator color='#13CE66' />
                </View>
                <View className='subitem'>
                  <AtActivityIndicator color='#FF4949' />
                </View>
                <View className='subitem'>
                  <AtActivityIndicator color='#C9C9C9' />
                </View>
              </View>
            </View>
          </View>

          {/* 自定义文字 */}
          <View className='panel'>
            <View className='panel__title'>自定义文字</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtActivityIndicator content='加载中...' />
              </View>
            </View>
          </View>

          {/* 状态切换 */}
          <View className='panel'>
            <View className='panel__title'>状态切换</View>
            <View className='panel__content '>
              <AtSwitch
                border={false}
                title={this.state.isOpened ? '开启中' : '关闭中'}
                checked={this.state.isOpened}
                onChange={this.handleChange.bind(this)}
              />
              <View className='example-item'>
                <AtActivityIndicator
                  content='加载中...'
                  isOpened={this.state.isOpened}
                />
              </View>
            </View>
          </View>

          {/* 垂直水平居中 */}
          <View className='panel'>
            <View className='panel__title'>垂直水平居中</View>
            <View className='panel__content'>
              <View className='example-item example-item--center'>
                <AtActivityIndicator mode='center' />
              </View>
              <View className='example-item example-item--center'>
                <AtActivityIndicator mode='center' content='Loading...' />
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
