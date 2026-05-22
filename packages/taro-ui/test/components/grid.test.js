import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { queryByClass } from '../utils'
import AtGrid from '../../lib/components/grid/index'

const IMAGE_DATA = [
  {
    image:
      'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
    value: '领取中心'
  },
  {
    image:
      'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
    value: '找折扣'
  },
  {
    image:
      'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
    value: '领会员'
  },
  {
    image:
      'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
    value: '新品首发'
  },
  {
    value: '支持Icon',
    iconInfo: {
      size: 30,
      color: 'red',
      value: 'bookmark'
    }
  }
]

const ICON_DATA = [
  {
    icon: 'bell',
    value: '领取中心'
  },
  {
    icon: 'bookmark',
    value: '找折扣'
  },
  {
    icon: 'calendar',
    value: '领会员'
  },
  {
    icon: 'bell',
    value: 'subtract'
  }
]

describe('Grid Snap', () => {
  it('render image Grid', () => {
    const { container } = render(<AtGrid data={IMAGE_DATA} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render no border of image Grid', () => {
    const { container } = render(<AtGrid data={IMAGE_DATA} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render rect image Grid', () => {
    const { container } = render(<AtGrid mode='rect' data={IMAGE_DATA} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render icon Grid', () => {
    const { container } = render(<AtGrid data={ICON_DATA} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render rect icon Grid', () => {
    const { container } = render(<AtGrid mode='rect' data={ICON_DATA} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render rect icon Grid -- props columnNum', () => {
    const { container } = render(
      <AtGrid mode='rect' columnNum={4} data={ICON_DATA} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})

describe('Grid Behavior ', () => {
  it('Grid onClick', () => {
    const onClick = jest.fn()

    const { container } = render(
      <AtGrid mode='rect' columnNum={4} data={ICON_DATA} onClick={onClick} />
    )
    const componentDom = queryByClass(container, 'at-grid')
    const itemDom = componentDom.querySelector('.at-grid-item')

    fireEvent.click(itemDom)
    expect(onClick).toBeCalled()
  })
})
