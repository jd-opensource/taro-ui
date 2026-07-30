import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { queryByClass } from '../utils'
import AtCheckbox from '../../lib/components/checkbox/index'

const checkboxOption = [
  {
    value: 'list1',
    label: 'iPhone X',
    desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。'
  },
  { value: 'list2', label: 'HUAWEI P20' },
  {
    value: 'list3',
    label: 'OPPO Find X',
    desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
    disabled: true
  },
  {
    value: 'list4',
    label: 'vivo NEX',
    desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
    disabled: true
  }
]

describe('AtCheckbox Snap', () => {
  it('render initial AtCheckbox', () => {
    const { container } = render(<AtCheckbox />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtCheckbox -- props options', () => {
    const { container } = render(<AtCheckbox options={checkboxOption} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtCheckbox -- props selectedList', () => {
    const { container } = render(
      <AtCheckbox options={checkboxOption} selectedList={['list2']} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})

describe('AtCheckbox Event', () => {
  it('AtCheckbox onChange', () => {
    const onClick = jest.fn()
    const { container } = render(
      <AtCheckbox
        options={checkboxOption}
        selectedList={['list2']}
        onChange={onClick}
      />
    )
    const componentDom = queryByClass(container, 'at-checkbox')
    const items = componentDom.querySelectorAll('.at-checkbox__option')
    fireEvent.click(items[0])
    expect(onClick).toBeCalled()
    expect(onClick.mock.calls[0][0]).toEqual(['list2', 'list1'])
    expect(onClick.mock.calls[0][1]).toEqual('list1')
  })

  it('AtCheckbox disabled, onChange not to be called', () => {
    const onClick = jest.fn()
    const { container } = render(
      <AtCheckbox
        options={checkboxOption}
        selectedList={['list2']}
        onChange={onClick}
      />
    )
    const componentDom = queryByClass(container, 'at-checkbox')
    const items = componentDom.querySelectorAll('.at-checkbox__option')
    fireEvent.click(items[2])
    expect(onClick).not.toBeCalled()
  })
})
