import { ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtLoadMoreProps extends AtComponent {
  /**
   * noMore 状态显示文案样式
   */
  noMoreTextStyle?: string | React.CSSProperties
  /**
   * more 状态按钮样式
   */
  moreBtnStyle?: string | React.CSSProperties
  /**
   * 组件状态，more 状态显示查看更多按钮，loading 状态显示加载状态，noMore 显示无更多数据
   * @default 'more'
   */
  status?: 'more' | 'loading' | 'noMore'
  /**
   * loading 状态显示文案
   * @default '加载中'
   */
  loadingText?: string
  /**
   * more 状态显示文案
   * @default '查看更多'
   */
  moreText?: string
  /**
   * noMore 状态显示文案
   * @default '没有更多'
   */
  noMoreText?: string
  /**
   * more 状态点击触发的事件
   */
  onClick?: CommonEventFunction
}

declare const AtLoadMore: ComponentClass<AtLoadMoreProps>

export default AtLoadMore
