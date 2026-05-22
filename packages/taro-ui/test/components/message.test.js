import React from 'react'
import { render } from '@testing-library/react'
import AtMessage from '../../lib/components/message/index'

describe('AtMessage Snap', () => {
  it('render initial AtMessage', () => {
    const { container } = render(<AtMessage />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtMessage -- props className', () => {
    const { container } = render(<AtMessage className='test' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtMessage -- props customStyle', () => {
    const { container } = render(<AtMessage customStyle='color:red;' />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
