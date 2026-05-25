import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { queryByClass } from '../utils'
import AtCard from '../../lib/components/card/index'

describe('Card Snap', () => {
  it('render initial Card', () => {
    const { container } = render(
      <AtCard title='这是个标题'>这也是内容区 可以随意定义功能</AtCard>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render Card -- props thumb', () => {
    const { container } = render(
      <AtCard
        title='这是个标题'
        thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
      >
        这也是内容区 可以随意定义功能
      </AtCard>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render Card -- props note', () => {
    const { container } = render(
      <AtCard
        note='小Tips'
        title='这是个标题'
        thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
      >
        这也是内容区 可以随意定义功能
      </AtCard>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render Card -- props extra ', () => {
    const { container } = render(
      <AtCard
        note='小Tips'
        extra='额外信息'
        title='这是个标题'
        thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
      >
        这也是内容区 可以随意定义功能
      </AtCard>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render Card -- props isFull ', () => {
    const { container } = render(
      <AtCard
        isFull
        note='小Tips'
        extra='额外信息'
        title='这是个标题'
        thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
      >
        这也是内容区 可以随意定义功能
      </AtCard>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render Card -- props extraStyle ', () => {
    const { container } = render(
      <AtCard
        isFull
        note='小Tips'
        extra='额外信息'
        title='这是个标题'
        thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
        extraStyle={{ fontSize: '12px', maxWidth: '200px' }}
      >
        这也是内容区 可以随意定义功能
      </AtCard>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})

describe('Card Behavior ', () => {
  it('Card onClick', () => {
    const onClick = jest.fn()

    const { container } = render(
      <AtCard title='这是个标题' onClick={onClick}>
        这也是内容区 可以随意定义功能
      </AtCard>
    )
    const componentDom = queryByClass(container, 'at-card')

    fireEvent.click(componentDom)
    expect(onClick).toBeCalled()
  })
})
