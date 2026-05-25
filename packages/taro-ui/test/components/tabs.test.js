import React from 'react'
import { render } from '@testing-library/react'
import AtTabs from '../../lib/components/tabs/index'

describe('AtTabs Snap', () => {
  const tabList = [
    { title: '标签页1' },
    { title: '标签页2' },
    { title: '标签页3' }
  ]

  it('render initial AtTabs', () => {
    const { container: componetContainer } = render(<AtTabs />)
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtTabs -- props customStyle', () => {
    const { container: componetContainer } = render(
      <AtTabs customStyle='color:red;' />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtTabs -- props className', () => {
    const { container: componetContainer } = render(<AtTabs className='test' />)
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtTabs -- props tabList', () => {
    const { container: componetContainer } = render(
      <AtTabs tabList={tabList} />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtTabs -- props current', () => {
    const { container: componetContainer } = render(
      <AtTabs current={2} tabList={tabList} />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtTabs -- props swipeable', () => {
    const { container: componetContainer } = render(
      <AtTabs swipeable tabList={tabList} />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtTabs -- props scroll', () => {
    const { container: componetContainer } = render(
      <AtTabs scroll tabList={tabList} />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtTabs -- props tabDirection', () => {
    const { container: componetContainer } = render(
      <AtTabs scroll tabDirection='vertical' tabList={tabList} />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtTabs -- props animated', () => {
    const { container: componetContainer } = render(
      <AtTabs animated={false} tabList={tabList} />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtTabs -- props height', () => {
    const { container: componetContainer } = render(
      <AtTabs height='300px' tabDirection='vertical' tabList={tabList} />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })
})
