import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Text, View } from '@tarojs/components'
import { ITouchEvent } from '@tarojs/components/types/common'
import { AtNavBarProps } from '../../../types/nav-bar'
import { mergeStyle, pxTransform } from '../../common/utils'

function AtNavBar({
  customStyle = '',
  className = '',
  fixed = false,
  border = true,
  color = '',
  leftIconType = '',
  leftText = '',
  title = '',
  rightFirstIconType = '',
  rightSecondIconType = '',
  children,
  onClickLeftIcon,
  onClickRgIconSt,
  onClickRgIconNd,
  onClickTitle
}: AtNavBarProps): JSX.Element {
  const handleClickLeftView = (event: ITouchEvent): void => {
    onClickLeftIcon && onClickLeftIcon(event)
  }

  const handleClickSt = (event: ITouchEvent): void => {
    onClickRgIconSt && onClickRgIconSt(event)
  }

  const handleClickNd = (event: ITouchEvent): void => {
    onClickRgIconNd && onClickRgIconNd(event)
  }

  const handleClickTitle = (event: ITouchEvent): void => {
    onClickTitle && onClickTitle(event)
  }

  const linkStyle = { color }

  const defaultIconInfo = {
    customStyle: '',
    className: '',
    prefixClass: 'at-icon',
    value: '',
    color: '',
    size: 24
  }

  const leftIconInfo =
    leftIconType instanceof Object
      ? { ...defaultIconInfo, ...leftIconType }
      : { ...defaultIconInfo, value: leftIconType }
  const leftIconClass = classNames(
    leftIconInfo.prefixClass,
    {
      [`${leftIconInfo.prefixClass}-${leftIconInfo.value}`]: leftIconInfo.value
    },
    leftIconInfo.className
  )

  const rightFirstIconInfo =
    rightFirstIconType instanceof Object
      ? { ...defaultIconInfo, ...rightFirstIconType }
      : { ...defaultIconInfo, value: rightFirstIconType }
  const rightFirstIconClass = classNames(
    rightFirstIconInfo.prefixClass,
    {
      [`${rightFirstIconInfo.prefixClass}-${rightFirstIconInfo.value}`]:
        rightFirstIconInfo.value
    },
    rightFirstIconInfo.className
  )

  const rightSecondIconInfo =
    rightSecondIconType instanceof Object
      ? { ...defaultIconInfo, ...rightSecondIconType }
      : { ...defaultIconInfo, value: rightSecondIconType }
  const rightSecondIconClass = classNames(
    rightSecondIconInfo.prefixClass,
    {
      [`${rightSecondIconInfo.prefixClass}-${rightSecondIconInfo.value}`]:
        rightSecondIconInfo.value
    },
    rightSecondIconInfo.className
  )

  return (
    <View
      className={classNames(
        {
          'at-nav-bar': true,
          'at-nav-bar--fixed': fixed,
          'at-nav-bar--no-border': !border
        },
        className
      )}
      style={customStyle}
    >
      <View
        className='at-nav-bar__left-view'
        onClick={handleClickLeftView}
        style={linkStyle}
      >
        {leftIconType && (
          <Text
            className={leftIconClass}
            style={mergeStyle(
              {
                color: leftIconInfo.color,
                fontSize: `${pxTransform(
                  parseInt(leftIconInfo.size.toString()) * 2
                )}`
              },
              leftIconInfo.customStyle
            )}
          ></Text>
        )}
        <Text className='at-nav-bar__text'>{leftText}</Text>
      </View>
      <View className='at-nav-bar__title' onClick={handleClickTitle}>
        {title || children}
      </View>
      <View className='at-nav-bar__right-view'>
        <View
          className={classNames({
            'at-nav-bar__container': true,
            'at-nav-bar__container--hide': !rightSecondIconType
          })}
          style={linkStyle}
          onClick={handleClickNd}
        >
          {rightSecondIconType && (
            <Text
              className={rightSecondIconClass}
              style={mergeStyle(
                {
                  color: rightSecondIconInfo.color,
                  fontSize: `${pxTransform(
                    parseInt(rightSecondIconInfo.size.toString()) * 2
                  )}`
                },
                rightSecondIconInfo.customStyle
              )}
            ></Text>
          )}
        </View>
        <View
          className={classNames({
            'at-nav-bar__container': true,
            'at-nav-bar__container--hide': !rightFirstIconType
          })}
          style={linkStyle}
          onClick={handleClickSt}
        >
          {rightFirstIconType && (
            <Text
              className={rightFirstIconClass}
              style={mergeStyle(
                {
                  color: rightFirstIconInfo.color,
                  fontSize: `${pxTransform(
                    parseInt(rightFirstIconInfo.size.toString()) * 2
                  )}`
                },
                rightFirstIconInfo.customStyle
              )}
            ></Text>
          )}
        </View>
      </View>
    </View>
  )
}

AtNavBar.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  fixed: PropTypes.bool,
  border: PropTypes.bool,
  color: PropTypes.string,
  leftIconType: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  leftText: PropTypes.string,
  title: PropTypes.string,
  rightFirstIconType: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  rightSecondIconType: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  onClickLeftIcon: PropTypes.func,
  onClickRgIconSt: PropTypes.func,
  onClickRgIconNd: PropTypes.func,
  onClickTitle: PropTypes.func
}

export default AtNavBar
