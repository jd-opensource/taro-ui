import React from 'react'
import { AtRadio } from 'taro-ui'
import { RadioOption } from 'taro-ui/types/radio'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

interface IndexState {
  radioValue1: string
  radioValue2: string
  radioValue3: string
  radioOptions1: RadioOption<string>[]
  radioOptions2: RadioOption<string>[]
  radioOptions3: RadioOption<string>[]
}

export default class Index extends React.Component<{}, IndexState> {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI'
  }

  public constructor(props: any) {
    super(props)
    this.state = {
      radioValue1: 'option1',
      radioValue2: 'option1',
      radioValue3: 'option3',
      radioOptions1: [
        { label: '单选项一', value: 'option1' },
        { label: '单选项二', value: 'option2' },
        { label: '单选项三', value: 'option3' }
      ],
      radioOptions2: [
        { label: '单选项一', value: 'option1', desc: '单选项描述一' },
        { label: '单选项二', value: 'option2', desc: '单选项描述二' },
        { label: '单选项三', value: 'option3', desc: '单选项描述三' }
      ],
      radioOptions3: [
        { label: '单选项一', value: 'option1', desc: '单选项描述' },
        { label: '单选项二', value: 'option2' },
        {
          label: '单选项三禁用',
          value: 'option3',
          desc: '单选项描述',
          disabled: true
        }
      ]
    }
  }

  private handleRadioChange(value: string): void {
    this.setState({
      radioValue1: value
    })
  }

  private handleRadioChangeScnd(value: string): void {
    this.setState({
      radioValue2: value
    })
  }

  private handleRadioChangeThd(value: string): void {
    this.setState({
      radioValue3: value
    })
  }

  public render(): JSX.Element {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Radio 单选框'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 基础用法 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>基础用法</View>
            <View className='panel__content no-padding'>
              <View className='radio-container'>
                <AtRadio
                  options={this.state.radioOptions1}
                  value={this.state.radioValue1}
                  onClick={this.handleRadioChange.bind(this)}
                />
              </View>
            </View>
          </View>

          {/* 含有单项描述 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>含有单项描述</View>
            <View className='panel__content no-padding'>
              <View className='radio-container'>
                <AtRadio
                  options={this.state.radioOptions2}
                  value={this.state.radioValue2}
                  onClick={this.handleRadioChangeScnd.bind(this)}
                />
              </View>
            </View>
          </View>

          {/* 单项禁用 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>单项禁用</View>
            <View className='panel__content no-padding'>
              <View className='radio-container'>
                <AtRadio
                  options={this.state.radioOptions3}
                  value={this.state.radioValue3}
                  onClick={this.handleRadioChangeThd.bind(this)}
                />
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
