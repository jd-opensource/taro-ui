import React from 'react'
import { render } from '@testing-library/react'
import AtSteps from '../../lib/components/steps/index'

describe('AtSteps Snap', () => {
  const items1 = [
    {
      title: '步骤一',
      desc: '这里是额外的信息，最多两行',
      icon: {
        value: 'sound',
        activeColor: '#fff',
        inactiveColor: '#78A4FA',
        size: '14'
      }
    },
    {
      title: '步骤二',
      desc: '这里是额外的信息，最多两行',
      icon: {
        value: 'shopping-cart',
        activeColor: '#fff',
        inactiveColor: '#78A4FA',
        size: '14'
      }
    },
    {
      title: '步骤三',
      desc: '这里是额外的信息，最多两行',
      icon: {
        value: 'camera',
        activeColor: '#fff',
        inactiveColor: '#78A4FA',
        size: '14'
      }
    }
  ]

  const items2 = [
    {
      title: '步骤一',
      desc: '这里是额外的信息，最多两行',
      success: true
    },
    {
      title: '步骤二',
      desc: '这里是额外的信息，最多两行'
    },
    {
      title: '步骤三',
      desc: '这里是额外的信息，最多两行',
      error: true
    }
  ]

  it('render initial AtSteps', () => {
    const { container: componetContainer } = render(<AtSteps />)
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtSteps -- props customStyle', () => {
    const { container: componetContainer } = render(
      <AtSteps customStyle='color:red;' />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtSteps -- props className', () => {
    const { container: componetContainer } = render(
      <AtSteps className='test' />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtSteps -- props items', () => {
    const { container: componet1Container } = render(<AtSteps items={items1} />)
    expect(componet1Container.firstChild).toMatchSnapshot()
    const { container: componet2Container } = render(<AtSteps items={items2} />)
    expect(componet2Container.firstChild).toMatchSnapshot()
  })

  it('render AtSteps -- props current', () => {
    const { container: componet1Container } = render(
      <AtSteps items={items1} current={1} />
    )
    expect(componet1Container.firstChild).toMatchSnapshot()
  })
})
