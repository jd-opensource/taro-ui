import React from 'react'
import { AtButton, AtCurtain } from 'taro-ui'
import { Image, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import curtainPng from '../../../assets/images/curtain.png'
import DocsHeader from '../../components/doc-header'
import './index.scss'

interface TagPageState {
  isOpened: boolean
  closeBtnPosition:
    | 'top'
    | 'top-left'
    | 'top-right'
    | 'bottom'
    | 'bottom-left'
    | 'bottom-right'
  [key: string]: string | boolean
}

export default class TagPage extends React.Component<{}, TagPageState> {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI'
  }

  public constructor(props: any) {
    super(props)
    this.state = {
      isOpened: false,
      closeBtnPosition: 'bottom'
    }
  }

  private handleChange(stateName: string, value: string): void {
    this.setState({
      isOpened: true,
      [stateName]: value
    })
  }

  private onClose(): void {
    this.setState({
      isOpened: false
    })
  }

  public render(): JSX.Element {
    const { isOpened, closeBtnPosition } = this.state

    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Curtain 幕帘'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          <AtCurtain
            isOpened={isOpened}
            closeBtnPosition={closeBtnPosition}
            onClose={this.onClose.bind(this)}
          >
            <Image style='width:100%' mode='widthFix' src={curtainPng} />
          </AtCurtain>

          {/* 顶部关闭 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>顶部关闭</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <AtButton
                  onClick={this.handleChange.bind(
                    this,
                    'closeBtnPosition',
                    'top'
                  )}
                >
                  顶部关闭幕帘
                </AtButton>
              </View>
            </View>
          </View>

          {/* 底部关闭 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>底部关闭</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <AtButton
                  onClick={this.handleChange.bind(
                    this,
                    'closeBtnPosition',
                    'bottom'
                  )}
                >
                  底部关闭幕帘
                </AtButton>
              </View>
            </View>
          </View>

          {/* 左上关闭 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>左上关闭</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <AtButton
                  onClick={this.handleChange.bind(
                    this,
                    'closeBtnPosition',
                    'top-left'
                  )}
                >
                  左上关闭幕帘
                </AtButton>
              </View>
            </View>
          </View>

          {/* 右上关闭 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>右上关闭</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <AtButton
                  onClick={this.handleChange.bind(
                    this,
                    'closeBtnPosition',
                    'top-right'
                  )}
                >
                  右上关闭幕帘
                </AtButton>
              </View>
            </View>
          </View>

          {/* 左下关闭 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>左下关闭</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <AtButton
                  onClick={this.handleChange.bind(
                    this,
                    'closeBtnPosition',
                    'bottom-left'
                  )}
                >
                  左下关闭幕帘
                </AtButton>
              </View>
            </View>
          </View>

          {/* 右下关闭 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>右下关闭</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <AtButton
                  onClick={this.handleChange.bind(
                    this,
                    'closeBtnPosition',
                    'bottom-right'
                  )}
                >
                  右下关闭幕帘
                </AtButton>
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
