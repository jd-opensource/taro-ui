import React from 'react'
import { render } from '@testing-library/react'
import AtBadge from '../../lib/components/badge/index'
import AtButton from '../../lib/components/button/index'

describe('AtBadge Snap', () => {
  it('render AtBadge -- props value', () => {
    const { container } = render(
      <AtBadge value='3'>
        <AtButton loading>按钮文字</AtButton>
      </AtBadge>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtBadge -- props dot', () => {
    const { container } = render(
      <AtBadge dot>
        <AtButton loading>按钮文字</AtButton>
      </AtBadge>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtBadge -- props maxValue', () => {
    const { container } = render(
      <AtBadge value='10' maxValue={9}>
        <AtButton loading>按钮文字</AtButton>
      </AtBadge>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
