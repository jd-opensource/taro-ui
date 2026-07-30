import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { useLayoutEffect, useRef, useState } from 'react'
import { Text, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { AtAccordionProps } from '../../../types/accordion'
import { delayQuerySelector, uuid } from '../../common/utils'

function AtAccordion({
  open = false,
  customStyle = '',
  className = '',
  title = '',
  note = '',
  icon = { value: '' },
  hasBorder = true,
  isAnimation = true,
  children,
  onClick
}: AtAccordionProps): JSX.Element {
  const isCompletedRef = useRef(true)
  const [componentId] = useState(() => uuid())
  // 使用 null 表示 auto 高度，避免默认 open 时 height:0 触发错误动画
  const [wrapperHeight, setWrapperHeight] = useState<number | null>(null)
  const [startOpen, setStartOpen] = useState(false)
  const [, setRenderEpoch] = useState(0)
  const prevOpenRef = useRef(open)

  const toggleWithAnimation = (wasOpen: boolean): void => {
    if (!isCompletedRef.current || !isAnimation) return

    isCompletedRef.current = false

    delayQuerySelector(`#at-accordion__body-${componentId}`, 0).then(rect => {
      const height = parseInt(rect[0].height.toString()) || 0
      const startHeight = wasOpen ? height : 0
      const endHeight = wasOpen ? 0 : height
      setStartOpen(false)
      setWrapperHeight(startHeight)
      setTimeout(() => {
        setWrapperHeight(endHeight)
        setTimeout(() => {
          isCompletedRef.current = true
          setWrapperHeight(null)
          setRenderEpoch(epoch => epoch + 1)
        }, 700)
      }, 100)
    })
  }

  useLayoutEffect(() => {
    if (prevOpenRef.current !== open) {
      // 仅在「从未展开 → 展开」时标记 startOpen，避免默认 open 首帧误动画
      setStartOpen(!!open && !prevOpenRef.current && !!isAnimation)
      toggleWithAnimation(prevOpenRef.current)
      prevOpenRef.current = open
    }
  }, [open, isAnimation])

  const handleClick = (event: CommonEvent): void => {
    if (!isCompletedRef.current) return

    onClick && onClick(!open, event)
  }

  const rootCls = classNames('at-accordion', className)
  const prefixClass = (icon && icon.prefixClass) || 'at-icon'
  const iconCls = classNames({
    [prefixClass]: true,
    [`${prefixClass}-${icon && icon.value}`]: icon && icon.value,
    'at-accordion__icon': true
  })
  const headerCls = classNames('at-accordion__header', {
    'at-accordion__header--noborder': !hasBorder
  })
  const arrowCls = classNames('at-accordion__arrow', {
    'at-accordion__arrow--folded': !!open
  })
  const contentCls = classNames('at-accordion__content', {
    'at-accordion__content--inactive':
      (!open && isCompletedRef.current) || startOpen
  })
  const iconStyle = {
    color: (icon && icon.color) || '',
    fontSize: (icon && `${icon.size}px`) || ''
  }
  const contentStyle: { height?: string } = {}
  if (!isCompletedRef.current && wrapperHeight !== null) {
    contentStyle.height = `${wrapperHeight}px`
  }

  return (
    <View className={rootCls} style={customStyle}>
      <View className={headerCls} onClick={handleClick}>
        {icon && icon.value && (
          <Text className={iconCls} style={iconStyle}></Text>
        )}
        <View className='at-accordion__info'>
          <View className='at-accordion__info__title'>{title}</View>
          <View className='at-accordion__info__note'>{note}</View>
        </View>
        <View className={arrowCls}>
          <Text className='at-icon at-icon-chevron-down'></Text>
        </View>
      </View>
      <View style={contentStyle} className={contentCls}>
        <View
          id={`at-accordion__body-${componentId}`}
          className='at-accordion__body'
        >
          {children}
        </View>
      </View>
    </View>
  )
}

AtAccordion.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  open: PropTypes.bool,
  isAnimation: PropTypes.bool,
  title: PropTypes.string,
  note: PropTypes.string,
  icon: PropTypes.object,
  hasBorder: PropTypes.bool,
  onClick: PropTypes.func
}

export default AtAccordion
