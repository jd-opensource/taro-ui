import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { View } from '@tarojs/components'
import { AtModalActionProps } from '../../../../types/modal'

function AtModalAction({
  isSimple = false,
  className,
  children
}: AtModalActionProps): JSX.Element {
  const rootClass = classNames(
    'at-modal__footer',
    {
      'at-modal__footer--simple': isSimple
    },
    className
  )

  return (
    <View className={rootClass}>
      <View className='at-modal__action'>{children}</View>
    </View>
  )
}

AtModalAction.propTypes = {
  isSimple: PropTypes.bool
}

export default AtModalAction
