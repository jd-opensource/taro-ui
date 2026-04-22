import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
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

export default class AtInput extends React.Component<AtInputProps> {
  public static defaultProps: AtInputProps
  public static propTypes: InferProps<AtInputProps>
  // TODO: 有待考证是否为合理方式处理 #840
  private inputClearing = false

  private handleInput = (event: BaseEventOrig<InputEventDetail>): void =>
    this.props.onChange?.(event.detail.value, event)

  private handleFocus = (event: BaseEventOrig<FocusEventDetail>): void => {
    if (typeof this.props.onFocus === 'function') {
      this.props.onFocus(event.detail.value, event)
    }
  }

  private handleBlur = (event: BaseEventOrig<BlurEventDetail>): void => {
    if (typeof this.props.onBlur === 'function') {
      this.props.onBlur(event.detail.value, event)
    }
    if (event.type === 'blur' && !this.inputClearing) {
      // fix # 583 AtInput 不触发 onChange 的问题
      this.props.onChange?.(
        event.detail.value,
        event as BaseEventOrig<InputEventDetail>
      )
    }
    // 还原状态
    this.inputClearing = false
  }

  private handleConfirm = (event: BaseEventOrig<ConfirmEventDetail>): void => {
    if (typeof this.props.onConfirm === 'function') {
      this.props.onConfirm(event.detail.value, event)
    }
  }

  private handleClick = (event: ITouchEvent): void => {
    if (!this.props.editable && typeof this.props.onClick === 'function') {
      this.props.onClick(event)
    }
  }

  private handleClearValue = (event: ITouchEvent): void => {
    this.inputClearing = true
    this.props.onChange?.('', event)
  }

  private handleKeyboardHeightChange = (
    event: BaseEventOrig<KeyboardHeightEventDetail>
  ): void => {
    if (typeof this.props.onKeyboardHeightChange === 'function') {
      this.props.onKeyboardHeightChange(event)
    }
  }

  private handleErrorClick = (event: ITouchEvent): void => {
    if (typeof this.props.onErrorClick === 'function') {
      this.props.onErrorClick(event)
    }
  }

  public render(): JSX.Element {
    const {
      className,
      customStyle,
      name,
      cursorSpacing,
      confirmType,
      cursor,
      selectionStart,
      selectionEnd,
      adjustPosition,
      border,
      title,
      error,
      clear,
      placeholder,
      placeholderStyle,
      placeholderClass,
      autoFocus = false,
      focus = false,
      value,
      required
    } = this.props
    const { type, maxLength, disabled, password } = getInputProps(this.props)

    const rootCls = classNames(
      'at-input',
      {
        'at-input--without-border': !border
      },
      className
    )
    const containerCls = classNames('at-input__container', {
      'at-input--error': error,
      'at-input--disabled': disabled
    })
    // TODO: overlayCls 是否需要移除
    const overlayCls = classNames('at-input__overlay', {
      'at-input__overlay--hidden': !disabled
    })
    const placeholderCls = classNames('placeholder', placeholderClass)

    return (
      <View className={rootCls} style={customStyle}>
        <View className={containerCls}>
          <View className={overlayCls} onClick={this.handleClick}></View>
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
            type={type}
            disabled={disabled}
            password={password}
            placeholderStyle={placeholderStyle}
            placeholderClass={placeholderCls}
            placeholder={placeholder}
            cursorSpacing={cursorSpacing}
            maxlength={maxLength}
            autoFocus={autoFocus}
            // TODO: 临时解决方案，等 Taro 更新后还原到 focus={focus}
            focus={focus}
            value={value}
            confirmType={confirmType}
            cursor={cursor}
            selectionStart={selectionStart}
            selectionEnd={selectionEnd}
            adjustPosition={adjustPosition}
            onInput={this.handleInput}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onConfirm={this.handleConfirm}
            onKeyboardHeightChange={this.handleKeyboardHeightChange}
          />
          {clear && value && (
            <View className='at-input__icon' onTouchEnd={this.handleClearValue}>
              <Text className='at-icon at-icon-close-circle at-input__icon-close'></Text>
            </View>
          )}
          {error && (
            <View
              className='at-input__icon'
              onTouchStart={this.handleErrorClick}
            >
              <Text className='at-icon at-icon-alert-circle at-input__icon-alert'></Text>
            </View>
          )}
          <View className='at-input__children'>{this.props.children}</View>
        </View>
      </View>
    )
  }
}

AtInput.defaultProps = {
  className: '',
  customStyle: '',
  value: '',
  name: '',
  placeholder: '',
  placeholderStyle: '',
  placeholderClass: '',
  title: '',
  cursorSpacing: 50,
  confirmType: 'done',
  selectionStart: -1,
  selectionEnd: -1,
  adjustPosition: true,
  maxlength: 140,
  maxLength: 140,
  type: 'text',
  disabled: false,
  border: true,
  editable: true,
  error: false,
  clear: false,
  autoFocus: false,
  focus: false,
  required: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: (): void => {}
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
