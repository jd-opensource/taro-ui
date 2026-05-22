import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { queryByClass } from '../utils'
import AtButton from '../../lib/components/button/index'

describe('AtButton Snap', () => {
  it('render AtButton -- props size(normal)', () => {
    const { container } = render(<AtButton size='normal'>按钮</AtButton>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtButton -- props size(small)', () => {
    const { container } = render(<AtButton size='small'>按钮</AtButton>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtButton -- props type(primary)', () => {
    const { container } = render(<AtButton type='primary'>按钮</AtButton>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtButton -- props type(secondary)', () => {
    const { container } = render(<AtButton type='secondary'>按钮</AtButton>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtButton -- props circle', () => {
    const { container } = render(<AtButton circle>按钮</AtButton>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtButton -- props full', () => {
    const { container } = render(<AtButton full>按钮</AtButton>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtButton -- props loading', () => {
    const { container } = render(<AtButton loading>按钮</AtButton>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtButton -- props disabled', () => {
    const { container } = render(<AtButton disabled>按钮</AtButton>)
    expect(container.firstChild).toMatchSnapshot()
  })
})

describe('AtButton Event', () => {
  it('AtButton onClick', () => {
    const onClick = jest.fn()
    const { container } = render(<AtButton onClick={onClick}>按钮</AtButton>)
    const componentDom = queryByClass(container, 'at-button')

    fireEvent.click(componentDom)
    expect(onClick).toBeCalled()
  })

  it('AtButton disabled, onClick not to be called', () => {
    const onClick = jest.fn()
    const { container } = render(
      <AtButton disabled onClick={onClick}>
        按钮
      </AtButton>
    )
    const componentDom = queryByClass(container, 'at-button')

    fireEvent.click(componentDom)
    expect(onClick).not.toBeCalled()
  })
})
