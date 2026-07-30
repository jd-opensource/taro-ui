/* eslint-disable no-restricted-globals */
import { ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtFloatLayoutProps extends AtComponent {
  /**
   * 控制是否出现在页面上
   * @default false
   */
  isOpened: boolean
  /**
   * 元素的标题
   */
  title?: string
  /**
   * 是否垂直滚动
   * @default true
   */
  scrollY?: boolean
  /**
   * 是否水平滚动
   * @default false
   */
  scrollX?: boolean
  /**
   * 设置竖向滚动条位置
   */
  scrollTop?: number
  /**
   * 设置横向滚动条位置
   */
  scrollLeft?: number
  /**
   * 距顶部/左边多远时，触发 scrolltolower 事件
   */
  upperThreshold?: number
  /**
   * 距底部/右边多远时，触发 scrolltolower 事件
   */
  lowerThreshold?: number
  /**
   * 在设置滚动条位置时使用动画过渡
   * @default false
   */
  scrollWithAnimation?: boolean
  /**
   * 点击浮层的时候时候自动关闭
   * @default true
   */
  closeOnClickOverlay?: boolean
  /**
   * 弹出位置
   * @default 'bottom'
   */
  position?: 'top' | 'bottom'
  /**
   * 元素被关闭时候触发的事件
   */
  onClose?: CommonEventFunction
  /**
   * 滚动时触发的事件
   */
  onScroll?: CommonEventFunction
  /**
   * 滚动到顶部/左边，会触发 onScrollToUpper 事件
   */
  onScrollToUpper?: CommonEventFunction
  /**
   * 滚动到底部/右边，会触发 onScrollToLower 事件
   */
  onScrollToLower?: CommonEventFunction
}

export interface AtFloatLayoutState {
  _isOpened: boolean
  translateY?: any
}

declare const AtFloatLayout: ComponentClass<AtFloatLayoutProps>

export default AtFloatLayout
