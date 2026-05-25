import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { useEffect, useRef, useState } from 'react'
import { View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { AtActionSheetProps } from '../../../types/action-sheet'
import AtActionSheetBody from './body/index'
import AtActionSheetFooter from './footer/index'
import AtActionSheetHeader from './header/index'

function AtActionSheet({
  title = '',
  cancelText = '',
  isOpened = false,
  className,
  children,
  onClose,
  onCancel
}: AtActionSheetProps): JSX.Element {
  const [_isOpened, setIsOpened] = useState(isOpened)
  const prevIsOpenedPropRef = useRef(isOpened)

  const handleClose = (): void => {
    if (typeof onClose === 'function') {
      onClose()
    }
  }

  useEffect(() => {
    if (prevIsOpenedPropRef.current !== isOpened) {
      setIsOpened(prev => {
        if (isOpened !== prev) {
          if (!isOpened) {
            handleClose()
          }
          return isOpened
        }
        return prev
      })
      prevIsOpenedPropRef.current = isOpened
    }
  }, [isOpened])

  const close = (): void => {
    setIsOpened(false)
    handleClose()
  }

  const handleCancel = (): void => {
    if (typeof onCancel === 'function') {
      return onCancel()
    }
    close()
  }

  const handleTouchMove = (e: CommonEvent): void => {
    e.stopPropagation()
    e.preventDefault()
  }

  const rootClass = classNames(
    'at-action-sheet',
    {
      'at-action-sheet--active': _isOpened
    },
    className
  )

  return (
    <View className={rootClass} onTouchMove={handleTouchMove}>
      <View onClick={close} className='at-action-sheet__overlay' />
      <View className='at-action-sheet__container'>
        {title && <AtActionSheetHeader>{title}</AtActionSheetHeader>}
        <AtActionSheetBody>{children}</AtActionSheetBody>
        {cancelText && (
          <AtActionSheetFooter onClick={handleCancel}>
            {cancelText}
          </AtActionSheetFooter>
        )}
      </View>
    </View>
  )
}

AtActionSheet.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func,
  onCancel: PropTypes.func,
  isOpened: PropTypes.bool.isRequired,
  cancelText: PropTypes.string
}

export default AtActionSheet
