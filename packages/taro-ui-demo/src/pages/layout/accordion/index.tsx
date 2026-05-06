import React from 'react'
import { AtAccordion, AtList, AtListItem } from 'taro-ui'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'
import iconDemo1 from '../../../assets/images/icon-demo-1.png'
import iconDemo3 from '../../../assets/images/icon-demo-3.png'
import iconDemo4 from '../../../assets/images/icon-demo-4.png'

interface CardPageState {
  [key: string]: boolean
}

export default class CardPage extends React.Component<{}, CardPageState> {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI'
  }

  public constructor(props: any) {
    super(props)
    this.state = {
      value1: false,
      value2: true,
      value3: false,
      value4: false
    }
  }

  private onClick(stateName: string, value: boolean): void {
    this.setState({
      [stateName]: value
    })
  }

  public render(): JSX.Element {
    const { value1, value2, value3, value4 } = this.state

    return (
      <View className='page'>
        <DocsHeader title='Accordion 手风琴' />
        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__title'>基础用法</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <AtAccordion
                  onClick={this.onClick.bind(this, 'value1')}
                  title='标题一'
                  open={value1}
                >
                  <AtList hasBorder={false}>
                    <AtListItem
                      title='标题文字'
                      thumb={iconDemo1}
                    />
                    <AtListItem
                      title='标题文字'
                      note='描述信息'
                      thumb={iconDemo4}
                    />
                  </AtList>
                </AtAccordion>
                <AtAccordion
                  open={value2}
                  title='默认开启'
                  onClick={this.onClick.bind(this, 'value2')}
                >
                  <AtList hasBorder={false}>
                    <AtListItem
                      title='标题文字'
                      thumb={iconDemo1}
                    />
                    <AtListItem
                      title='标题文字'
                      note='描述信息'
                      thumb={iconDemo3}
                    />
                    <AtListItem
                      title='标题文字'
                      note='描述信息'
                      thumb={iconDemo4}
                    />
                  </AtList>
                </AtAccordion>
              </View>
            </View>
          </View>

          {/* 配置图标 */}
          <View className='panel'>
            <View className='panel__title'>配置图标</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <AtAccordion
                  title='标题三'
                  open={value3}
                  icon={{ value: 'tags', color: '#77a1fd' }}
                  onClick={this.onClick.bind(this, 'value3')}
                >
                  <AtList hasBorder={false}>
                    <AtListItem
                      title='标题文字'
                      thumb={iconDemo1}
                    />
                    <AtListItem
                      title='标题文字'
                      note='描述信息'
                      thumb={iconDemo3}
                    />
                  </AtList>
                </AtAccordion>
              </View>
            </View>
          </View>

          {/* 包含描述信息 */}
          <View className='panel'>
            <View className='panel__title'>包含描述信息</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <AtAccordion
                  title='标题四'
                  note='描述信息'
                  open={value4}
                  icon={{ value: 'tags', color: '#77a1fd' }}
                  onClick={this.onClick.bind(this, 'value4')}
                >
                  <AtList hasBorder={false}>
                    <AtListItem
                      title='标题文字'
                      thumb={iconDemo1}
                    />
                    <AtListItem
                      title='标题文字'
                      note='描述信息'
                      thumb={iconDemo3}
                    />
                    <AtListItem
                      title='标题文字'
                      note='描述信息'
                      thumb={iconDemo4}
                    />
                  </AtList>
                </AtAccordion>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
