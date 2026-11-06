import { Component } from 'react'

export default class AtComponent<P, S> extends Component<P, S> {
  /**
   * 合并 style
   * @param style1 第一个 style
   * @param style2 第二个 style
   * @returns 合并后的 style
   */
  mergeStyle(style1: object | string, style2: object | string): object | string
}
