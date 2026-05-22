import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { queryByClass } from '../utils'
import AtTag from '../../lib/components/tag/index'

describe('AtTag Snap', () => {
  it('render AtNoticebar -- props size', () => {
    const { container } = render(<AtTag size='small'>标签</AtTag>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtNoticebar -- props type', () => {
    const { container } = render(<AtTag type='primary'>标签</AtTag>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtNoticebar -- props name', () => {
    const { container } = render(<AtTag name='tag-01'>标签</AtTag>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtNoticebar -- props circle', () => {
    const { container } = render(<AtTag circle>标签</AtTag>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtNoticebar -- props active', () => {
    const { container } = render(<AtTag active>标签</AtTag>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtNoticebar -- props disabled', () => {
    const { container } = render(<AtTag disabled>标签</AtTag>)
    expect(container.firstChild).toMatchSnapshot()
  })
})

describe('AtTag Event', () => {
  it('AtTag onClick', () => {
    const onClick = jest.fn()
    const { container } = render(<AtTag onClick={onClick}>标签</AtTag>)
    const dom = queryByClass(container, 'at-tag')
    fireEvent.click(dom)
    expect(onClick).toBeCalled()
  })

  it('AtTag onClick not to be called(disabled)', () => {
    const onClick = jest.fn()
    const { container } = render(
      <AtTag onClick={onClick} disabled>
        标签
      </AtTag>
    )
    const dom = queryByClass(container, 'at-tag')
    fireEvent.click(dom)
    expect(onClick).not.toBeCalled()
  })

  it('AtTag onClick params {name, active}', () => {
    const onClick = jest.fn()
    const { container } = render(
      <AtTag onClick={onClick} name='tag-01'>
        标签
      </AtTag>
    )
    const dom = queryByClass(container, 'at-tag')
    fireEvent.click(dom)
    expect(onClick.mock.calls[0][0].name).toEqual('tag-01')
    expect(onClick.mock.calls[0][0].active).toBeFalsy()
  })
})
