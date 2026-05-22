const React = require('react')

function normalizeStyle(style) {
  if (!style || typeof style === 'string') {
    return undefined
  }
  return style
}

function createHostComponent(tag, options = {}) {
  const Comp = React.forwardRef(function HostComponent(
    {
      children,
      className,
      onClick,
      onChange,
      onTouchStart,
      onTouchMove,
      onTouchEnd,
      style,
      checked,
      disabled,
      value,
      ...rest
    },
    ref
  ) {
    const normalizedStyle = normalizeStyle(style)

    if (options.input) {
      return React.createElement(tag, {
        ref,
        className,
        onClick,
        onChange,
        onTouchStart,
        onTouchMove,
        onTouchEnd,
        style: normalizedStyle,
        checked,
        disabled,
        value,
        type: rest.type || tag === 'textarea' ? undefined : 'text',
        ...rest
      })
    }

    return React.createElement(
      tag,
      {
        ref,
        className,
        onClick,
        onChange,
        onTouchStart,
        onTouchMove,
        onTouchEnd,
        style: normalizedStyle,
        ...rest
      },
      children
    )
  })
  Comp.displayName = tag
  return Comp
}

const View = createHostComponent('div')
const Text = createHostComponent('span')
const Button = createHostComponent('button')
const Image = ({ src, className, ...rest }) =>
  React.createElement('img', { src, className, alt: '', ...rest })
const Input = createHostComponent('input', { input: true })
const Textarea = createHostComponent('textarea', { input: true })
const ScrollView = createHostComponent('div')
const Slider = createHostComponent('input', { input: true })
const MovableArea = createHostComponent('div')
const MovableView = createHostComponent('div')
const Picker = createHostComponent('div')
const Swiper = createHostComponent('div')
const SwiperItem = createHostComponent('div')
const Form = createHostComponent('form')
const Label = createHostComponent('label')
const OpenData = createHostComponent('div')

function Switch({ checked, onChange, className, onClick, disabled, ...rest }) {
  const emitChange = (nextChecked, nativeEvent) => {
    if (onChange) {
      onChange({
        ...nativeEvent,
        detail: { value: nextChecked, checked: nextChecked }
      })
    }
  }

  return React.createElement('input', {
    type: 'checkbox',
    className,
    checked: !!checked,
    disabled,
    onChange: event => {
      emitChange(event.target.checked, event)
    },
    onClick: event => {
      if (onClick) {
        onClick(event)
      }
    },
    ...rest
  })
}

module.exports = {
  View,
  Text,
  Button,
  Image,
  Input,
  Textarea,
  Switch,
  ScrollView,
  Slider,
  MovableArea,
  MovableView,
  Picker,
  Swiper,
  SwiperItem,
  Form,
  Label,
  OpenData
}
