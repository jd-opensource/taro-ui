import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { AtFabProps } from '../../../types/fab'

function AtFab({
  size = 'normal',
  className,
  children,
  onClick
}: AtFabProps): JSX.Element {
  const handleClick = (e: CommonEvent): void => {
    if (typeof onClick === 'function') {
      onClick(e)
    }
  }

  const rootClass = classNames('at-fab', className, {
    [`at-fab--${size}`]: size
  })

  return (
    <View className={rootClass} onClick={handleClick}>
      {children}
    </View>
  )
}

AtFab.propTypes = {
  size: PropTypes.oneOf(['normal', 'small']),
  onClick: PropTypes.func
}

export default AtFab
