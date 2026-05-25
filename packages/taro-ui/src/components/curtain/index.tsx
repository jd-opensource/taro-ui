import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { AtCurtainProps } from '../../../types/curtain'
import { noop } from '../../common/utils'

function AtCurtain({
  className = '',
  customStyle = '',
  isOpened = false,
  closeBtnPosition = 'bottom',
  onClose = noop,
  children
}: AtCurtainProps): JSX.Element {
  const handleClose = (e: CommonEvent): void => {
    e.stopPropagation()
    onClose(e)
  }

  const stopPropagation = (e: CommonEvent): void => {
    e.stopPropagation()
  }

  const curtainClass = classNames(
    {
      'at-curtain': true,
      'at-curtain--closed': !isOpened
    },
    className
  )
  const btnCloseClass = classNames({
    'at-curtain__btn-close': true,
    [`at-curtain__btn-close--${closeBtnPosition}`]: closeBtnPosition
  })

  return (
    <View
      className={curtainClass}
      style={customStyle}
      onClick={stopPropagation}
    >
      <View className='at-curtain__container'>
        <View className='at-curtain__body'>
          {children}
          <View className={btnCloseClass} onClick={handleClose}></View>
        </View>
      </View>
    </View>
  )
}

AtCurtain.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  isOpened: PropTypes.bool,
  closeBtnPosition: PropTypes.string,
  onClose: PropTypes.func
}

export default AtCurtain
