import React from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class BasicTypo extends React.Component {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI'
  }

  public render(): JSX.Element {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Typography 字体'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__title'>示例</View>
            <View className='panel__content'>
              <View className='table-typo'>
                <View className='table-typo__head'>
                  <View className='thead'>类型</View>
                  <View className='thead'>行高</View>
                  <View className='thead'>用途</View>
                </View>
                <View className='table-typo__body'>
                  <View className='table-typo__line'>
                    <View className='col h0'>H0，40PX</View>
                    <View className='col'>60PX</View>
                    <View className='col'>仅用于数字</View>
                  </View>
                  <View className='table-typo__line'>
                    <View className='col h1'>H1，36PX</View>
                    <View className='col'>54PX</View>
                    <View className='col'>大模块标题</View>
                  </View>
                  <View className='table-typo__line'>
                    <View className='col h2'>H2，32PX</View>
                    <View className='col'>48PX</View>
                    <View className='col'>常规标题</View>
                  </View>
                  <View className='table-typo__line'>
                    <View className='col h3'>H3，28PX</View>
                    <View className='col'>42PX</View>
                    <View className='col'>正文</View>
                  </View>
                  <View className='table-typo__line'>
                    <View className='col h4'>H4，24PX</View>
                    <View className='col'>36PX</View>
                    <View className='col'>辅助信息、注释</View>
                  </View>
                  <View className='table-typo__line'>
                    <View className='col h5'>H5，20PX</View>
                    <View className='col'>30PX</View>
                    <View className='col'>标签</View>
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
