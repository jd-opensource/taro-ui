import { ComponentClass } from 'react'

import AtComponent from './base'

interface FileItem {
  path: string

  size: number
}

export interface File {
  url: string

  file?: FileItem
}

export interface AtImagePickerProps extends AtComponent {
  /**
   * 图片文件数组, 元素为对象, 包含属性 url（必选)
   */
  files: File[]
  /**
   * 图片预览模式，详见[微信开发者文档](https://developers.weixin.qq.com/miniprogram/dev/component/image.html)
   * @default 'aspectFill'
   */
  mode?:
    | 'scaleToFill'
    | 'aspectFit'
    | 'aspectFill'
    | 'widthFix'
    | 'top'
    | 'bottom'
    | 'center'
    | 'left'
    | 'right'
    | 'top left'
    | 'top right'
    | 'bottom left'
    | 'bottom right'
  /**
   * 是否显示添加图片按钮
   * @default true
   */
  showAddBtn?: boolean
  /**
   * 是否支持多选
   * @default false
   */
  multiple?: boolean
  /**
   * 单行的图片数量，不能为 0 或负数
   * @default 4
   */
  length?: number
  /**
   * 最多可以选择的图片张数
   * @since v2.0.2
   */
  count?: number
  /**
   * 所选的图片的尺寸
   * @since v2.0.2
   */
  sizeType?: string[]
  /**
   * 选择图片的来源
   * @since v2.0.2
   */
  sourceType?: string[]
  /**
   * files 值发生变化触发的回调函数, operationType 操作类型有添加，移除，如果是移除操作，则第三个参数代表的是移除图片的索引
   */
  onChange: (
    files: File[],
    operationType: 'add' | 'remove',
    index?: number
  ) => void
  /**
   * 点击图片触发的回调
   */
  onImageClick?: (index: number, file: File) => void
  /**
   * 选择失败触发的回调
   */
  onFail?: (message: string) => void
}

declare const AtImagePicker: ComponentClass<AtImagePickerProps>

export default AtImagePicker
