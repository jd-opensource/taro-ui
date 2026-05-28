import { ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtCurtainProps extends AtComponent {
  /**
   * 是否开启
   * @default false
   */
  isOpened?: boolean
  /**
   * 关闭图标位置
   * 'top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right'
   * @default 'bottom'
   */
  closeBtnPosition?:
    | 'top'
    | 'top-left'
    | 'top-right'
    | 'bottom'
    | 'bottom-left'
    | 'bottom-right'
  /**
   * 点击关闭按钮触发事件
   */
  onClose: CommonEventFunction
}

declare const AtCurtain: ComponentClass<AtCurtainProps>

export default AtCurtain
