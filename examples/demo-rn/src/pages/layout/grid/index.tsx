import React from 'react'
import { AtGrid } from 'taro-ui'
import { AtGridItem } from 'taro-ui/types/grid'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

interface GridPageState {
  data: AtGridItem[]
}

export default class GridPage extends React.Component<{}, GridPageState> {
  public constructor(props: any) {
    super(props)
    this.state = {
      data: [
        {
          image:
            'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
          value: '领取中心',
        },
        {
          image:
            'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
          value: '找折扣',
        },
        {
          image:
            'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
          value: '领会员',
        },
        {
          image:
            'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
          value: '新品首发',
        },
        {
          image:
            'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
          value: '领京豆',
        },
        {
          value: '支持Icon',
          iconInfo: {
            size: 30,
            color: 'red',
            value: 'bookmark',
          },
          url: '支持自定义字段',
        },
      ],
    }
  }

  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI',
  }

  private handleClick = (value: AtGridItem, index: number): void => {
    Taro.showModal({
      title: '提示',
      content: `Value: ${JSON.stringify(value)}, Index: ${index}`,
      showCancel: false,
    })
  }

  public render(): JSX.Element {
    return (
      <View className='page'>
        <DocsHeader title='Grid 栅格' />

        <View className='doc-body'>
          <View className='doc-body--panel'>
            <View className='panel__title'>正方形案例</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <AtGrid data={this.state.data} onClick={this.handleClick} />
              </View>
            </View>
          </View>

          <View className='doc-body--panel'>
            <View className='panel__title'>矩形案例</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <AtGrid
                  mode='rect'
                  data={[
                    ...this.state.data,
                    {
                      image:
                        'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
                      value: '手机馆',
                    },
                  ]}
                />
              </View>
            </View>
          </View>

          <View className='doc-body--panel'>
            <View className='panel__title'>没有边框</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <AtGrid
                  mode='rect'
                  data={[
                    ...this.state.data,
                    {
                      image:
                        'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
                      value: '手机馆',
                    },
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
