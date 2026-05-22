import React from 'react'
import { render, fireEvent, act, waitFor } from '@testing-library/react'
import { View } from '@tarojs/components'
import { queryByClass } from '../utils'
import AtSwipeAction from '../../lib/components/swipe-action/index'

const OPTIONS = [
  {
    text: '取消',
    className: 'cancel',
    style: {
      backgroundColor: '#6190E8'
    }
  },
  {
    text: '确认',
    className: 'confirm',
    style: {
      backgroundColor: '#FF4949'
    }
  }
]

describe('SwipeAction Snap', () => {
  it('render options', () => {
    const { container } = render(
      <AtSwipeAction
        disabled
        autoClose
        options={OPTIONS}
        className='swipe-action--test'
      >
        <View className='normal'>AtSwipeAction 一般使用场景</View>
      </AtSwipeAction>
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('render options -- isOpened', () => {
    const { container } = render(
      <AtSwipeAction
        isOpened
        disabled
        autoClose
        options={OPTIONS}
        className='swipe-action--test'
      >
        <View className='normal'>AtSwipeAction 一般使用场景</View>
      </AtSwipeAction>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})

describe('SwipeAction Behavior', () => {
  it('SwipeAction onClick', async () => {
    const onClick = jest.fn()
    const { container } = render(
      <AtSwipeAction options={OPTIONS} onClick={onClick}>
        <View className='normal'>AtSwipeAction 一般使用场景</View>
      </AtSwipeAction>
    )

    await waitFor(() => {
      expect(
        queryByClass(container, 'at-swipe-action').querySelector(
          '.at-swipe-action__option'
        )
      ).toBeTruthy()
    })

    const optionDom = queryByClass(container, 'at-swipe-action').querySelector(
      '.at-swipe-action__option'
    )
    fireEvent.click(optionDom)
    expect(onClick).toBeCalled()
  })

  it('SwipeAction opens on swipe and calls onOpened', async () => {
    const onOpened = jest.fn()
    const ref = React.createRef()
    render(
      <AtSwipeAction ref={ref} options={OPTIONS} onOpened={onOpened}>
        <View className='normal'>AtSwipeAction 一般使用场景</View>
      </AtSwipeAction>
    )

    await waitFor(() => {
      expect(ref.current.state.maxOffsetSize).toBeGreaterThan(0)
    })

    const maxOffsetSize = ref.current.state.maxOffsetSize

    act(() => {
      ref.current.onChange({ detail: { x: -maxOffsetSize } })
      ref.current.onTouchEnd({})
    })

    expect(onOpened).toBeCalled()
    expect(ref.current.state._isOpened).toBeTruthy()
  })

  it('SwipeAction closes on short swipe and calls onClosed', async () => {
    const onClosed = jest.fn()
    const ref = React.createRef()
    render(
      <AtSwipeAction ref={ref} options={OPTIONS} onClosed={onClosed}>
        <View className='normal'>AtSwipeAction 一般使用场景</View>
      </AtSwipeAction>
    )

    await waitFor(() => {
      expect(ref.current.state.maxOffsetSize).toBeGreaterThan(0)
    })

    act(() => {
      ref.current.onChange({ detail: { x: -1 } })
      ref.current.onTouchEnd({})
    })

    expect(onClosed).toBeCalled()
    expect(ref.current.state._isOpened).toBeFalsy()
  })

  it('SwipeAction autoClose closes after option click', async () => {
    const onClosed = jest.fn()
    const ref = React.createRef()
    const { container } = render(
      <AtSwipeAction ref={ref} autoClose options={OPTIONS} onClosed={onClosed}>
        <View className='normal'>AtSwipeAction 一般使用场景</View>
      </AtSwipeAction>
    )

    await waitFor(() => {
      expect(ref.current.state.maxOffsetSize).toBeGreaterThan(0)
    })

    const maxOffsetSize = ref.current.state.maxOffsetSize

    act(() => {
      ref.current.onChange({ detail: { x: -maxOffsetSize } })
      ref.current.onTouchEnd({})
    })

    const optionDom = queryByClass(container, 'at-swipe-action').querySelector(
      '.at-swipe-action__option'
    )
    fireEvent.click(optionDom)

    expect(onClosed).toBeCalled()
    expect(ref.current.state._isOpened).toBeFalsy()
  })
})
