import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { View } from '@tarojs/components'
import { AtActionSheetItemProps } from '../../../../../types/action-sheet'

function AtActionSheetItem({
  className,
  children,
  onClick
}: AtActionSheetItemProps): JSX.Element {
  const handleClick = (args: any): void => {
    if (typeof onClick === 'function') {
      onClick(args)
    }
  }

  const rootClass = classNames('at-action-sheet__item', className)

  return (
    <View className={rootClass} onClick={handleClick}>
      {children}
    </View>
  )
}

AtActionSheetItem.propTypes = {
  onClick: PropTypes.func
}

export default AtActionSheetItem
