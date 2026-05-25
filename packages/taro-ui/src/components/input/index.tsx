import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { useRef } from 'react'
import { Input, Label, Text, View } from '@tarojs/components'
import { BaseEventOrig, ITouchEvent } from '@tarojs/components/types/common'
import { InputProps } from '@tarojs/components/types/Input'
import {
  AtInputProps,
  BlurEventDetail,
  ConfirmEventDetail,
  FocusEventDetail,
  InputEventDetail,
  KeyboardHeightEventDetail
} from '../../../types/input'
import { noop } from '../../common/utils'

type PickAtInputProps = Pick<
  AtInputProps,
  'maxLength' | 'maxlength' | 'disabled' | 'password'
>
type GetInputPropsReturn = PickAtInputProps & Pick<InputProps, 'type'>

function getInputProps(props: AtInputProps): GetInputPropsReturn {
  const actualProps = {
    type: props.type,
    maxLength: props.maxLength || props.maxlength,
    disabled: props.disabled,
    password: false
  }

  switch (actualProps.type) {
    case 'phone':
      actualProps.type = 'number'
      actualProps.maxLength = 11
      break
    case 'password':
      actualProps.type = 'text'
      actualProps.password = true
      break
    default:
      break
  }
  if (!props.disabled && !props.editable) {
    actualProps.disabled = true
  }
  return actualProps as GetInputPropsReturn
}

function AtInput(props: AtInputProps): JSX.Element {
  const {
    className = '',
    customStyle = '',
    value = '',
    name = '',
    placeholder = '',
    placeholderStyle = '',
    placeholderClass = '',
    title = '',
    cursorSpacing = 50,
    confirmType = 'done',
    selectionStart = -1,
    selectionEnd = -1,
    adjustPosition = true,
    editable = true,
    border = true,
    error = false,
    clear = false,
    autoFocus = false,
    focus = false,
    required = false,
    cursor,
    onChange = noop,
    onFocus,
    onBlur,
    onConfirm,
    onErrorClick,
    onClick,
    onKeyboardHeightChange,
    children
  } = props
  // TODO: 有待考证是否为合理方式处理 #840
  const inputClearing = useRef(false)

  const handleInput = (event: BaseEventOrig<InputEventDetail>): void =>
    onChange?.(event.detail.value, event)

  const handleFocus = (event: BaseEventOrig<FocusEventDetail>): void => {
    if (typeof onFocus === 'function') {
      onFocus(event.detail.value, event)
    }
  }

  const handleBlur = (event: BaseEventOrig<BlurEventDetail>): void => {
    if (typeof onBlur === 'function') {
      onBlur(event.detail.value, event)
    }
    if (event.type === 'blur' && !inputClearing.current) {
      // fix # 583 AtInput 不触发 onChange 的问题
      onChange?.(event.detail.value, event as BaseEventOrig<InputEventDetail>)
    }
    // 还原状态
    inputClearing.current = false
  }

  const handleConfirm = (event: BaseEventOrig<ConfirmEventDetail>): void => {
    if (typeof onConfirm === 'function') {
      onConfirm(event.detail.value, event)
    }
  }

  const handleClick = (event: ITouchEvent): void => {
    if (!editable && typeof onClick === 'function') {
      onClick(event)
    }
  }

  const handleClearValue = (event: ITouchEvent): void => {
    inputClearing.current = true
    onChange?.('', event)
  }

  const handleKeyboardHeightChange = (
    event: BaseEventOrig<KeyboardHeightEventDetail>
  ): void => {
    if (typeof onKeyboardHeightChange === 'function') {
      onKeyboardHeightChange(event)
    }
  }

  const handleErrorClick = (event: ITouchEvent): void => {
    if (typeof onErrorClick === 'function') {
      onErrorClick(event)
    }
  }

  const {
    type: inputType,
    maxLength: inputMaxLength,
    disabled: inputDisabled,
    password
  } = getInputProps({
    ...props,
    type: props.type ?? 'text',
    maxlength: props.maxlength ?? 140,
    maxLength: props.maxLength ?? 140,
    disabled: props.disabled ?? false,
    editable: props.editable ?? true
  })

  const rootCls = classNames(
    'at-input',
    {
      'at-input--without-border': !border
    },
    className
  )
  const containerCls = classNames('at-input__container', {
    'at-input--error': error,
    'at-input--disabled': inputDisabled
  })
  // TODO: overlayCls 是否需要移除
  const overlayCls = classNames('at-input__overlay', {
    'at-input__overlay--hidden': !inputDisabled
  })
  const placeholderCls = classNames('placeholder', placeholderClass)

  return (
    <View className={rootCls} style={customStyle}>
      <View className={containerCls}>
        <View className={overlayCls} onClick={handleClick}></View>
        {title && (
          <Label
            className={`at-input__title ${
              required && 'at-input__title--required'
            }`}
            for={name}
          >
            {title}
          </Label>
        )}
        <Input
          className='at-input__input'
          id={name}
          name={name}
          type={inputType}
          disabled={inputDisabled}
          password={password}
          placeholderStyle={placeholderStyle}
          placeholderClass={placeholderCls}
          placeholder={placeholder}
          cursorSpacing={cursorSpacing}
          maxlength={inputMaxLength}
          autoFocus={autoFocus}
          // TODO: 临时解决方案，等 Taro 更新后还原到 focus={focus}
          focus={focus}
          value={value}
          confirmType={confirmType}
          cursor={cursor}
          selectionStart={selectionStart}
          selectionEnd={selectionEnd}
          adjustPosition={adjustPosition}
          onInput={handleInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onConfirm={handleConfirm}
          onKeyboardHeightChange={handleKeyboardHeightChange}
        />
        {clear && value && (
          <View className='at-input__icon' onTouchEnd={handleClearValue}>
            <Text className='at-icon at-icon-close-circle at-input__icon-close'></Text>
          </View>
        )}
        {error && (
          <View className='at-input__icon' onTouchStart={handleErrorClick}>
            <Text className='at-icon at-icon-alert-circle at-input__icon-alert'></Text>
          </View>
        )}
        <View className='at-input__children'>{children}</View>
      </View>
    </View>
  )
}

AtInput.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  customStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  placeholder: PropTypes.string,
  placeholderStyle: PropTypes.string,
  placeholderClass: PropTypes.string,
  title: PropTypes.string,
  confirmType: PropTypes.string,
  cursor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  selectionStart: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  selectionEnd: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  adjustPosition: PropTypes.bool,
  cursorSpacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxlength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  disabled: PropTypes.bool,
  border: PropTypes.bool,
  editable: PropTypes.bool,
  error: PropTypes.bool,
  clear: PropTypes.bool,
  autoFocus: PropTypes.bool,
  focus: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onConfirm: PropTypes.func,
  onErrorClick: PropTypes.func,
  onClick: PropTypes.func,
  required: PropTypes.bool
}

export default AtInput
