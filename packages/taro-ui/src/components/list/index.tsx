import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { View } from '@tarojs/components'
import { AtListProps } from '../../../types/list'

function AtList({
  hasBorder = true,
  className,
  children
}: AtListProps): JSX.Element {
  const rootClass = classNames(
    'at-list',
    {
      'at-list--no-border': !hasBorder
    },
    className
  )

  return <View className={rootClass}>{children}</View>
}

AtList.propTypes = {
  hasBorder: PropTypes.bool
}

export default AtList
