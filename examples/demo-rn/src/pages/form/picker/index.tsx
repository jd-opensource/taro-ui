import React from 'react'
import { Picker, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

interface IndexState {
  selector: string[]
  multiSelector: string[][]
  selectorValue: number
  mulitSelectorValues: number[]
  timeSel: string
  dateSel: string
  isAlipay: boolean
  width: number
}

export default class Index extends React.Component<{}, IndexState> {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI',
  }

  public state: IndexState = {
    selector: ['中国', '美国', '巴西', '日本'],
    multiSelector: [
      ['饭', '粥', '粉'],
      ['猪肉', '牛肉'],
    ],
    selectorValue: 0,
    mulitSelectorValues: [0, 1],
    timeSel: '06:18',
    dateSel: '2018-06-18',
    isAlipay: false,
    width: 0,
  }

  public componentDidMount(): void {
    const env = Taro.getEnv()
    this.setState({
      isAlipay: env === Taro.ENV_TYPE.ALIPAY,
    })
  }

  private handleChange = (e: CommonEvent): void => {
    this.setState({
      selectorValue: e.detail.value,
    })
  }

  private handleMulitChange = (e: CommonEvent): void => {
    this.setState({
      mulitSelectorValues: e.detail.value,
    })
  }

  private handleTimeChange = (e: CommonEvent): void => {
    this.setState({
      timeSel: e.detail.value,
    })
  }

  private handleDateChange = (e: CommonEvent): void => {
    this.setState({
      dateSel: e.detail.value,
    })
  }

  private onLayout = (event): void => {
    const { width } = event.nativeEvent.layout
    this.setState({ width })
  }

  public render(): JSX.Element {
    const {
      selector,
      selectorValue,
      multiSelector,
      mulitSelectorValues,
      timeSel,
      dateSel,
      isAlipay,
      width,
    } = this.state

    return (
      <View className='page picker__page'>
        {/* S Header */}
        <DocsHeader title='Picker 选择器'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 普通选择器 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>普通选择器</View>
            <View className='panel__content'>
              <View
                className='panel__content--example-item'
                onLayout={this.onLayout}
              >
                <Picker
                  mode='selector'
                  range={selector}
                  value={selectorValue}
                  onChange={this.handleChange}
                >
                  <View className='demo-list-item' style={{ width }}>
                    <View className='demo-list-item__label'>国家地区</View>
                    <View className='demo-list-item__value'>
                      {selector[selectorValue]}
                    </View>
                  </View>
                </Picker>
              </View>
            </View>
          </View>

          {/* 多列选择器 */}
          {!isAlipay && (
            <View className='doc-body--panel'>
              <View className='panel__title'>多列选择器</View>
              <View className='panel__content'>
                <View className='panel__content--example-item'>
                  <Picker
                    mode='multiSelector'
                    range={multiSelector}
                    value={mulitSelectorValues}
                    onChange={this.handleMulitChange}
                  >
                    <View className='demo-list-item' style={{ width }}>
                      <View className='demo-list-item__label'>请选择早餐</View>
                      <View className='demo-list-item__value'>{`${
                        multiSelector[0][mulitSelectorValues[0]]
                      } & ${multiSelector[1][mulitSelectorValues[1]]}`}</View>
                    </View>
                  </Picker>
                </View>
              </View>
            </View>
          )}

          {/* 时间选择器 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>时间选择器</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <Picker
                  mode='time'
                  value={timeSel}
                  onChange={this.handleTimeChange}
                >
                  <View className='demo-list-item' style={{ width }}>
                    <View className='demo-list-item__label'>请选择时间</View>
                    <View className='demo-list-item__value'>{timeSel}</View>
                  </View>
                </Picker>
              </View>
            </View>
          </View>

          {/* 日期选择器 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>日期选择器</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <Picker
                  mode='date'
                  value={dateSel}
                  onChange={this.handleDateChange}
                >
                  <View className='demo-list-item' style={{ width }}>
                    <View className='demo-list-item__label'>请选择日期</View>
                    <View className='demo-list-item__value'>{dateSel}</View>
                  </View>
                </Picker>
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
