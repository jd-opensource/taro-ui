import React from 'react'
import { AtGrid } from 'taro-ui'
import { AtGridItem } from 'types/grid'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'
import iconDemo1 from '../../../assets/images/icon-demo-1.png'
import iconDemo2 from '../../../assets/images/icon-demo-2.png'
import iconDemo3 from '../../../assets/images/icon-demo-3.png'
import iconDemo4 from '../../../assets/images/icon-demo-4.png'
import iconDemo5 from '../../../assets/images/icon-demo-5.png'
import iconDemo6 from '../../../assets/images/icon-demo-6.png'

interface GridPageState {
  data: AtGridItem[]
}

export default class GridPage extends React.Component<{}, GridPageState> {
  public constructor(props: any) {
    super(props)
    this.state = {
      data: [
        {
          image: iconDemo1,
          value: '领取中心'
        },
        {
          image: iconDemo2,
          value: '找折扣'
        },
        {
          image: iconDemo3,
          value: '领会员'
        },
        {
          image: iconDemo4,
          value: '新品首发'
        },
        {
          image: iconDemo5,
          value: '领京豆'
        },
        {
          value: '支持Icon',
          iconInfo: {
            size: 30,
            color: 'red',
            value: 'bookmark'
          },
          url: '支持自定义字段'
        }
      ]
    }
  }

  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI'
  }

  private handleClick = (value: AtGridItem, index: number): void => {
    Taro.showModal({
      title: '提示',
      content: `Value: ${JSON.stringify(value)}, Index: ${index}`,
      showCancel: false
    })
  }

  public render(): JSX.Element {
    return (
      <View className='page'>
        <DocsHeader title='Grid 栅格' />

        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__title'>正方形案例</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtGrid data={this.state.data} onClick={this.handleClick} />
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>矩形案例</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtGrid
                  mode='rect'
                  data={[
                    ...this.state.data,
                    {
                      image: iconDemo6,
                      value: '手机馆'
                    }
                  ]}
                />
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>没有边框</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtGrid
                  mode='rect'
                  data={[
                    ...this.state.data,
                    {
                      image: iconDemo6,
                      value: '手机馆'
                    }
                  ]}
                  hasBorder={false}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
