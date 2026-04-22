import { ComponentClass, CSSProperties } from 'react'
import {
  CommonEventFunction,
  CommonEvent
} from '@tarojs/components/types/common'
import AtComponent from './base'

export interface InputError {
  type: 'OVER' | 'LOW' | 'DISABLED'
  errorValue: number
}

export interface AtInputNumberProps extends AtComponent {
  /**
   * 输入框类型
   * @type {'number' | 'digit'}
   * @description 必填，type='digit' 时，h5 无法显示数字输入框，若需要数字输入框建议使用 number (v1.5.1 支持)
   */
  type: 'number' | 'digit'
  /**
   * 输入框当前值
   * @type {number | string}
   * @description 输入框当前值，开发者需要通过 onChange 事件来更新 value 值
   */
  value?: number | string

  customStyle?: CSSProperties | string
  /**
   * 最小值
   * @type {number}
   * @default 0
   */
  min?: number
  /**
   * 最大值
   * @type {number}
   * @default 100
   */
  max?: number
  /**
   * 每次点击改变的间隔大小
   * @type {number}
   * @default 1
   */
  step?: number
  /**
   * 组件的大小
   * @default 'normal'
   */
  size?: 'normal' | 'large'
  /**
   * input 宽度
   * @type {number}
   * @description 不包括两侧按钮，单位根据环境转为 rpx 或 rem
   * @default 120
   */
  width?: number
  /**
   * 是否禁止输入，禁止点击按钮
   * @type {boolean}
   * @default false
   */
  disabled?: boolean
  /**
   * 是否禁止输入，但不禁止点击按钮
   * @type {boolean}
   * @default false
   */
  disabledInput?: boolean
  /**
   * 输入框值改变时触发的事件
   * @param {number} value 输入框当前值
   * @description 开发者需要通过 onChange 事件来更新 value 值变化，onChange 函数必填
   */
  onChange: (value: number, e: CommonEvent) => void
  /**
   * 输入框值失去焦点时触发的事件
   */
  onBlur?: CommonEventFunction
  /**
   * 输入框尝试输入错误数组触发的事件
   * @param {InputError} errCb
   */
  onErrorInput?: (errCb: InputError) => void
}

declare const AtInputNumber: ComponentClass<AtInputNumberProps>

export default AtInputNumber
