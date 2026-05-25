import React from 'react'
import { render } from '@testing-library/react'
import AtInput from '../../lib/components/input/index'

describe('AtInput Snap', () => {
  it('render AtInput -- init', () => {
    const { container } = render(<AtInput />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtInput -- props style', () => {
    const { container } = render(<AtInput style='border:none;' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtInput -- props value', () => {
    const { container } = render(<AtInput value='value' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtInput -- props name', () => {
    const { container } = render(<AtInput name='name' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtInput -- props name', () => {
    const { container } = render(<AtInput placeholder='placeholder' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtInput -- props title', () => {
    const { container } = render(<AtInput title='title' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtInput -- props maxlength', () => {
    const { container } = render(<AtInput maxlength='10' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtInput -- props type(number)', () => {
    const { container } = render(<AtInput type='number' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtInput -- props type(password)', () => {
    const { container } = render(<AtInput type='password' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtInput -- props type(idcard)', () => {
    const { container } = render(<AtInput type='idcard' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtInput -- props type(digit)', () => {
    const { container } = render(<AtInput type='digit' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtInput -- props type(phone)', () => {
    const { container } = render(<AtInput type='phone' />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtInput -- props disabled', () => {
    const { container } = render(<AtInput disabled />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtInput -- props border', () => {
    const { container } = render(<AtInput border={false} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtInput -- props editable', () => {
    const { container } = render(<AtInput editable={false} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtInput -- props error', () => {
    const { container } = render(<AtInput error />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtInput -- props clear', () => {
    const { container } = render(<AtInput clear />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('render AtInput -- props required', () => {
    const { container } = render(<AtInput required />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
