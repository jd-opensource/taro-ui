import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { useEffect, useRef, useState } from 'react'
import { View } from '@tarojs/components'
import { AtDrawerProps } from '../../../types/drawer'
import AtList from '../list/index'
import AtListItem from '../list/item/index'

function AtDrawer({
  show = false,
  mask = true,
  width = '',
  right = false,
  items = [],
  className,
  children,
  onItemClick,
  onClose
}: AtDrawerProps): JSX.Element {
  const [animShow, setAnimShow] = useState(false)
  const [_show, setShow] = useState(show)
  const showStateRef = useRef(show)
  const isMountRef = useRef(true)
  const hideTimerRef = useRef<ReturnType<typeof setTimeout>>()
  const showTimerRef = useRef<ReturnType<typeof setTimeout>>()

  const onHide = (): void => {
    setShow(false)
    onClose && onClose()
  }

  const animHide = (): void => {
    setAnimShow(false)
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current)
    }
    hideTimerRef.current = setTimeout(() => {
      onHide()
    }, 300)
  }

  const runAnimShow = (): void => {
    setShow(true)
    if (showTimerRef.current) {
      clearTimeout(showTimerRef.current)
    }
    showTimerRef.current = setTimeout(() => {
      setAnimShow(true)
    }, 200)
  }

  useEffect(() => {
    showStateRef.current = _show
  }, [_show])

  useEffect(() => {
    if (isMountRef.current) {
      isMountRef.current = false
      if (show) {
        runAnimShow()
      }
      return
    }
    if (show !== showStateRef.current) {
      show ? runAnimShow() : animHide()
    }
  }, [show])

  useEffect(() => {
    return () => {
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current)
      }
      if (showTimerRef.current) {
        clearTimeout(showTimerRef.current)
      }
    }
  }, [])

  const onItemClickHandler = (index: number): void => {
    onItemClick && onItemClick(index)
    animHide()
  }

  const onMaskClick = (): void => {
    animHide()
  }

  const maskStyle = {
    display: mask ? 'block' : 'none',
    opacity: animShow ? 1 : 0
  }
  const listStyle = {
    width,
    transition: animShow
      ? 'all 225ms cubic-bezier(0, 0, 0.2, 1)'
      : 'all 195ms cubic-bezier(0.4, 0, 0.6, 1)'
  }

  const classObject = {
    'at-drawer--show': animShow,
    'at-drawer--right': right,
    'at-drawer--left': !right
  }

  return _show ? (
    <View className={classNames(['at-drawer'], classObject, className)}>
      <View
        className='at-drawer__mask'
        style={maskStyle}
        onClick={onMaskClick}
      ></View>

      <View className='at-drawer__content' style={listStyle}>
        {!!items && items.length ? (
          <AtList>
            {items.map((name, index) => (
              <AtListItem
                key={`${name}-${index}`}
                data-index={index}
                onClick={() => onItemClickHandler(index)}
                title={name}
                arrow='right'
              ></AtListItem>
            ))}
          </AtList>
        ) : (
          children
        )}
      </View>
    </View>
  ) : (
    <View></View>
  )
}

AtDrawer.propTypes = {
  show: PropTypes.bool,
  mask: PropTypes.bool,
  width: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string),
  onItemClick: PropTypes.func,
  onClose: PropTypes.func
}

export default AtDrawer
