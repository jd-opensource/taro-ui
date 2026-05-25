import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { View } from '@tarojs/components'
import Taro, { useDidHide, useDidShow } from '@tarojs/taro'
import { AtMessageProps } from '../../../types/message'

function AtMessage({
  customStyle = '',
  className = ''
}: AtMessageProps): JSX.Element {
  const [_isOpened, setIsOpened] = useState(false)
  const [_message, setMessage] = useState('')
  const [_type, setType] = useState('info')
  const durationRef = useRef(3000)
  const timerRef = useRef<NodeJS.Timeout | number | null>(null)

  const bindMessageListener = useCallback((): void => {
    Taro.eventCenter.on('atMessage', (options = {}) => {
      const { message, type, duration } = options
      const newDuration = duration || durationRef.current
      durationRef.current = newDuration
      setIsOpened(true)
      setMessage(message)
      setType(type)
      clearTimeout(timerRef.current as number)
      timerRef.current = setTimeout(() => {
        setIsOpened(false)
      }, newDuration)
    })
    Taro.atMessage = Taro.eventCenter.trigger.bind(
      Taro.eventCenter,
      'atMessage'
    )
  }, [])

  useEffect(() => {
    bindMessageListener()
    return () => {
      Taro.eventCenter.off('atMessage')
    }
  }, [bindMessageListener])

  useDidShow(() => {
    bindMessageListener()
  })

  useDidHide(() => {
    Taro.eventCenter.off('atMessage')
  })

  const rootCls = classNames(
    {
      'at-message': true,
      'at-message--show': _isOpened,
      'at-message--hidden': !_isOpened
    },
    `at-message--${_type}`,
    className
  )

  return (
    <View className={rootCls} style={customStyle}>
      {_message}
    </View>
  )
}

AtMessage.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
}

export default AtMessage
