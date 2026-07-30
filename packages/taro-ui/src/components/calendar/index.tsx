import classnames from 'classnames'
import dayjs, { Dayjs } from 'dayjs'
import React, { useEffect, useRef, useState } from 'react'
import { View } from '@tarojs/components'
import { BaseEventOrig } from '@tarojs/components/types/common'
import {
  AtCalendarProps,
  AtCalendarPropsWithDefaults,
  AtCalendarState,
  Calendar
} from '../../../types/calendar'
import { useComponentLocale } from '../../hooks/useComponentLocale'
import AtCalendarBody from './body/index'
import AtCalendarController from './controller/index'

function AtCalendar(props: AtCalendarProps): JSX.Element {
  const calendarLocale = useComponentLocale('Calendar')
  const {
    validDates = [],
    marks = [],
    isSwiper = true,
    hideArrow = false,
    isVertical = false,
    selectedDates = [],
    isMultiSelect = false,
    format = 'YYYY-MM-DD',
    currentDate = Date.now(),
    monthFormat,
    minDate,
    maxDate,
    disabledDate,
    className,
    onMonthChange,
    onClickPreMonth,
    onClickNextMonth,
    onDayClick,
    onSelectDate,
    onDayLongClick
  } = props as AtCalendarPropsWithDefaults
  const resolvedMonthFormat = monthFormat ?? calendarLocale.monthFormat
  const getSelectedDate = (
    start: number,
    end?: number
  ): Calendar.SelectedDate => {
    const stateValue: Calendar.SelectedDate = {
      start,
      end: start
    }

    if (typeof end !== 'undefined') {
      stateValue.end = end
    }

    return stateValue
  }

  const getInitializeState = (
    date: Calendar.DateArg | Calendar.SelectedDate,
    multiSelect?: boolean
  ): AtCalendarState => {
    let end: number
    let start: number
    let generateDateValue: number

    if (!date) {
      const dayjsStart = dayjs()
      start = dayjsStart.startOf('day').valueOf()
      generateDateValue = dayjsStart.startOf('month').valueOf()
      return {
        generateDate: generateDateValue,
        selectedDate: {
          start: ''
        }
      }
    }

    if (multiSelect) {
      const { start: cStart, end: cEnd } = date as Calendar.SelectedDate

      const dayjsStart = dayjs(cStart)

      start = dayjsStart.startOf('day').valueOf()
      generateDateValue = dayjsStart.startOf('month').valueOf()

      end = cEnd ? dayjs(cEnd).startOf('day').valueOf() : start
    } else {
      const dayjsStart = dayjs(date as Calendar.DateArg)

      start = dayjsStart.startOf('day').valueOf()
      generateDateValue = dayjsStart.startOf('month').valueOf()

      end = start
    }

    return {
      generateDate: generateDateValue,
      selectedDate: getSelectedDate(start, end)
    }
  }

  const [generateDate, setGenerateDate] = useState<number>(
    () => getInitializeState(currentDate, isMultiSelect).generateDate
  )
  const [selectedDate, setSelectedDate] = useState<Calendar.SelectedDate>(
    () => getInitializeState(currentDate, isMultiSelect).selectedDate
  )

  const prevCurrentDateRef = useRef(currentDate)
  const prevIsMultiSelectRef = useRef(isMultiSelect)

  useEffect(() => {
    if (!currentDate || currentDate === prevCurrentDateRef.current) {
      prevCurrentDateRef.current = currentDate
      prevIsMultiSelectRef.current = isMultiSelect
      return
    }

    if (isMultiSelect && prevIsMultiSelectRef.current) {
      const { start, end } = currentDate as Calendar.SelectedDate
      const { start: preStart, end: preEnd } =
        prevCurrentDateRef.current as Calendar.SelectedDate

      if (start === preStart && preEnd === end) {
        prevCurrentDateRef.current = currentDate
        prevIsMultiSelectRef.current = isMultiSelect
        return
      }
    }

    const stateValue = getInitializeState(currentDate, isMultiSelect)

    setGenerateDate(stateValue.generateDate)
    setSelectedDate(stateValue.selectedDate)
    prevCurrentDateRef.current = currentDate
    prevIsMultiSelectRef.current = isMultiSelect
  }, [currentDate, isMultiSelect])

  const triggerChangeDate = (value: Dayjs): void => {
    if (typeof onMonthChange !== 'function') return

    onMonthChange(value.format(format))
  }

  const setMonth = (vectorCount: number): void => {
    const _generateDate: Dayjs = dayjs(generateDate).add(vectorCount, 'month')
    const nextGenerateDate = _generateDate.valueOf()

    setGenerateDate(nextGenerateDate)

    if (vectorCount && typeof onMonthChange === 'function') {
      onMonthChange(_generateDate.format(format))
    }
  }

  const handleClickPreMonth = (isMinMonth?: boolean): void => {
    if (isMinMonth === true) {
      return
    }

    setMonth(-1)

    if (typeof onClickPreMonth === 'function') {
      onClickPreMonth()
    }
  }

  const handleClickNextMonth = (isMaxMonth?: boolean): void => {
    if (isMaxMonth === true) {
      return
    }

    setMonth(1)

    if (typeof onClickNextMonth === 'function') {
      onClickNextMonth()
    }
  }

  const handleSelectDate = (e: BaseEventOrig<{ value: string }>): void => {
    const { value } = e.detail

    const _generateDate: Dayjs = dayjs(value)
    const _generateDateValue: number = _generateDate.valueOf()

    if (generateDate === _generateDateValue) return

    triggerChangeDate(_generateDate)
    setGenerateDate(_generateDateValue)
  }

  const notifySelectedDate = (selectDate: Calendar.SelectedDate): void => {
    if (typeof onSelectDate === 'function') {
      const info: Calendar.SelectedDate = {
        start: dayjs(selectDate.start).format(format)
      }

      if (selectDate.end) {
        info.end = dayjs(selectDate.end).format(format)
      }

      onSelectDate({
        value: info
      })
    }
  }

  const getSingleSelectdState = (
    value: Dayjs,
    currentGenerateDate: number
  ): Partial<AtCalendarState> => {
    const stateValue: Partial<AtCalendarState> = {
      selectedDate: getSelectedDate(value.valueOf())
    }

    const dayjsGenerateDate: Dayjs = value.startOf('month')
    const generateDateValue: number = dayjsGenerateDate.valueOf()

    if (generateDateValue !== currentGenerateDate) {
      triggerChangeDate(dayjsGenerateDate)
      stateValue.generateDate = generateDateValue
    }

    return stateValue
  }

  const isDateDisabled = (date: Dayjs): boolean => {
    const day = date.startOf('day')
    if (minDate && day.isBefore(dayjs(minDate).startOf('day'))) return true
    if (maxDate && day.isAfter(dayjs(maxDate).startOf('day'))) return true
    if (validDates && validDates.length > 0) {
      const included = validDates.some(d =>
        dayjs(d.value).startOf('day').isSame(day)
      )
      if (!included) return true
    }
    if (typeof disabledDate === 'function' && disabledDate(day)) return true
    return false
  }

  const rangeHasDisabledDate = (
    startUnix: number,
    endUnix: number
  ): boolean => {
    let cursor = dayjs(Math.min(startUnix, endUnix)).startOf('day')
    const end = dayjs(Math.max(startUnix, endUnix)).startOf('day')
    while (cursor.isBefore(end) || cursor.isSame(end)) {
      if (isDateDisabled(cursor)) return true
      cursor = cursor.add(1, 'day')
    }
    return false
  }

  const getMultiSelectedState = (
    value: Dayjs,
    currentSelectedDate: Calendar.SelectedDate
  ): Pick<AtCalendarState, 'selectedDate'> => {
    const { end, start } = currentSelectedDate

    const valueUnix: number = value.valueOf()
    const state: Pick<AtCalendarState, 'selectedDate'> = {
      selectedDate: currentSelectedDate
    }

    if (end) {
      state.selectedDate = getSelectedDate(valueUnix, 0)
    } else {
      const nextStart = Math.min(valueUnix, +start)
      const nextEnd = Math.max(valueUnix, +start)
      // 多选区间不得跨越不可选日期
      if (rangeHasDisabledDate(nextStart, nextEnd)) {
        state.selectedDate = getSelectedDate(valueUnix, 0)
      } else {
        state.selectedDate = {
          ...currentSelectedDate,
          end: nextEnd,
          start: nextStart
        }
      }
    }

    return state
  }

  const handleDayClick = (item: Calendar.Item): void => {
    const { isDisabled, value } = item

    if (isDisabled) return

    const dayjsDate: Dayjs = dayjs(value)

    let stateValue: Partial<AtCalendarState> = {}

    if (isMultiSelect) {
      stateValue = getMultiSelectedState(dayjsDate, selectedDate)
    } else {
      stateValue = getSingleSelectdState(dayjsDate, generateDate)
    }

    if (stateValue.generateDate != null) {
      setGenerateDate(stateValue.generateDate)
    }
    if (stateValue.selectedDate != null) {
      setSelectedDate(stateValue.selectedDate)
      notifySelectedDate(stateValue.selectedDate)
    }

    if (typeof onDayClick === 'function') {
      onDayClick({ value: item.value })
    }
  }

  const handleDayLongClick = (item: Calendar.Item): void => {
    if (typeof onDayLongClick === 'function') {
      onDayLongClick({ value: item.value })
    }
  }

  return (
    <View className={classnames('at-calendar', className)}>
      <AtCalendarController
        minDate={minDate}
        maxDate={maxDate}
        hideArrow={hideArrow}
        monthFormat={resolvedMonthFormat}
        generateDate={generateDate}
        onPreMonth={handleClickPreMonth}
        onNextMonth={handleClickNextMonth}
        onSelectDate={handleSelectDate}
      />
      <AtCalendarBody
        validDates={validDates}
        marks={marks}
        format={format}
        minDate={minDate}
        maxDate={maxDate}
        disabledDate={disabledDate}
        isSwiper={isSwiper}
        isVertical={isVertical}
        selectedDate={selectedDate}
        selectedDates={selectedDates}
        generateDate={generateDate}
        onDayClick={handleDayClick}
        onSwipeMonth={setMonth}
        onLongClick={handleDayLongClick}
      />
    </View>
  )
}

export default AtCalendar
