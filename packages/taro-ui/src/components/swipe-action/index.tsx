import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react'
import Taro from '@tarojs/taro'
import { Text, View, MovableArea, MovableView } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import {
  AtSwipeActionProps,
  AtSwipeActionState,
  SwipeActionOption
} from '../../../types/swipe-action'
import { uuid, delayGetClientRect } from '../../common/utils'
import AtSwipeActionOptions from './options/index'

export type AtSwipeActionInstance = {
  state: AtSwipeActionState
  onChange: (e: { detail: { x: number } }) => void
  onTouchEnd: (e: CommonEvent) => void
}

const AtSwipeAction = forwardRef<AtSwipeActionInstance, AtSwipeActionProps>(
  function AtSwipeAction(
    {
      options = [],
      isOpened = false,
      disabled = false,
      autoClose = false,
      className,
      children,
      onClick,
      onOpened,
      onClosed
    },
    ref
  ): JSX.Element {
    const [componentId] = useState(() => uuid())
    const [offsetSize, setOffsetSize] = useState(0)
    const [_isOpened, setIsOpened] = useState(!!isOpened)
    const [eleWidth, setEleWidth] = useState(0)
    const [maxOffsetSize, setMaxOffsetSize] = useState(0)
    const moveXRef = useRef(offsetSize)

    const getMaxOffsetSize = useCallback(async (): Promise<void> => {
      const actionOptionsRect = await delayGetClientRect({
        selectorStr: `#swipeActionOptions-${componentId}`
      })

      setMaxOffsetSize(actionOptionsRect[0].width)
    }, [componentId])

    const getAreaWidth = useCallback(async (): Promise<void> => {
      const systemInfo = await Taro.getSystemInfo()
      setEleWidth(systemInfo.windowWidth)
    }, [])

    const _reset = useCallback(
      (opened: boolean): void => {
        if (opened) {
          if (process.env.TARO_ENV === 'jd') {
            setIsOpened(true)
            setOffsetSize(-maxOffsetSize + 0.01)
          } else {
            setIsOpened(true)
            setOffsetSize(-maxOffsetSize)
          }
        } else {
          setOffsetSize(moveXRef.current)
          setOffsetSize(0)
          setIsOpened(false)
        }
      },
      [maxOffsetSize]
    )

    useEffect(() => {
      getAreaWidth()
    }, [getAreaWidth])

    useEffect(() => {
      if (eleWidth > 0) {
        getMaxOffsetSize()
      }
    }, [eleWidth, getMaxOffsetSize])

    const isOpenedPropRef = useRef(isOpened)
    useEffect(() => {
      if (isOpenedPropRef.current === isOpened) return
      isOpenedPropRef.current = isOpened
      if (isOpened !== _isOpened) {
        moveXRef.current = isOpened ? 0 : maxOffsetSize
        _reset(!!isOpened)
      }
    }, [isOpened, _isOpened, maxOffsetSize, _reset])

    const handleOpened = (event: CommonEvent): void => {
      if (typeof onOpened === 'function') {
        onOpened(event)
      }
    }

    const handleClosed = (event: CommonEvent): void => {
      if (typeof onClosed === 'function') {
        onClosed(event)
      }
    }

    const handleClick = (
      item: SwipeActionOption,
      index: number,
      event: CommonEvent
    ): void => {
      if (typeof onClick === 'function') {
        onClick(item, index, event)
      }
      if (autoClose) {
        _reset(false)
        handleClosed(event)
      }
    }

    const onTouchEnd = (e: CommonEvent): void => {
      if (Math.abs(moveXRef.current) < maxOffsetSize / 2) {
        _reset(false)
        handleClosed(e)
      } else {
        _reset(true)
        handleOpened(e)
      }
    }

    const onChange = (e: { detail: { x: number } }): void => {
      moveXRef.current = e.detail.x
    }

    const stateRef = useRef<AtSwipeActionState>({
      componentId,
      offsetSize,
      _isOpened,
      needAnimation: false,
      eleWidth,
      maxOffsetSize
    })
    stateRef.current = {
      componentId,
      offsetSize,
      _isOpened,
      needAnimation: false,
      eleWidth,
      maxOffsetSize
    }

    useImperativeHandle(
      ref,
      () => ({
        get state() {
          return stateRef.current
        },
        onChange,
        onTouchEnd
      }),
      [onChange, onTouchEnd]
    )

    const rootClass = classNames('at-swipe-action', className)

    return (
      <View
        id={`swipeAction-${componentId}`}
        className={rootClass}
        style={{
          width: `${eleWidth}px`
        }}
      >
        <MovableArea
          className='at-swipe-action__area'
          style={{
            width: `${eleWidth}px`
          }}
        >
          <MovableView
            className='at-swipe-action__content'
            direction='horizontal'
            damping={50}
            x={offsetSize}
            onTouchEnd={onTouchEnd}
            onChange={onChange}
            disabled={disabled}
            style={{
              width: `${eleWidth + maxOffsetSize}px`
            }}
          >
            {children}
            {Array.isArray(options) && options.length > 0 ? (
              <AtSwipeActionOptions
                options={options}
                componentId={componentId}
                customStyle={{
                  opacity: maxOffsetSize ? 1 : 0
                }}
              >
                {options.map((item, key) => (
                  <View
                    key={`${item.text}-${key}`}
                    style={item.style}
                    onClick={(e): void => handleClick(item, key, e)}
                    className={classNames(
                      'at-swipe-action__option',
                      item.className
                    )}
                  >
                    <Text className='option__text'>{item.text}</Text>
                  </View>
                ))}
              </AtSwipeActionOptions>
            ) : null}
          </MovableView>
        </MovableArea>
      </View>
    )
  }
)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
;(AtSwipeAction as any).propTypes = {
  isOpened: PropTypes.bool,
  disabled: PropTypes.bool,
  autoClose: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      style: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      className: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string,
        PropTypes.array
      ])
    })
  ),

  onClick: PropTypes.func,
  onOpened: PropTypes.func,
  onClosed: PropTypes.func
}

export default AtSwipeAction
