import React from 'react'
import { render } from '@testing-library/react'
import AtActivityIndicator from '../../lib/components/activity-indicator/index'

describe('ActivityIndicator Snap', () => {
  it('render initial ActivityIndicator', () => {
    const { container } = render(<AtActivityIndicator />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render ActivityIndicator -- props size', () => {
    const { container } = render(<AtActivityIndicator size={32} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render ActivityIndicator -- props color', () => {
    const { container } = render(<AtActivityIndicator color='#13CE66' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render ActivityIndicator -- props content ', () => {
    const { container } = render(<AtActivityIndicator content='加载中...' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render ActivityIndicator -- props mode ', () => {
    const { container } = render(<AtActivityIndicator mode='center' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render ActivityIndicator -- props isOpened ', () => {
    const { container } = render(<AtActivityIndicator isOpened />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
