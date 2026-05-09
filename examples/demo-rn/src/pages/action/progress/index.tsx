import React from 'react'
import { AtButton, AtProgress, AtIcon } from 'taro-ui'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

const OFFSET = 15

interface ProgressPageState {
  percent: number
}

export default class ProgressPage extends React.Component<
  {},
  ProgressPageState
> {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI',
  }

  public constructor(props: any) {
    super(props)
    this.state = {
      percent: 0,
    }
  }

  private reduce = (): void => {
    let { percent } = this.state
    if (percent === 0) {
      return
    }

    percent = percent - OFFSET < 0 ? 0 : percent - OFFSET

    this.setState({
      percent,
    })
  }

  private increase = (): void => {
    let { percent } = this.state
    if (percent === 100) {
      return
    }

    percent = percent + OFFSET > 100 ? 100 : percent + OFFSET

    this.setState({
      percent,
    })
  }

  public render(): JSX.Element {
    const { percent } = this.state
    return (
      <View className='page progress-page'>
        {/* S Header */}
        <DocsHeader title='Progress 进度条' />
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 基础进度条 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>基础进度条</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <AtProgress percent={25} />
              </View>
              <View className='panel__content--example-item'>
                <AtProgress percent={50} />
              </View>
              <View className='panel__content--example-item'>
                <AtProgress percent={75} />
              </View>
            </View>
          </View>

          {/* 隐藏进度文案 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>隐藏进度文案</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <AtProgress percent={25} isHidePercent />
              </View>
              <View className='panel__content--example-item'>
                <AtProgress percent={75} isHidePercent />
              </View>
            </View>
          </View>

          {/* 自定义进度条线宽 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>自定义进度条线宽</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <AtProgress percent={25} strokeWidth={6} />
              </View>
              <View className='panel__content--example-item'>
                <AtProgress percent={50} strokeWidth={8} />
              </View>
              <View className='panel__content--example-item'>
                <AtProgress percent={75} strokeWidth={10} />
              </View>
            </View>
          </View>

          {/* 自定义颜色 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>自定义颜色</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <AtProgress percent={25} color='#FF4949' />
              </View>
              <View className='panel__content--example-item'>
                <AtProgress percent={50} color='#13CE66' />
              </View>
              <View className='panel__content--example-item'>
                <AtProgress percent={75} color='#FFC82C' />
              </View>
            </View>
          </View>

          {/* 不同的状态 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>不同的状态</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <View className='example-item__desc'>暂停</View>
                <AtProgress percent={25} />
              </View>
              <View className='panel__content--example-item'>
                <View className='example-item__desc'>进行中</View>
                <AtProgress percent={50} status='progress' />
              </View>
              <View className='panel__content--example-item'>
                <View className='example-item__desc'>错误</View>
                <AtProgress percent={75} status='error' />
              </View>
              <View className='panel__content--example-item'>
                <View className='example-item__desc'>已完成</View>
                <AtProgress percent={100} status='success' />
              </View>
            </View>
          </View>

          {/* 实际案例 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>实际案例</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <AtProgress percent={percent} />
                <View className='example-item__buttons'>
                  <View className='btn'>
                    <AtButton size='small' onClick={this.reduce}>
                      <AtIcon value='subtract' size={12} />
                    </AtButton>
                  </View>
                  <View className='btn'>
                    <AtButton size='small' onClick={this.increase}>
                      <AtIcon value='add' size={12} />
                    </AtButton>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
