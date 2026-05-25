import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { queryByClass } from '../utils'
import AtFab from '../../lib/components/fab/index'

describe('AtFab Snap', () => {
  it('render AtFab -- default props', () => {
    const { container } = render(<AtFab>按钮</AtFab>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtFab -- props className', () => {
    const { container } = render(<AtFab className='button'>按钮</AtFab>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtFab -- props size small', () => {
    const { container } = render(<AtFab size='small'>按钮</AtFab>)
    expect(container.firstChild).toMatchSnapshot()
  })
})

describe('AtFab Event', () => {
  it('AtFab onClick', () => {
    const onClick = jest.fn()
    const { container } = render(<AtFab onClick={onClick}>按钮</AtFab>)
    const componentDom = queryByClass(container, 'at-fab')
    fireEvent.click(componentDom)
    expect(onClick).toBeCalled()
  })
})
