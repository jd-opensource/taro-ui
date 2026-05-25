import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Text, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import Taro from '@tarojs/taro'
import { AtNoticeBarProps } from '../../../types/noticebar'

function AtNoticebar({
  close = false,
  single = false,
  marquee = false,
  speed = 100,
  moreText = '查看详情',
  showMore = false,
  icon = '',
  customStyle = {},
  className,
  children,
  onClose,
  onGotoMore
}: AtNoticeBarProps): JSX.Element | boolean {
  const [show, setShow] = useState(true)
  const [animElemId] = useState(
    () => `J_${Math.ceil(Math.random() * 10e5).toString(36)}`
  )
  const [animationData, setAnimationData] = useState<{
    actions: Record<string, unknown>[]
  }>({
    actions: [{}]
  })
  const [dura, setDura] = useState(0)
  const isWEAPP = Taro.getEnv() === Taro.ENV_TYPE.WEAPP
  const isALIPAY = Taro.getEnv() === Taro.ENV_TYPE.ALIPAY
  const isWEB = Taro.getEnv() === Taro.ENV_TYPE.WEB
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const animElemIdRef = useRef(animElemId)

  const initAnimation = useCallback((): void => {
    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null
      if (isWEB) {
        const elem = document.querySelector(`.${animElemIdRef.current}`)
        if (!elem) return
        const width = elem.getBoundingClientRect().width
        const animDura = width / +speed
        setDura(animDura)
      } else if (isWEAPP || isALIPAY) {
        const query = Taro.createSelectorQuery()
        query
          .select(`.${animElemIdRef.current}`)
          .boundingClientRect()
          .exec(res => {
            const queryRes = res[0]
            if (!queryRes) return
            const { width } = queryRes
            const animDura = width / +speed
            const animation = Taro.createAnimation({
              duration: animDura * 1000,
              timingFunction: 'linear'
            })
            const resetAnimation = Taro.createAnimation({
              duration: 0,
              timingFunction: 'linear'
            })
            const resetOpacityAnimation = Taro.createAnimation({
              duration: 0,
              timingFunction: 'linear'
            })
            const animBody = (): void => {
              resetOpacityAnimation.opacity(0).step()
              setAnimationData(resetOpacityAnimation.export())

              setTimeout(() => {
                resetAnimation.translateX(0).step()
                setAnimationData(resetAnimation.export())
              }, 300)

              setTimeout(() => {
                resetOpacityAnimation.opacity(1).step()
                setAnimationData(resetOpacityAnimation.export())
              }, 600)

              setTimeout(() => {
                animation.translateX(-width).step()
                setAnimationData(animation.export())
              }, 900)
            }
            animBody()
            intervalRef.current = setInterval(animBody, animDura * 1000 + 1000)
          })
      }
    }, 1000)
  }, [isWEB, isWEAPP, isALIPAY, speed])

  useEffect(() => {
    if (!marquee) return
    initAnimation()
  }, [marquee, initAnimation])

  useEffect(() => {
    if (!timeoutRef.current) {
      intervalRef.current && clearInterval(intervalRef.current)
      initAnimation()
    }
  }, [
    children,
    single,
    marquee,
    speed,
    icon,
    close,
    showMore,
    moreText,
    className,
    customStyle,
    initAnimation
  ])

  const handleClose = (event: CommonEvent): void => {
    setShow(false)
    onClose && onClose(event)
  }

  const handleGotoMore = (event: CommonEvent): void => {
    onGotoMore && onGotoMore(event)
  }

  let resolvedShowMore = showMore
  if (!single) resolvedShowMore = false

  const style: Record<string, string> = {}
  const innerClassName = ['at-noticebar__content-inner']
  let resolvedClose = close
  if (marquee) {
    resolvedClose = false
    innerClassName.push(animElemId)
    style['animation-delay'] = '3s'

    if (dura > 0) {
      style['animation-duration'] = `${dura}s`
      style['animation-delay'] = '1s'
    }
  }

  const classObject = {
    'at-noticebar--marquee': marquee,
    'at-noticebar--weapp': marquee && (isWEAPP || isALIPAY),
    'at-noticebar--single': !marquee && single
  }

  const iconClass = ['at-icon']
  if (icon) iconClass.push(`at-icon-${icon}`)

  return (
    show && (
      <View
        className={classNames('at-noticebar', classObject, className)}
        style={customStyle}
      >
        {resolvedClose && (
          <View className='at-noticebar__close' onClick={handleClose}>
            <Text className='at-icon at-icon-close'></Text>
          </View>
        )}
        <View className='at-noticebar__content'>
          {icon && (
            <View className='at-noticebar__content-icon'>
              <Text className={classNames(iconClass, iconClass)}></Text>
            </View>
          )}
          <View className='at-noticebar__content-text'>
            <View
              id={animElemId}
              animation={animationData}
              className={classNames(innerClassName)}
              style={style}
            >
              {children}
            </View>
          </View>
        </View>
        {resolvedShowMore && (
          <View className='at-noticebar__more' onClick={handleGotoMore}>
            <Text className='text'>{moreText}</Text>
            <View className='at-noticebar__more-icon'>
              <Text className='at-icon at-icon-chevron-right'></Text>
            </View>
          </View>
        )}
      </View>
    )
  )
}

AtNoticebar.propTypes = {
  close: PropTypes.bool,
  single: PropTypes.bool,
  marquee: PropTypes.bool,
  speed: PropTypes.number,
  moreText: PropTypes.string,
  showMore: PropTypes.bool,
  icon: PropTypes.string,
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  onClose: PropTypes.func,
  onGotoMore: PropTypes.func
}

export default AtNoticebar
