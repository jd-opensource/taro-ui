const React = require('react')

function toCamelCase(prop) {
  return prop.replace(/-([a-z])/g, (_, char) => char.toUpperCase())
}

function parseStyleString(style) {
  const trimmed = style.trim()
  if (!trimmed) {
    return undefined
  }

  const result = {}

  trimmed.split(';').forEach(declaration => {
    const colonIndex = declaration.indexOf(':')
    if (colonIndex === -1) {
      return
    }

    const prop = declaration.slice(0, colonIndex).trim()
    const value = declaration.slice(colonIndex + 1).trim()

    if (prop && value) {
      result[toCamelCase(prop)] = value
    }
  })

  return Object.keys(result).length ? result : undefined
}

function normalizeStyle(style) {
  if (!style) {
    return undefined
  }

  if (typeof style === 'string') {
    return parseStyleString(style)
  }

  if (typeof style === 'object') {
    return style
  }

  return undefined
}

function applyNormalizedStyle(domProps) {
  const normalizedStyle = normalizeStyle(domProps.style)

  if (normalizedStyle !== undefined) {
    domProps.style = normalizedStyle
  } else {
    delete domProps.style
  }
}

const TARO_PROPS = new Set([
  'scrollY',
  'scrollX',
  'scrollTop',
  'scrollLeft',
  'scrollWithAnimation',
  'scrollIntoView',
  'upperThreshold',
  'lowerThreshold',
  'placeholderStyle',
  'placeholderClass',
  'cursorSpacing',
  'confirmType',
  'selectionStart',
  'selectionEnd',
  'adjustPosition',
  'formType',
  'activeColor',
  'backgroundColor',
  'blockSize',
  'blockColor',
  'enableNative',
  'showConfirmBar',
  'showScrollbar',
  'enhanced',
  'enableBackToTop',
  'refresherEnabled',
  'refresherThreshold',
  'refresherDefaultStyle',
  'refresherBackground',
  'refresherTriggered',
  'enableFlex',
  'enablePassive',
  'bounces',
  'fastDeceleration',
  'pagingEnabled',
  'scrollAnchoring',
  'scrollAnimationDuration',
  'usingSticky',
  'associativeContainer',
  'indicatorColor',
  'indicatorActiveColor',
  'displayMultipleItems',
  'skipHiddenItemLayout',
  'easingFunction',
  'previousMargin',
  'nextMargin',
  'snapToEdge',
  'snapToAlignment',
  'mode',
  'lazyLoad',
  'showMenuByLongpress',
  'webp',
  'defaultSource',
  'hoverClass',
  'hoverStartTime',
  'hoverStayTime',
  'hoverStopPropagation',
  'openType',
  'reportSubmit',
  'reportSubmitTimeout',
  'phoneNumberNoQuotaToast',
  'catchMove',
  'inertia',
  'outOfBounds',
  'damping',
  'friction',
  'scaleMin',
  'scaleMax',
  'scaleValue',
  'headerText',
  'rangeKey',
  'customItem',
  'cursor',
  'autoHeight',
  'holdKeyboard',
  'disableDefaultPadding'
])

const STANDARD_EVENTS = new Set([
  'onClick',
  'onChange',
  'onSubmit',
  'onFocus',
  'onBlur',
  'onInput',
  'onKeyDown',
  'onKeyUp',
  'onKeyPress',
  'onMouseDown',
  'onMouseUp',
  'onMouseMove',
  'onMouseEnter',
  'onMouseLeave',
  'onTouchStart',
  'onTouchMove',
  'onTouchEnd',
  'onScroll',
  'onLoad',
  'onError',
  'onAnimationEnd',
  'onTransitionEnd',
  'onDoubleClick'
])

function sanitizeDomProps(props) {
  const domProps = {}

  for (const [key, value] of Object.entries(props)) {
    if (key === 'for') {
      domProps.htmlFor = value
      continue
    }

    if (key === 'maxlength') {
      domProps.maxLength = value
      continue
    }

    if (TARO_PROPS.has(key)) {
      continue
    }

    if (key.startsWith('on') && !STANDARD_EVENTS.has(key)) {
      continue
    }

    if (key === 'password') {
      if (value) {
        domProps.type = 'password'
      }
      continue
    }

    if (key === 'focus') {
      if (value) {
        domProps.autoFocus = true
      }
      continue
    }

    if (key === 'fixed' && value === false) {
      continue
    }

    domProps[key] = value
  }

  return domProps
}

function createHostComponent(tag, options = {}) {
  const Comp = React.forwardRef(function HostComponent(props, ref) {
    const { children, ...rest } = props
    const domProps = sanitizeDomProps(rest, options)
    applyNormalizedStyle(domProps)

    if (options.input) {
      domProps.type = domProps.type || (tag === 'textarea' ? undefined : 'text')
    }

    return React.createElement(tag, { ref, ...domProps }, children)
  })
  Comp.displayName = tag
  return Comp
}

const View = createHostComponent('div')
const Text = createHostComponent('span')
const Button = createHostComponent('button')
const Image = ({ src, className, style, alt, ...rest }) => {
  const domProps = sanitizeDomProps({ src, className, style, alt, ...rest })
  applyNormalizedStyle(domProps)
  return React.createElement('img', domProps)
}
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
  const isChecked = !!checked
  const domProps = sanitizeDomProps(
    { className, checked: isChecked, disabled, ...rest },
    { input: true }
  )
  applyNormalizedStyle(domProps)

  const emitChange = (nextChecked, nativeEvent) => {
    if (onChange) {
      onChange({
        ...nativeEvent,
        detail: { value: nextChecked, checked: nextChecked }
      })
    }
  }

  return React.createElement('input', {
    ...domProps,
    type: 'checkbox',
    onChange: event => {
      if (disabled) {
        return
      }
      emitChange(event.target.checked, event)
    },
    onClick: event => {
      if (onClick) {
        onClick(event)
      }
      if (disabled) {
        return
      }
      // fireEvent.click in jsdom does not reliably toggle checkbox / fire change
      event.preventDefault()
      emitChange(!isChecked, event)
    }
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
