import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { Text, View } from '@tarojs/components'
import { AtPaginationProps } from '../../../types/pagination'
import AtButton from '../button/index'

const MIN_MAXPAGE = 1
const getMaxPage = (maxPage = 0): number => {
  if (maxPage <= 0) return MIN_MAXPAGE
  return maxPage
}

const createPickerRange = (max: number): number[] => {
  const range = new Array(max).fill(0).map((_val, index) => index + 1)
  return range
}

function AtPagination({
  current = 1,
  total = 0,
  pageSize = 20,
  icon = false,
  customStyle = {},
  className,
  onPageChange
}: AtPaginationProps): JSX.Element {
  const initialMaxPage = getMaxPage(Math.ceil(total / pageSize))
  const [currentPage, setCurrentPage] = useState(current || 1)
  const [maxPage, setMaxPage] = useState(initialMaxPage)
  const [, setPickerRange] = useState(() => createPickerRange(initialMaxPage))

  useEffect(() => {
    const newMaxPage = getMaxPage(Math.ceil(total / pageSize))
    setMaxPage(prev => {
      if (newMaxPage !== prev) {
        setPickerRange(createPickerRange(newMaxPage))
        return newMaxPage
      }
      return prev
    })
    if (typeof current === 'number') {
      setCurrentPage(prev => (current !== prev ? current : prev))
    }
  }, [total, pageSize, current])

  const onPrev = (): void => {
    let nextPage = currentPage
    const originCur = nextPage
    nextPage -= 1
    nextPage = Math.max(1, nextPage)
    if (originCur === nextPage) return
    onPageChange && onPageChange({ type: 'prev', current: nextPage })
    setCurrentPage(nextPage)
  }

  const onNext = (): void => {
    let nextPage = currentPage
    const originCur = nextPage
    nextPage += 1
    nextPage = Math.min(maxPage, nextPage)
    if (originCur === nextPage) return
    onPageChange && onPageChange({ type: 'next', current: nextPage })
    setCurrentPage(nextPage)
  }

  const rootClassName = ['at-pagination']

  const prevDisabled = maxPage === MIN_MAXPAGE || currentPage === 1
  const nextDisabled = maxPage === MIN_MAXPAGE || currentPage === maxPage

  const classObject = {
    'at-pagination--icon': icon
  }

  return (
    <View
      className={classNames(rootClassName, classObject, className)}
      style={customStyle}
    >
      <View className='at-pagination__btn-prev'>
        {icon && (
          <AtButton onClick={onPrev} size='small' disabled={prevDisabled}>
            <Text className='at-icon at-icon-chevron-left'></Text>
          </AtButton>
        )}
        {!icon && (
          <AtButton onClick={onPrev} size='small' disabled={prevDisabled}>
            上一页
          </AtButton>
        )}
      </View>
      <View className='at-pagination__number'>
        <Text className='at-pagination__number-current'>{currentPage}</Text>/
        {maxPage}
      </View>
      <View className='at-pagination__btn-next'>
        {icon && (
          <AtButton onClick={onNext} size='small' disabled={nextDisabled}>
            <Text className='at-icon at-icon-chevron-right'></Text>
          </AtButton>
        )}
        {!icon && (
          <AtButton onClick={onNext} size='small' disabled={nextDisabled}>
            下一页
          </AtButton>
        )}
      </View>
    </View>
  )
}

AtPagination.propTypes = {
  current: PropTypes.number,
  total: PropTypes.number,
  pageSize: PropTypes.number,
  icon: PropTypes.bool,
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  onPageChange: PropTypes.func
}

export default AtPagination
