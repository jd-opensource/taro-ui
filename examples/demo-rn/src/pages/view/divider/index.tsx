import React from 'react'
import { AtDivider, AtIcon } from 'taro-ui'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class LoadMorePage extends React.Component {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI',
  }

  public render(): JSX.Element {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Divider 分隔线'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 文字 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>一般用法</View>
            <View className='panel__content no-padding'>
              <AtDivider height={10} content='分割线' />
            </View>
          </View>

          {/* 自定义颜色 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>自定义颜色</View>
            <View className='panel__content no-padding'>
              <AtDivider
                content='没有更多了'
                fontColor='#ed3f14'
                lineColor='#ed3f14'
              />
              <AtDivider
                content='没有更多了'
                fontColor='#ff9900'
                lineColor='#ff9900'
              />
              <AtDivider
                content='没有更多了'
                fontColor='#2d8cf0'
                lineColor='#2d8cf0'
              />
            </View>
          </View>

          {/* 自定义内容 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>自定义内容</View>
            <View className='panel__content no-padding'>
              <AtDivider>
                <AtIcon value='check-circle' color='#6190e8'></AtIcon>
              </AtDivider>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
