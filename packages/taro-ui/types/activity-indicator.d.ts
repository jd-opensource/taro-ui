import { ComponentClass } from 'react'

import AtComponent from './base'

export interface AtActivityIndicatorProps extends AtComponent {
  /**
   * loading 图的大小
   * @default 24
   */
  size?: number
  /**
   * 元素的类型
   */
  mode?: 'center' | 'normal'
  /**
   * loading 图的颜色
   * @default #6190E8
   */
  color?: string
  /**
   * 元素的内容文本
   */
  content?: string
  /**
   * 控制元素显示隐藏
   * @default true
   */
  isOpened?: boolean
}

declare const AtActivityIndicator: ComponentClass<AtActivityIndicatorProps>

export default AtActivityIndicator
