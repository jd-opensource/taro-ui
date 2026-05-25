import React from 'react'
import { render } from '@testing-library/react'
import AtInputNumber from '../../lib/components/input-number/index'

describe('AtInputNumber Snap', () => {
  it('render initial AtInputNumber', () => {
    const { container } = render(<AtInputNumber />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtInputNumber -- props customStyle', () => {
    const { container } = render(<AtInputNumber customStyle='color:red;' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtInputNumber -- props className', () => {
    const { container } = render(<AtInputNumber className='test' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtInputNumber -- props type=number', () => {
    const { container } = render(<AtInputNumber type='number' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtInputNumber -- props type=digit', () => {
    const { container } = render(<AtInputNumber type='digit' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtInputNumber -- props disabled', () => {
    const { container } = render(<AtInputNumber disabled />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtInputNumber -- props disabledInput', () => {
    const { container } = render(<AtInputNumber disabledInput />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtInputNumber -- props value', () => {
    const { container } = render(<AtInputNumber value={2} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtInputNumber -- props width', () => {
    const { container } = render(<AtInputNumber width={200} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtInputNumber -- props size', () => {
    const { container } = render(<AtInputNumber size='large' />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
