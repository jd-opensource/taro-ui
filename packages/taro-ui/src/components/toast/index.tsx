import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { useEffect, useRef, useState } from 'react'
import { Image, Text, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { AtToastProps } from '../../../types/toast'
import statusImg from './img.json'

function AtToast({
  duration = 3000,
  isOpened = false,
  customStyle,
  text,
  icon,
  status,
  image,
  hasMask,
  className,
  onClick,
  onClose
}: AtToastProps): JSX.Element | null {
  const [_isOpened, setIsOpened] = useState(isOpened)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const isOpenedRef = useRef(_isOpened)
  isOpenedRef.current = _isOpened

  const clearTimmer = (): void => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }

  const handleClose = (event?: CommonEvent): void => {
    if (typeof onClose === 'function') {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      onClose(event!)
    }
  }

  const close = (): void => {
    if (isOpenedRef.current) {
      setIsOpened(false)
      handleClose()
      clearTimmer()
    }
  }

  const makeTimer = (timerDuration: number): void => {
    if (timerDuration === 0) {
      return
    }
    timerRef.current = setTimeout(() => {
      close()
    }, +timerDuration)
  }

  useEffect(() => {
    if (isOpened) {
      makeTimer(duration || 0)
      timerRef.current = null
    }
    // constructor: timer started then ref cleared
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const isMountRef = useRef(true)
  useEffect(() => {
    if (isMountRef.current) {
      isMountRef.current = false
      return
    }

    if (!isOpened) {
      close()
      return
    }

    if (!isOpenedRef.current) {
      setIsOpened(true)
    } else {
      clearTimmer()
    }
    makeTimer(duration || 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpened, duration])

  const handleClick = (event: CommonEvent): void => {
    if (status === 'loading') {
      return
    }
    if (onClick) {
      return onClick(event)
    }
    close()
  }

  /* eslint-disable @typescript-eslint/no-non-null-assertion */
  const realImg = image || statusImg[status!] || null
  const isRenderIcon = !!(icon && !(image || statusImg[status!]))
  /* eslint-enable @typescript-eslint/no-non-null-assertion */

  const bodyClass = classNames('toast-body', {
    'at-toast__body--custom-image': image,
    'toast-body--text': !realImg && !icon,
    [`at-toast__body--${status}`]: !!status
  })

  const iconClass = classNames('at-icon', {
    [`at-icon-${icon}`]: icon
  })

  return _isOpened ? (
    <View className={classNames('at-toast', className)}>
      {hasMask && <View className='at-toast__overlay' />}
      <View className={bodyClass} style={customStyle} onClick={handleClick}>
        <View className='toast-body-content'>
          {realImg ? (
            <View className='toast-body-content__img'>
              <Image
                className='toast-body-content__img-item'
                src={realImg}
                mode='scaleToFill'
              />
            </View>
          ) : null}
          {isRenderIcon && (
            <View className='toast-body-content__icon'>
              <Text className={iconClass} />
            </View>
          )}
          {text && (
            <View className='toast-body-content__info'>
              <Text>{text}</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  ) : null
}

AtToast.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  hasMask: PropTypes.bool,
  image: PropTypes.string,
  isOpened: PropTypes.bool,
  duration: PropTypes.number,
  status: PropTypes.oneOf(['', 'error', 'loading', 'success']),
  onClick: PropTypes.func,
  onClose: PropTypes.func
}

export default AtToast
