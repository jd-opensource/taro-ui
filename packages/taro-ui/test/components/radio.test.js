import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { queryByClass } from '../utils'
import AtRadio from '../../lib/components/radio/index'

const options = [
  { label: '单选项一', value: 'option1' },
  { label: '单选项二', value: 'option2', desc: '单选项描述二' },
  { label: '单选项三', value: 'option3', desc: '单选项描述三', disabled: true }
]

describe('AtRadio Snap', () => {
  it('render AtRadio', () => {
    const { container } = render(<AtRadio options={options} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})

describe('AtRadio Event', () => {
  it('AtRadio onClick', () => {
    const onItemClick = jest.fn()
    const { container } = render(
      <AtRadio value='option2' options={options} onClick={onItemClick} />
    )
    const items = queryByClass(container, 'at-radio').querySelectorAll(
      '.at-radio__option'
    )
    const item0 = items[0]
    fireEvent.click(item0)
    expect(onItemClick).toBeCalled()
    expect(onItemClick.mock.calls[0][0]).toBe('option1')
  })

  it('AtRadio onClick disabled, onClick not to be called', () => {
    const onItemClick = jest.fn()
    const { container } = render(
      <AtRadio value='option2' options={options} onClick={onItemClick} />
    )
    const items = queryByClass(container, 'at-radio').querySelectorAll(
      '.at-radio__option'
    )
    const item2 = items[2]
    fireEvent.click(item2)
    expect(onItemClick).not.toBeCalled()
  })
})
