import React from 'react'
import { render } from '@testing-library/react'
import AtCountDown from '../../lib/components/countdown/index'

describe('AtCountDown Snap', () => {
  it('render initial AtCountDown', () => {
    const { container } = render(<AtCountDown />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtCountDown -- props className', () => {
    const { container } = render(<AtCountDown className='test' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtCountDown -- props className', () => {
    const { container } = render(<AtCountDown customStyle='color:red;' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtCountDown -- props isCard', () => {
    const { container } = render(<AtCountDown isCard />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtCountDown -- props format', () => {
    const { container } = render(
      <AtCountDown format={{ hours: ':', minutes: ':', seconds: '' }} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtCountDown -- props day', () => {
    const { container } = render(<AtCountDown day={1} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtCountDown -- props hours', () => {
    const { container } = render(<AtCountDown hours={1} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtCountDown -- props format', () => {
    const { container } = render(<AtCountDown minutes={1} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtCountDown -- props seconds', () => {
    const { container } = render(<AtCountDown seconds={1} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtCountDown -- props isShowDay', () => {
    const { container } = render(<AtCountDown isShowDay />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtCountDown -- hours > 24 and show day', () => {
    const { container } = render(<AtCountDown isShowDay hours={25} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtCountDown -- hours > 24 and not show day', () => {
    const { container } = render(<AtCountDown isShowDay={false} hours={25} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
