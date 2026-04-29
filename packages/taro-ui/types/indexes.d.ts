import { ComponentClass } from 'react'

import AtComponent from './base'

export interface Item {
  /**
   * 列表项内容
   */
  name: string

  [propName: string]: any
}

export interface ListItem {
  /**
   * 列表标题
   */
  title: string
  /**
   * 右侧导航标题
   */
  key: string
  /**
   * 列表项
   */
  items: Array<Item>
}

export interface AtIndexesProps extends AtComponent {
  /**
   * 是否开启跳转过渡动画
   * @default false
   */
  animation?: boolean
  /**
   * 右侧导航第一个名称
   * @default Top
   */
  topKey?: string
  /**
   * 是否切换 key 的震动
   * **注意：** 只在微信小程序有效
   * @default true
   */
  isVibrate?: boolean
  /**
   * 是否用弹框显示当前 key
   * @default true
   */
  isShowToast?: boolean
  /**
   * 列表
   */
  list: Array<ListItem>
  /**
   * 点击列表项触发事件
   */
  onClick?: (item: Item) => void
  /**
   * 获取跳转事件跳转到指定 key
   */
  onScrollIntoView?: (fn: (key: string) => void) => void
}

export interface AtIndexesState {
  _scrollIntoView: string
  _scrollTop: number
  _tipText: string
  _isShowToast: boolean
  isWEB: boolean
  currentIndex?: number
}

declare const AtIndexes: ComponentClass<AtIndexesProps>

export default AtIndexes
