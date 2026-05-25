import React from 'react'
import { render } from '@testing-library/react'
import AtSlider from '../../lib/components/slider/index'

describe('AtSlider Snap', () => {
  it('render initial AtSlider', () => {
    const { container } = render(<AtSlider />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtSlider -- props value', () => {
    const { container } = render(<AtSlider value={50} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtSlider -- props step', () => {
    const { container } = render(<AtSlider step={1} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtSlider -- props min', () => {
    const { container } = render(<AtSlider min={50} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtSlider -- props max', () => {
    const { container } = render(<AtSlider max={200} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtSlider -- props disabled', () => {
    const { container } = render(<AtSlider disabled />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtSlider -- props activeColor', () => {
    const { container } = render(<AtSlider activeColor='#4285F4' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtSlider -- props backgroundColor', () => {
    const { container } = render(<AtSlider backgroundColor='#BDBDBD' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtSlider -- props blockColor', () => {
    const { container } = render(<AtSlider blockColor='#4285F4' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtSlider -- props blockSize', () => {
    const { container } = render(<AtSlider blockSize={24} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtSlider -- props showValue', () => {
    const { container } = render(<AtSlider showValue />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
