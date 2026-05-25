import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Button, View } from '@tarojs/components'
import { ButtonProps } from '@tarojs/components/types/Button'
import { BaseEventOrig, CommonEvent } from '@tarojs/components/types/common'
import Taro from '@tarojs/taro'
import { AtButtonProps } from '../../../types/button'
import AtLoading from '../loading/index'

const SIZE_CLASS = {
  normal: 'normal',
  small: 'small'
}

const TYPE_CLASS = {
  primary: 'primary',
  secondary: 'secondary'
}

function AtButton({
  size = 'normal',
  type,
  circle = false,
  full = false,
  loading = false,
  disabled = false,
  customStyle = {},
  className,
  children,
  formType,
  openType,
  lang = 'en',
  sessionFrom = '',
  sendMessageTitle = '',
  sendMessagePath = '',
  sendMessageImg = '',
  showMessageCard = false,
  appParameter = '',
  onClick,
  onGetUserInfo,
  onContact,
  onGetPhoneNumber,
  onError,
  onOpenSetting
}: AtButtonProps): JSX.Element {
  const isWEB = Taro.getEnv() === Taro.ENV_TYPE.WEB
  const isWEAPP = Taro.getEnv() === Taro.ENV_TYPE.WEAPP
  const isALIPAY = Taro.getEnv() === Taro.ENV_TYPE.ALIPAY

  const handleClick = (event: CommonEvent): void => {
    if (!disabled) {
      onClick && onClick(event)
    }
  }

  const handleGetUserInfo = (event: CommonEvent): void => {
    onGetUserInfo && onGetUserInfo(event)
  }

  const handleContact = (
    event: BaseEventOrig<ButtonProps.onContactEventDetail>
  ): void => {
    onContact && onContact(event)
  }

  const handleGetPhoneNumber = (event: CommonEvent): void => {
    onGetPhoneNumber && onGetPhoneNumber(event)
  }

  const handleError = (event: CommonEvent): void => {
    onError && onError(event)
  }

  const handleOpenSetting = (event: CommonEvent): void => {
    onOpenSetting && onOpenSetting(event)
  }

  const buttonType = type ?? ''
  const rootClassName = ['at-button']
  const classObject = {
    [`at-button--${SIZE_CLASS[size]}`]: SIZE_CLASS[size],
    'at-button--disabled': disabled,
    [`at-button--${buttonType}`]: buttonType
      ? TYPE_CLASS[buttonType as keyof typeof TYPE_CLASS]
      : false,
    'at-button--circle': circle,
    'at-button--full': full
  }
  const loadingColor = type === 'primary' ? '#fff' : ''
  const loadingSize = size === 'small' ? '30' : 0

  let loadingComponent: JSX.Element | null = null
  if (loading) {
    loadingComponent = (
      <View className='at-button__icon'>
        <AtLoading color={loadingColor} size={loadingSize} />
      </View>
    )
    rootClassName.push('at-button--icon')
  }

  const webButton = (
    <Button
      className='at-button__wxbutton'
      lang={lang}
      formType={formType}
    ></Button>
  )

  const button = (
    <Button
      className='at-button__wxbutton'
      formType={formType}
      openType={openType}
      lang={lang}
      sessionFrom={sessionFrom}
      sendMessageTitle={sendMessageTitle}
      sendMessagePath={sendMessagePath}
      sendMessageImg={sendMessageImg}
      showMessageCard={showMessageCard}
      appParameter={appParameter}
      onGetUserInfo={handleGetUserInfo}
      onGetPhoneNumber={handleGetPhoneNumber}
      onOpenSetting={handleOpenSetting}
      onError={handleError}
      onContact={handleContact}
    ></Button>
  )

  return (
    <View
      className={classNames(rootClassName, classObject, className)}
      style={customStyle}
      onClick={handleClick}
    >
      {isWEB && !disabled && webButton}
      {isWEAPP && !disabled && button}
      {isALIPAY && !disabled && button}
      {loadingComponent}
      <View className='at-button__text'>{children}</View>
    </View>
  )
}

AtButton.propTypes = {
  size: PropTypes.oneOf(['normal', 'small']),
  type: PropTypes.oneOf(['primary', 'secondary', '']),
  circle: PropTypes.bool,
  full: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  formType: PropTypes.oneOf(['submit', 'reset', '']),
  openType: PropTypes.oneOf([
    'contact',
    'share',
    'getUserInfo',
    'getPhoneNumber',
    'launchApp',
    'openSetting',
    'feedback',
    'getRealnameAuthInfo',
    'getAuthorize',
    'contactShare',
    ''
  ]),
  lang: PropTypes.string,
  sessionFrom: PropTypes.string,
  sendMessageTitle: PropTypes.string,
  sendMessagePath: PropTypes.string,
  sendMessageImg: PropTypes.string,
  showMessageCard: PropTypes.bool,
  appParameter: PropTypes.string,
  onGetUserInfo: PropTypes.func,
  onContact: PropTypes.func,
  onGetPhoneNumber: PropTypes.func,
  onError: PropTypes.func,
  onOpenSetting: PropTypes.func
}

export default AtButton
