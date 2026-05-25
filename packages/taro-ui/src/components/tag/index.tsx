import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { AtTagProps } from '../../../types/tag'

const SIZE_CLASS = {
  normal: 'normal',
  small: 'small'
}

const TYPE_CLASS = {
  primary: 'primary'
}

export default function AtTag({
  size = 'normal',
  type = '',
  name = '',
  circle = false,
  disabled = false,
  active = false,
  customStyle = {},
  className,
  children,
  onClick
}: AtTagProps): JSX.Element {
  const handleClick = (event: CommonEvent): void => {
    if (!disabled) {
      typeof onClick === 'function' &&
        onClick(
          {
            name,
            active
          },
          event
        )
    }
  }

  const rootClassName = ['at-tag']

  const classObject = {
    [`at-tag--${SIZE_CLASS[size]}`]: SIZE_CLASS[size],
    [`at-tag--${type}`]: TYPE_CLASS[type],
    'at-tag--disabled': disabled,
    'at-tag--active': active,
    'at-tag--circle': circle
  }

  return (
    <View
      className={classNames(rootClassName, classObject, className)}
      style={customStyle}
      onClick={handleClick}
    >
      {children}
    </View>
  )
}

AtTag.propTypes = {
  size: PropTypes.oneOf(['normal', 'small']),
  type: PropTypes.oneOf(['', 'primary']),
  name: PropTypes.string,
  circle: PropTypes.bool,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  onClick: PropTypes.func
}
