import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { View } from '@tarojs/components'
import { AtTabsPaneProps } from '../../../types/tabs-pane'

function AtTabsPane({
  customStyle = '',
  className = '',
  tabDirection = 'horizontal',
  index = 0,
  current = 0,
  children
}: AtTabsPaneProps): JSX.Element {
  return (
    <View
      className={classNames(
        {
          'at-tabs-pane': true,
          'at-tabs-pane--vertical': tabDirection === 'vertical',
          'at-tabs-pane--active': index === current,
          'at-tabs-pane--inactive': index !== current
        },
        className
      )}
      style={customStyle}
    >
      {children}
    </View>
  )
}

AtTabsPane.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  tabDirection: PropTypes.oneOf(['horizontal', 'vertical']),
  index: PropTypes.number,
  current: PropTypes.number
}

export default AtTabsPane
