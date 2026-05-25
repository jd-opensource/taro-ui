import React from 'react'
import { render, fireEvent, act } from '@testing-library/react'
import { queryByClass } from '../utils'
import AtDrawer from '../../lib/components/drawer/index'

describe('AtDrawer Snap', () => {
  it('render AtDrawer -- props show', () => {
    const { container } = render(<AtDrawer show />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtDrawer -- props mask', () => {
    const { container } = render(<AtDrawer show mask={false} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtDrawer -- props width', () => {
    const { container } = render(<AtDrawer show width='50%' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtDrawer -- props items', () => {
    const { container } = render(<AtDrawer show items={['菜单1', '菜单2']} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})

describe('AtDrawer Event', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('AtDrawer onItemClick & onClose', async () => {
    const onItemClick = jest.fn()
    const onClose = jest.fn()
    const { container } = render(
      <AtDrawer
        show
        items={['菜单1', '菜单2']}
        onItemClick={onItemClick}
        onClose={onClose}
      />
    )
    act(() => {
      jest.advanceTimersByTime(300)
    })
    const items = queryByClass(container, 'at-drawer').querySelectorAll(
      '.at-list__item'
    )
    const item0 = items[0]
    fireEvent.click(item0)
    expect(onItemClick).toBeCalled()
    act(() => {
      jest.advanceTimersByTime(350)
    })
    expect(onClose).toBeCalled()
  })

  it('AtDrawer item NO.0 & NO.1 click, onItemClick(index) index should be 0 and 1', async () => {
    const onItemClick = jest.fn()
    const { container } = render(
      <AtDrawer show items={['菜单1', '菜单2']} onItemClick={onItemClick} />
    )
    act(() => {
      jest.advanceTimersByTime(300)
    })
    const items = queryByClass(container, 'at-drawer').querySelectorAll(
      '.at-list__item'
    )
    const item0 = items[0]
    const item1 = items[1]
    fireEvent.click(item0)
    fireEvent.click(item1)
    expect(onItemClick.mock.calls[0][0]).toBe(0)
    expect(onItemClick.mock.calls[1][0]).toBe(1)
  })

  it('AtDrawer click mask onClose', async () => {
    const onClick = jest.fn()
    const { container } = render(
      <AtDrawer show items={['菜单1', '菜单2']} onClose={onClick} />
    )
    act(() => {
      jest.advanceTimersByTime(300)
    })
    const componentDom = queryByClass(container, 'at-drawer')
    const mask = componentDom.querySelector('.at-drawer__mask')
    fireEvent.click(mask)
    act(() => {
      jest.advanceTimersByTime(350)
    })
    expect(onClick).toBeCalled()
  })
})
