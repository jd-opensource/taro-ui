import classnames from 'classnames'
import dayjs from 'dayjs'
import React from 'react'
import { Swiper, SwiperItem, View } from '@tarojs/components'
import {
  BaseEventOrig,
  ITouch,
  ITouchEvent
} from '@tarojs/components/types/common'
import {
  AtCalendarBodyListGroup,
  AtCalendarBodyProps,
  AtCalendarBodyState,
  Calendar
} from '../../../../types/calendar'
import { delayQuerySelector } from '../../../common/utils'
import generateCalendarGroup from '../common/helper'
import AtCalendarDateList from '../ui/date-list/index'
import AtCalendarDayList from '../ui/day-list/index'

const ANIMTE_DURATION = 300

const defaultProps: Partial<AtCalendarBodyProps> = {
  marks: [],
  selectedDate: {
    end: Date.now(),
    start: Date.now()
  },
  format: 'YYYY-MM-DD',
  generateDate: Date.now()
}

export default class AtCalendarBody extends React.Component<
  AtCalendarBodyProps,
  Readonly<AtCalendarBodyState>
> {
  static defaultProps: Partial<AtCalendarBodyProps> = defaultProps

  public constructor(props: AtCalendarBodyProps) {
    super(props)
    const {
      disabledDate,
      validDates,
      marks,
      format,
      minDate,
      maxDate,
      generateDate,
      selectedDate,
      selectedDates
    } = props

    this.generateFunc = generateCalendarGroup({
      disabledDate,
      validDates,
      format,
      minDate,
      maxDate,
      marks,
      selectedDates
    })
    const listGroup = this.getGroups(generateDate, selectedDate)

    this.state = {
      listGroup,
      offsetSize: 0,
      isAnimate: false
    }
  }

  public componentDidMount(): void {
    delayQuerySelector('.at-calendar-slider__main').then(res => {
      this.maxWidth = res[0].width
    })
  }

  public UNSAFE_componentWillReceiveProps(
    nextProps: AtCalendarBodyProps
  ): void {
    const {
      disabledDate,
      validDates,
      marks,
      format,
      minDate,
      maxDate,
      generateDate,
      selectedDate,
      selectedDates
    } = nextProps

    this.generateFunc = generateCalendarGroup({
      disabledDate,
      validDates,
      format,
      minDate,
      maxDate,
      marks,
      selectedDates
    })
    const listGroup = this.getGroups(generateDate, selectedDate)

    this.setState({
      offsetSize: 0,
      listGroup
    })
  }

  private changeCount = 0
  private currentSwiperIndex = 1
  private startX = 0
  private swipeStartPoint = 0
  private isPreMonth = false
  private maxWidth = 0
  private isTouching = false

  private generateFunc: (
    generateDate: number,
    selectedDate: Calendar.SelectedDate,
    isShowStatus?: boolean
  ) => Calendar.ListInfo<Calendar.Item>

  private getGroups = (
    generateDate: number,
    selectedDate: Calendar.SelectedDate
  ): AtCalendarBodyListGroup => {
    const dayjsDate = dayjs(generateDate)
    const arr: AtCalendarBodyListGroup = []
    const preList: Calendar.ListInfo<Calendar.Item> = this.generateFunc(
      dayjsDate.subtract(1, 'month').valueOf(),
      selectedDate
    )

    const nowList: Calendar.ListInfo<Calendar.Item> = this.generateFunc(
      generateDate,
      selectedDate,
      true
    )

    const nextList: Calendar.ListInfo<Calendar.Item> = this.generateFunc(
      dayjsDate.add(1, 'month').valueOf(),
      selectedDate
    )

    const preListIndex =
      this.currentSwiperIndex === 0 ? 2 : this.currentSwiperIndex - 1
    const nextListIndex =
      this.currentSwiperIndex === 2 ? 0 : this.currentSwiperIndex + 1

    arr[preListIndex] = preList
    arr[nextListIndex] = nextList
    arr[this.currentSwiperIndex] = nowList

    return arr
  }

  private handleTouchStart = (e: ITouchEvent): void => {
    if (!this.props.isSwiper) {
      return
    }
    this.isTouching = true
    this.startX = e.touches[0].clientX
  }

  private handleTouchMove = (e: ITouchEvent): void => {
    if (!this.props.isSwiper) {
      return
    }
    if (!this.isTouching) return

    const { clientX } = e.touches[0]
    const offsetSize = clientX - this.startX

    this.setState({
      offsetSize
    })
  }

  private animateMoveSlide = (offset: number, callback?: () => void): void => {
    this.setState(
      {
        isAnimate: true
      },
      () => {
        this.setState({
          offsetSize: offset
        })
        setTimeout(() => {
          this.setState(
            {
              isAnimate: false
            },
            () => {
              callback?.()
            }
          )
        }, ANIMTE_DURATION)
      }
    )
  }

  private handleTouchEnd = (): void => {
    if (!this.props.isSwiper) {
      return
    }

    const { offsetSize } = this.state

    this.isTouching = false
    const isRight = offsetSize > 0

    const breakpoint = this.maxWidth / 2
    const absOffsetSize = Math.abs(offsetSize)

    if (absOffsetSize > breakpoint) {
      const res = isRight ? this.maxWidth : -this.maxWidth
      return this.animateMoveSlide(res, () => {
        this.props.onSwipeMonth(isRight ? -1 : 1)
      })
    }
    this.animateMoveSlide(0)
  }

  private handleChange = (
    e: BaseEventOrig<{
      current: number
      source: string
    }>
  ): void => {
    const { current, source } = e.detail

    if (source === 'touch') {
      this.currentSwiperIndex = current
      this.changeCount += 1
    }
  }

  private handleAnimateFinish = (): void => {
    if (this.changeCount > 0) {
      this.props.onSwipeMonth(
        this.isPreMonth ? -this.changeCount : this.changeCount
      )
      this.changeCount = 0
    }
  }

  private handleSwipeTouchStart = (
    e: ITouchEvent & { changedTouches: Array<ITouch> }
  ): void => {
    const { clientY, clientX } = e.changedTouches[0]
    this.swipeStartPoint = this.props.isVertical ? clientY : clientX
  }

  private handleSwipeTouchEnd = (
    e: ITouchEvent & { changedTouches: Array<ITouch> }
  ): void => {
    const { clientY, clientX } = e.changedTouches[0]
    this.isPreMonth = this.props.isVertical
      ? clientY - this.swipeStartPoint > 0
      : clientX - this.swipeStartPoint > 0
  }

  public render(): JSX.Element {
    const { isSwiper } = this.props
    const { isAnimate, offsetSize, listGroup } = this.state

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
                onClick={this.props.onDayClick}
                onLongClick={this.props.onLongClick}
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
          onTouchEnd={this.handleTouchEnd}
          onTouchMove={this.handleTouchMove}
          onTouchStart={this.handleTouchStart}
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
                onClick={this.props.onDayClick}
                onLongClick={this.props.onLongClick}
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
          onChange={this.handleChange}
          vertical={this.props.isVertical}
          onAnimationFinish={this.handleAnimateFinish}
          onTouchEnd={this.handleSwipeTouchEnd}
          onTouchStart={this.handleSwipeTouchStart}
        >
          {listGroup.map((item, key) => (
            <SwiperItem key={key} itemId={key.toString()}>
              <AtCalendarDateList
                list={item.list}
                onClick={this.props.onDayClick}
                onLongClick={this.props.onLongClick}
              />
            </SwiperItem>
          ))}
        </Swiper>
      </View>
    )
  }
}
