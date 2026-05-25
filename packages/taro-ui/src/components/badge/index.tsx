import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { View } from '@tarojs/components'
import { AtBadgeProps } from '../../../types/badge'

function formatValue(
  value: string | number | undefined,
  maxValue: number
): string | number {
  if (value === '' || value === null || typeof value === 'undefined') return ''
  const numValue = +value
  if (Number.isNaN(numValue)) {
    return value
  }
  return numValue > maxValue ? `${maxValue}+` : numValue
}

export default function AtBadge({
  dot = false,
  value = '',
  maxValue = 99,
  customStyle = {},
  className = '',
  children
}: AtBadgeProps): JSX.Element {
  const rootClassName = ['at-badge']

  const val = formatValue(value, maxValue)

  return (
    <View className={classNames(rootClassName, className)} style={customStyle}>
      {children}
      {dot ? (
        <View className='at-badge__dot'></View>
      ) : (
        val !== '' && <View className='at-badge__num'>{val}</View>
      )}
    </View>
  )
}

AtBadge.propTypes = {
  dot: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxValue: PropTypes.number,
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
}
