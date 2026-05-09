import React from 'react'
import { AtButton, AtPagination } from 'taro-ui'
import { PageChangeData } from 'taro-ui/types/pagination'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

interface PaginationPageState {
  list: any[]
  current: number
  pageSize: number
}

export default class PaginationPage extends React.Component<
  {},
  PaginationPageState
> {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI',
  }

  public constructor(props: any) {
    super(props)
    this.state = {
      list: [],
      current: 1,
      pageSize: 10,
    }
  }

  private onPage(data: PageChangeData): void {
    this.setState({
      current: data.current,
    })
    Taro.showToast({
      title: `Pagination: ${data}`,
      icon: 'none',
    })
  }

  private onPageDataChange(): void {
    const _list = new Array(10).fill(1)
    this.setState({
      list: this.state.list.concat(_list),
    })
  }

  private onCurrentChange(): void {
    this.setState({
      current: 1,
      list: [],
    })
  }

  public render(): JSX.Element {
    const len = this.state.list.length
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Pagination 分页器'></DocsHeader>
        {/* E Header */}

        <View className='doc-body'>
          {/* 基础用法 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>基础用法</View>
            <View className='panel__content no-padding'>
              <View className='panel__content--example-item'>
                <AtPagination
                  total={20}
                  pageSize={10}
                  current={1}
                ></AtPagination>
              </View>
            </View>
          </View>

          {/* 图标类型 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>图标类型</View>
            <View className='panel__content no-padding'>
              <View className='panel__content--example-item'>
                <AtPagination
                  icon
                  total={20}
                  pageSize={10}
                  current={1}
                ></AtPagination>
              </View>
            </View>
          </View>

          {/* 点击页码出是否出现picker选择页码 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>picker快速选择页码</View>
            <View className='panel__content no-padding'>
              <View className='panel__content--example-item'>
                <AtPagination
                  icon
                  total={20}
                  pageSize={10}
                  current={1}
                ></AtPagination>
              </View>
            </View>
          </View>

          {/* 改变数据长度 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>改变数据长度</View>
            <View className='panel__content no-padding'>
              <View>
                <AtPagination
                  icon
                  total={len}
                  pageSize={this.state.pageSize}
                  current={this.state.current}
                  onPageChange={this.onPage.bind(this)}
                ></AtPagination>
                <View className='btn-item'>
                  {`当前页：${this.state.current}，当前数据：${len}条，分页大小：${this.state.pageSize}`}
                </View>
                <View className='btn-item'>
                  <AtButton
                    type='primary'
                    onClick={this.onPageDataChange.bind(this)}
                  >
                    增加10条数据
                  </AtButton>
                </View>
                <View className='btn-item'>
                  <AtButton onClick={this.onCurrentChange.bind(this)}>
                    重置
                  </AtButton>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
