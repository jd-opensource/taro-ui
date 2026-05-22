import React from 'react'
import { render } from '@testing-library/react'
import AtTimeline from '../../lib/components/timeline/index'

describe('AtTimeline Snap', () => {
  it('render AtNoticebar -- props pending', () => {
    const { container } = render(
      <AtTimeline
        pending
        items={[
          { title: '刷牙洗脸' },
          { title: '吃早餐' },
          { title: '上班' },
          { title: '睡觉' }
        ]}
      ></AtTimeline>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtNoticebar -- props items', () => {
    const { container } = render(
      <AtTimeline
        items={[
          { title: '刷牙洗脸' },
          { title: '吃早餐' },
          { title: '上班' },
          { title: '睡觉' }
        ]}
      ></AtTimeline>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtNoticebar -- props item.color', () => {
    const { container } = render(
      <AtTimeline
        items={[
          { title: '刷牙洗脸' },
          { title: '吃早餐', color: 'green' },
          { title: '上班', color: 'red' },
          { title: '睡觉', color: 'yellow' }
        ]}
      ></AtTimeline>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtNoticebar -- props item.icon', () => {
    const { container } = render(
      <AtTimeline
        items={[
          { title: '刷牙洗脸', icon: 'check-circle' },
          { title: '吃早餐', icon: 'clock' },
          { title: '上班', icon: 'clock' },
          { title: '睡觉', icon: 'clock' }
        ]}
      ></AtTimeline>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtNoticebar -- props item.content', () => {
    const { container } = render(
      <AtTimeline
        pending
        items={[
          { title: '刷牙洗脸', content: ['大概8:00'], icon: 'check-circle' },
          {
            title: '吃早餐',
            content: ['牛奶+面包', '餐后记得吃药'],
            icon: 'clock'
          },
          {
            title: '上班',
            content: ['查看邮件', '写PPT', '发送PPT给领导'],
            icon: 'clock'
          },
          { title: '睡觉', content: ['不超过23:00'], icon: 'clock' }
        ]}
      ></AtTimeline>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
