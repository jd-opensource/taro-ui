import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { queryByClass } from '../utils'
import AtPagination from '../../lib/components/pagination/index'

describe('AtPagination Snap', () => {
  it('render AtPagination -- props current', () => {
    const { container } = render(<AtPagination current={1} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtPagination -- props total', () => {
    const { container } = render(<AtPagination total={100} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtPagination -- props pageSize', () => {
    const { container } = render(<AtPagination pageSize={40} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtPagination -- props icon', () => {
    const { container } = render(<AtPagination icon />)
    expect(container.firstChild).toMatchSnapshot()
  })
})

describe('AtPagination Event', () => {
  it('AtPagination onPageChange - prev', () => {
    const onPageChange = jest.fn()
    const { container } = render(
      <AtPagination total={100} current={2} onPageChange={onPageChange} />
    )
    const doms = queryByClass(container, 'at-pagination').querySelectorAll(
      '.at-button'
    )
    const prev = doms[0]
    fireEvent.click(prev)
    expect(onPageChange).toBeCalled()
    expect(onPageChange.mock.calls[0][0].current).toEqual(1)
  })

  it('AtPagination onPageChange - next', () => {
    const onPageChange = jest.fn()
    const { container } = render(
      <AtPagination total={100} current={2} onPageChange={onPageChange} />
    )
    const doms = queryByClass(container, 'at-pagination').querySelectorAll(
      '.at-button'
    )
    const next = doms[1]
    fireEvent.click(next)
    expect(onPageChange).toBeCalled()
    expect(onPageChange.mock.calls[0][0].current).toEqual(3)
  })

  it('AtPagination onPageChange not to be called(disabled prev or next)', () => {
    const onPageChange = jest.fn()
    const { container } = render(
      <AtPagination total={20} onPageChange={onPageChange} />
    )
    const doms = queryByClass(container, 'at-pagination').querySelectorAll(
      '.at-button'
    )
    const prev = doms[0]
    const next = doms[1]
    fireEvent.click(prev)
    fireEvent.click(next)
    expect(onPageChange).not.toBeCalled()
  })

  it('AtPagination onPageChange params {type, current} - prev', () => {
    const onPageChange = jest.fn()
    const { container } = render(
      <AtPagination total={100} current={2} onPageChange={onPageChange} />
    )
    const doms = queryByClass(container, 'at-pagination').querySelectorAll(
      '.at-button'
    )
    const prev = doms[0]
    fireEvent.click(prev)
    expect(onPageChange.mock.calls[0][0].type).toEqual('prev')
    expect(onPageChange.mock.calls[0][0].current).toEqual(1)
  })

  it('AtPagination onPageChange params {type, current} - next', () => {
    const onPageChange = jest.fn()
    const { container } = render(
      <AtPagination total={100} onPageChange={onPageChange} />
    )
    const doms = queryByClass(container, 'at-pagination').querySelectorAll(
      '.at-button'
    )
    const next = doms[1]
    fireEvent.click(next)
    expect(onPageChange.mock.calls[0][0].type).toEqual('next')
    expect(onPageChange.mock.calls[0][0].current).toEqual(2)
  })
})
