import React from 'react'
import { AtImagePicker } from 'taro-ui'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

type DogaImage = {
  url: string
}

const dogaImages: DogaImage[] = [
  {
    url: 'https://storage.360buyimg.com/mtd/home/111543234387022.jpg'
  },
  {
    url: 'https://storage.360buyimg.com/mtd/home/221543234387016.jpg'
  },
  {
    url: 'https://storage.360buyimg.com/mtd/home/331543234387025.jpg'
  }
]

interface IndexState {
  [key: string]: DogaImage[]
}

export default class Index extends React.Component<{}, IndexState> {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI'
  }

  public constructor(props: any) {
    super(props)
    this.state = {
      files1: Array.from(dogaImages),
      files2: Array.from(dogaImages),
      files3: Array.from(dogaImages),
      files4: dogaImages.concat([
        {
          url:
            'https://storage.360buyimg.com/mtd/home/36549825_887087111478302_5745542532574478336_n1543234831971.jpg'
        }
      ])
    }
  }

  private onChange(stateName: string, files: DogaImage[]): void {
    this.setState({
      [stateName]: files
    })
  }

  private onFail(mes: string): void {
    Taro.showToast({
      title: `onFail: ${mes}`,
      icon: 'none'
    })
  }

  private onImageClick(index: number, file: DogaImage): void {
    Taro.showToast({
      title: `onImageClick: ${index}${file}`,
      icon: 'none'
    })
  }

  public render(): JSX.Element {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='ImagePicker 图片选择器'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 基础用法 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>基础用法</View>
            <View className='panel__content no-padding'>
              <View className='panel__content--example-item'>
                <AtImagePicker
                  files={this.state.files1}
                  onChange={this.onChange.bind(this, 'files1')}
                />
              </View>
            </View>
          </View>

          {/* 多选图片 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>多选图片</View>
            <View className='panel__content no-padding'>
              <View className='panel__content--example-item'>
                <AtImagePicker
                  multiple
                  files={this.state.files2}
                  onChange={this.onChange.bind(this, 'files2')}
                  onFail={this.onFail.bind(this)}
                  onImageClick={this.onImageClick.bind(this)}
                />
              </View>
            </View>
          </View>

          {/* 自定义每行数量 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>自定义每行数量</View>
            <View className='panel__content no-padding'>
              <View className='panel__content--example-item'>
                <AtImagePicker
                  multiple
                  length={3}
                  files={this.state.files3}
                  onChange={this.onChange.bind(this, 'files3')}
                />
              </View>
            </View>
          </View>

          {/* 更改图片的缩放模式 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>更改图片的缩放模式</View>
            <View className='panel__content no-padding'>
              <View className='panel__content--example-item'>
                <AtImagePicker
                  mode='aspectFit'
                  multiple
                  files={this.state.files4}
                  onChange={this.onChange.bind(this, 'files4')}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
