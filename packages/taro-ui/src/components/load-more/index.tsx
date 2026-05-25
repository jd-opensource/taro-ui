import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Text, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { AtLoadMoreProps } from '../../../types/load-more'
import AtActivityIndicator from '../activity-indicator/index'
import AtButton from '../button/index'

function AtLoadMore({
  className = '',
  customStyle = '',
  loadingText = '加载中',
  moreText = '查看更多',
  status = 'more',
  moreBtnStyle = '',
  noMoreTextStyle = '',
  noMoreText = '没有更多',
  onClick
}: AtLoadMoreProps): JSX.Element {
  const handleClick = (event: CommonEvent): void => {
    onClick && onClick(event)
  }

  let component: JSX.Element | null = null
  if (status === 'loading') {
    component = <AtActivityIndicator mode='center' content={loadingText} />
  } else if (status === 'more') {
    component = (
      <View className='at-load-more__cnt'>
        <AtButton full onClick={handleClick} customStyle={moreBtnStyle}>
          {moreText}
        </AtButton>
      </View>
    )
  } else {
    component = (
      <Text className='at-load-more__tip' style={noMoreTextStyle}>
        {noMoreText}
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
