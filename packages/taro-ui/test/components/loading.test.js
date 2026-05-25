import React from 'react'
import { render } from '@testing-library/react'
import AtLoading from '../../lib/components/loading/index'

describe('AtLoading Snap', () => {
  it('render initial AtLoading', () => {
    const { container } = render(<AtLoading />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtLoading -- props size', () => {
    const { container } = render(<AtLoading size={15} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtLoading -- props color', () => {
    const { container } = render(<AtLoading color='#fff' />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
