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
import '../../style/components/input.scss'
import AtIcon from '../icon'

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

  private handleInput = (event: BaseEventOrig<InputEventDetail>): void => {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(event.detail.value, event)
    }
  }

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
      if (typeof this.props.onChange === 'function') {
        this.props.onChange(
          event.detail.value,
          event as BaseEventOrig<InputEventDetail>
        )
      }
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
    if (typeof this.props.onChange === 'function') {
      this.props.onChange('', event)
    }
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
      autoFocus,
      focus,
      value,
      required
    } = this.props
    const { type, maxLength, disabled, password } = getInputProps(this.props)

    const overlayCls = classNames('at-input__overlay', {
      'at-input__overlay--hidden': !disabled
    })
    const placeholderCls = classNames('placeholder', placeholderClass)

    const id = name && { id: name }
    return (
      <View
        className={classNames(
          'at-input',
          {
            'at-input--without-border': !border
          },
          className
        )}
        style={customStyle}
      >
        <View
          className={classNames('at-input__container', {
            'at-input--error': error,
            'at-input--disabled': disabled
          })}
        >
          <View className={overlayCls} onClick={this.handleClick} />
          {title && (
            <React.Fragment>
              {required && <Text className='at-input--required'>*</Text>}
              <Label
                className={classNames('at-input__title', {
                  'at-input__title--error': error,
                  'at-input__title--disabled': disabled
                })}
                for={name}
              >
                {title}
              </Label>
            </React.Fragment>
          )}
          <Input
            className='at-input__input'
            {...id}
            name={name}
            type={type}
            password={password}
            placeholderStyle={placeholderStyle}
            placeholderClass={placeholderCls}
            placeholder={placeholder}
            cursorSpacing={cursorSpacing}
            maxlength={maxLength}
            autoFocus={autoFocus}
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
              <AtIcon className='at-input__icon-close' value='close-circle' />
            </View>
          )}
          {error && (
            <View
              className='at-input__icon'
              onTouchStart={this.handleErrorClick}
            >
              <AtIcon className='at-input__icon-alert' value='alert-circle' />
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
  customStyle: {},
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
