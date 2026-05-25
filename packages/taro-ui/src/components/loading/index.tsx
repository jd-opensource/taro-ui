import PropTypes from 'prop-types'
import React from 'react'
import { View } from '@tarojs/components'
import { pxTransform } from '../../common/utils'

interface AtLoadingProps {
  size?: string | number
  color?: string | number
}

function AtLoading({ color = '', size = 0 }: AtLoadingProps): JSX.Element {
  const loadingSize = typeof size === 'string' ? size : String(size)
  const sizeStyle = {
    width: size ? `${pxTransform(parseInt(loadingSize))}` : '',
    height: size ? `${pxTransform(parseInt(loadingSize))}` : ''
  }
  const colorStyle = {
    border: color ? `1px solid ${color}` : '',
    borderColor: color ? `${color} transparent transparent transparent` : ''
  }
  const ringStyle = Object.assign({}, colorStyle, sizeStyle)

  return (
    <View className='at-loading' style={sizeStyle}>
      <View className='at-loading__ring' style={ringStyle}></View>
      <View className='at-loading__ring' style={ringStyle}></View>
      <View className='at-loading__ring' style={ringStyle}></View>
    </View>
  )
}

AtLoading.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default AtLoading
