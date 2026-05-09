import React from 'react'
import { Image, Text, View } from '@tarojs/components'
import Taro, { ShareAppMessageReturn } from '@tarojs/taro'
import { AtIcon } from 'taro-ui'
import iconAction from '../../assets/images/icon-list-action.png'
import iconBasic from '../../assets/images/icon-list-basic.png'
import iconForm from '../../assets/images/icon-list-form.png'
import iconHOC from '../../assets/images/icon-list-hoc.png'
import iconLayout from '../../assets/images/icon-list-layout.png'
import iconNavigation from '../../assets/images/icon-list-navigation.png'
import iconView from '../../assets/images/icon-list-view.png'
import logoImg from '../../assets/images/logo_taro.png'
import './index.scss'

interface IndexState {
  list: {
    id: string
    title: string
    content: string
    icon: string
    subpages?: any
  }[]
}

export default class Index extends React.Component<{}, IndexState> {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI'
  }

  public constructor(props: any) {
    super(props)

    this.state = {
      list: [
        {
          id: 'Basic',
          title: '基础',
          content: '包含颜色、文本、图标等',
          icon: iconBasic
        },
        {
          id: 'View',
          title: '视图',
          content: '包含通告栏、标签、徽标等',
          icon: iconView
        },
        {
          id: 'Action',
          title: '操作反馈',
          content: '包含对话框、进度条、动作面板等',
          icon: iconAction
        },
        {
          id: 'Form',
          title: '表单',
          content: '包含输入框、单选框、复选框等',
          icon: iconForm
        },
        {
          id: 'Layout',
          title: '布局',
          content: '包含列表、浮层、卡片等',
          icon: iconLayout
        },
        {
          id: 'Navigation',
          title: '导航',
          content: '包含标签栏、导航栏、分段器等',
          icon: iconNavigation
        },
        {
          id: 'Advanced',
          title: '高阶组件',
          content: '包含日历等',
          icon: iconHOC
        }
      ]
    }
  }

  public onShareAppMessage(): ShareAppMessageReturn {
    return {
      title: 'Taro UI',
      path: '/pages/index/index',
      imageUrl: 'https://storage.360buyimg.com/mtd/home/share1535013100318.jpg'
    }
  }

  private gotoPanel(id: string): void {
    Taro.navigateTo({
      url: `/pages/panel/index?id=${id.toLowerCase()}`
    })
  }

  public render(): JSX.Element {
    const { list } = this.state

    return (
      <View className='page page-index'>
        <View className='page-index__logo'>
          <Image
            src={logoImg}
            className='page-index__logo--img'
            mode='widthFix'
          />
        </View>
        <Text className='page-title'>Taro UI</Text>
        <View className='module-list'>
          {list.map((item, index) => (
            <View
              className={`module-list__item ${
                index === list.length - 1 ? 'module-list__item--last' : ''
              }`}
              key={index}
              data-id={item.id}
              data-name={item.title}
              data-list={item.subpages}
              onClick={this.gotoPanel.bind(this, item.id)}
            >
              <View className='module-list__icon'>
                <Image
                  src={item.icon}
                  className='module-list__icon--img'
                  mode='widthFix'
                />
              </View>
              <View className='module-list__info'>
                <View className='module-list__info--title'>{item.title}</View>
                <View className='module-list__info--content'>
                  {item.content}
                </View>
              </View>
              <View className='module-list__arrow'>
                <AtIcon value='chevron-right' color='#fff' size='20' />
              </View>
            </View>
          ))}
        </View>
      </View>
    )
  }
}
