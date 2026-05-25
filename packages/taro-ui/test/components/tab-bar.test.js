import React from 'react'
import { render } from '@testing-library/react'
import AtTabBar from '../../lib/components/tab-bar/index'

describe('AtTabBar Snap', () => {
  const tabList = [
    { title: '待办事项', iconType: 'bullet-list', text: 'new' },
    { title: '拍照', iconType: 'camera' },
    { title: '文件夹', iconType: 'folder', text: '100', max: '99' },
    {
      title: '领取中心',
      image:
        'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
      selectedImage:
        'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
      text: 'new'
    }
  ]

  it('render initial AtTabBar', () => {
    const { container: componetContainer } = render(<AtTabBar />)
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtTabBar -- props customStyle', () => {
    const { container: componetContainer } = render(
      <AtTabBar customStyle='color:red;' />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtTabBar -- props className', () => {
    const { container: componetContainer } = render(
      <AtTabBar className='test' />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtTabBar -- props fixed', () => {
    const { container: componetContainer } = render(<AtTabBar fixed />)
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtTabBar -- props backgroundColor', () => {
    const { container: componetContainer } = render(
      <AtTabBar backgroundColor='red' />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtTabBar -- props tabList', () => {
    const { container: componetContainer } = render(
      <AtTabBar tabList={tabList} />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtTabBar -- props current', () => {
    const { container: componetContainer } = render(
      <AtTabBar current={2} tabList={tabList} />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtTabBar -- props iconSize', () => {
    const { container: componetContainer } = render(
      <AtTabBar iconSize='26' tabList={tabList} />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtTabBar -- props fontSize', () => {
    const { container: componetContainer } = render(
      <AtTabBar fontSize='26' tabList={tabList} />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtTabBar -- props color', () => {
    const { container: componetContainer } = render(
      <AtTabBar color='red' tabList={tabList} />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtTabBar -- props selectedColor', () => {
    const { container: componetContainer } = render(
      <AtTabBar selectedColor='red' tabList={tabList} />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })

  it('render AtTabBar -- props scroll', () => {
    const { container: componetContainer } = render(
      <AtTabBar scroll tabList={tabList} />
    )
    expect(componetContainer.firstChild).toMatchSnapshot()
  })
})
