import React from 'react'
import { render } from '@testing-library/react'
import AtSearchBar from '../../lib/components/search-bar/index'

describe('AtSearchBar Snap', () => {
  it('render initial AtSearchBar', () => {
    const { container: componetContainer } = render(<AtSearchBar />)
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtSearchBar -- props className', () => {
    const { container: componetContainer } = render(
      <AtSearchBar className='test' />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtSearchBar -- props customStyle', () => {
    const { container: componetContainer } = render(
      <AtSearchBar customStyle='color:red;' />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtSearchBar -- props value', () => {
    const { container: componetContainer } = render(
      <AtSearchBar value='value' />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtSearchBar -- props placeholder', () => {
    const { container: componetContainer } = render(
      <AtSearchBar placeholder='placeholder' />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtSearchBar -- props maxLength', () => {
    const { container: componetContainer } = render(
      <AtSearchBar maxLength={120} />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtSearchBar -- props fixed', () => {
    const { container: componetContainer } = render(<AtSearchBar fixed />)
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtSearchBar -- props focus', () => {
    const { container: componetContainer } = render(<AtSearchBar focus />)
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtSearchBar -- props disabled', () => {
    const { container: componetContainer } = render(<AtSearchBar disabled />)
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtSearchBar -- props showActionButton', () => {
    const { container: componetContainer } = render(
      <AtSearchBar showActionButton />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtSearchBar -- props actionName', () => {
    const { container: componetContainer } = render(
      <AtSearchBar actionName='actionName' />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtSearchBar -- props inputType number', () => {
    const { container: componetContainer } = render(
      <AtSearchBar inputType='number' />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })
})
