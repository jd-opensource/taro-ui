import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Text, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { useComponentLocale } from '../../hooks/useComponentLocale'
import { AtLoadMoreProps } from '../../../types/load-more'
import AtActivityIndicator from '../activity-indicator/index'
import AtButton from '../button/index'

function AtLoadMore({
  className = '',
  customStyle = '',
  loadingText,
  moreText,
  status = 'more',
  moreBtnStyle = '',
  noMoreTextStyle = '',
  noMoreText,
  onClick
}: AtLoadMoreProps): JSX.Element {
  const locale = useComponentLocale('LoadMore')
  const resolvedLoadingText = loadingText ?? locale.loadingText
  const resolvedMoreText = moreText ?? locale.moreText
  const resolvedNoMoreText = noMoreText ?? locale.noMoreText
  const handleClick = (event: CommonEvent): void => {
    onClick && onClick(event)
  }

  let component: JSX.Element | null = null
  if (status === 'loading') {
    component = (
      <AtActivityIndicator mode='center' content={resolvedLoadingText} />
    )
  } else if (status === 'more') {
    component = (
      <View className='at-load-more__cnt'>
        <AtButton full onClick={handleClick} customStyle={moreBtnStyle}>
          {resolvedMoreText}
        </AtButton>
      </View>
    )
  } else {
    component = (
      <Text className='at-load-more__tip' style={noMoreTextStyle}>
        {resolvedNoMoreText}
      </Text>
    )
  }

  return (
    <View className={classNames('at-load-more', className)} style={customStyle}>
      {component}
    </View>
  )
}

AtLoadMore.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  noMoreTextStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  moreBtnStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  status: PropTypes.oneOf(['more', 'loading', 'noMore']),
  loadingText: PropTypes.string,
  moreText: PropTypes.string,
  noMoreText: PropTypes.string,
  onClick: PropTypes.func
}

export default AtLoadMore
