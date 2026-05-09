import React from 'react'
import { AtSlider } from 'taro-ui'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class PageSlider extends React.Component {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI'
  }

  public render(): JSX.Element {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Slider 滑动条'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 基础用法 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>基础用法</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <View className='example-item__desc'>step=1</View>
                <AtSlider step={1} value={50}></AtSlider>
              </View>
            </View>
          </View>

          {/* 显示当前 Value */}
          <View className='doc-body--panel'>
            <View className='panel__title'>显示当前 Value</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <View className='example-item__desc'>step=1</View>
                <AtSlider step={1} value={50} showValue></AtSlider>
              </View>
            </View>
          </View>

          {/* 设置最大/最小值 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>设置最大/最小值</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <View className='example-item__desc'>
                  step=1, min=50, max=200
                </View>
                <AtSlider
                  step={1}
                  value={100}
                  min={50}
                  max={200}
                  showValue
                ></AtSlider>
              </View>
            </View>
          </View>

          {/* 自定义样式 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>自定义样式</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <View className='example-item__desc'>step=1, blockSize=24</View>
                <AtSlider
                  step={1}
                  value={50}
                  activeColor='#4285F4'
                  backgroundColor='#BDBDBD'
                  blockColor='#4285F4'
                  blockSize={24}
                ></AtSlider>
              </View>
            </View>
          </View>

          {/* 禁用状态 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>禁用状态</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <View className='example-item__desc'>step=1, blockSize=24</View>
                <AtSlider step={1} value={50} showValue disabled></AtSlider>
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
