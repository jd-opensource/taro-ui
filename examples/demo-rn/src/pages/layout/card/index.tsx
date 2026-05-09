import React from 'react'
import { AtCard, AtIcon } from 'taro-ui'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class CardPage extends React.Component {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI',
  }

  private handleClick = (): void => {
    Taro.showToast({
      title: 'Card handleClick',
      icon: 'none',
    })
  }

  public render(): JSX.Element {
    return (
      <View className='page'>
        <DocsHeader title='Card 卡片' />

        <View className='doc-body'>
          <View className='doc-body--panel'>
            <View className='panel__title'>基础卡片</View>
            <View className='panel__content no-padding'>
              <View className='panel__content--example-item'>
                <AtCard title='这是个标题' onClick={this.handleClick}>
                  这也是内容区 可以随意定义功能
                </AtCard>
              </View>
            </View>
          </View>

          <View className='doc-body--panel'>
            <View className='panel__title'>带缩略图的卡片</View>
            <View className='panel__content no-padding'>
              <View className='panel__content--example-item'>
                <AtCard
                  title='这是个标题'
                  thumb='https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
                >
                  这也是内容区 可以随意定义功能
                </AtCard>
              </View>
            </View>
          </View>

          <View className='doc-body--panel'>
            <View className='panel__title'>带图标的卡片</View>
            <View className='panel__content no-padding'>
              <View className='panel__content--example-item'>
                <AtCard
                  title='这是个标题'
                  icon={{
                    value: 'tags',
                    color: '#77a1fd',
                    size: '16',
                    customStyle: { marginRight: 8 },
                  }}
                >
                  这也是内容区 可以随意定义功能
                </AtCard>
              </View>
            </View>
          </View>

          <View className='doc-body--panel'>
            <View className='panel__title'>自定义图标的卡片</View>
            <View className='panel__content no-padding'>
              <View className='panel__content--example-item'>
                <AtCard
                  title='这是个标题'
                  renderIcon={
                    <AtIcon
                      prefixClass='at-icon'
                      value='image'
                      size='16'
                      color='#6190e8'
                      customStyle={{ marginRight: 8 }}
                    ></AtIcon>
                  }
                >
                  这也是内容区 可以随意定义功能
                </AtCard>
              </View>
            </View>
          </View>

          <View className='doc-body--panel'>
            <View className='panel__title'>带小信息的卡片</View>
            <View className='panel__content no-padding'>
              <View className='panel__content--example-item'>
                <AtCard
                  note='小Tips'
                  title='这是个标题'
                  thumb='https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
                >
                  这也是内容区 可以随意定义功能
                </AtCard>
              </View>
            </View>
          </View>

          <View className='doc-body--panel'>
            <View className='panel__title'>自定义额外信息样式的卡片</View>
            <View className='panel__content no-padding'>
              <View className='panel__content--example-item'>
                <AtCard
                  note='小Tips'
                  extra='2019/01/23 22:33:33'
                  extraStyle={{
                    fontSize: 12,
                    maxWidth: 200,
                    color: '#6190e8',
                  }}
                  title='这是个标题'
                  thumb='https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
                >
                  这也是内容区 可以随意定义功能
                </AtCard>
              </View>
            </View>
          </View>

          <View className='doc-body--panel'>
            <View className='panel__title'>通栏卡片</View>
            <View className='panel__content no-padding'>
              <View className='panel__content--example-item'>
                <AtCard
                  isFull
                  note='小Tips'
                  extra='额外信息'
                  title='这是个标题'
                  thumb='https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
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
