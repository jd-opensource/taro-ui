import React from 'react'
import { render } from '@testing-library/react'
import AtTabsPane from '../../lib/components/tabs-pane/index'

describe('AtTabsPane Snap', () => {
  it('render initial AtTabs', () => {
    const { container: componetContainer } = render(
      <AtTabsPane>test</AtTabsPane>
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtTabsPane -- props customStyle', () => {
    const { container: componetContainer } = render(
      <AtTabsPane customStyle='color:red;' />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtTabsPane -- props className', () => {
    const { container: componetContainer } = render(
      <AtTabsPane className='test' />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtTabsPane -- props index current', () => {
    const { container: componetContainer } = render(
      <AtTabsPane index={0} current={0} />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtTabsPane -- props index current', () => {
    const { container: componetContainer } = render(
      <AtTabsPane index={1} current={0} />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })
})
