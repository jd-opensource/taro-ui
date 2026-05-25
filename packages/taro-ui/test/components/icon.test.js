import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { queryByClass } from '../utils'
import AtIcon from '../../lib/components/icon/index'

describe('AtIcon Snap', () => {
  it('render initial AtIcon', () => {
    const { container } = render(<AtIcon />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtIcon -- props value', () => {
    const { container } = render(<AtIcon value='star' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtIcon -- props color', () => {
    const { container } = render(<AtIcon color='#fff' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtIcon -- props size', () => {
    const { container } = render(<AtIcon size='14' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtIcon -- props prefixClass', () => {
    const { container } = render(
      <AtIcon prefixClass='prefixClass' value='star' />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtIcon -- props customStyle', () => {
    const { container } = render(<AtIcon customStyle='color:red;' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtIcon -- props className', () => {
    const { container } = render(<AtIcon className='test' />)
    expect(container.firstChild).toMatchSnapshot()
  })
})

describe('AtIcon Event', () => {
  it('AtIcon onClick', () => {
    const onClick = jest.fn()

    const { container } = render(<AtIcon onClick={onClick} />)
    const componentDom = queryByClass(container, 'at-icon')

    fireEvent.click(componentDom)
    expect(onClick).toBeCalled()
  })
})
