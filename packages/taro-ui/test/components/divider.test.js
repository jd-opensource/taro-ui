import React from 'react'
import { render } from '@testing-library/react'
import AtDivider from '../../lib/components/divider/index'

describe('AtDivider Snap', () => {
  it('render initial AtDivider', () => {
    const { container } = render(<AtDivider />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtDivider -- props customStyle', () => {
    const { container } = render(<AtDivider customStyle='color:red;' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtDivider -- props className', () => {
    const { container } = render(<AtDivider className='test' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtDivider -- props content', () => {
    const { container } = render(<AtDivider content='content' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtDivider -- props height', () => {
    const { container } = render(<AtDivider height='120' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtDivider -- props fontColor', () => {
    const { container } = render(<AtDivider fontColor='#fff' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtDivider -- props fontSize', () => {
    const { container } = render(<AtDivider fontSize='56' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtDivider -- props lineColor', () => {
    const { container } = render(<AtDivider lineColor='#fff' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtDivider -- props childen', () => {
    const { container } = render(<AtDivider>test</AtDivider>)
    expect(container.firstChild).toMatchSnapshot()
  })
})
