import classnames from 'classnames'
import dayjs from 'dayjs'
import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperItem, View } from '@tarojs/components'
import {
  BaseEventOrig,
  ITouch,
  ITouchEvent
} from '@tarojs/components/types/common'
import {
  AtCalendarBodyListGroup,
  AtCalendarBodyProps,
  Calendar
} from '../../../../types/calendar'
import { delayQuerySelector } from '../../../common/utils'
import generateCalendarGroup from '../common/helper'
import AtCalendarDateList from '../ui/date-list/index'
import AtCalendarDayList from '../ui/day-list/index'

const ANIMTE_DURATION = 300

function AtCalendarBody({
  marks = [],
  selectedDate = {
    end: Date.now(),
    start: Date.now()
  },
  format = 'YYYY-MM-DD',
  generateDate = Date.now(),
  validDates,
  minDate,
  maxDate,
  selectedDates,
  isSwiper,
  isVertical,
  onDayClick,
  onLongClick,
  onSwipeMonth
}: AtCalendarBodyProps): JSX.Element {
  const changeCountRef = useRef(0)
  const currentSwiperIndexRef = useRef(1)
  const startXRef = useRef(0)
  const swipeStartPointRef = useRef(0)
  const isPreMonthRef = useRef(false)
  const maxWidthRef = useRef(0)
  const isTouchingRef = useRef(false)

  const generateFuncRef = useRef(
    generateCalendarGroup({
      validDates,
      format,
      minDate,
      maxDate,
      marks,
      selectedDates
    })
  )

  const getGroups = (
    genDate: number,
    selDate: Calendar.SelectedDate
  ): AtCalendarBodyListGroup => {
    const dayjsDate = dayjs(genDate)
    const arr: AtCalendarBodyListGroup = []
    const preList: Calendar.ListInfo<Calendar.Item> = generateFuncRef.current(
      dayjsDate.subtract(1, 'month').valueOf(),
      selDate
    )

    const nowList: Calendar.ListInfo<Calendar.Item> = generateFuncRef.current(
      genDate,
      selDate,
      true
    )

    const nextList: Calendar.ListInfo<Calendar.Item> = generateFuncRef.current(
      dayjsDate.add(1, 'month').valueOf(),
      selDate
    )

    const preListIndex =
      currentSwiperIndexRef.current === 0
        ? 2
        : currentSwiperIndexRef.current - 1
    const nextListIndex =
      currentSwiperIndexRef.current === 2
        ? 0
        : currentSwiperIndexRef.current + 1

    arr[preListIndex] = preList
    arr[nextListIndex] = nextList
    arr[currentSwiperIndexRef.current] = nowList

    return arr
  }

  const [listGroup, setListGroup] = useState<AtCalendarBodyListGroup>(() =>
    getGroups(generateDate, selectedDate)
  )
  const [offsetSize, setOffsetSize] = useState(0)
  const [isAnimate, setIsAnimate] = useState(false)

  useEffect(() => {
    delayQuerySelector('.at-calendar-slider__main').then(res => {
      maxWidthRef.current = res[0].width
    })
  }, [])

  const isMountedRef = useRef(false)

  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true
      return
    }

    generateFuncRef.current = generateCalendarGroup({
      validDates,
      format,
      minDate,
      maxDate,
      marks,
      selectedDates
    })
    const nextListGroup = getGroups(generateDate, selectedDate)

    setOffsetSize(0)
    setListGroup(nextListGroup)
  }, [
    validDates,
    marks,
    format,
    minDate,
    maxDate,
    generateDate,
    selectedDate,
    selectedDates
  ])

  const handleTouchStart = (e: ITouchEvent): void => {
    if (!isSwiper) {
      return
    }
    isTouchingRef.current = true
    startXRef.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: ITouchEvent): void => {
    if (!isSwiper) {
      return
    }
    if (!isTouchingRef.current) return

    const { clientX } = e.touches[0]
    const nextOffsetSize = clientX - startXRef.current

    setOffsetSize(nextOffsetSize)
  }

  const animateMoveSlide = (offset: number, callback?: () => void): void => {
    setIsAnimate(true)
    Promise.resolve().then(() => {
      setOffsetSize(offset)
      setTimeout(() => {
        setIsAnimate(false)
        callback?.()
      }, ANIMTE_DURATION)
    })
  }

  const handleTouchEnd = (): void => {
    if (!isSwiper) {
      return
    }

    isTouchingRef.current = false
    const isRight = offsetSize > 0

    const breakpoint = maxWidthRef.current / 2
    const absOffsetSize = Math.abs(offsetSize)

    if (absOffsetSize > breakpoint) {
      const res = isRight ? maxWidthRef.current : -maxWidthRef.current
      animateMoveSlide(res, () => {
        onSwipeMonth(isRight ? -1 : 1)
      })
      return
    }
    animateMoveSlide(0)
  }

  const handleChange = (
    e: BaseEventOrig<{
      current: number
      source: string
    }>
  ): void => {
    const { current, source } = e.detail

    if (source === 'touch') {
      currentSwiperIndexRef.current = current
      changeCountRef.current += 1
    }
  }

  const handleAnimateFinish = (): void => {
    if (changeCountRef.current > 0) {
      onSwipeMonth(
        isPreMonthRef.current ? -changeCountRef.current : changeCountRef.current
      )
      changeCountRef.current = 0
    }
  }

  const handleSwipeTouchStart = (
    e: ITouchEvent & { changedTouches: Array<ITouch> }
  ): void => {
    const { clientY, clientX } = e.changedTouches[0]
    swipeStartPointRef.current = isVertical ? clientY : clientX
  }

  const handleSwipeTouchEnd = (
    e: ITouchEvent & { changedTouches: Array<ITouch> }
  ): void => {
    const { clientY, clientX } = e.changedTouches[0]
    isPreMonthRef.current = isVertical
      ? clientY - swipeStartPointRef.current > 0
      : clientX - swipeStartPointRef.current > 0
  }

  if (!isSwiper) {
    return (
      <View
        className={classnames(
          'main',
          'at-calendar-slider__main',
          `at-calendar-slider__main--${process.env.TARO_ENV}`
        )}
      >
        <AtCalendarDayList />
        <View className='main__body body'>
          <View className='body__slider body__slider--now'>
            <AtCalendarDateList
              list={listGroup[1].list}
              onClick={onDayClick}
              onLongClick={onLongClick}
            />
          </View>
        </View>
      </View>
    )
  }

  /* 需要 Taro 组件库维护 Swiper 使 小程序 和 H5 的表现保持一致  */
  if (process.env.TARO_ENV === 'h5') {
    return (
      <View
        className={classnames(
          'main',
          'at-calendar-slider__main',
          `at-calendar-slider__main--${process.env.TARO_ENV}`
        )}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        onTouchStart={handleTouchStart}
      >
        <AtCalendarDayList />
        <View
          className={classnames('main__body  body', {
            'main__body--slider': isSwiper,
            'main__body--animate': isAnimate
          })}
          style={{
            transform: isSwiper
              ? `translateX(-100%) translate3d(${offsetSize},0,0)`
              : '',
            WebkitTransform: isSwiper
              ? `translateX(-100%) translate3d(${offsetSize}px,0,0)`
              : ''
          }}
        >
          <View className='body__slider body__slider--pre'>
            <AtCalendarDateList list={listGroup[0].list} />
          </View>
          <View className='body__slider body__slider--now'>
            <AtCalendarDateList
              list={listGroup[1].list}
              onClick={onDayClick}
              onLongClick={onLongClick}
            />
          </View>
          <View className='body__slider body__slider--next'>
            <AtCalendarDateList list={listGroup[2].list} />
          </View>
        </View>
      </View>
    )
  }

  return (
    <View
      className={classnames(
        'main',
        'at-calendar-slider__main',
        `at-calendar-slider__main--${process.env.TARO_ENV}`
      )}
    >
      <AtCalendarDayList />
      <Swiper
        circular
        current={1}
        skipHiddenItemLayout
        className={classnames('main__body')}
        onChange={handleChange}
        vertical={isVertical}
        onAnimationFinish={handleAnimateFinish}
        onTouchEnd={handleSwipeTouchEnd}
        onTouchStart={handleSwipeTouchStart}
      >
        {listGroup.map((item, key) => (
          <SwiperItem key={key} itemId={key.toString()}>
            <AtCalendarDateList
              list={item.list}
              onClick={onDayClick}
              onLongClick={onLongClick}
            />
          </SwiperItem>
        ))}
      </Swiper>
    </View>
  )
}

export default AtCalendarBody
