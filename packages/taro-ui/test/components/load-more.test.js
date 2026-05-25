import React from 'react'
import { render } from '@testing-library/react'
import AtLoadMore from '../../lib/components/load-more/index'

describe('AtLoadMore Snap', () => {
  it('render initial AtLoadMore', () => {
    const { container } = render(<AtLoadMore />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtLoadMore -- props customStyle', () => {
    const { container } = render(<AtLoadMore customStyle='color:red;' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtLoadMore -- props className', () => {
    const { container } = render(<AtLoadMore className='test' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtLoadMore -- props status === more', () => {
    const { container } = render(<AtLoadMore status='more' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtLoadMore -- props status === loading', () => {
    const { container } = render(<AtLoadMore status='loading' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtLoadMore -- props status === noMore', () => {
    const { container } = render(<AtLoadMore status='noMore' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtLoadMore -- props moreText ', () => {
    const { container } = render(
      <AtLoadMore moreText='moreText' status='more' />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtLoadMore -- props loadingText ', () => {
    const { container } = render(
      <AtLoadMore loadingText='loadingText' status='loading' />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtLoadMore -- props noMoreText ', () => {
    const { container } = render(
      <AtLoadMore noMoreText='noMoreText' status='noMore' />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtLoadMore -- props noMoreTextStyle', () => {
    const { container } = render(<AtLoadMore noMoreTextStyle='color:red' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtLoadMore -- props moreBtnStyle', () => {
    const { container } = render(<AtLoadMore moreBtnStyle='color:red' />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
