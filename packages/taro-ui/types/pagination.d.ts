import { ComponentClass } from 'react'

import AtComponent from './base'

export interface PageChangeData {
  /**
   * 翻页事件类型
   */
  type: 'prev' | 'next'
  /**
   * 当前页
   */
  current: number
}

export interface AtPaginationProps extends AtComponent {
  /**
   * 数据总量
   * @default 0
   */
  total: number
  /**
   * 当前页
   * @default 1
   */
  current?: number
  /**
   * 每页数据量
   * @default 20
   */
  pageSize?: number
  /**
   * 是否以 icon 形式展示按钮
   * @default false
   */
  icon?: boolean
  /**
   * 点击页码按钮时触发
   */
  onPageChange?: (data: PageChangeData) => void
}

export interface AtPaginationState {
  currentPage: number
  maxPage: number
  pickerRange: number[]
}

declare const AtPagination: ComponentClass<AtPaginationProps>

export default AtPagination
