import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { queryByClass } from '../utils'
import AtFloatLayout from '../../lib/components/float-layout/index'

describe('FloatLayout Snap', () => {
  it('render initial FloatLayout', () => {
    const { container } = render(
      <AtFloatLayout>
        这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
        随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
        随你怎么写
      </AtFloatLayout>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render opened FloatLayout', () => {
    const { container } = render(
      <AtFloatLayout isOpened>
        这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
        随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
        随你怎么写
      </AtFloatLayout>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render FloatLayout -- props note', () => {
    const { container } = render(
      <AtFloatLayout isOpened title='这是个标题'>
        这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
        随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
        随你怎么写
      </AtFloatLayout>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})

describe('FloatLayout Behavior ', () => {
  it('FloatLayout onClose', async () => {
    const onClose = jest.fn()

    const { container } = render(
      <AtFloatLayout isOpened title='这是个标题' onClose={onClose}>
        这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
        随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
        随你怎么写
      </AtFloatLayout>
    )
    const componentDom = queryByClass(container, 'at-float-layout')
    const overlayDom = componentDom.querySelector('.at-float-layout__overlay')

    fireEvent.click(overlayDom)
    await waitFor(() => {
      expect(onClose).toBeCalled()
    })
  })

  it('FloatLayout closeOnClickOverlay=false does not close', async () => {
    const onClose = jest.fn()

    const { container } = render(
      <AtFloatLayout
        isOpened
        title='这是个标题'
        closeOnClickOverlay={false}
        onClose={onClose}
      >
        content
      </AtFloatLayout>
    )
    const componentDom = queryByClass(container, 'at-float-layout')
    const overlayDom = componentDom.querySelector('.at-float-layout__overlay')

    fireEvent.click(overlayDom)
    expect(onClose).not.toBeCalled()
  })

  it('FloatLayout position=top applies modifier class', () => {
    const { container } = render(
      <AtFloatLayout isOpened position='top'>
        content
      </AtFloatLayout>
    )
    const componentDom = queryByClass(container, 'at-float-layout')
    expect(componentDom.className).toContain('at-float-layout--top')
  })
})
