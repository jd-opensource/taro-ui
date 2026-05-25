import React from 'react'
import { render } from '@testing-library/react'
import AtRange from '../../lib/components/range/index'

describe('AtRange Snap', () => {
  it('render initial AtRange', () => {
    const { container: componetContainer } = render(<AtRange />)
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtRange -- props className', () => {
    const { container: componetContainer } = render(
      <AtRange className='test' />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtRange -- props customStyle', () => {
    const { container: componetContainer } = render(
      <AtRange customStyle='color:red;' />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtRange -- props sliderStyle', () => {
    const { container: componetContainer } = render(
      <AtRange sliderStyle='color:red;' />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtRange -- props railStyle', () => {
    const { container: componetContainer } = render(
      <AtRange railStyle='color:red;' />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtRange -- props trackStyle', () => {
    const { container: componetContainer } = render(
      <AtRange trackStyle='color:red;' />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtRange -- props value', () => {
    const { container: componetContainer } = render(<AtRange value={[0, 30]} />)
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtRange -- props min', () => {
    const { container: componetContainer } = render(
      <AtRange min={10} value={[10, 30]} />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtRange -- props max', () => {
    const { container: componetContainer } = render(
      <AtRange max={50} value={[10, 30]} />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtRange -- props disabled', () => {
    const { container: componetContainer } = render(<AtRange disabled />)
    expect(componetContainer.firstChild).toMatchSnapshot()
  })
})
