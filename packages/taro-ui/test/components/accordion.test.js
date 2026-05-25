import { View } from '@tarojs/components'
import React from 'react'
import { render } from '@testing-library/react'
import AtAccordion from '../../lib/components/accordion'

describe('AtAccordion Snap', () => {
  it('render initial AtAccordion', () => {
    const { container } = render(<AtAccordion />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtAccordion -- props title', () => {
    const { container } = render(<AtAccordion title='title' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtAccordion -- props open', () => {
    const { container } = render(<AtAccordion open />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtAccordion -- props icon', () => {
    const { container } = render(
      <AtAccordion icon={{ value: 'chevron-down', color: 'red' }}>
        <View></View>
      </AtAccordion>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
  it('render AtIcon -- props icon prefixClass', () => {
    const { container } = render(
      <AtAccordion
        icon={{ prefixClass: 'prefixClass', value: 'star', color: 'red' }}
      >
        <View></View>
      </AtAccordion>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtAccordion -- props note', () => {
    const { container } = render(
      <AtAccordion note='note'>
        <View></View>
      </AtAccordion>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
