import React from 'react'
import { AtCheckbox } from 'taro-ui'
import { CheckboxOption } from 'taro-ui/types/checkbox'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

interface IndexState {
  checkedList1: string[]
  checkedList2: string[]
  checkedList3: string[]
  checkboxOption1: CheckboxOption<string>[]
  checkboxOption2: CheckboxOption<string>[]
  checkboxOption3: CheckboxOption<string>[]
}

export default class Index extends React.Component<{}, IndexState> {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI',
  }

  public constructor(props: any) {
    super(props)
    this.state = {
      checkedList1: ['list1'],
      checkedList2: ['list1'],
      checkedList3: ['list1', 'list4'],
      checkboxOption1: [
        { value: 'list1', label: 'iPhone X' },
        { value: 'list2', label: 'HUAWEI P20' },
        { value: 'list3', label: 'OPPO Find X' },
      ],
      checkboxOption2: [
        {
          value: 'list1',
          label: 'iPhone X',
          desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
        },
        {
          value: 'list2',
          label: 'HUAWEI P20',
          desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
        },
        {
          value: 'list3',
          label: 'OPPO Find X',
          desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
        },
      ],
      checkboxOption3: [
        {
          value: 'list1',
          label: 'iPhone X',
          desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
        },
        { value: 'list2', label: 'HUAWEI P20' },
        {
          value: 'list3',
          label: 'OPPO Find X',
          desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
          disabled: true,
        },
        {
          value: 'list4',
          label: 'vivo NEX',
          desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
          disabled: true,
        },
      ],
    }
  }

  private handleChange(value: string[]): void {
    this.setState({
      checkedList1: value,
    })
  }

  private handleChangeSnd(value: string[]): void {
    this.setState({
      checkedList2: value,
    })
  }

  private handleChangeThd(value: string[]): void {
    this.setState({
      checkedList3: value,
    })
  }

  public render(): JSX.Element {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Checkbox 复选框'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 基础用法 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>基础用法</View>
            <View className='panel__content no-padding'>
              <View className='panel__content--example-item'>
                <View className='checkbox-container flex-grow'>
                  <AtCheckbox
                    options={this.state.checkboxOption1}
                    selectedList={this.state.checkedList1}
                    onChange={this.handleChange.bind(this)}
                  />
                </View>
              </View>
            </View>
          </View>

          {/* 含描述信息 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>含描述信息</View>
            <View className='panel__content no-padding'>
              <View className='panel__content--example-item'>
                <View className='checkbox-container'>
                  <AtCheckbox
                    options={this.state.checkboxOption2}
                    selectedList={this.state.checkedList2}
                    onChange={this.handleChangeSnd.bind(this)}
                  />
                </View>
              </View>
            </View>
          </View>

          {/* 选项禁用 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>选项禁用</View>
            <View className='panel__content no-padding'>
              <View className='panel__content--example-item'>
                <View className='checkbox-container'>
                  <AtCheckbox
                    options={this.state.checkboxOption3}
                    selectedList={this.state.checkedList3}
                    onChange={this.handleChangeThd.bind(this)}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
