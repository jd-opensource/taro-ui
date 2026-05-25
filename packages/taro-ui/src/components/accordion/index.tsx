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
  const [wrapperHeight, setWrapperHeight] = useState(0)
  const [startOpen, setStartOpen] = useState(false)
  const [, setRenderEpoch] = useState(0)
  const prevOpenRef = useRef(open)

  const toggleWithAnimation = (): void => {
    if (!isCompletedRef.current || !isAnimation) return

    isCompletedRef.current = false

    delayQuerySelector(`#at-accordion__body-${componentId}`, 0).then(rect => {
      const height = parseInt(rect[0].height.toString())
      const startHeight = open ? height : 0
      const endHeight = open ? 0 : height
      setStartOpen(false)
      setWrapperHeight(startHeight)
      setTimeout(() => {
        setWrapperHeight(endHeight)
        setTimeout(() => {
          isCompletedRef.current = true
          setRenderEpoch(epoch => epoch + 1)
        }, 700)
      }, 100)
    })
  }

  useLayoutEffect(() => {
    if (prevOpenRef.current !== open) {
      setStartOpen(!!open && !!isAnimation)
      toggleWithAnimation()
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
  const contentStyle: { height?: string } = { height: `${wrapperHeight}px` }

  if (isCompletedRef.current) {
    contentStyle.height = ''
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
