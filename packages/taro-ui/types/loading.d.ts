import { ComponentClass } from 'react'

export interface AtLoadingProps {
  /**
   * 加载图标的尺寸
   * @default 0
   */
  size?: string | number
  /**
   * 加载图标的颜色
   * @default ''
   */
  color?: string | number
}

declare const AtLoading: ComponentClass<AtLoadingProps>

export default AtLoading
