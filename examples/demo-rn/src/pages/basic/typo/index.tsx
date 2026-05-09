import React from 'react'
import { View, Text } from '@tarojs/components'
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
          <View className='doc-body--panel'>
            <View className='panel__title'>示例</View>
            <View className='panel__content'>
              <View className='table-typo'>
                <View className='table-typo__head'>
                  <Text className='table-typo__head--thead table-typo__head--thead-1'>
                    类型
                  </Text>
                  <Text className='table-typo__head--thead table-typo__head--thead-2'>
                    行高
                  </Text>
                  <Text className='table-typo__head--thead'>用途</Text>
                </View>
                <View className='table-typo__body'>
                  <View className='table-typo__line has-bg'>
                    <Text className='col col--1 col--h0'>H0，40PX</Text>
                    <Text className='col col--2'>60PX</Text>
                    <Text className='col'>仅用于数字</Text>
                  </View>
                  <View className='table-typo__line'>
                    <Text className='col col--1 col--h1'>H1，36PX</Text>
                    <Text className='col col--2'>54PX</Text>
                    <Text className='col'>大模块标题</Text>
                  </View>
                  <View className='table-typo__line has-bg'>
                    <Text className='col col--1 col--h2'>H2，32PX</Text>
                    <Text className='col col--2'>48PX</Text>
                    <Text className='col'>常规标题</Text>
                  </View>
                  <View className='table-typo__line'>
                    <Text className='col col--1 col--h3'>H3，28PX</Text>
                    <Text className='col col--2'>42PX</Text>
                    <Text className='col'>正文</Text>
                  </View>
                  <View className='table-typo__line has-bg'>
                    <Text className='col col--1 col--h4'>H4，24PX</Text>
                    <Text className='col col--2'>36PX</Text>
                    <Text className='col'>辅助信息、注释</Text>
                  </View>
                  <View className='table-typo__line'>
                    <Text className='col col--1 col--h5'>H5，20PX</Text>
                    <Text className='col col--2'>30PX</Text>
                    <Text className='col'>标签</Text>
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
