import React from 'react'
import { AtForm, AtSwitch } from 'taro-ui'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

interface IndexState {
  switchValue: boolean
}

export default class Index extends React.Component<{}, IndexState> {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI'
  }

  public constructor(props: any) {
    super(props)
    this.state = {
      switchValue: true
    }
  }

  private handleChange = (value: boolean): void => {
    this.setState({
      switchValue: value
    })
  }

  public render(): JSX.Element {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Switch 开关'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 基础用法 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>基础用法</View>
            <View className='panel__content no-padding'>
              <View className='panel__content--example-item'>
                <AtForm>
                  <AtSwitch
                    title='开启中'
                    checked={this.state.switchValue}
                    onChange={this.handleChange}
                  />
                  <AtSwitch title='已关闭' border={false} />
                </AtForm>
              </View>
            </View>
          </View>

          {/* 禁用状态 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>禁用状态</View>
            <View className='panel__content no-padding'>
              <View className='panel__content--example-item'>
                <AtForm>
                  <AtSwitch title='不可点击' checked disabled />
                  <AtSwitch title='不可点击' border={false} disabled />
                </AtForm>
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
