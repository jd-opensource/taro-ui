import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Switch, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { AtSwitchProps } from '../../../types/switch'

function AtSwitch({
  customStyle = '',
  className = '',
  title = '',
  color = '#6190e8',
  border = true,
  disabled = false,
  checked = false,
  onChange
}: AtSwitchProps): JSX.Element {
  const handleChange = (event: CommonEvent): void => {
    const { value, checked: eventChecked } = event.detail
    const state = typeof value === 'undefined' ? eventChecked : value
    onChange && onChange(state)
  }

  const rootCls = classNames(
    'at-switch',
    {
      'at-switch--without-border': !border
    },
    className
  )
  const containerCls = classNames('at-switch__container', {
    'at-switch--disabled': disabled
  })

  return (
    <View className={rootCls} style={customStyle}>
      <View className='at-switch__title'>{title}</View>
      <View className={containerCls}>
        <View className='at-switch__mask'></View>
        <Switch
          className='at-switch__switch'
          checked={checked}
          color={color}
          onChange={handleChange}
        />
      </View>
    </View>
  )
}

AtSwitch.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  title: PropTypes.string,
  color: PropTypes.string,
  checked: PropTypes.bool,
  border: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
}

export default AtSwitch
