import { ComponentClass } from 'react'
import {
  CommonEvent,
  CommonEventFunction
} from '@tarojs/components/types/common'
import AtComponent from './base'

export interface AtTextareaProps extends AtComponent {
  /**
   * 输入框当前值，用户需要通过 onChange 事件的 event.detail.value 来更新 value 值
   */
  value?: string
  /**
   * 最大长度
   * @default 200
   */
  maxLength?: string | number
  /**
   * 占位符
   */
  placeholder?: string
  /**
   * 指定 placeholder 的样式类，只在小程序有效
   */
  placeholderClass?: string
  /**
   * 指定 placeholder 的样式，只在小程序有效
   */
  placeholderStyle?: string
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean
  /**
   * 是否自动聚焦
   * @default false
   */
  autoFocus?: boolean
  /**
   * 获取焦点
   * @default false
   */
  focus?: boolean
  /**
   * 是否显示键盘上方带有“完成”按钮那一栏
   * @default false
   */
  showConfirmBar?: boolean
  /**
   * 光标起始位置，自动聚集时有效，需与 selection-end 搭配使用
   * @default -1
   */
  selectionStart?: number
  /**
   * 光标结束位置，自动聚集时有效，需与 selectionStart 搭配使用
   * @default -1
   */
  selectionEnd?: number
  /**
   * 是否显示字数
   * @default true
   */
  count?: boolean
  /**
   * 如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true
   * @default false
   */
  fixed?: boolean
  /**
   * 文字超出最大长度时是否禁止输入，若否，则还可以在 maxLength 的基础上输入 500 字符，并右下角红字提示
   * @default true
   */
  textOverflowForbidden?: boolean
  /**
   * 输入框高度
   * @default 100
   */
  height?: string | number
  /**
   * 指定光标与键盘的距离，单位 px。
   * 取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离，
   * 只在小程序端有效，目前安卓端微信官方有 bug，该特性失效
   * @default 100
   */
  cursorSpacing?: number
  /**
   * 输入框值改变时触发的事件，
   * 开发者需要通过 onChange 事件来更新 value 值变化，
   * onChange 函数必填
   */
  onChange: (value: string, event?: CommonEvent) => void
  /**
   * 输入框获得焦点时触发，height 为键盘高度，在基础库 1.9.90 起支持
   */
  onFocus?: CommonEventFunction
  /**
   * 输入框失去焦点时触发
   */
  onBlur?: CommonEventFunction
  /**
   * 点击完成时，触发 confirm 事件
   */
  onConfirm?: CommonEventFunction
  /**
   * 输入框行数变化时调用
   */
  onLinechange?: CommonEventFunction
}

declare const AtTextarea: ComponentClass<AtTextareaProps>

export default AtTextarea
