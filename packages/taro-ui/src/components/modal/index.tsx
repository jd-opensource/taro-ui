import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { useEffect, useRef, useState } from 'react'
import { Button, Text, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import Taro from '@tarojs/taro'
import { AtModalProps } from '../../../types/modal'
import { handleTouchScroll } from '../../common/utils'
import AtModalAction from './action/index'
import AtModalContent from './content/index'
import AtModalHeader from './header/index'

function AtModal({
  isOpened = false,
  closeOnClickOverlay = true,
  title,
  content,
  cancelText,
  confirmText,
  className,
  children,
  onClose,
  onCancel,
  onConfirm
}: AtModalProps): JSX.Element {
  const [_isOpened, setIsOpened] = useState(isOpened)
  const prevIsOpenedPropRef = useRef(isOpened)
  const isWEB = Taro.getEnv() === Taro.ENV_TYPE.WEB

  useEffect(() => {
    if (prevIsOpenedPropRef.current !== isOpened) {
      handleTouchScroll(isOpened)
      prevIsOpenedPropRef.current = isOpened
    }
    setIsOpened(prev => (isOpened !== prev ? isOpened : prev))
  }, [isOpened])

  const handleClose = (event?: CommonEvent): void => {
    if (typeof onClose === 'function') {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      onClose(event!)
    }
  }

  const handleClickOverlay = (): void => {
    if (closeOnClickOverlay) {
      setIsOpened(false)
      handleClose()
    }
  }

  const handleCancel = (event: CommonEvent): void => {
    if (typeof onCancel === 'function') {
      onCancel(event)
    }
  }

  const handleConfirm = (event: CommonEvent): void => {
    if (typeof onConfirm === 'function') {
      onConfirm(event)
    }
  }

  const handleTouchMove = (e: CommonEvent): void => {
    e.stopPropagation()
  }

  const rootClass = classNames(
    'at-modal',
    {
      'at-modal--active': _isOpened
    },
    className
  )

  if (title || content) {
    const isRenderAction = cancelText || confirmText
    return (
      <View className={rootClass}>
        <View onClick={handleClickOverlay} className='at-modal__overlay' />
        <View className='at-modal__container'>
          {title && (
            <AtModalHeader>
              <Text>{title}</Text>
            </AtModalHeader>
          )}
          {content && (
            <AtModalContent>
              <View className='content-simple'>
                {isWEB ? (
                  <Text
                    dangerouslySetInnerHTML={{
                      __html: content.replace(/\\n/g, '<br/>')
                    }}
                  ></Text>
                ) : (
                  <Text>{content}</Text>
                )}
              </View>
            </AtModalContent>
          )}
          {isRenderAction && (
            <AtModalAction isSimple>
              {cancelText && (
                <Button onClick={handleCancel}>{cancelText}</Button>
              )}
              {confirmText && (
                <Button onClick={handleConfirm}>{confirmText}</Button>
              )}
            </AtModalAction>
          )}
        </View>
      </View>
    )
  }

  return (
    <View onTouchMove={handleTouchMove} className={rootClass}>
      <View className='at-modal__overlay' onClick={handleClickOverlay} />
      <View className='at-modal__container'>{children}</View>
    </View>
  )
}

AtModal.propTypes = {
  title: PropTypes.string,
  isOpened: PropTypes.bool,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  onClose: PropTypes.func,
  content: PropTypes.string,
  closeOnClickOverlay: PropTypes.bool,
  cancelText: PropTypes.string,
  confirmText: PropTypes.string
}

export default AtModal
