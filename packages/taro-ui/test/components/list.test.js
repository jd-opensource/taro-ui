import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { queryByClass } from '../utils'
import AtList from '../../lib/components/list/index'
import AtListItem from '../../lib/components/list/item/index'

describe('List Snap', () => {
  it('render completed List', () => {
    const { container } = render(
      <AtList>
        <AtListItem title='标题文字' />
        <AtListItem title='标题文字' arrow='right' />
        <AtListItem title='标题文字' note='描述信息' />
        <AtListItem title='禁用状态' disabled extraText='详细信息' />
        <AtListItem title='标题文字' note='描述信息' arrow='right' />
        <AtListItem title='标题文字' extraText='详细信息' arrow='right' />
        <AtListItem
          arrow='right'
          note='描述信息'
          title='标题文字标题文字标题文字标题文字标题文字'
          extraText='详细信息详细信息详细信息详细信息'
        />
        <AtListItem
          title='标题文字'
          note='描述信息'
          extraText='详细信息'
          arrow='right'
          thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
        />
        <AtListItem
          arrow='right'
          note='描述信息'
          iconInfo={{
            size: 25,
            color: '#78A4FA',
            value: 'calendar'
          }}
          title='标题文字'
          extraText='详细信息'
          thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
        />
        <AtListItem title='标题文字' isSwitch />
        <AtListItem title='标题文字' isSwitch disabled />
        <AtListItem title='标题文字' switchIsCheck isSwitch />
        <AtListItem title='标题文字' switchIsCheck isSwitch disabled />
      </AtList>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render completed List -- no border', () => {
    const { container } = render(
      <AtList hasBorder={false}>
        <AtListItem title='标题文字' hasBorder={false} />
        <AtListItem title='标题文字' hasBorder={false} />
      </AtList>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})

describe('List Behavior ', () => {
  it('ListItem onClick', () => {
    const onClick = jest.fn()

    const { container } = render(
      <AtList>
        <AtListItem title='标题文字' onClick={onClick} />
      </AtList>
    )
    const componentDom = queryByClass(container, 'at-list')
    const itemDom = componentDom.querySelector('.at-list__item')

    fireEvent.click(itemDom)
    expect(onClick).toBeCalled()
  })

  it('ListItem onSwitchChange', () => {
    const onChange = jest.fn()

    const { container } = render(
      <AtList>
        <AtListItem title='标题文字' isSwitch onSwitchChange={onChange} />
      </AtList>
    )

    const componentDom = queryByClass(container, 'at-list')
    const itemSwitchDom = componentDom.querySelector(
      '.at-list__item .item-extra__switch'
    ).children[0]

    fireEvent.click(itemSwitchDom)
    expect(onChange).toBeCalled()
  })

  it('ListItem onSwitchChange && onClick', () => {
    const onClick = jest.fn()
    const onChange = jest.fn()

    const { container } = render(
      <AtList>
        <AtListItem
          title='标题文字'
          isSwitch
          onClick={onClick}
          onSwitchChange={onChange}
        />
      </AtList>
    )

    const componentDom = queryByClass(container, 'at-list')
    const itemDom = componentDom.querySelector('.at-list__item').children[0]
    const itemSwitchDom = componentDom.querySelector(
      '.at-list__item .item-extra__switch'
    ).children[0]

    fireEvent.click(itemSwitchDom)
    expect(onChange).toBeCalled()
    expect(onClick).not.toBeCalled()

    onClick.mockReset()
    onChange.mockReset()

    fireEvent.click(itemDom)
    expect(onClick).toBeCalled()
    expect(onChange).not.toBeCalled()
  })

  it('ListItem disabled onSwitchChange && onClick', () => {
    const onClick = jest.fn()
    const onChange = jest.fn()

    const { container } = render(
      <AtList>
        <AtListItem
          isSwitch
          disabled
          title='标题文字'
          onClick={onClick}
          onSwitchChange={onChange}
        />
      </AtList>
    )

    const componentDom = queryByClass(container, 'at-list')
    const itemDom = componentDom.querySelector('.at-list__item').children[0]
    const itemSwitchDom = componentDom.querySelector(
      '.at-list__item .item-extra__switch'
    ).children[0]

    fireEvent.click(itemSwitchDom)
    expect(onChange).not.toBeCalled()

    onClick.mockReset()
    onChange.mockReset()

    fireEvent.click(itemDom)
    expect(onClick).not.toBeCalled()
  })

  it('ListItem switch was checked', () => {
    const { container } = render(
      <AtList>
        <AtListItem isSwitch switchIsCheck title='标题文字' />
      </AtList>
    )

    const componentDom = queryByClass(container, 'at-list')
    const itemSwitchInputDom = componentDom.querySelector(
      '.at-list__item .item-extra__switch input'
    )
    expect(itemSwitchInputDom.checked).toBeTruthy()
  })

  it('ListItem switch was unchecked', () => {
    const { container } = render(
      <AtList>
        <AtListItem isSwitch title='标题文字' />
      </AtList>
    )

    const componentDom = queryByClass(container, 'at-list')
    const itemSwitchInputDom = componentDom.querySelector(
      '.at-list__item .item-extra__switch input'
    )
    expect(itemSwitchInputDom.checked).toBeFalsy()
  })
})
