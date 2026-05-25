import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { queryByClass } from '../utils'
import AtNoticebar from '../../lib/components/noticebar/index'

describe('AtNoticebar Snap', () => {
  it('render AtNoticebar -- props show', () => {
    const { container } = render(<AtNoticebar close>这是内容</AtNoticebar>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtNoticebar -- props single', () => {
    const { container } = render(<AtNoticebar single>这是内容</AtNoticebar>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtNoticebar -- props speed', () => {
    const { container } = render(
      <AtNoticebar speed={200}>这是内容</AtNoticebar>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtNoticebar -- props moreText & showMore', () => {
    const { container } = render(
      <AtNoticebar showMore moreText='查看更多'>
        这是内容
      </AtNoticebar>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtNoticebar -- props icon', () => {
    const { container } = render(
      <AtNoticebar icon='volume-plus'>这是内容</AtNoticebar>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})

describe('AtNoticebar Event', () => {
  it('AtNoticebar onClose', async () => {
    const onClose = jest.fn()
    const { container } = render(
      <AtNoticebar icon='volume-plus' onClose={onClose} close>
        这是内容
      </AtNoticebar>
    )
    const dom = queryByClass(container, 'at-noticebar').querySelector(
      '.at-noticebar__close'
    )
    fireEvent.click(dom)
    await waitFor(() => {
      expect(onClose).toBeCalled()
    })
  })

  it('AtNoticebar onGotoMore', async () => {
    const onGotoMore = jest.fn()
    const { container } = render(
      <AtNoticebar
        icon='volume-plus'
        onGotoMore={onGotoMore}
        single
        showMore
        moreText='更多内容'
      >
        这是内容
      </AtNoticebar>
    )
    const dom = queryByClass(container, 'at-noticebar').querySelector(
      '.at-noticebar__more'
    )
    fireEvent.click(dom)
    await waitFor(() => {
      expect(onGotoMore).toBeCalled()
    })
  })
})
