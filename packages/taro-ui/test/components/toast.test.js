import React from 'react'
import { render, fireEvent, act, waitFor } from '@testing-library/react'
import AtToast from '../../lib/components/toast'

const ICON = 'loading'
const TEXT = '测试数据Text'
const IMAGE = 'http://storage.360buyimg.com/mtd/home/group-21533885306540.png'

const STATUS_ERROR = 'error'
const STATUS_SUCCESS = 'success'
const STATUS_LOADING = 'loading'

describe('Toast Snap', () => {
  it('render initial Toast', () => {
    const { container } = render(<AtToast />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render opened Toast', () => {
    const { container } = render(<AtToast isOpened />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render opened Toast -- props text', () => {
    const { container } = render(<AtToast isOpened text={TEXT} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render opened Toast -- props icon', () => {
    const { container } = render(<AtToast isOpened icon={ICON} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render opened  Toast -- props image', () => {
    const { container } = render(<AtToast isOpened image={IMAGE} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render opened  Toast -- props hasMask', () => {
    const { container } = render(<AtToast isOpened hasMask />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render opened Toast -- props status : success ', () => {
    const { container } = render(<AtToast isOpened status={STATUS_SUCCESS} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render opened Toast -- props status : loading ', () => {
    const { container } = render(<AtToast isOpened status={STATUS_LOADING} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render opened Toast -- props status : error ', () => {
    const { container } = render(<AtToast isOpened status={STATUS_ERROR} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})

describe('Toast Behavior ', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('Toast will close when is clicked && onClose will be called', async () => {
    const onClose = jest.fn()
    const { container } = render(<AtToast isOpened onClose={onClose} />)
    const bodyDom = container.querySelector('.toast-body')

    expect(container.querySelector('.at-toast')).toBeTruthy()
    fireEvent.click(bodyDom)

    await waitFor(() => {
      expect(onClose).toBeCalled()
      expect(container.querySelector('.at-toast')).toBeFalsy()
    })
  })

  it('Toast will close when time over --- default', async () => {
    const { container } = render(<AtToast isOpened />)

    expect(container.querySelector('.at-toast')).toBeTruthy()

    act(() => {
      jest.advanceTimersByTime(3000)
    })

    await waitFor(() => {
      expect(container.querySelector('.at-toast')).toBeFalsy()
    })
  })

  it('Toast will close when time over ', async () => {
    const { container } = render(<AtToast duration={1000} isOpened />)

    expect(container.querySelector('.at-toast')).toBeTruthy()

    act(() => {
      jest.advanceTimersByTime(1000)
    })

    await waitFor(() => {
      expect(container.querySelector('.at-toast')).toBeFalsy()
    })
  })

  it('Toast onClick will be called', async () => {
    const onClick = jest.fn()
    const { container } = render(<AtToast onClick={onClick} isOpened />)
    const bodyDom = container.querySelector('.toast-body')

    expect(container.querySelector('.at-toast')).toBeTruthy()

    fireEvent.click(bodyDom)

    expect(onClick).toBeCalled()
    expect(container.querySelector('.at-toast')).toBeTruthy()
  })
})
