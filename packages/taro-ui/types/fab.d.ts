import { ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtFabProps extends AtComponent {
  /**
   * 大小尺寸
   * @default 'normal'
   */
  size?: 'normal' | 'small'
  /**
   * 点击标签时触发
   */
  onClick?: CommonEventFunction
}

declare const AtFab: ComponentClass<AtFabProps>

export default AtFab
