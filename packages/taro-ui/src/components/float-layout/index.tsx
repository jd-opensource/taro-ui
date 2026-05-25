import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { useEffect, useRef, useState } from 'react'
import { ScrollView, Text, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { AtFloatLayoutProps } from '../../../types/float-layout'
import { handleTouchScroll } from '../../common/utils'

function AtFloatLayout({
  title = '',
  isOpened = false,
  scrollY = true,
  scrollX = false,
  scrollWithAnimation = false,
  scrollTop,
  scrollLeft,
  upperThreshold,
  lowerThreshold,
  className,
  children,
  onClose,
  onScroll,
  onScrollToLower,
  onScrollToUpper
}: AtFloatLayoutProps): JSX.Element {
  const [_isOpened, setIsOpened] = useState(isOpened)
  const prevIsOpenedPropRef = useRef(isOpened)

  useEffect(() => {
    if (prevIsOpenedPropRef.current !== isOpened) {
      handleTouchScroll(isOpened)
      prevIsOpenedPropRef.current = isOpened
    }
    setIsOpened(prev => (isOpened !== prev ? isOpened : prev))
  }, [isOpened])

  const handleClose = (e): void => {
    if (typeof onClose === 'function') {
      onClose(e)
    }
  }

  const close = (e): void => {
    setIsOpened(false)
    handleClose(e)
  }

  const handleTouchMove = (e: CommonEvent): void => {
    e.stopPropagation()
  }

  const rootClass = classNames(
    'at-float-layout',
    {
      'at-float-layout--active': _isOpened
    },
    className
  )

  return (
    <View className={rootClass} onTouchMove={handleTouchMove}>
      <View onClick={close} className='at-float-layout__overlay' />
      <View className='at-float-layout__container layout'>
        {title ? (
          <View className='layout-header'>
            <Text className='layout-header__title'>{title}</Text>
            <View className='layout-header__btn-close' onClick={close} />
          </View>
        ) : null}
        <View className='layout-body'>
          <ScrollView
            scrollY={scrollY}
            scrollX={scrollX}
            scrollTop={scrollTop}
            scrollLeft={scrollLeft}
            upperThreshold={upperThreshold}
            lowerThreshold={lowerThreshold}
            scrollWithAnimation={scrollWithAnimation}
            onScroll={onScroll}
            onScrollToLower={onScrollToLower}
            onScrollToUpper={onScrollToUpper}
            className='layout-body__content'
          >
            {children}
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

AtFloatLayout.propTypes = {
  title: PropTypes.string,
  isOpened: PropTypes.bool,
  scrollY: PropTypes.bool,
  scrollX: PropTypes.bool,
  scrollTop: PropTypes.number,
  scrollLeft: PropTypes.number,
  upperThreshold: PropTypes.number,
  lowerThreshold: PropTypes.number,
  scrollWithAnimation: PropTypes.bool,
  onClose: PropTypes.func,
  onScroll: PropTypes.func,
  onScrollToLower: PropTypes.func,
  onScrollToUpper: PropTypes.func
}

export default AtFloatLayout
