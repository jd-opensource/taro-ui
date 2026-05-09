import React from 'react'
import { AtActionSheet, AtActionSheetItem, AtButton } from 'taro-ui'
import { Text, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

interface ActionSheetPageState {
  isOpened1: boolean
  isOpened2: boolean
  isOpened3: boolean
  [key: string]: boolean
}

export default class ActionSheetPage extends React.Component<
  {},
  ActionSheetPageState
> {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI',
  }

  public constructor(props: any) {
    super(props)
    this.state = {
      isOpened1: false,
      isOpened2: false,
      isOpened3: false,
    }
  }

  private handleClick = (type: string): void => {
    this.setState({
      [`isOpened${type}`]: true,
    })
  }

  private handleClose = (name: string): void => {
    this.setState({
      [`isOpened${name}`]: false,
    })
    Taro.showToast({
      title: `第 ${name} 个Action Sheet已经关闭`,
      icon: 'none',
    })
  }

  private handleCancel = (): void => {
    this.showToast('点击了取消按钮')
  }

  private showToast = (name: string): void => {
    Taro.showToast({
      icon: 'none',
      title: name,
    })
  }

  public render(): JSX.Element {
    const { isOpened1, isOpened2, isOpened3 } = this.state

    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='ActionSheet 动作面板' />
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 无 Title */}
          <View className='doc-body--panel'>
            <View className='panel__title'>无标题</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <AtButton full onClick={this.handleClick.bind(this, 1)}>
                  打开 ActionSheet
                </AtButton>
              </View>
            </View>
          </View>

          {/* 含标题 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>含标题</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <AtButton full onClick={this.handleClick.bind(this, 2)}>
                  打开 ActionSheet
                </AtButton>
              </View>
            </View>
          </View>

          {/* 自定义选项 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>自定义选项</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <AtButton full onClick={this.handleClick.bind(this, 3)}>
                  打开 ActionSheet
                </AtButton>
              </View>
            </View>
          </View>
        </View>

        <AtActionSheet
          cancelText='取消'
          isOpened={isOpened1}
          onClose={this.handleClose.bind(this, 1)}
        >
          <AtActionSheetItem
            onClick={this.showToast.bind(this, '点击了按钮一')}
          >
            按钮一
          </AtActionSheetItem>
          <AtActionSheetItem
            onClick={this.showToast.bind(this, '点击了按钮二')}
          >
            按钮二
          </AtActionSheetItem>
        </AtActionSheet>

        <AtActionSheet
          cancelText='取消'
          isOpened={isOpened2}
          onClose={this.handleClose.bind(this, 2)}
          title='清除位置信息后， 别人将不能查看到你'
        >
          <AtActionSheetItem
            onClick={this.showToast.bind(this, '点击了按钮一')}
          >
            按钮一
          </AtActionSheetItem>
          <AtActionSheetItem
            onClick={this.showToast.bind(this, '点击了按钮二')}
          >
            按钮二
          </AtActionSheetItem>
        </AtActionSheet>

        <AtActionSheet
          cancelText='取消'
          isOpened={isOpened3}
          onCancel={this.handleCancel}
          onClose={this.handleClose.bind(this, 3)}
          title='清除位置信息后， 别人将不能查看到你'
        >
          <AtActionSheetItem
            onClick={this.showToast.bind(this, '点击了按钮一')}
          >
            按钮一
          </AtActionSheetItem>
          <AtActionSheetItem
            onClick={this.showToast.bind(this, '点击了按钮二')}
          >
            按钮二
          </AtActionSheetItem>
          <AtActionSheetItem
            onClick={this.showToast.bind(this, '成功清除位置')}
          >
            <Text className='danger'>清除位置信息并退出</Text>
          </AtActionSheetItem>
        </AtActionSheet>
      </View>
    )
  }
}
