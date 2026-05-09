import React from 'react'
import { AtSegmentedControl } from 'taro-ui'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

interface IndexPageState {
  [key: string]: number
}

export default class Index extends React.Component<{}, IndexPageState> {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI',
  }

  public constructor(props: any) {
    super(props)
    this.state = {
      current1: 0,
      current2: 0,
    }
  }

  private handleClick(num: number, value: number): void {
    this.setState({
      [`current${num}`]: value,
    })
  }

  public render(): JSX.Element {
    const { current1, current2 } = this.state
    const tabList1 = ['标签页1', '标签页2']
    const tabList2 = ['标签页1', '标签页2', '标签页3']

    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Segmented Control 分段器'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 基础用法 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>基础用法</View>
            <View className='panel__content'>
              <View>
                <AtSegmentedControl
                  onClick={this.handleClick.bind(this, 1)}
                  current={current1}
                  values={tabList2}
                />
                <View className='tab-content'>{`标签${
                  current1 + 1
                }的内容`}</View>
              </View>
            </View>
          </View>

          {/* 自定义 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>自定义颜色、字体大小</View>
            <View className='panel__content'>
              <View>
                <AtSegmentedControl
                  onClick={this.handleClick.bind(this, 2)}
                  selectedColor='#FF4949'
                  fontSize={30}
                  current={current2}
                  values={tabList2}
                />
                <View className='tab-content'>{`标签${
                  current2 + 1
                }的内容`}</View>
              </View>
            </View>
          </View>

          {/* 禁用 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>禁用</View>
            <View className='panel__content'>
              <AtSegmentedControl disabled values={tabList1} />
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
