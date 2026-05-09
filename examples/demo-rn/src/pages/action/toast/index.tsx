import React from 'react'
import { AtButton, AtToast } from 'taro-ui'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

const INIT_STATE: ToastPageState = {
  image: '',
  icon: '',
  text: '',
  duration: 3000,
  hasMask: false,
  isOpened: false,
}

interface ToastPageState {
  image: string
  icon: string
  text: string
  status?: 'error' | 'loading' | 'success'
  duration: number
  hasMask: boolean
  isOpened: boolean
}

export default class ToastPage extends React.Component<{}, ToastPageState> {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI',
  }

  public constructor(props: any) {
    super(props)
    this.state = INIT_STATE
  }

  private handleClick = (params: ToastPageState): void => {
    if (this.state.isOpened) {
      return this.setState(INIT_STATE)
    }

    const state = Object.assign({ ...INIT_STATE, isOpened: true }, params)

    this.setState(state)
  }

  private handleClose = (): void => {
    this.setState({
      isOpened: false,
    })
  }

  public render(): JSX.Element {
    const { text, icon, status, isOpened, duration, image, hasMask } =
      this.state

    return (
      <View className='page toast-page'>
        {/* S Header */}
        <DocsHeader title='Toast 轻提示' />
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          <View className='doc-body--panel'>
            <View className='panel__title'>基本案例</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <AtButton
                  onClick={this.handleClick.bind(this, {
                    text: '文本内容',
                  })}
                >
                  文本 Toast
                </AtButton>
              </View>
              <View className='panel__content--example-item'>
                <AtButton
                  onClick={this.handleClick.bind(this, {
                    text: '文本内容',
                    icon: 'analytics',
                  })}
                >
                  文本 + ICON
                </AtButton>
              </View>
            </View>
          </View>

          <View className='doc-body--panel'>
            <View className='panel__title'>自定义图片</View>
            <View className='panel__content'>
              <View className='example__item'>
                <AtButton
                  onClick={this.handleClick.bind(this, {
                    text: '凹凸实验室',
                    image:
                      'https://storage.360buyimg.com/mtd/home/group-21533885306540.png',
                  })}
                >
                  自定义图片 Toast
                </AtButton>
              </View>
            </View>
          </View>

          <View className='doc-body--panel'>
            <View className='panel__title'>添加遮罩层</View>
            <View className='panel__content'>
              <View className='example__item'>
                <AtButton
                  onClick={this.handleClick.bind(this, {
                    text: '透明遮罩层的作用在于不可点击下面的元素',
                    hasMask: true,
                  })}
                >
                  添加遮罩层 Toast
                </AtButton>
              </View>
            </View>
          </View>

          <View className='doc-body--panel'>
            <View className='panel__title'>Error Toast</View>
            <View className='panel__content'>
              <View className='example__item'>
                <AtButton
                  onClick={this.handleClick.bind(this, {
                    text: '错误提示',
                    hasMask: true,
                    status: 'error',
                  })}
                >
                  错误提示 Toast
                </AtButton>
              </View>
            </View>
          </View>

          <View className='doc-body--panel'>
            <View className='panel__title'>Success Toast</View>
            <View className='panel__content'>
              <View className='example__item'>
                <AtButton
                  onClick={this.handleClick.bind(this, {
                    text: '正确提示',
                    hasMask: true,
                    status: 'success',
                  })}
                >
                  正确提示 Toast
                </AtButton>
              </View>
            </View>
          </View>

          <View className='doc-body--panel'>
            <View className='panel__title'>Loading Toast</View>
            <View className='panel__content'>
              <View className='example__item'>
                <AtButton
                  onClick={this.handleClick.bind(this, {
                    text: '正在加载…',
                    hasMask: true,
                    status: 'loading',
                  })}
                >
                  加载中 Toast
                </AtButton>
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}

        <AtToast
          icon={icon}
          text={text}
          image={image}
          status={status}
          hasMask={hasMask}
          isOpened={isOpened}
          duration={duration}
          onClose={this.handleClose}
        />
      </View>
    )
  }
}
