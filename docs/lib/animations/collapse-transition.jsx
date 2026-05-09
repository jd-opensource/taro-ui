import React from 'react'
const ANIMATION_DURATION = 300

export default class CollapseTransition extends React.Component {
  componentDidMount() {
    this.beforeEnter()
    if (this.props.isShow) {
      this.enter()
    }
  }

  componentWillUnmount() {
    this.beforeLeave()
    this.leave()
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.isShow !== nextProps.isShow) {
      this.triggerChange(nextProps.isShow)
    }
  }

  triggerChange(isShow) {
    clearTimeout(this.enterTimer)
    clearTimeout(this.leaveTimer)
    if (isShow) {
      this.beforeEnter()
      this.enter()
    } else {
      this.beforeLeave()
      this.leave()
    }
  }

  beforeEnter() {
    const el = this.selfRef
    // prepare
    el.dataset.oldPaddingTop = el.style.paddingTop
    el.dataset.oldPaddingBottom = el.style.paddingBottom
    el.dataset.oldOverflow = el.style.overflow
    el.style.height = '0'
    el.style.paddingTop = 0
    el.style.paddingBottom = 0
  }

  enter() {
    const el = this.selfRef
    // start
    el.style.display = 'block'
    if (el.scrollHeight !== 0) {
      el.style.height = `${el.scrollHeight}px`
      el.style.paddingTop = el.dataset.oldPaddingTop
      el.style.paddingBottom = el.dataset.oldPaddingBottom
    } else {
      el.style.height = ''
      el.style.paddingTop = el.dataset.oldPaddingTop
      el.style.paddingBottom = el.dataset.oldPaddingBottom
    }

    el.style.overflow = 'hidden'

    this.enterTimer = setTimeout(() => this.afterEnter(), ANIMATION_DURATION)
  }

  afterEnter() {
    const el = this.selfRef
    el.style.display = 'block'
    el.style.height = ''
    el.style.overflow = el.dataset.oldOverflow
  }

  beforeLeave() {
    const el = this.selfRef
    el.dataset.oldPaddingTop = el.style.paddingTop
    el.dataset.oldPaddingBottom = el.style.paddingBottom
    el.dataset.oldOverflow = el.style.overflow

    el.style.display = 'block'
    if (el.scrollHeight !== 0) {
      el.style.height = `${el.scrollHeight}px`
    }
    el.style.overflow = 'hidden'
  }

  leave() {
    const el = this.selfRef
    if (el.scrollHeight !== 0) {
      el.style.height = 0
      el.style.paddingTop = 0
      el.style.paddingBottom = 0
    }
    this.leaveTimer = setTimeout(() => this.afterLeave(), ANIMATION_DURATION)
  }

  afterLeave() {
    const el = this.selfRef
    if (!el) {
      return
    }

    el.style.display = 'none'
    el.style.height = ''
    el.style.overflow = el.dataset.oldOverflow
    el.style.paddingTop = el.dataset.oldPaddingTop
    el.style.paddingBottom = el.dataset.oldPaddingBottom
  }

  render() {
    return (
      <div
        className='collapse-transition'
        style={{
          overflow: 'hidden'
        }}
        ref={e => {
          this.selfRef = e
        }}
      >
        {this.props.children}
      </div>
    )
  }
}
