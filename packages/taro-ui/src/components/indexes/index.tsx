import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { ScrollView, View } from '@tarojs/components'
import { CommonEvent, ITouchEvent } from '@tarojs/components/types/common'
import Taro from '@tarojs/taro'
import { AtIndexesProps, AtIndexesState, Item } from '../../../types/indexes'
import {
  delayQuerySelector,
  isTest,
  pxTransform,
  uuid
} from '../../common/utils'
import AtList from '../list/index'
import AtListItem from '../list/item/index'
import AtToast from '../toast/index'

const ENV = Taro.getEnv()

function AtIndexes({
  customStyle = '',
  className = '',
  animation = false,
  topKey = 'Top',
  isVibrate = true,
  isShowToast = true,
  list = [],
  onClick,
  onScrollIntoView,
  children
}: AtIndexesProps): JSX.Element {
  const [_scrollIntoView, setScrollIntoView] = useState('')
  const [_scrollTop, setScrollTop] = useState(0)
  const [_tipText, setTipText] = useState('')
  const [_isShowToast, setIsShowToast] = useState(false)
  const isWEB = Taro.getEnv() === Taro.ENV_TYPE.WEB
  const [currentIndex, setCurrentIndex] = useState(-1)

  const menuHeightRef = useRef(0)
  const startTopRef = useRef(0)
  const itemHeightRef = useRef(0)
  const touchCurrentIndexRef = useRef(-1)
  const [listId] = useState(() =>
    isTest() ? 'indexes-list-AOTU2018' : `list-${uuid()}`
  )
  const timeoutTimerRef = useRef<NodeJS.Timeout | number>()
  const listRef = useRef<HTMLElement | null>(null)
  const indexMapRef = useRef<
    { key: string; startHeight: number; endHeight: number }[]
  >([])

  const updateState = useCallback(
    (state: Partial<AtIndexesState>): void => {
      const {
        _scrollIntoView: nextScrollIntoView,
        _tipText: nextTipText,
        _scrollTop: nextScrollTop
      } = state
      setScrollIntoView(nextScrollIntoView!)
      setTipText(nextTipText!)
      setScrollTop(nextScrollTop!)
      setIsShowToast(isShowToast!)

      clearTimeout(timeoutTimerRef.current as number)
      timeoutTimerRef.current = setTimeout(() => {
        setTipText('')
        setIsShowToast(false)
      }, 3000)

      if (isVibrate) {
        Taro.vibrateShort()
      }
    },
    [isShowToast, isVibrate]
  )

  const jumpTarget = useCallback(
    (_scrollIntoViewTarget: string, idx: number): void => {
      const _tipTextValue = idx === 0 ? topKey : list[idx - 1].key

      if (ENV === Taro.ENV_TYPE.WEB) {
        delayQuerySelector('.at-indexes', 0).then(rect => {
          const targetOffsetTop = (
            listRef.current!.children[idx] as HTMLElement
          ).offsetTop
          const _scrollTopValue = targetOffsetTop - rect[0].top
          updateState({
            _scrollTop: _scrollTopValue,
            _scrollIntoView: _scrollIntoViewTarget,
            _tipText: _tipTextValue
          })
        })
        return
      }

      updateState({
        _scrollIntoView: _scrollIntoViewTarget,
        _tipText: _tipTextValue
      })
    },
    [list, topKey, updateState]
  )

  const jumpTargetByKey = useCallback(
    (key: string): void => {
      const index = list.findIndex(item => item.key === key)
      const targetView = `at-indexes__list-${key}`
      jumpTarget(targetView, index + 1)
    },
    [list, jumpTarget]
  )

  const initData = useCallback(async (): Promise<void> => {
    delayQuerySelector('.at-indexes__menu').then(rect => {
      const len = list.length
      menuHeightRef.current = rect[0].height
      startTopRef.current = rect[0].top
      itemHeightRef.current = Math.floor(menuHeightRef.current / (len + 1))
    })

    const headerHeight =
      (await delayQuerySelector('#at-indexes__top'))?.[0]?.height || 0
    const itemHeight =
      (await delayQuerySelector('.at-list__item'))?.[0].height || 0
    const titleHeight =
      (await delayQuerySelector('.at-indexes__list-title'))?.[0].height || 0

    indexMapRef.current = []
    list.forEach((dataList, i) => {
      if (i === 0) {
        indexMapRef.current.push({
          key: dataList.key,
          startHeight: headerHeight,
          endHeight:
            dataList.items.length * itemHeight + headerHeight + titleHeight
        })
      } else {
        const prev = indexMapRef.current[i - 1]
        indexMapRef.current.push({
          key: dataList.key,
          startHeight: prev.endHeight,
          endHeight:
            prev.endHeight + dataList.items.length * itemHeight + titleHeight
        })
      }
    })
  }, [list])

  const getAnchorIndex = useCallback((scrollTop: number): void => {
    const index = indexMapRef.current.findIndex(item => {
      return scrollTop >= item.startHeight && scrollTop < item.endHeight
    })

    setCurrentIndex(index)
  }, [])

  const handleClick = (item: Item): void => {
    onClick && onClick(item)
  }

  const handleTouchMove = (event: ITouchEvent): void => {
    event.stopPropagation()
    event.preventDefault()

    const pageY = event.touches[0].pageY
    const index = Math.floor(
      (pageY - startTopRef.current) / itemHeightRef.current
    )

    if (
      index >= 0 &&
      index <= list.length &&
      touchCurrentIndexRef.current !== index
    ) {
      touchCurrentIndexRef.current = index
      const key = index > 0 ? list[index - 1].key : 'top'
      const touchView = `at-indexes__list-${key}`
      jumpTarget(touchView, index)
    }
  }

  const handleTouchEnd = (): void => {
    touchCurrentIndexRef.current = -1
  }

  const handleScroll = (e: CommonEvent): void => {
    if (e && e.detail) {
      const scrollTop = e.detail.scrollTop

      setScrollTop(scrollTop)

      getAnchorIndex(scrollTop)
    }
  }

  useEffect(() => {
    onScrollIntoView && onScrollIntoView(jumpTargetByKey)
  }, [onScrollIntoView, jumpTargetByKey])

  const listLengthRef = useRef(list.length)

  useEffect(() => {
    if (ENV === Taro.ENV_TYPE.WEB) {
      listRef.current = document.getElementById(listId)
    }
    initData()
  }, [listId, initData])

  useEffect(() => {
    if (listLengthRef.current === list.length) return
    listLengthRef.current = list.length
    initData()
  }, [list.length, initData])

  const toastStyle = { minWidth: pxTransform(100) }
  const rootCls = classNames('at-indexes', className)

  const menuList = list.map((dataList, i) => {
    const { key } = dataList
    const targetView = `at-indexes__list-${key}`
    return (
      <View
        className={classNames('at-indexes__menu-item', {
          'at-indexes__menu-item--active': currentIndex === i
        })}
        key={key}
        onClick={(): void => jumpTarget(targetView, i + 1)}
      >
        {key}
      </View>
    )
  })

  const indexesList = list.map(dataList => (
    <View
      id={`at-indexes__list-${dataList.key}`}
      className='at-indexes__list'
      key={dataList.key}
    >
      <View className='at-indexes__list-title'>{dataList.title}</View>
      <AtList>
        {dataList.items &&
          dataList.items.map(item => (
            <AtListItem
              key={item.name}
              title={item.name}
              onClick={(): void => handleClick(item)}
            />
          ))}
      </AtList>
    </View>
  ))

  return (
    <View className={rootCls} style={customStyle}>
      <AtToast
        customStyle={toastStyle}
        isOpened={_isShowToast}
        text={_tipText}
        duration={2000}
      />
      <View
        className='at-indexes__menu'
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <View
          className='at-indexes__menu-item'
          onClick={(): void => jumpTarget('at-indexes__top', 0)}
        >
          {topKey}
        </View>
        {menuList}
      </View>
      <ScrollView
        className='at-indexes__body'
        id={listId}
        scrollY
        scrollWithAnimation={animation}
        // eslint-disable-next-line no-undefined
        scrollTop={isWEB ? _scrollTop : undefined}
        scrollIntoView={!isWEB ? _scrollIntoView : ''}
        onScroll={handleScroll}
      >
        <View className='at-indexes__content' id='at-indexes__top'>
          {children}
        </View>
        {indexesList}
      </ScrollView>
    </View>
  )
}

AtIndexes.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  animation: PropTypes.bool,
  isVibrate: PropTypes.bool,
  isShowToast: PropTypes.bool,
  topKey: PropTypes.string,
  list: PropTypes.array,
  onClick: PropTypes.func,
  onScrollIntoView: PropTypes.func
}

export default AtIndexes
