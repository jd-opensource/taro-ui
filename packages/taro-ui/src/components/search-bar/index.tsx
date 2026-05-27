import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { Input, Text, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { useComponentLocale } from '../../hooks/useComponentLocale'
import { AtSearchBarProps } from '../../../types/search-bar'

type ExtendEvent = {
  target: {
    value: string
  }
}

function AtSearchBar({
  value = '',
  placeholder,
  maxLength = 140,
  fixed = false,
  focus = false,
  disabled = false,
  showActionButton = false,
  actionName,
  inputType = 'text',
  className,
  customStyle,
  enableNative = true,
  onChange,
  onFocus,
  onBlur,
  onConfirm,
  onActionClick,
  onClear
}: AtSearchBarProps): JSX.Element {
  const locale = useComponentLocale('SearchBar')
  const resolvedPlaceholder = placeholder ?? locale.placeholder
  const resolvedActionName = actionName ?? locale.actionName
  const [isFocus, setIsFocus] = useState(!!focus)

  useEffect(() => {
    setIsFocus(!!focus)
  }, [focus])

  const handleFocus = (event: CommonEvent): void => {
    setIsFocus(true)
    onFocus && onFocus(event)
  }

  const handleBlur = (event: CommonEvent): void => {
    setIsFocus(false)
    onBlur && onBlur(event)
  }

  const handleChange = (e: CommonEvent & ExtendEvent): void => {
    onChange && onChange(e.detail.value, e)
  }

  const handleClear = (event: CommonEvent): void => {
    if (onClear) {
      onClear(event)
    } else {
      onChange && onChange('', event)
    }
  }

  const handleConfirm = (event: CommonEvent): void => {
    onConfirm && onConfirm(event)
  }

  const handleActionClick = (event: CommonEvent): void => {
    onActionClick && onActionClick(event)
  }

  const fontSize = 14
  const rootCls = classNames(
    'at-search-bar',
    {
      'at-search-bar--fixed': fixed
    },
    className
  )
  const placeholderWrapStyle: React.CSSProperties = {}
  const actionStyle: React.CSSProperties = {}
  if (isFocus || (!isFocus && value)) {
    actionStyle.opacity = 1
    actionStyle.marginRight = `0`
    placeholderWrapStyle.flexGrow = 0
  } else if (!isFocus && !value) {
    placeholderWrapStyle.flexGrow = 1
    actionStyle.opacity = 0
    actionStyle.marginRight = `-${
      (resolvedActionName.length + 1) * fontSize + fontSize / 2 + 10
    }px`
  }
  if (showActionButton) {
    actionStyle.opacity = 1
    actionStyle.marginRight = `0`
  }

  const clearIconStyle: React.CSSProperties = { display: 'flex' }
  const placeholderStyle: React.CSSProperties = { visibility: 'hidden' }
  if (!value.length) {
    clearIconStyle.display = 'none'
    placeholderStyle.visibility = 'visible'
  }

  return (
    <View className={rootCls} style={customStyle}>
      <View className='at-search-bar__input-cnt'>
        <View
          className='at-search-bar__placeholder-wrap'
          style={placeholderWrapStyle}
        >
          <Text className='at-icon at-icon-search'></Text>
          <Text className='at-search-bar__placeholder' style={placeholderStyle}>
            {isFocus ? '' : resolvedPlaceholder}
          </Text>
        </View>
        <Input
          className='at-search-bar__input'
          type={inputType}
          confirmType='search'
          value={value}
          focus={isFocus}
          disabled={disabled}
          maxlength={maxLength}
          // @ts-ignore ci 上面这个检查不通过, 暂时跳过ts检查
          enableNative={enableNative}
          onInput={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onConfirm={handleConfirm}
        />
        <View
          className='at-search-bar__clear'
          style={clearIconStyle}
          onTouchStart={handleClear}
        >
          <Text className='at-icon at-icon-close-circle'></Text>
        </View>
      </View>
      <View
        className='at-search-bar__action'
        style={actionStyle}
        onClick={handleActionClick}
      >
        {resolvedActionName}
      </View>
    </View>
  )
}

AtSearchBar.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  fixed: PropTypes.bool,
  focus: PropTypes.bool,
  disabled: PropTypes.bool,
  showActionButton: PropTypes.bool,
  actionName: PropTypes.string,
  inputType: PropTypes.oneOf(['text', 'number', 'idcard', 'digit']),
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onConfirm: PropTypes.func,
  onActionClick: PropTypes.func,
  onClear: PropTypes.func,
  enableNative: PropTypes.bool
}

export default AtSearchBar
