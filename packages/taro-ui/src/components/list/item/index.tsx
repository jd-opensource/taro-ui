import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Image, Switch, Text, View } from '@tarojs/components'
import { CommonEvent, ITouchEvent } from '@tarojs/components/types/common'
import { AtListItemProps } from '../../../../types/list'
import { mergeStyle } from '../../../common/utils'

function AtListItem({
  note = '',
  disabled = false,
  title = '',
  thumb = '',
  isSwitch = false,
  hasBorder = true,
  switchColor = '#6190E8',
  switchIsCheck = false,
  extraText = '',
  extraThumb = '',
  iconInfo = { value: '' },
  arrow,
  icon,
  className,
  onClick,
  onSwitchChange
}: AtListItemProps): JSX.Element {
  const handleClick = (event: ITouchEvent): void => {
    if (typeof onClick === 'function' && !disabled) {
      onClick(event)
    }
  }

  const handleSwitchClick = (e: CommonEvent): void => {
    e.stopPropagation()
  }

  const handleSwitchChange = (event: CommonEvent): void => {
    if (typeof onSwitchChange === 'function' && !disabled) {
      onSwitchChange(event)
    }
  }

  const rootClass = classNames(
    'at-list__item',
    {
      'at-list__item--thumb': thumb,
      'at-list__item--multiple': note,
      'at-list__item--disabled': disabled,
      'at-list__item--no-border': !hasBorder
    },
    className
  )

  const renderIcon = () => {
    if (icon) {
      return <View className='item-icon'>{icon}</View>
    } else if (iconInfo?.value) {
      const iconClass = classNames(
        (iconInfo && iconInfo.prefixClass) || 'at-icon',
        {
          [`${(iconInfo && iconInfo.prefixClass) || 'at-icon'}-${
            iconInfo && iconInfo.value
          }`]: iconInfo && iconInfo.value
        },
        iconInfo && iconInfo.className
      )
      return (
        <View className='at-list__item-icon item-icon'>
          <Text
            className={iconClass}
            style={mergeStyle(
              {
                color: iconInfo.color || '',
                fontSize: `${iconInfo.size || 24}px`
              },
              iconInfo.customStyle || ''
            )}
          ></Text>
        </View>
      )
    } else if (thumb) {
      return (
        <View className='at-list__item-thumb item-thumb'>
          <Image className='item-thumb__info' mode='scaleToFill' src={thumb} />
        </View>
      )
    }
  }

  return (
    <View className={rootClass} onClick={handleClick}>
      <View className='at-list__item-container'>
        {renderIcon()}
        <View className='at-list__item-content item-content'>
          <View className='item-content__info'>
            <View className='item-content__info-title'>{title}</View>
            {note && <View className='item-content__info-note'>{note}</View>}
          </View>
        </View>
        <View className='at-list__item-extra item-extra'>
          {extraText && <View className='item-extra__info'>{extraText}</View>}

          {extraThumb && !extraText && (
            <View className='item-extra__image'>
              <Image
                className='item-extra__image-info'
                mode='aspectFit'
                src={extraThumb}
              />
            </View>
          )}

          {isSwitch && !extraThumb && !extraText && (
            <View className='item-extra__switch' onClick={handleSwitchClick}>
              <Switch
                color={switchColor}
                disabled={disabled}
                checked={switchIsCheck}
                onChange={handleSwitchChange}
              />
            </View>
          )}

          {arrow ? (
            <View className='item-extra__icon'>
              <Text
                className={`at-icon item-extra__icon-arrow at-icon-chevron-${arrow}`}
              />
            </View>
          ) : null}
        </View>
      </View>
    </View>
  )
}

AtListItem.propTypes = {
  note: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  disabled: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  thumb: PropTypes.string,
  onClick: PropTypes.func,
  isSwitch: PropTypes.bool,
  hasBorder: PropTypes.bool,
  switchColor: PropTypes.string,
  switchIsCheck: PropTypes.bool,
  extraText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  extraThumb: PropTypes.string,
  onSwitchChange: PropTypes.func,
  arrow: PropTypes.oneOf(['up', 'down', 'right']),
  iconInfo: PropTypes.shape({
    size: PropTypes.number,
    value: PropTypes.string,
    color: PropTypes.string,
    prefixClass: PropTypes.string,
    customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
  })
}

export default AtListItem
