import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Image, Text, View } from '@tarojs/components'
import { AtCardProps } from '../../../types/card'

export default function AtCard({
  title = '',
  note = '',
  extra,
  extraStyle = {},
  thumb = '',
  isFull = false,
  icon,
  renderIcon,
  className,
  children,
  onClick
}: AtCardProps): JSX.Element {
  const handleClick = (args: any): void => {
    if (typeof onClick === 'function') {
      onClick(args)
    }
  }

  const rootClass = classNames(
    'at-card',
    {
      'at-card--full': isFull
    },
    className
  )
  const iconClass = classNames({
    'at-icon': true,
    [`at-icon-${icon && icon.value}`]: icon && icon.value,
    'at-card__header-icon': true
  })

  const iconStyle = {
    color: (icon && icon.color) || '',
    fontSize: (icon && `${icon.size}px`) || ''
  }

  return (
    <View onClick={handleClick} className={rootClass}>
      <View className='at-card__header'>
        {thumb && (
          <View className='at-card__header-thumb'>
            <Image
              className='at-card__header-thumb-info'
              mode='scaleToFill'
              src={thumb}
            />
          </View>
        )}
        {renderIcon || ''}
        {!thumb && icon && icon.value && (
          <Text className={iconClass} style={iconStyle}></Text>
        )}

        <Text className='at-card__header-title'>{title}</Text>
        {extra && (
          <View style={{ ...extraStyle }} className='at-card__header-extra'>
            {extra}
          </View>
        )}
      </View>
      <View className='at-card__content'>
        <View className='at-card__content-info'>{children}</View>
        {note && <View className='at-card__content-note'>{note}</View>}
      </View>
    </View>
  )
}

AtCard.propTypes = {
  note: PropTypes.string,
  isFull: PropTypes.bool,
  thumb: PropTypes.string,
  title: PropTypes.string,
  extra: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  icon: PropTypes.object,
  onClick: PropTypes.func,
  renderIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  extraStyle: PropTypes.object // 自定义extra样式
}
