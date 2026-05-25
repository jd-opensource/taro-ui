import classnames from 'classnames'
import dayjs, { Dayjs } from 'dayjs'
import React from 'react'
import { Picker, Text, View } from '@tarojs/components'
import { AtCalendarControllerProps } from '../../../../types/calendar'

function AtCalendarController({
  generateDate,
  minDate,
  maxDate,
  monthFormat,
  hideArrow,
  onPreMonth,
  onNextMonth,
  onSelectDate
}: AtCalendarControllerProps): JSX.Element {
  const dayjsDate: Dayjs = dayjs(generateDate)
  const dayjsMinDate: Dayjs | boolean = !!minDate && dayjs(minDate)
  const dayjsMaxDate: Dayjs | boolean = !!maxDate && dayjs(maxDate)

  const isMinMonth: boolean =
    dayjsMinDate && dayjsMinDate.startOf('month').isSame(dayjsDate)

  const isMaxMonth: boolean =
    dayjsMaxDate && dayjsMaxDate.startOf('month').isSame(dayjsDate)

  const minDateValue: string = dayjsMinDate
    ? dayjsMinDate.format('YYYY-MM')
    : ''
  const maxDateValue: string = dayjsMaxDate
    ? dayjsMaxDate.format('YYYY-MM')
    : ''

  return (
    <View className='at-calendar__controller controller'>
      {hideArrow ? null : (
        <View
          className={classnames('controller__arrow controller__arrow--left', {
            'controller__arrow--disabled': isMinMonth
          })}
          onClick={() =>
            (onPreMonth as (monthDisabled?: boolean) => void)(isMinMonth)
          }
        />
      )}
      <Picker
        mode='date'
        fields='month'
        end={maxDateValue}
        start={minDateValue}
        onChange={onSelectDate}
        value={dayjsDate.format('YYYY-MM')}
      >
        <Text className='controller__info'>
          {dayjsDate.format(monthFormat)}
        </Text>
      </Picker>
      {hideArrow ? null : (
        <View
          className={classnames('controller__arrow controller__arrow--right', {
            'controller__arrow--disabled': isMaxMonth
          })}
          onClick={() =>
            (onNextMonth as (monthDisabled?: boolean) => void)(isMaxMonth)
          }
        />
      )}
    </View>
  )
}

export default AtCalendarController
