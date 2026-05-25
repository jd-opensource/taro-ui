import React from 'react'
import { render } from '@testing-library/react'
import AtProgress from '../../lib/components/activity-indicator/index'

describe('Progress Snap', () => {
  it('render initial Progress', () => {
    const { container } = render(<AtProgress />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render Progress -- props percent', () => {
    const { container } = render(<AtProgress percent={25} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render Progress -- props isHidePercent', () => {
    const { container } = render(<AtProgress isHidePercent />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render Progress -- props strokeWidth ', () => {
    const { container } = render(<AtProgress strokeWidth={10} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render Progress -- props color ', () => {
    const { container } = render(<AtProgress color='#FF4949' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render Progress -- props status(progress) ', () => {
    const { container } = render(<AtProgress status='progress' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render Progress -- props status(error) ', () => {
    const { container } = render(<AtProgress status='error' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render Progress -- props status(success) ', () => {
    const { container } = render(<AtProgress status='success' />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
