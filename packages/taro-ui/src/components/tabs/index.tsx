import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { useEffect, useRef, useState } from 'react'
import { ScrollView, View } from '@tarojs/components'
import { CommonEvent, ITouchEvent } from '@tarojs/components/types/common'
import Taro from '@tarojs/taro'
import { AtTabsProps } from '../../../types/tabs'
import { isTest, mergeStyle, uuid } from '../../common/utils'

const ENV = Taro.getEnv()
const MIN_DISTANCE = 100
const MAX_INTERVAL = 10

function AtTabs({
  customStyle = '',
  className = '',
  tabDirection = 'horizontal',
  height = '',
  current = 0,
  swipeable = true,
  scroll = false,
  animated = true,
  tabList = [],
  onClick,
  children
}: AtTabsProps): JSX.Element {
  const tabIdRef = useRef(isTest() ? 'tabs-AOTU2018' : uuid())
  const touchDotRef = useRef(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const intervalRef = useRef(0)
  const isMovingRef = useRef(false)
  const tabHeaderRef = useRef<any>(null)

  const [scrollState, setScrollState] = useState({
    _scrollLeft: 0,
    _scrollTop: 0,
    _scrollIntoView: ''
  })

  const getTabHeaderRef = (): void => {
    if (ENV === Taro.ENV_TYPE.WEB) {
      tabHeaderRef.current = document.getElementById(tabIdRef.current)
    }
  }

  const updateState = (idx: number): void => {
    if (scroll) {
      switch (ENV) {
        case Taro.ENV_TYPE.WEAPP:
        case Taro.ENV_TYPE.ALIPAY:
        case Taro.ENV_TYPE.SWAN: {
          const index = Math.max(idx - 1, 0)
          setScrollState(prev => ({
            ...prev,
            _scrollIntoView: `tab${tabIdRef.current}${index}`
          }))
          break
        }
        case Taro.ENV_TYPE.WEB: {
          const index = Math.max(idx - 1, 0)
          const prevTabItem = tabHeaderRef.current?.children[index]
          prevTabItem &&
            setScrollState(prev => ({
              ...prev,
              _scrollTop: prevTabItem.offsetTop,
              _scrollLeft: prevTabItem.offsetLeft
            }))
          break
        }
        default: {
          console.warn('AtTab 组件在该环境还未适配')
          break
        }
      }
    }
  }

  const handleClick = (index: number, event: CommonEvent): void => {
    onClick && onClick(index, event)
  }

  const handleTouchStart = (e: ITouchEvent): void => {
    if (!swipeable || tabDirection === 'vertical') return
    touchDotRef.current = e.touches[0].pageX
    timerRef.current = setInterval(() => {
      intervalRef.current++
    }, 100)
  }

  const handleTouchMove = (e: ITouchEvent): void => {
    if (!swipeable || tabDirection === 'vertical') return

    const touchMove = e.touches[0].pageX
    const moveDistance = touchMove - touchDotRef.current
    const maxIndex = tabList.length

    if (
      !isMovingRef.current &&
      intervalRef.current < MAX_INTERVAL &&
      touchDotRef.current > 20
    ) {
      if (current + 1 < maxIndex && moveDistance <= -MIN_DISTANCE) {
        isMovingRef.current = true
        handleClick(current + 1, e)
      } else if (current - 1 >= 0 && moveDistance >= MIN_DISTANCE) {
        isMovingRef.current = true
        handleClick(current - 1, e)
      }
    }
  }

  const handleTouchEnd = (): void => {
    if (!swipeable || tabDirection === 'vertical') return

    timerRef.current && clearInterval(timerRef.current)
    intervalRef.current = 0
    isMovingRef.current = false
  }

  useEffect(() => {
    getTabHeaderRef()
    updateState(current)
    return () => {
      tabHeaderRef.current = null
    }
    // componentDidMount / componentWillUnmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const prevScrollRef = useRef(scroll)
  const prevCurrentRef = useRef(current)
  const isMountRef = useRef(true)
  useEffect(() => {
    if (isMountRef.current) {
      isMountRef.current = false
      return
    }
    if (scroll !== prevScrollRef.current) {
      getTabHeaderRef()
      prevScrollRef.current = scroll
    }
    if (current !== prevCurrentRef.current) {
      updateState(current)
      prevCurrentRef.current = current
    }
  }, [scroll, current])

  const { _scrollLeft, _scrollTop, _scrollIntoView } = scrollState

  const heightStyle = { height }
  const underlineStyle = {
    height: tabDirection === 'vertical' ? `${tabList.length * 100}%` : '1PX',
    width: tabDirection === 'horizontal' ? `${tabList.length * 100}%` : '1PX'
  }
  const bodyStyle: React.CSSProperties = {}
  let transformStyle = `translate3d(0px, -${current * 100}%, 0px)`
  if (tabDirection === 'horizontal') {
    transformStyle = `translate3d(-${current * 100}%, 0px, 0px)`
  }
  Object.assign(bodyStyle, {
    transform: transformStyle
  })
  if (!animated) {
    bodyStyle.transition = 'unset'
  }

  const tabItems = tabList.map((item, idx) => {
    const itemCls = classNames({
      'at-tabs__item': true,
      'at-tabs__item--active': current === idx
    })

    return (
      <View
        className={itemCls}
        id={`tab${tabIdRef.current}${idx}`}
        key={`at-tabs-item-${idx}`}
        onClick={(event: CommonEvent) => handleClick(idx, event)}
      >
        {item.title}
        <View className='at-tabs__item-underline'></View>
      </View>
    )
  })
  const rootCls = classNames(
    {
      'at-tabs': true,
      'at-tabs--scroll': scroll,
      [`at-tabs--${tabDirection}`]: true,
      [`at-tabs--${ENV}`]: true
    },
    className
  )
  const scrollX = tabDirection === 'horizontal'
  const scrollY = tabDirection === 'vertical'

  return (
    <View className={rootCls} style={mergeStyle(heightStyle, customStyle)}>
      {scroll ? (
        <ScrollView
          id={tabIdRef.current}
          className='at-tabs__header'
          style={heightStyle}
          scrollX={scrollX}
          scrollY={scrollY}
          scrollWithAnimation
          scrollLeft={_scrollLeft}
          scrollTop={_scrollTop}
          scrollIntoView={_scrollIntoView}
        >
          {tabItems}
        </ScrollView>
      ) : (
        <View id={tabIdRef.current} className='at-tabs__header'>
          {tabItems}
        </View>
      )}
      <View
        className='at-tabs__body'
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        style={mergeStyle(bodyStyle, heightStyle)}
      >
        <View className='at-tabs__underline' style={underlineStyle}></View>
        {children}
      </View>
    </View>
  )
}

AtTabs.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  height: PropTypes.string,
  tabDirection: PropTypes.oneOf(['horizontal', 'vertical']),
  current: PropTypes.number,
  swipeable: PropTypes.bool,
  scroll: PropTypes.bool,
  animated: PropTypes.bool,
  tabList: PropTypes.array,
  onClick: PropTypes.func
}

export default AtTabs
