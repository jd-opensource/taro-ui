import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { queryByClass } from '../utils'
import AtActionSheet from '../../lib/components/action-sheet'
import AtActionSheetItem from '../../lib/components/action-sheet/body/item'

describe('ActionSheet Snap', () => {
  it('render initial ActionSheet', () => {
    const { container } = render(
      <AtActionSheet>
        <AtActionSheetItem>按钮一</AtActionSheetItem>
        <AtActionSheetItem>按钮二</AtActionSheetItem>
      </AtActionSheet>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render opened ActionSheet', () => {
    const { container } = render(
      <AtActionSheet isOpened>
        <AtActionSheetItem>按钮一</AtActionSheetItem>
        <AtActionSheetItem>按钮二</AtActionSheetItem>
      </AtActionSheet>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render opened ActionSheet -- props cancelText', () => {
    const { container } = render(
      <AtActionSheet isOpened cancelText='取消'>
        <AtActionSheetItem>按钮一</AtActionSheetItem>
        <AtActionSheetItem>按钮二</AtActionSheetItem>
      </AtActionSheet>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render opened ActionSheet -- props title', () => {
    const { container } = render(
      <AtActionSheet
        isOpened
        title='清除位置信息后， 别人将不能查看到你\r\n可以通过转义字符换行'
      >
        <AtActionSheetItem>按钮一</AtActionSheetItem>
        <AtActionSheetItem>按钮二</AtActionSheetItem>
      </AtActionSheet>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render opened  ActionSheet -- props completed ', () => {
    const { container } = render(
      <AtActionSheet
        isOpened
        cancelText='取消'
        title='清除位置信息后， 别人将不能查看到你\r\n可以通过转义字符换行'
      >
        <AtActionSheetItem>按钮一</AtActionSheetItem>
        <AtActionSheetItem>按钮二</AtActionSheetItem>
      </AtActionSheet>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})

describe('ActionSheet Behavior ', () => {
  it('ActionSheet onClose & onCancel & onClick', async () => {
    const onClose = jest.fn()
    const onClick = jest.fn()
    const onCancel = jest.fn()

    const { container } = render(
      <AtActionSheet
        isOpened
        cancelText='取消'
        onClose={onClose}
        onCancel={onCancel}
        title='清除位置信息后， 别人将不能查看到你\r\n可以通过转义字符换行'
      >
        <AtActionSheetItem onClick={onClick}>按钮一</AtActionSheetItem>
      </AtActionSheet>
    )
    const componentDom = queryByClass(container, 'at-action-sheet')

    const bodyItemDom = componentDom.querySelector('.at-action-sheet__item')
    const footerDom = componentDom.querySelector('.at-action-sheet__footer')
    const overlayDom = componentDom.querySelector('.at-action-sheet__overlay')

    fireEvent.click(bodyItemDom)
    expect(onClick).toBeCalled()

    fireEvent.click(footerDom)
    expect(onCancel).toBeCalled()

    fireEvent.click(overlayDom)
    await waitFor(() => {
      expect(onClose).toBeCalled()
    })
  })

  it('ActionSheet onClose', async () => {
    const onClose = jest.fn()

    const { container } = render(
      <AtActionSheet
        isOpened
        cancelText='取消'
        onClose={onClose}
        title='清除位置信息后， 别人将不能查看到你\r\n可以通过转义字符换行'
      >
        <AtActionSheetItem>按钮一</AtActionSheetItem>
      </AtActionSheet>
    )
    const componentDom = queryByClass(container, 'at-action-sheet')
    const footerDom = componentDom.querySelector('.at-action-sheet__footer')

    fireEvent.click(footerDom)
    await waitFor(() => {
      expect(onClose).toBeCalled()
    })
  })
})
