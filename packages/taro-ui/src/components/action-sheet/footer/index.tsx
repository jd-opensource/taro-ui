import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { View } from '@tarojs/components'
import { AtActionSheetFooterProps } from '../../../../types/action-sheet'

function AtActionSheetFooter({
  className,
  children,
  onClick
}: AtActionSheetFooterProps): JSX.Element {
  const handleClick = (...args: any[]): void => {
    if (typeof onClick === 'function') {
      onClick(...args)
    }
  }

  const rootClass = classNames('at-action-sheet__footer', className)

  return (
    <View onClick={handleClick} className={rootClass}>
      {children}
    </View>
  )
}

AtActionSheetFooter.propTypes = {
  onClick: PropTypes.func
}

export default AtActionSheetFooter
