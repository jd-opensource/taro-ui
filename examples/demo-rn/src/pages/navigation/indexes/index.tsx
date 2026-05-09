import React from 'react'
import { AtIndexes, AtSearchBar } from 'taro-ui'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import mockData, { CityItem } from './mock-data'
import './index.scss'

interface IndexesState {
  value: string
}

export default class Index extends React.Component<{}, IndexesState> {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI'
  }

  public constructor(props: any) {
    super(props)
    this.state = {
      value: ''
    }
  }

  // public componentDidMount(): void {
  //   console.log(this.scrollIntoView)
  //   // this.scrollIntoView && this.scrollIntoView('top', 0)
  // }

  private scrollIntoView(key: string): void {
    Taro.showToast({
      title: `scrollIntoView: ${key}`,
      icon: 'none'
    })
  }

  private onClick(item: CityItem): void {
    Taro.showToast({
      title: `onClick: ${item}`,
      icon: 'none'
    })
  }

  private handleActionClick(): void {
    if (!this.state.value) {
      return
    }
    this.setState({
      value: ''
    })
    this.scrollIntoView && this.scrollIntoView(this.state.value.toUpperCase())
  }

  private handleChange(value: string): void {
    this.setState({
      value
    })
  }

  public render(): JSX.Element {
    return (
      <View className='page'>
        {/* 基础用法 */}
        <View style='height: 100%;'>
          <AtIndexes
            list={mockData}
            topKey='Top'
            onClick={this.onClick.bind(this)}
            onScrollIntoView={(fn: any): void => {
              this.scrollIntoView = fn
            }}
          >
            <View className='custom-area'>
              用户自定义内容
              <AtSearchBar
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
                placeholder='跳转到指定Key'
                onActionClick={this.handleActionClick.bind(this)}
              />
            </View>
          </AtIndexes>
        </View>
      </View>
    )
  }
}
