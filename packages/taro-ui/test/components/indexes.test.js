import React from 'react'
import { render } from '@testing-library/react'
import AtIndexes from '../../lib/components/indexes/index'

describe('AtIndexes Snap', () => {
  it('render initial AtIndexes', () => {
    const { container } = render(<AtIndexes />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtIndexes -- props className', () => {
    const { container } = render(<AtIndexes className='test' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtIndexes -- props customStyle', () => {
    const { container } = render(<AtIndexes customStyle='color:red;' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtIndexes -- props animation', () => {
    const { container } = render(<AtIndexes animation />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtIndexes -- props topKey', () => {
    const { container } = render(<AtIndexes topKey='test' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtIndexes -- props children', () => {
    const { container } = render(<AtIndexes>children</AtIndexes>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtIndexes -- props list', () => {
    const list = [
      {
        title: 'A',
        key: 'A',
        items: [
          {
            name: '阿坝'
          },
          {
            name: '阿里'
          },
          {
            name: '阿拉善左旗'
          },
          {
            name: '阿拉善右旗'
          },
          {
            name: '阿拉善盟'
          },
          {
            name: '阿拉善高新区'
          },
          {
            name: '阿拉善经济开发区'
          }
        ]
      },
      {
        title: 'B',
        key: 'B',
        items: [
          {
            name: '百度'
          },
          {
            name: '白色'
          },
          {
            name: '百强'
          }
        ]
      }
    ]
    const { container } = render(<AtIndexes list={list} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
