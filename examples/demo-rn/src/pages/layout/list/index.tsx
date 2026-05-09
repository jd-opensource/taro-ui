import React from 'react'
import { AtList, AtListItem } from 'taro-ui'
import { View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class ListPage extends React.Component {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI',
  }

  private handleChange = (e: CommonEvent): void => {
    Taro.showToast({
      title: `Change Switch: ${e}`,
      icon: 'none',
    })
  }

  private handleClick = (e: CommonEvent): void => {
    Taro.showToast({
      title: `Click Item: ${e}`,
      icon: 'none',
    })
  }

  public render(): JSX.Element {
    return (
      <View className='page'>
        <DocsHeader title='List 列表' />

        <View className='doc-body'>
          {/* 基本用法 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>基本用法</View>
            <View className='panel__content no-padding'>
              <View className='panel__content--example-item'>
                <AtList>
                  <AtListItem title='标题文字' onClick={this.handleClick} />
                  <AtListItem title='标题文字' arrow='right' />
                  <AtListItem title='标题文字' extraText='详细信息' />
                  <AtListItem title='禁用状态' disabled extraText='详细信息' />
                </AtList>
              </View>
            </View>
          </View>

          {/* 包含描述信息 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>包含描述信息</View>
            <View className='panel__content no-padding'>
              <View className='panel__content--example-item'>
                <AtList>
                  <AtListItem title='标题文字' note='描述信息' />
                  <AtListItem title='标题文字' note='描述信息' arrow='right' />
                  <AtListItem
                    arrow='right'
                    note='描述信息'
                    title='我是一个很长很长很长的标题文字'
                    extraText='详细信息详细信息详细信息详细信息'
                  />
                </AtList>
              </View>
            </View>
          </View>

          {/* 包含图片 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>包含图片</View>
            <View className='panel__content no-padding'>
              <View className='panel__content--example-item'>
                <AtList>
                  <AtListItem
                    title='标题文字'
                    arrow='right'
                    thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
                  />
                  <AtListItem
                    title='标题文字'
                    note='描述信息'
                    arrow='right'
                    thumb='https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
                  />
                  <AtListItem
                    title='标题文字'
                    note='描述信息'
                    extraText='详细信息'
                    arrow='right'
                    thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
                  />
                </AtList>
              </View>
            </View>
          </View>

          {/* 图标 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>支持图标(不能与thumb同时存在)</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <AtList>
                  <AtListItem
                    title='标题文字'
                    note='描述信息'
                    arrow='right'
                    iconInfo={{
                      size: 25,
                      color: '#78A4FA',
                      value: 'calendar',
                    }}
                  />
                  <AtListItem
                    title='标题文字'
                    note='描述信息'
                    extraText='详细信息'
                    arrow='right'
                    iconInfo={{
                      size: 25,
                      color: '#FF4949',
                      value: 'bookmark',
                    }}
                  />
                </AtList>
              </View>
            </View>
          </View>

          {/* 无边框 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>无边框</View>
            <View className='panel__content no-padding'>
              <View className='panel__content--example-item'>
                <AtList hasBorder={false}>
                  <AtListItem
                    isSwitch
                    title='标题文字'
                    hasBorder={false}
                    onSwitchChange={this.handleChange}
                  />
                  <AtListItem
                    isSwitch
                    title='标题文字'
                    hasBorder={false}
                    onSwitchChange={this.handleChange}
                  />
                </AtList>
              </View>
            </View>
          </View>

          {/* Switch 按钮列表 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>Switch 按钮列表</View>
            <View className='panel__content no-padding'>
              <View className='panel__content--example-item'>
                <AtList>
                  <AtListItem
                    title='标题文字'
                    isSwitch
                    onClick={this.handleClick}
                    onSwitchChange={this.handleChange}
                  />
                  <AtListItem
                    isSwitch
                    disabled
                    switchIsCheck
                    title='禁用状态'
                    onSwitchChange={this.handleChange}
                  />
                  <AtListItem
                    isSwitch
                    switchIsCheck
                    title='标题文字'
                    onSwitchChange={this.handleChange}
                  />
                </AtList>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
