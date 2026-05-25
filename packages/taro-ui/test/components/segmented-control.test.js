import React from 'react'
import { render } from '@testing-library/react'
import AtSegmentedControl from '../../lib/components/segmented-control/index'

describe('AtSegmentedControl Snap', () => {
  const values = ['tab1', 'tab2', 'tab3']

  it('render initial AtSegmentedControl', () => {
    const { container: componetContainer } = render(<AtSegmentedControl />)
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtSegmentedControl -- props customStyle', () => {
    const { container: componetContainer } = render(
      <AtSegmentedControl customStyle='color:red;' />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtSegmentedControl -- props className', () => {
    const { container: componetContainer } = render(
      <AtSegmentedControl className='test' />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtSegmentedControl -- props values', () => {
    const { container: componetContainer } = render(
      <AtSegmentedControl values={values} />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtSegmentedControl -- props current', () => {
    const { container: componetContainer } = render(
      <AtSegmentedControl current={2} values={values} />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtSegmentedControl -- props color', () => {
    const { container: componetContainer } = render(
      <AtSegmentedControl color='red' values={values} />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtSegmentedControl -- props fontSize', () => {
    const { container: componetContainer } = render(
      <AtSegmentedControl fontSize='30' values={values} />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtSegmentedControl -- props disabled', () => {
    const { container: componetContainer } = render(
      <AtSegmentedControl disabled values={values} />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtSegmentedControl -- props selectedColor', () => {
    const { container: componetContainer } = render(
      <AtSegmentedControl selectedColor='#fff' values={values} />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })
})
