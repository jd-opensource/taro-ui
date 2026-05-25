import PropTypes from 'prop-types'
import React from 'react'
import { Text, View } from '@tarojs/components'
import { AtCountdownItemProps } from '../../../../types/countdown'

function formatNum(num: number): string {
  return num <= 9 ? `0${num}` : `${num}`
}

function AtCountdownItem({
  num = 0,
  separator = ':'
}: AtCountdownItemProps): JSX.Element {
  return (
    <View className='at-countdown__item'>
      <View className='at-countdown__time-box'>
        <Text className='at-countdown__time'>{formatNum(num)}</Text>
      </View>
      <Text className='at-countdown__separator'>{separator}</Text>
    </View>
  )
}

AtCountdownItem.propTypes = {
  num: PropTypes.number.isRequired,
  separator: PropTypes.string
}

export default AtCountdownItem
