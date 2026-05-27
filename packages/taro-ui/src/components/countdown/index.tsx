import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { View } from '@tarojs/components'
import { useDidHide, useDidShow } from '@tarojs/taro'
import { useComponentLocale } from '../../hooks/useComponentLocale'
import { AtCountDownProps } from '../../../types/countdown'
import AtCountdownItem from './item'

type TimeObject = {
  day: number
  hours: number
  minutes: number
  seconds: number
}

const toSeconds = (
  day: number,
  hours: number,
  minutes: number,
  seconds: number
): number => day * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60 + seconds

function AtCountdown({
  customStyle = '',
  className = '',
  format,
  isCard = false,
  isShowDay = false,
  isShowHour = true,
  isShowMinute = true,
  day = 0,
  hours = 0,
  minutes = 0,
  seconds = 0,
  onTimeUp
}: AtCountDownProps): JSX.Element {
  const locale = useComponentLocale('Countdown')
  const mergedFormat = useMemo(
    () => ({
      day: format?.day ?? locale.day,
      hours: format?.hours ?? locale.hours,
      minutes: format?.minutes ?? locale.minutes,
      seconds: format?.seconds ?? locale.seconds
    }),
    [
      format?.day,
      format?.hours,
      format?.minutes,
      format?.seconds,
      locale.day,
      locale.hours,
      locale.minutes,
      locale.seconds
    ]
  )
  const propsRef = useRef<AtCountDownProps>({
    customStyle,
    className,
    format: mergedFormat,
    isCard,
    isShowDay,
    isShowHour,
    isShowMinute,
    day,
    hours,
    minutes,
    seconds,
    onTimeUp
  })
  const isMountedRef = useRef(false)
  const secondsRef = useRef(toSeconds(day, hours, minutes, seconds))
  const timerRef = useRef<NodeJS.Timeout | number>()

  const calculateTime = useCallback((): TimeObject => {
    let [calcDay, calcHours, calcMinutes, calcSeconds] = [0, 0, 0, 0]

    if (secondsRef.current > 0) {
      calcDay = isShowDay ? Math.floor(secondsRef.current / (60 * 60 * 24)) : 0
      calcHours = isShowHour
        ? Math.floor(secondsRef.current / (60 * 60)) - calcDay * 24
        : 0
      calcMinutes = isShowMinute
        ? Math.floor(secondsRef.current / 60) -
          calcDay * 24 * 60 -
          calcHours * 60
        : 0
      calcSeconds =
        Math.floor(secondsRef.current) -
        calcDay * 24 * 60 * 60 -
        calcHours * 60 * 60 -
        calcMinutes * 60
    }
    return {
      day: calcDay,
      hours: calcHours,
      minutes: calcMinutes,
      seconds: calcSeconds
    }
  }, [isShowDay, isShowHour, isShowMinute])

  const initialTime = calculateTime()
  const [_day, setDay] = useState(initialTime.day)
  const [_hours, setHours] = useState(initialTime.hours)
  const [_minutes, setMinutes] = useState(initialTime.minutes)
  const [_seconds, setSeconds] = useState(initialTime.seconds)

  const clearTimer = useCallback((): void => {
    if (timerRef.current) {
      clearTimeout(timerRef.current as number)
      timerRef.current = 0
    }
  }, [])

  const countdown = useCallback((): void => {
    const {
      day: calcDay,
      hours: calcHours,
      minutes: calcMinutes,
      seconds: calcSeconds
    } = calculateTime()

    setDay(calcDay)
    setHours(calcHours)
    setMinutes(calcMinutes)
    setSeconds(calcSeconds)
    secondsRef.current--

    if (secondsRef.current < 0) {
      clearTimer()
      onTimeUp && onTimeUp()
      return
    }

    timerRef.current = setTimeout(() => {
      countdown()
    }, 1000)
  }, [calculateTime, clearTimer, onTimeUp])

  const setTimer = useCallback((): void => {
    if (!timerRef.current) countdown()
  }, [countdown])

  useEffect(() => {
    propsRef.current = {
      customStyle,
      className,
      format: mergedFormat,
      isCard,
      isShowDay,
      isShowHour,
      isShowMinute,
      day,
      hours,
      minutes,
      seconds,
      onTimeUp
    }
  })

  useEffect(() => {
    const nextProps = {
      customStyle,
      className,
      format: mergedFormat,
      isCard,
      isShowDay,
      isShowHour,
      isShowMinute,
      day,
      hours,
      minutes,
      seconds,
      onTimeUp
    }
    if (!isMountedRef.current) {
      isMountedRef.current = true
      propsRef.current = nextProps
      return
    }
    if (JSON.stringify(propsRef.current) === JSON.stringify(nextProps)) return

    propsRef.current = nextProps
    secondsRef.current = toSeconds(day, hours, minutes, seconds)
    clearTimer()
    setTimer()
  }, [
    customStyle,
    className,
    mergedFormat,
    isCard,
    isShowDay,
    isShowHour,
    isShowMinute,
    day,
    hours,
    minutes,
    seconds,
    onTimeUp,
    clearTimer,
    setTimer
  ])

  useEffect(() => {
    setTimer()
    return () => {
      clearTimer()
    }
  }, [setTimer, clearTimer])

  useDidHide(() => {
    clearTimer()
  })

  useDidShow(() => {
    setTimer()
  })

  return (
    <View
      className={classNames(
        {
          'at-countdown': true,
          'at-countdown--card': isCard
        },
        className
      )}
      style={customStyle}
    >
      {isShowDay && <AtCountdownItem num={_day} separator={mergedFormat.day} />}
      {isShowHour && (
        <AtCountdownItem num={_hours} separator={mergedFormat.hours} />
      )}
      {isShowMinute && (
        <AtCountdownItem num={_minutes} separator={mergedFormat.minutes} />
      )}
      <AtCountdownItem num={_seconds} separator={mergedFormat.seconds} />
    </View>
  )
}

AtCountdown.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  isCard: PropTypes.bool,
  isShowDay: PropTypes.bool,
  isShowHour: PropTypes.bool,
  isShowMinute: PropTypes.bool,
  format: PropTypes.object,
  day: PropTypes.number,
  hours: PropTypes.number,
  minutes: PropTypes.number,
  seconds: PropTypes.number,
  onTimeUp: PropTypes.func
}

export default AtCountdown
