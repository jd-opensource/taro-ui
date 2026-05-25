import React from 'react'
import { render } from '@testing-library/react'

export function renderSnapshot(ui) {
  const { container } = render(ui)
  return container.innerHTML
}

export function queryByClass(container, className) {
  return container.querySelector(`.${className}`)
}

export function renderWithRef(ui) {
  const ref = React.createRef()
  const result = render(React.cloneElement(ui, { ref }))
  return { ...result, ref, instance: ref.current }
}
