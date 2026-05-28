import { ComponentClass } from 'react'
import { CommonEvent } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface Icon {
  /**
   * 图标类型
   */
  value?: string
  /**
   * 激活态颜色
   */
  activeColor?: string
  /**
   * 非激活态颜色
   */
  inactiveColor?: string
  /**
   * 大小
   */
  size?: string | number
}

export interface Item {
  /**
   * 步骤标题
   */
  title?: string
  /**
   * 步骤说明文字
   */
  desc?: string
  /**
   * 图标信息，
   * value：图标类型，
   * activeColor：激活态颜色，
   * inactiveColor：非激活态颜色，
   * size：大小
   */
  icon?: Icon
  /**
   * 步骤的状态，只允许 'success' 或 'error'
   */
  status?: 'success' | 'error'
}

export interface AtStepsProps extends AtComponent {
  /**
   * 当前步骤索引值。
   *
   * **注意：** 必填，开发者需要通过 onChange 事件来更新 current 值。
   */
  current: number
  /**
   * 步骤条数据列表
   */
  items?: Array<Item>
  /**
   * 点击触发事件。
   *
   * **注意：** 开发者需要通过 onChange 事件来更新 current，onChange 函数必填
   */
  onChange: (current: number, event: CommonEvent) => void
}

declare const AtSteps: ComponentClass<AtStepsProps>

export default AtSteps
