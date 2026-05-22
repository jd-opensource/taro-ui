import React from 'react'
import { render } from '@testing-library/react'
import AtRate from '../../lib/components/rate/index'

describe('AtRate Snap', () => {
  it('render initial AtRate', () => {
    const { container: componetContainer } = render(<AtRate isTest />)
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtRate -- props customStyle', () => {
    const { container: componetContainer } = render(
      <AtRate customStyle='color:red;' />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtRate -- props className', () => {
    const { container: componetContainer } = render(<AtRate className='test' />)
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtRate -- props size', () => {
    const { container: componetContainer } = render(<AtRate size='10' />)
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtRate -- props value', () => {
    const { container: componetContainer } = render(<AtRate value='2' />)
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtRate -- props max', () => {
    const { container: componetContainer } = render(<AtRate max='10' />)
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtRate -- props margin', () => {
    const { container: componetContainer } = render(<AtRate margin='10' />)
    expect(componetContainer.firstChild).toMatchSnapshot()
  })
})
