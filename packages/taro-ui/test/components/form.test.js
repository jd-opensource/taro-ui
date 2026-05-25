import React from 'react'
import { render } from '@testing-library/react'
import AtForm from '../../lib/components/form/index'

describe('AtForm Snap', () => {
  it('render initial AtForm', () => {
    const { container } = render(<AtForm />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtForm -- props reportSubmit', () => {
    const { container } = render(<AtForm reportSubmit />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
