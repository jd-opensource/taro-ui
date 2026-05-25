import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Text } from '@tarojs/components'
import { AtIconProps } from '../../../types/icon'
import { mergeStyle, pxTransform } from '../../common/utils'

export default function AtIcon({
  customStyle = {},
  className = '',
  prefixClass = 'at-icon',
  value = '',
  color = '',
  size = 24,
  onClick
}: AtIconProps): JSX.Element {
  function handleClick(): void {
    onClick && onClick(arguments as any)
  }

  const rootStyle = {
    fontSize: `${pxTransform(parseInt(String(size)) * 2)}`,
    color
  }

  const iconName = value ? `${prefixClass}-${value}` : ''
  return (
    <Text
      className={classNames(prefixClass, iconName, className)}
      style={mergeStyle(rootStyle, customStyle)}
      onClick={handleClick}
    ></Text>
  )
}

AtIcon.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  prefixClass: PropTypes.string,
  value: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func
}
