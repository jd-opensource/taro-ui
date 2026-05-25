import React from 'react'
import { render } from '@testing-library/react'
import AtTextarea from '../../lib/components/textarea/index'

describe('AtTextarea Snap', () => {
  it('render initial AtTextarea', () => {
    const { container: componetContainer } = render(<AtTextarea />)
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtTextarea -- props customStyle', () => {
    const { container: componetContainer } = render(
      <AtTextarea customStyle='color:red;' />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtTextarea -- props className', () => {
    const { container: componetContainer } = render(
      <AtTextarea className='test' />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtTextarea -- props value', () => {
    const { container: componetContainer } = render(<AtTextarea value='test' />)
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtTextarea -- props maxlength', () => {
    const { container: componetContainer } = render(
      <AtTextarea maxlength='300' />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtTextarea -- props maxlength', () => {
    const { container: componetContainer } = render(
      <AtTextarea placeholder='test' />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtTextarea -- props maxlength', () => {
    const { container: componetContainer } = render(<AtTextarea count />)
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtTextarea -- props maxlength', () => {
    const { container: componetContainer } = render(
      <AtTextarea height={3000} />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })
})
