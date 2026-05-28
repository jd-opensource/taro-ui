import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { CommonEvent } from '@tarojs/components/types/common'
import { AtRateProps } from '../../../types/rate'
import AtIcon from '../icon'

export default class AtRate extends React.Component<AtRateProps> {
  public static defaultProps: AtRateProps
  public static propTypes: InferProps<AtRateProps>

  private handleClick(event: CommonEvent): void {
    this.props.onChange && this.props.onChange(event)
  }

  public render(): JSX.Element {
    const {
      customStyle,
      className,
      value = 0,
      max = 5,
      size,
      margin = 5
    } = this.props

    const iconStyle = {
      marginRight: Taro.pxTransform(margin)
    }
    // const starIconStyle = {
    //   fontSize: size ? `${size}px` : ''
    // }

    // 生成星星颜色 className 数组，方便在jsx中直接map
    const classNameArr: any[] = []
    const floorValue = Math.floor(value)
    const ceilValue = Math.ceil(value)
    for (let i = 0; i < max; i++) {
      if (floorValue > i) {
        classNameArr.push('at-rate__icon at-rate__icon--on'.split(' '))
      } else if (ceilValue - 1 === i) {
        classNameArr.push('at-rate__icon at-rate__icon--half'.split(' '))
      } else {
        classNameArr.push('at-rate__icon at-rate__icon--off'.split(' '))
      }
    }

    // [
    //   'at-rate__icon at-rate__icon--on',
    //   'at-rate__icon at-rate__icon--on',
    //   'at-rate__icon at-rate__icon--on',
    //   'at-rate__icon at-rate__icon--off',
    //   'at-rate__icon at-rate__icon--off'
    // ]

    return (
      <View className={classNames('at-rate', className)} style={customStyle}>
        {classNameArr.map(([cls, iconCls], i) => (
          <View
            className={cls}
            key={`at-rate-star-${i}`}
            style={iconStyle}
            onClick={this.handleClick.bind(this, i + 1)}
          >
            <AtIcon
              value='star-2'
              size={size}
              color={iconCls === 'at-rate__icon--on' ? '#ffca3e' : '#ececec'}
            />
            <View className='at-rate__left'>
              <AtIcon
                value='star-2'
                size={size}
                color={iconCls !== 'at-rate__icon--off' ? '#ffca3e' : '#ececec'}
              />
            </View>
          </View>
        ))}
      </View>
    )
  }
}

AtRate.defaultProps = {
  customStyle: '',
  className: '',
  size: 20,
  value: 0,
  max: 5,
  margin: 5
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
