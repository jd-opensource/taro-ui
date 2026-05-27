import { ComponentClass } from 'react'

import AtComponent from './base'

export interface FormatObject {
  /**
   * 格式化分割符号：天
   * @default '天'
   */
  day?: string
  /**
   * 格式化分割符号：小时
   * @default '时'
   */
  hours?: string
  /**
   * 格式化分割符号：分钟
   * @default '分'
   */
  minutes?: string
  /**
   * 格式化分割符号：秒
   * @default '秒'
   */
  seconds?: string
}

export interface AtCountDownProps extends AtComponent {
  /**
   * 是否显示卡片式样式
   * @default false
   */
  isCard?: boolean
  /**
   * 是否显示天数
   * @default false
   */
  isShowDay?: boolean
  /**
   * 是否显示小时
   * @default true
   */
  isShowHour?: boolean
  /**
   * 是否显示分钟
   * @default true
   */
  isShowMinute?: boolean
  /**
   * 格式化分割符号；未指定的字段将回退到 locale 默认值
   * @default { day: '天', hours: '时', minutes: '分', seconds: '秒' }
   */
  format?: FormatObject
  /**
   * 天数
   * @default 0
   */
  day?: number
  /**
   * 小时
   * @default 0
   */
  hours?: number
  /**
   * 分钟
   * @default 0
   */
  minutes?: number
  /**
   * 秒
   * @default 0
   */
  seconds?: number
  /**
   * 倒计时时间到，执行的回调函数
   */
  onTimeUp?: () => void
}

export interface AtCountdownState {
  _day: number
  _hours: number
  _minutes: number
  _seconds: number
}

export interface AtCountdownItemProps extends AtComponent {
  num: number
  separator: string
  isCard?: boolean
}

declare const AtCountDown: ComponentClass<AtCountDownProps>

export default AtCountDown
