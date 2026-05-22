import { Text } from '@tarojs/components'
import React from 'react'
import { render } from '@testing-library/react'
import AtNavBar from '../../lib/components/nav-bar/index'

describe('AtNavBar Snap', () => {
  it('render initial AtNavBar', () => {
    const { container } = render(<AtNavBar />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtNavBar -- props className', () => {
    const { container } = render(<AtNavBar className='test' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtNavBar -- props customStyle', () => {
    const { container } = render(<AtNavBar customStyle='color:red;' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtNavBar -- props fixed', () => {
    const { container } = render(<AtNavBar fixed />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtNavBar -- props color', () => {
    const { container } = render(<AtNavBar color='#fff' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtNavBar -- props leftIconType', () => {
    const { container } = render(<AtNavBar leftIconType='test' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtNavBar -- props leftIconType', () => {
    const { container } = render(
      <AtNavBar leftIconType={{ value: 'test', color: 'red', size: 36 }} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtNavBar -- props leftText', () => {
    const { container } = render(<AtNavBar leftText='test' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtNavBar -- props title', () => {
    const { container } = render(<AtNavBar title='test' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtNavBar -- props title', () => {
    const { container } = render(
      <AtNavBar>
        <Text>test</Text>
      </AtNavBar>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtNavBar -- props leftText', () => {
    const { container } = render(<AtNavBar leftText='test' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtNavBar -- props rightFirstIconType', () => {
    const { container } = render(<AtNavBar rightFirstIconType='test' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtNavBar -- props rightFirstIconType', () => {
    const { container } = render(
      <AtNavBar
        rightFirstIconType={{ value: 'test', color: 'red', size: 36 }}
      />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtNavBar -- props rightSecondIconType', () => {
    const { container } = render(<AtNavBar rightSecondIconType='test' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtNavBar -- props rightSecondIconType', () => {
    const { container } = render(
      <AtNavBar
        rightSecondIconType={{ value: 'test', color: 'red', size: 36 }}
      />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
