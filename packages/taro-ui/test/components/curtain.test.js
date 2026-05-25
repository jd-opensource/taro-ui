import React from 'react'
import { render } from '@testing-library/react'
import AtCurtain from '../../lib/components/curtain/index'

describe('AtCurtain Snap', () => {
  it('render initial AtCurtain', () => {
    const { container } = render(<AtCurtain />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtCurtain -- props className', () => {
    const { container } = render(<AtCurtain className='test' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtCurtain -- props customStyle', () => {
    const { container } = render(<AtCurtain customStyle='color:red;' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtCurtain -- props isOpened', () => {
    const { container: component0Container } = render(
      <AtCurtain isOpened> test </AtCurtain>
    )
    expect(component0Container.firstChild).toMatchSnapshot()
    const { container: component1Container } = render(
      <AtCurtain isOpened={false}> test </AtCurtain>
    )
    expect(component1Container.firstChild).toMatchSnapshot()
  })

  it('render AtCurtain -- props closeBtnPosition', () => {
    const { container: component0Container } = render(
      <AtCurtain closeBtnPosition='top'> test </AtCurtain>
    )
    expect(component0Container.firstChild).toMatchSnapshot()
    const { container: component1Container } = render(
      <AtCurtain closeBtnPosition='bottoms'> test </AtCurtain>
    )
    expect(component1Container.firstChild).toMatchSnapshot()
  })
})
