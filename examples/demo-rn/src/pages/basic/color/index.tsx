import React from 'react'
import { Text, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

type Color = {
  name: string
  hex: string
}

type ColorData = {
  type: string
  data: Color[]
}

interface BasicColorState {
  colorData: ColorData[]
}

export default class BasicColor extends React.Component<{}, BasicColorState> {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI'
  }

  public constructor(props: any) {
    super(props)

    this.state = {
      colorData: [
        {
          type: '主色',
          data: [
            {
              name: '浅蓝色',
              hex: '#78A4FA'
            },
            {
              name: '品牌蓝',
              hex: '#6190E8'
            },
            {
              name: '深蓝色',
              hex: '#346FC2'
            }
          ]
        },
        {
          type: '辅助色',
          data: [
            {
              name: '蓝色 - Info',
              hex: '#78A4FA'
            },
            {
              name: '绿色 - Positive',
              hex: '#13CE66'
            },
            {
              name: '红色 - Negative',
              hex: '#FF4949'
            },
            {
              name: '黄色 - Warning',
              hex: '#FFC82C'
            }
          ]
        },
        {
          type: '中性色',
          data: [
            {
              name: '黑色 0',
              hex: '#333333'
            },
            {
              name: '黑色 1',
              hex: '#7F7F7F'
            },
            {
              name: '黑色 2',
              hex: '#B2B2B2'
            },
            {
              name: '灰色 0',
              hex: '#333333'
            },
            {
              name: '灰色 1',
              hex: '#666666'
            },
            {
              name: '灰色 2',
              hex: '#999999'
            },
            {
              name: '灰色 3',
              hex: '#CCCCCC'
            },
            {
              name: '灰色 4',
              hex: '#E5E5E5'
            },
            {
              name: '灰色 5',
              hex: '#F0F0F0'
            },
            {
              name: '灰色 6',
              hex: '#F7F7F7'
            }
          ]
        },
        {
          type: '其他色',
          data: [
            {
              name: '边框可选色',
              hex: '#C5D9E8'
            },
            {
              name: '背景色 0',
              hex: '#ECF5FD'
            },
            {
              name: '背景色 1',
              hex: '#FAFBFC'
            }
          ]
        }
      ]
    }
  }

  public render(): JSX.Element {
    const { colorData } = this.state

    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Color 颜色' />
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {colorData.map(item => (
            <View className='doc-body--panel' key={item.type}>
              <Text className='panel__title'>{item.type}</Text>
              <View className='panel__content'>
                <View className='color-list'>
                  {item.data.map((color: Color, index: number) => (
                    <View
                      className='color-item'
                      key={`color-${color.hex}-${index}`}
                    >
                      <View
                        className='color-item__circle'
                        style={{ backgroundColor: color.hex }}
                      >
                        <View className='color-item__circle--inner-circle-1' />
                        <View
                          className='color-item__circle--inner-circle-2'
                          style={{ borderColor: color.hex }}
                        />
                      </View>
                      <View className='color-item__info'>
                        <Text className='color-item__info--name'>
                          {color.name}
                        </Text>
                        <Text className='color-item__info--hex' selectable>
                          {color.hex}
                        </Text>
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          ))}
        </View>
        {/* E Body */}
      </View>
    )
  }
}
