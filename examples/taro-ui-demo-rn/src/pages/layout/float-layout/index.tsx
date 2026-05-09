import React from 'react'
import { AtButton, AtFloatLayout } from 'taro-ui'
import { View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

interface FloatLayoutPageState {
  [key: string]: boolean
}

export default class FloatLayoutPage extends React.Component<
  {},
  FloatLayoutPageState
> {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI'
  }

  public constructor(props: any) {
    super(props)
    this.state = {
      isOpened1: false,
      isOpened2: false,
      isOpened3: false
    }
  }

  private onScroll = (event: CommonEvent): void => {
    Taro.showToast({
      title: `onScroll: ${event}`,
      icon: 'none'
    })
  }

  private onScrollToLower = (event: CommonEvent): void => {
    Taro.showToast({
      title: `onScrollToLower: ${event}`,
      icon: 'none'
    })
  }

  private onScrollToUpper = (event: CommonEvent): void => {
    Taro.showToast({
      title: `onScrollToUpper: ${event}`,
      icon: 'none'
    })
  }

  private handleClick = (type: string): void => {
    this.setState({
      [`isOpened${type}`]: true
    })
  }

  private handleClose = (type: string): void => {
    this.setState({
      [`isOpened${type}`]: false
    })
    Taro.showToast({
      title: `handleClose: ${type}`,
      icon: 'none'
    })
  }

  public render(): JSX.Element {
    const { isOpened1, isOpened2, isOpened3 } = this.state

    return (
      <View className='page float-layout-page'>
        <DocsHeader title='Float Layout 浮动弹层' />

        <View className='doc-body'>
          {/* 基本用法 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>基本用法</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <AtButton onClick={this.handleClick.bind(this, 1)}>
                  打开 Float Layout
                </AtButton>
              </View>
            </View>
          </View>

          {/* 最大高度 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>最大高度</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <AtButton onClick={this.handleClick.bind(this, 2)}>
                  打开 Float Layout
                </AtButton>
              </View>
            </View>
          </View>

          <View className='doc-body--panel'>
            <View className='panel__title'>监听事件</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <AtButton onClick={this.handleClick.bind(this, 3)}>
                  打开 Float Layout
                </AtButton>
              </View>
            </View>
          </View>
        </View>

        <AtFloatLayout
          isOpened={isOpened1}
          onClose={this.handleClose.bind(this, '1')}
        >
          <View className='content-wrapper'>
            这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
            随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
            随你怎么写
          </View>
        </AtFloatLayout>

        <AtFloatLayout
          title='这是个标题'
          isOpened={isOpened2}
          onClose={this.handleClose.bind(this, '2')}
        >
          <View className='content-wrapper'>
            《诗人继续沉默》收录了耶霍舒亚的十二个中短篇小说。它们以梦境一般的笔法塑造了一个个既敏感又迟钝的角色。故事有时在城市，有时在战场，有时在遥远的山村，有时完全囿于家庭，并总是从司空见惯中生出离奇。每个故事的主线带来不断加剧的紧张感，即使从表面上看，根本没有重要的事情发生：
            封笔的诗人与智力障碍的儿子一起生活；
            绝望的备胎照顾梦中情人与别人的孩子
            外派多年的父亲截取女儿追求者的信件 村民们每日仪式般等候火车经过
            指挥官拒绝命令他的部队上战场 渴睡的工人溜回家休息
            邻居当中有个永生不死的老头 …
            然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
            《诗人继续沉默》收录了耶霍舒亚的十二个中短篇小说。它们以梦境一般的笔法塑造了一个个既敏感又迟钝的角色。故事有时在城市，有时在战场，有时在遥远的山村，有时完全囿于家庭，并总是从司空见惯中生出离奇。每个故事的主线带来不断加剧的紧张感，即使从表面上看，根本没有重要的事情发生：
            封笔的诗人与智力障碍的儿子一起生活；
            绝望的备胎照顾梦中情人与别人的孩子
            外派多年的父亲截取女儿追求者的信件 村民们每日仪式般等候火车经过
            指挥官拒绝命令他的部队上战场 渴睡的工人溜回家休息
            邻居当中有个永生不死的老头 …
            然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
            然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
            然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
            然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
            然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
            然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
            然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
            然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
            然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
          </View>
        </AtFloatLayout>

        <AtFloatLayout
          title='这是个标题'
          isOpened={isOpened3}
          onScroll={this.onScroll}
          onScrollToLower={this.onScrollToLower}
          onScrollToUpper={this.onScrollToUpper}
          onClose={this.handleClose.bind(this, '3')}
        >
          <View className='content-wrapper'>
            《诗人继续沉默》收录了耶霍舒亚的十二个中短篇小说。它们以梦境一般的笔法塑造了一个个既敏感又迟钝的角色。故事有时在城市，有时在战场，有时在遥远的山村，有时完全囿于家庭，并总是从司空见惯中生出离奇。每个故事的主线带来不断加剧的紧张感，即使从表面上看，根本没有重要的事情发生：
            封笔的诗人与智力障碍的儿子一起生活；
            绝望的备胎照顾梦中情人与别人的孩子
            外派多年的父亲截取女儿追求者的信件 村民们每日仪式般等候火车经过
            指挥官拒绝命令他的部队上战场 渴睡的工人溜回家休息
            邻居当中有个永生不死的老头 …
            然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
            《诗人继续沉默》收录了耶霍舒亚的十二个中短篇小说。它们以梦境一般的笔法塑造了一个个既敏感又迟钝的角色。故事有时在城市，有时在战场，有时在遥远的山村，有时完全囿于家庭，并总是从司空见惯中生出离奇。每个故事的主线带来不断加剧的紧张感，即使从表面上看，根本没有重要的事情发生：
            封笔的诗人与智力障碍的儿子一起生活；
            绝望的备胎照顾梦中情人与别人的孩子
            外派多年的父亲截取女儿追求者的信件 村民们每日仪式般等候火车经过
            指挥官拒绝命令他的部队上战场 渴睡的工人溜回家休息
            邻居当中有个永生不死的老头 …
            然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
            然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
            然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
            然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
            然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
            然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
            然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
            然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
            然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
          </View>
        </AtFloatLayout>
      </View>
    )
  }
}
