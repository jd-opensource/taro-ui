import React from 'react'
import { AtSteps } from 'taro-ui'
import { Item } from 'taro-ui/types/steps'
import { View } from '@tarojs/components'
import DocsHeader from '../../components/doc-header'
import './index.scss'

interface TimelinePageState {
  [key: string]: number
}

export default class TimelinePage extends React.Component<
  {},
  TimelinePageState
> {
  public constructor(props: any) {
    super(props)
    this.state = {
      current1: 0,
      current2: 0,
      current3: 0,
      current4: 0,
      current5: 1
    }
  }

  private onChange(stateName: string, current: number): void {
    this.setState({
      [stateName]: current
    })
  }

  public render(): JSX.Element {
    const items1: Item[] = [{ title: '步骤一' }, { title: '步骤二' }]

    const items2: Item[] = [
      { title: '步骤一' },
      { title: '步骤二' },
      { title: '步骤三' }
    ]

    const items3: Item[] = [
      { title: '步骤一', desc: '这里是额外的信息，最多两行' },
      { title: '步骤二', desc: '这里是额外的信息，最多两行' },
      { title: '步骤三', desc: '这里是额外的信息，最多两行' }
    ]

    const items4: Item[] = [
      {
        title: '步骤一',
        desc: '这里是额外的信息，最多两行',
        icon: {
          value: 'sound',
          activeColor: '#fff',
          inactiveColor: '#78A4FA',
          size: '14'
        }
      },
      {
        title: '步骤二',
        desc: '这里是额外的信息，最多两行',
        icon: {
          value: 'shopping-cart',
          activeColor: '#fff',
          inactiveColor: '#78A4FA',
          size: '14'
        }
      },
      {
        title: '步骤三',
        desc: '这里是额外的信息，最多两行',
        icon: {
          value: 'camera',
          activeColor: '#fff',
          inactiveColor: '#78A4FA',
          size: '14'
        }
      }
    ]

    const items5: Item[] = [
      {
        title: '步骤一',
        desc: '这里是额外的信息，最多两行',
        status: 'success'
      },
      {
        title: '步骤二',
        desc: '这里是额外的信息，最多两行'
      },
      {
        title: '步骤三',
        desc: '这里是额外的信息，最多两行',
        status: 'error'
      }
    ]

    return (
      <View className='page'>
        <DocsHeader title='Steps 步骤条'></DocsHeader>

        <View className='doc-body'>
          {/* 基础用法 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>基础用法</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <AtSteps
                  items={items1}
                  current={this.state.current1}
                  onChange={this.onChange.bind(this, 'current1')}
                />
                <AtSteps
                  items={items2}
                  current={this.state.current2}
                  onChange={this.onChange.bind(this, 'current2')}
                />
              </View>
            </View>
          </View>

          {/* 带附加信息 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>带附加信息</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <AtSteps
                  items={items3}
                  current={this.state.current3}
                  onChange={this.onChange.bind(this, 'current3')}
                />
              </View>
            </View>
          </View>

          {/* 自定义图标 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>自定义图标</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <AtSteps
                  items={items4}
                  current={this.state.current4}
                  onChange={this.onChange.bind(this, 'current4')}
                />
              </View>
            </View>
          </View>

          {/* 状态步骤条 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>状态步骤条</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <AtSteps
                  items={items5}
                  current={this.state.current5}
                  onChange={this.onChange.bind(this, 'current5')}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
