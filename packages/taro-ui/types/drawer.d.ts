import { ComponentClass } from 'react'

import AtComponent from './base'

export interface AtDrawerProps extends AtComponent {
  /**
   * 展示或隐藏
   * @default false
   */
  show: boolean
  /**
   * 是否需要遮罩
   * @default true
   */
  mask?: boolean
  /**
   * 抽屉宽度
   * @default 230px
   */
  width?: string
  /**
   * 是否从右侧滑出
   * @default false
   */
  right?: boolean
  /**
   * Array
   */
  items?: Array<string>
  /**
   * 点击菜单时触发
   */
  onItemClick?: (index: number) => void
  /**
   * 动画结束组件关闭的时候触发
   */
  onClose?: () => void
}

export interface AtDrawerState {
  animShow?: boolean
  translateX?: any
  _show: boolean
}

declare const AtDrawer: ComponentClass<AtDrawerProps>

export default AtDrawer
