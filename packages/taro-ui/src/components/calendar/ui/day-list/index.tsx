import React from 'react'
import { View } from '@tarojs/components'

function AtCalendarHeader(): JSX.Element {
  return (
    <View className='at-calendar__header header'>
      <View className='header__flex'>
        <View className='header__flex-item'>日</View>
        <View className='header__flex-item'>一</View>
        <View className='header__flex-item'>二</View>
        <View className='header__flex-item'>三</View>
        <View className='header__flex-item'>四</View>
        <View className='header__flex-item'>五</View>
        <View className='header__flex-item'>六</View>
      </View>
    </View>
  )
}

export default AtCalendarHeader
