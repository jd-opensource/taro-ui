import React from 'react'
import { AtForm, AtInput } from 'taro-ui'
import { Image, View } from '@tarojs/components'
import { BaseEventOrig } from '@tarojs/components/types/common'
import { InputProps } from '@tarojs/components/types/Input'
import Taro from '@tarojs/taro'
import verificationCode from '../../../assets/images/verification_code.png'
import DocsHeader from '../../components/doc-header'
import './index.scss'

interface IndexState {
  value1: string
  value2: string
  value3: string
  value4: string
  value5: string
  value6: string
  value7: string
  value8: string
  value9: string
  value10: string
  value11: string
  value13: string
  value14: string
  value15: string
  value16: string
  value17: string
  disabled: boolean
  second: number
  [key: string]: string | boolean | number
}

interface IndexState {}

export default class Index extends React.Component<IndexState, IndexState> {
  public constructor(props: any) {
    super(props)
    this.state = {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      value7: '',
      value8: '',
      value9: '',
      value10: '',
      value11: '',
      value13: '',
      value14: '',
      value15: '',
      value16: '',
      value17: '',
      disabled: false,
      second: 60
    }
  }

  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI'
  }

  private showTipText(): string {
    return this.state.disabled ? `${this.state.second}s后重试` : '发送验证码'
  }

  private sendCode(): void {
    if (this.state.disabled) return
    this.setState({
      disabled: true
    })
    // 倒计时
    const timer = setInterval(() => {
      if (this.state.second > 0) {
        this.setState({
          second: this.state.second - 1
        })
      } else {
        this.setState({
          second: 60,
          disabled: false
        })
        clearInterval(timer)
      }
    }, 1000)
  }

  private handleInput(stateName: string, value: string): void {
    this.setState({
      [stateName]: value
    })
  }

  // private handleClick(): void {
  //   Taro.showToast({
  //     title: '已发送验证码',
  //     icon: 'success',
  //     duration: 2000
  //   })
  // }

  private onClickErrorIcon(): void {
    Taro.showToast({
      title: '请输入数字',
      icon: 'success',
      duration: 2000
    })
  }

  private handleKeyboardHeightChange(
    event: BaseEventOrig<InputProps.onKeyboardHeightChangeEventDetail>
  ): void {
    Taro.showToast({
      title: `高度 ${event.detail.height}`,
      icon: 'success',
      duration: 2000
    })
  }

  public render(): JSX.Element {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Input 输入框'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 基础用法 */}
          <View className='panel'>
            <View className='panel__title'>基础用法</View>
            <View className='panel__content no-padding'>
              <View className='component-item'>
                <AtForm>
                  <AtInput
                    name='value1'
                    title='标题五个字'
                    type='text'
                    placeholder='标准五个字'
                    value={this.state.value1}
                    onChange={this.handleInput.bind(this, 'value1')}
                  />
                  <AtInput
                    name='value2'
                    title='测试标题特别长换行'
                    placeholder='其他列保持正常间距'
                    value={this.state.value2}
                    onChange={this.handleInput.bind(this, 'value2')}
                  />
                  <AtInput
                    name='value3'
                    border={false}
                    placeholder='无标题'
                    value={this.state.value3}
                    onChange={this.handleInput.bind(this, 'value3')}
                  />
                </AtForm>
              </View>
            </View>
          </View>

          {/* 输入框类型 */}
          <View className='panel'>
            <View className='panel__title'>输入框类型</View>
            <View className='panel__content no-padding'>
              <View className='component-item'>
                <AtForm>
                  <AtInput
                    name='value4'
                    title='文本'
                    type='text'
                    placeholder='单行文本'
                    value={this.state.value4}
                    onChange={this.handleInput.bind(this, 'value4')}
                  />
                  <AtInput
                    name='value5'
                    title='数字'
                    type='number'
                    placeholder='请输入数字'
                    value={this.state.value5}
                    onChange={this.handleInput.bind(this, 'value5')}
                  />
                  <AtInput
                    name='value6'
                    title='密码'
                    type='password'
                    placeholder='密码不能少于10位数'
                    value={this.state.value6}
                    onChange={this.handleInput.bind(this, 'value6')}
                  />
                  <AtInput
                    name='value7'
                    title='身份证'
                    type='idcard'
                    placeholder='身份证号码'
                    value={this.state.value7}
                    onChange={this.handleInput.bind(this, 'value7')}
                  />
                  <AtInput
                    name='value8'
                    title='小数'
                    type='digit'
                    placeholder='请输入小数'
                    value={this.state.value8}
                    onChange={this.handleInput.bind(this, 'value8')}
                  />
                  <AtInput
                    name='value9'
                    border={false}
                    title='手机号码'
                    type='phone'
                    placeholder='手机号码'
                    value={this.state.value9}
                    onChange={this.handleInput.bind(this, 'value9')}
                  />
                </AtForm>
              </View>
            </View>
          </View>

          {/* 状态 */}
          <View className='panel'>
            <View className='panel__title'>状态</View>
            <View className='panel__content no-padding'>
              <View className='component-item'>
                <AtForm>
                  <AtInput
                    name='value10'
                    disabled
                    title='禁用'
                    type='text'
                    placeholder='禁止输入'
                    value={this.state.value10}
                    onChange={this.handleInput.bind(this, 'value10')}
                  />
                  <AtInput
                    name='value11'
                    error
                    title='出现错误'
                    type='text'
                    placeholder='点击按钮触发回调'
                    value={this.state.value11}
                    onChange={this.handleInput.bind(this, 'value11')}
                    onErrorClick={this.onClickErrorIcon.bind(this)}
                  />
                  <AtInput
                    name='value12'
                    editable={false}
                    title='不可编辑'
                    type='text'
                    placeholder='不可编辑'
                    value='不可编辑的内容'
                  />
                  <AtInput
                    name='value13'
                    border={false}
                    clear
                    title='清除按钮'
                    type='text'
                    placeholder='点击清除按钮清空内容'
                    value={this.state.value13}
                    onChange={this.handleInput.bind(this, 'value13')}
                  />
                  <AtInput
                    name='value16'
                    border={false}
                    required
                    title='必填项'
                    type='text'
                    placeholder='必填项'
                    value={this.state.value16}
                    onChange={this.handleInput.bind(this, 'value16')}
                  />
                  <AtInput
                    name='value17'
                    border={false}
                    title='监听事件'
                    type='text'
                    placeholder='监听键盘高度事件'
                    value={this.state.value17}
                    onChange={this.handleInput.bind(this, 'value17')}
                    onKeyboardHeightChange={this.handleKeyboardHeightChange.bind(
                      this
                    )}
                  />
                </AtForm>
              </View>
            </View>
          </View>

          {/* 自定义右边栏 */}
          <View className='panel'>
            <View className='panel__title'>自定义右边栏</View>
            <View className='panel__content no-padding'>
              <View className='component-item'>
                <AtForm>
                  <AtInput
                    name='value14'
                    title='验证码'
                    type='text'
                    maxLength={4}
                    clear
                    placeholder='验证码'
                    value={this.state.value14}
                    onChange={this.handleInput.bind(this, 'value14')}
                  >
                    <Image src={verificationCode} />
                  </AtInput>
                  <AtInput
                    name='value15'
                    border={false}
                    type='phone'
                    clear
                    placeholder='请输入手机号码'
                    value={this.state.value15}
                    onChange={this.handleInput.bind(this, 'value15')}
                  >
                    <View
                      style={{
                        color: this.state.disabled ? '#FF4949' : '',
                        fontSize: '12px',
                        width: '90px'
                      }}
                      onClick={this.sendCode.bind(this)}
                    >
                      {this.showTipText()}
                    </View>
                  </AtInput>
                </AtForm>
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
