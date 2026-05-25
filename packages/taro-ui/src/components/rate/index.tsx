import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Text, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { AtRateProps } from '../../../types/rate'
import { pxTransform } from '../../common/utils'

function AtRate({
  customStyle = '',
  className = '',
  value = 0,
  max = 5,
  size = 0,
  margin = 5,
  onChange
}: AtRateProps): JSX.Element {
  const handleClick = (event: CommonEvent): void => {
    onChange && onChange(event)
  }

  const iconStyle = {
    marginRight: pxTransform(margin)
  }
  const starIconStyle = {
    fontSize: size ? `${size}px` : ''
  }

  // 生成星星颜色 className 数组，方便在jsx中直接map
  const classNameArr: string[] = []
  const floorValue = Math.floor(value)
  const ceilValue = Math.ceil(value)
  for (let i = 0; i < max; i++) {
    if (floorValue > i) {
      classNameArr.push('at-rate__icon at-rate__icon--on')
    } else if (ceilValue - 1 === i) {
      classNameArr.push('at-rate__icon at-rate__icon--half')
    } else {
      classNameArr.push('at-rate__icon at-rate__icon--off')
    }
  }

  return (
    <View className={classNames('at-rate', className)} style={customStyle}>
      {classNameArr.map((cls, i) => (
        <View
          className={cls}
          key={`at-rate-star-${i}`}
          style={iconStyle}
          onClick={handleClick.bind(null, i + 1)}
        >
          <Text className='at-icon at-icon-star-2' style={starIconStyle}></Text>
          <View className='at-rate__left'>
            <Text
              className='at-icon at-icon-star-2'
              style={starIconStyle}
            ></Text>
          </View>
        </View>
      ))}
    </View>
  )
}

AtRate.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.number,
  max: PropTypes.number,
  margin: PropTypes.number,
  onChange: PropTypes.func
}

export default AtRate
