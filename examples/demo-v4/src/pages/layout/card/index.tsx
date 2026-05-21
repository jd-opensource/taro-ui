import React from 'react'
import { AtButton, AtCard, AtIcon } from 'taro-ui'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'
import iconDemo3 from '../../../assets/images/icon-demo-3.png'

export default class CardPage extends React.Component {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI'
  }

  private handleClick = (): void => {
    Taro.showToast({
      title: 'Card handleClick',
      icon: 'none'
    })
  }

  public render(): JSX.Element {
    return (
      <View className='page'>
        <DocsHeader title='Card 卡片' />

        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__title'>基础卡片</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <AtCard title='这是个标题' onClick={this.handleClick}>
                  这也是内容区 可以随意定义功能
                </AtCard>
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>带缩略图的卡片</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <AtCard
                  title='这是个标题'
                  thumb={iconDemo3}
                >
                  这也是内容区 可以随意定义功能
                </AtCard>
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>带图标的卡片</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <AtCard
                  title='这是个标题'
                  icon={{ value: 'tags', color: '#77a1fd' }}
                >
                  这也是内容区 可以随意定义功能
                </AtCard>
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>自定义图标的卡片</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <AtCard
                  title='这是个标题'
                  renderIcon={
                    <AtIcon
                      prefixClass='at-icon'
                      value='image'
                      size='16'
                      color='#6190e8'
                      customStyle={{ marginRight: '8px' }}
                    ></AtIcon>
                  }
                >
                  这也是内容区 可以随意定义功能
                </AtCard>
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>带小信息的卡片</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <AtCard
                  note='小Tips'
                  title='这是个标题'
                  thumb={iconDemo3}
                >
                  这也是内容区 可以随意定义功能
                </AtCard>
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>自定义额外信息样式的卡片</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <AtCard
                  note='小Tips'
                  extra='2019/01/23 22:33:33'
                  extraStyle={{
                    fontSize: '12px',
                    maxWidth: '200px',
                    color: '#6190e8'
                  }}
                  title='这是个标题'
                  thumb={iconDemo3}
                >
                  这也是内容区 可以随意定义功能
                </AtCard>
              </View>
              <View className='example-item'>
                <AtCard
                  note='小Tips'
                  extra={
                    <AtButton size='small' type='primary'>
                      提交
                    </AtButton>
                  }
                  extraStyle={{
                    fontSize: '12px',
                    maxWidth: '200px',
                    color: '#6190e8'
                  }}
                  title='这是个标题'
                  thumb={iconDemo3}
                >
                  这也是内容区 可以随意定义功能
                </AtCard>
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>通栏卡片</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <AtCard
                  isFull
                  note='小Tips'
                  extra='额外信息'
                  title='这是个标题'
                  thumb={iconDemo3}
                >
                  这也是内容区 可以随意定义功能 这也是内容区 可以随意定义功能
                  这也是内容区 可以随意定义功能
                </AtCard>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
