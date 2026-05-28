import React from 'react'
import { AtTabBar } from 'taro-ui'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'
import iconDemo1 from '../../../assets/images/icon-demo-1.png'
import iconDemo2 from '../../../assets/images/icon-demo-2.png'
import iconDemo3 from '../../../assets/images/icon-demo-3.png'
import iconDemo5 from '../../../assets/images/icon-demo-5.png'

interface IndexPageState {
  [key: string]: number
}

export default class Index extends React.Component<{}, IndexPageState> {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI'
  }

  public constructor(props: any) {
    super(props)
    this.state = {
      current1: 0,
      current2: 0,
      current3: 0,
      current4: 0,
      current5: 0
    }
  }

  private handleClick(num: number, value: number): void {
    this.setState({
      [`current${num}`]: value
    })
  }

  public render(): JSX.Element {
    const { current1, current2, current3, current4, current5 } = this.state
    const tabList1 = [
      { title: '待办事项', text: 8 },
      { title: '拍照' },
      { title: '通讯录', dot: true }
    ]
    const tabList2 = [
      { title: '待办事项', iconType: 'bullet-list', text: 'new' },
      { title: '拍照', iconType: 'camera' },
      { title: '文件夹', iconType: 'folder', text: '100', max: 99 }
    ]
    const tabList3 = [
      {
        title: '领取中心',
        image: iconDemo1,
        selectedImage: iconDemo5,
        text: 'new'
      },
      {
        title: '找折扣',
        image: iconDemo2
      },
      {
        title: '领会员',
        image: iconDemo3,
        text: '100',
        max: 99
      }
    ]

    return (
      <View className='page'>
        <DocsHeader title='TabBar 标签栏'></DocsHeader>

        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__title'>文本标签栏</View>
            <View className='panel__content no-padding'>
              <AtTabBar
                tabList={tabList1}
                onClick={this.handleClick.bind(this, 1)}
                current={current1}
              />
            </View>
          </View>
          <View className='panel'>
            <View className='panel__title'>图标文本标签栏</View>
            <View className='panel__content no-padding'>
              <AtTabBar
                tabList={tabList2}
                onClick={this.handleClick.bind(this, 2)}
                current={current2}
              />
            </View>
          </View>
          <View className='panel'>
            <View className='panel__title'>
              自定义图标颜色、字体颜色、背景颜色
            </View>
            <View className='panel__content no-padding'>
              <AtTabBar
                backgroundColor='#FAFBFC'
                color='#ea6bb8'
                selectedColor='#e64340'
                tabList={tabList2}
                onClick={this.handleClick.bind(this, 3)}
                current={current3}
              />
            </View>
          </View>
          <View className='panel'>
            <View className='panel__title'>图片icon</View>
            <View
              className='panel__content no-padding'
              style='padding-bottom: 24px;'
            >
              <AtTabBar
                tabList={tabList3}
                onClick={this.handleClick.bind(this, 5)}
                current={current5}
              />
            </View>
          </View>
          <View className='panel'>
            <View className='panel__title'>固定底部</View>
            <View
              className='panel__content no-padding'
              style='padding-bottom: 24px;'
            >
              <AtTabBar
                fixed
                tabList={tabList2}
                onClick={this.handleClick.bind(this, 4)}
                current={current4}
              />
            </View>
          </View>
        </View>
      </View>
    )
  }
}
