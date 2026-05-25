import React from 'react'
import { render } from '@testing-library/react'
import AtAvatar from '../../lib/components/avatar/index'

describe('Avatar Snap', () => {
  it('render Avatar -- props size(large) ', () => {
    const { container } = render(<AtAvatar size='large' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render Avatar -- props size(normal) ', () => {
    const { container } = render(<AtAvatar size='normal' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render Avatar -- props size(small) ', () => {
    const { container } = render(<AtAvatar size='small' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render Avatar -- props circle', () => {
    const { container } = render(<AtAvatar circle />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render Avatar -- props image', () => {
    const { container } = render(
      <AtAvatar image='https://jdc.jd.com/img/100' />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render Avatar -- props text', () => {
    const { container } = render(<AtAvatar text='凹凸实验室' />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
