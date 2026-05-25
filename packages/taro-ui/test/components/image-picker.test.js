import React from 'react'
import { render } from '@testing-library/react'
import AtImagePicker from '../../lib/components/image-picker/index'

describe('AtImagePicker Snap', () => {
  const files = [
    {
      url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
      id: '2121'
    },
    {
      url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
      id: '2122'
    },
    {
      url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
      id: '2121'
    },
    {
      url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
      id: '2121'
    },
    {
      url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
      id: '2121'
    }
  ]
  it('render initial AtImagePicker', () => {
    const { container } = render(<AtImagePicker isTest />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtImagePicker -- props className', () => {
    const { container } = render(<AtImagePicker isTest className='test' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtImagePicker -- props customStyle', () => {
    const { container } = render(
      <AtImagePicker isTest customStyle='color: red' />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtImagePicker -- props files', () => {
    const { container } = render(<AtImagePicker isTest files={files} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtImagePicker -- props length', () => {
    const { container } = render(
      <AtImagePicker isTest length={5} files={files} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtImagePicker -- props mode', () => {
    const { container } = render(
      <AtImagePicker isTest mode='top' files={files} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtImagePicker -- props showAddBtn', () => {
    const { container } = render(
      <AtImagePicker isTest showAddBtn={false} files={files} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtImagePicker -- props multiple', () => {
    const { container } = render(<AtImagePicker isTest multiple />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
