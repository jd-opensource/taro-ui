import React from 'react'
import { View } from '@tarojs/components'
import { useComponentLocale } from '../../../../hooks/useComponentLocale'

function AtCalendarHeader(): JSX.Element {
  const { weekdays } = useComponentLocale('Calendar')

  return (
    <View className='at-calendar__header header'>
      <View className='header__flex'>
        {weekdays.map(weekday => (
          <View key={weekday} className='header__flex-item'>
            {weekday}
          </View>
        ))}
      </View>
    </View>
  )
}

export default AtCalendarHeader
