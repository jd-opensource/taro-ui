import AtComponent from './base'

export interface CheckboxOption<T> {
  value: T
  label: string
  desc?: string
  disabled?: boolean
}

export interface AtCheckboxProps<T> extends AtComponent {
  options: Array<CheckboxOption<T>>

  border?: boolean

  selectedList: Array<T>

  /**
   * 选中项变化时触发
   * @param selectedList 当前选中的 value 列表
   * @param changedValue 本次点击变更的 option value
   */
  onChange: (selectedList: Array<T>, changedValue?: T) => void
}

declare function AtCheckbox<T>(props: AtCheckboxProps<T>): JSX.Element

export default AtCheckbox
