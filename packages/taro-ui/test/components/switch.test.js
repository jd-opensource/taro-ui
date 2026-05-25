import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { queryByClass } from '../utils'
import AtSwitch from '../../lib/components/switch/index'

describe('AtRate Snap', () => {
  it('render initial AtSwitch', () => {
    const { container } = render(<AtSwitch />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtSwitch -- props title', () => {
    const { container } = render(<AtSwitch title='开启中' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtSwitch -- props checked', () => {
    const { container } = render(<AtSwitch title='开启中' checked />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtSwitch -- props border', () => {
    const { container } = render(<AtSwitch title='开启中' border={false} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtSwitch -- props disabled', () => {
    const { container: container1 } = render(
      <AtSwitch title='开启中' checked disabled />
    )
    expect(container1.firstChild).toMatchSnapshot()
    const { container: container2 } = render(
      <AtSwitch title='开启中' disabled />
    )
    expect(container2.firstChild).toMatchSnapshot()
  })
})

describe('AtSwitch Event', () => {
  it('AtSwitch onChange', () => {
    const onItemClick = jest.fn()
    const { container } = render(
      <AtSwitch title='开启中' checked onChange={onItemClick} />
    )
    const items = queryByClass(container, 'at-switch').querySelectorAll(
      '.at-switch__switch'
    )
    const item0 = items[0]
    fireEvent.click(item0)
    expect(onItemClick).toBeCalled()
    expect(onItemClick.mock.calls[0][0]).toBeFalsy()
  })
})
