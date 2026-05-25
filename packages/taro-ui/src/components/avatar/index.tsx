import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Image, Text, View } from '@tarojs/components'
import * as TaroComponents from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtAvatarProps } from '../../../types/avatar'

const SIZE_CLASS = {
  large: 'large',
  normal: 'normal',
  small: 'small'
}

function AtAvatar({
  size = 'normal',
  circle = false,
  text = '',
  image = '',
  customStyle = {},
  className = '',
  openData
}: AtAvatarProps): JSX.Element {
  const isWEAPP = Taro.getEnv() === Taro.ENV_TYPE.WEAPP
  const rootClassName = ['at-avatar']
  const iconSize = SIZE_CLASS[size || 'normal']
  const classObject = {
    [`at-avatar--${iconSize}`]: iconSize,
    'at-avatar--circle': circle
  }

  let letter = ''
  if (text) letter = text[0]

  let elem: React.ReactNode
  if (
    openData &&
    openData.type === 'userAvatarUrl' &&
    isWEAPP &&
    Taro.canIUse('open-data')
  ) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const OpenData = (TaroComponents as any).OpenData
    elem = <OpenData type={openData.type}></OpenData>
  } else if (image) {
    elem = <Image className='at-avatar__img' src={image} />
  } else {
    elem = <Text className='at-avatar__text'>{letter}</Text>
  }
  return (
    <View
      className={classNames(rootClassName, classObject, className)}
      style={customStyle}
    >
      {elem}
    </View>
  )
}

AtAvatar.propTypes = {
  size: PropTypes.oneOf(['large', 'normal', 'small']),
  circle: PropTypes.bool,
  text: PropTypes.string,
  image: PropTypes.string,
  openData: PropTypes.object,
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
}

export default AtAvatar
