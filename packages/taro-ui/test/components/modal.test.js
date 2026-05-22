import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { Button } from '@tarojs/components'
import { queryByClass } from '../utils'
import AtModal from '../../lib/components/modal/index'
import AtModalAction from '../../lib/components/modal/action/index'
import AtModalHeader from '../../lib/components/modal/header/index'
import AtModalContent from '../../lib/components/modal/content/index'

describe('Modal Snap', () => {
  it('render initial Modal', () => {
    const { container } = render(
      <AtModal>
        <AtModalHeader>标题</AtModalHeader>
        <AtModalContent>
          这里是正文内容，欢迎加入京东凹凸实验室
          这里是正文内容，欢迎加入京东凹凸实验室
          这里是正文内容，欢迎加入京东凹凸实验室
        </AtModalContent>
        <AtModalAction>
          <Button>取消</Button>
          <Button>确定</Button>
        </AtModalAction>
      </AtModal>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render opened Modal', () => {
    const { container } = render(
      <AtModal isOpened>
        <AtModalHeader>标题</AtModalHeader>
        <AtModalContent>
          这里是正文内容，欢迎加入京东凹凸实验室
          这里是正文内容，欢迎加入京东凹凸实验室
          这里是正文内容，欢迎加入京东凹凸实验室
        </AtModalContent>
        <AtModalAction>
          <Button>取消</Button>
          <Button>确定</Button>
        </AtModalAction>
      </AtModal>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render opened Modal -- not header', () => {
    const { container } = render(
      <AtModal isOpened>
        <AtModalContent>
          这里是正文内容，欢迎加入京东凹凸实验室
          这里是正文内容，欢迎加入京东凹凸实验室
          这里是正文内容，欢迎加入京东凹凸实验室
        </AtModalContent>
        <AtModalAction>
          <Button>取消</Button>
          <Button>确定</Button>
        </AtModalAction>
      </AtModal>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render opened Modal -- single button', () => {
    const { container } = render(
      <AtModal isOpened>
        <AtModalContent>
          这里是正文内容，欢迎加入京东凹凸实验室
          这里是正文内容，欢迎加入京东凹凸实验室
          这里是正文内容，欢迎加入京东凹凸实验室
        </AtModalContent>
        <AtModalAction>
          <Button>确定</Button>
        </AtModalAction>
      </AtModal>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render opened  Modal -- simple', () => {
    const { container } = render(
      <AtModal
        isOpened
        title='标题'
        cancelText='取消'
        confirmText='确认'
        content='欢迎加入京东凹凸实验室\n欢迎加入京东凹凸实验室'
      />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})

describe('Modal Behavior ', () => {
  it('Modal onClose & onCancel & onClick', async () => {
    const onCancel = jest.fn()
    const onConfirm = jest.fn()
    const onClose = jest.fn()

    const { container } = render(
      <AtModal
        isOpened
        title='标题'
        cancelText='取消'
        confirmText='确认'
        onClose={onClose}
        onCancel={onCancel}
        onConfirm={onConfirm}
        content='欢迎加入京东凹凸实验室\n欢迎加入京东凹凸实验室'
      />
    )
    const componentDom = queryByClass(container, 'at-modal')

    const cancelDom = componentDom.querySelector(
      '.at-modal__footer .at-modal__action button:first-child'
    )
    const confirmDom = componentDom.querySelector(
      '.at-modal__footer .at-modal__action button:last-child'
    )
    const overlayDom = componentDom.querySelector('.at-modal__overlay')

    fireEvent.click(cancelDom)
    expect(onCancel).toBeCalled()

    fireEvent.click(confirmDom)
    expect(onConfirm).toBeCalled()

    expect(componentDom.classList.contains('at-modal--active')).toBeTruthy()
    fireEvent.click(overlayDom)
    await waitFor(() => {
      expect(onClose).toBeCalled()
      expect(componentDom.classList.contains('at-modal--active')).toBeFalsy()
    })
  })

  it('Modal onClose will not be called', async () => {
    const onClose = jest.fn()

    const { container } = render(
      <AtModal
        isOpened
        title='标题'
        cancelText='取消'
        closeOnClickOverlay={false}
        confirmText='确认'
        onClose={onClose}
        content='欢迎加入京东凹凸实验室\n欢迎加入京东凹凸实验室'
      />
    )
    const componentDom = queryByClass(container, 'at-modal')
    const overlayDom = componentDom.querySelector('.at-modal__overlay')

    expect(componentDom.classList.contains('at-modal--active')).toBeTruthy()

    fireEvent.click(overlayDom)

    await waitFor(() => {
      expect(onClose).not.toBeCalled()
      expect(componentDom.classList.contains('at-modal--active')).toBeTruthy()
    })
  })
})
