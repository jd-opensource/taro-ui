import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { View, Progress } from '@tarojs/components'
import { AtProgressProps } from '../../../types/progress'
import AtIcon from '../icon'

export default class AtProgress extends React.Component<AtProgressProps> {
  public static defaultProps: AtProgressProps
  public static propTypes: InferProps<AtProgressProps>

  get iconStatus(): 'close-circle' | 'check-circle' | 'clock' {
    const { status } = this.props
    if (status === 'error') {
      return 'close-circle'
    }
    if (status === 'success') {
      return 'check-circle'
    }
    return 'clock'
  }

  public render(): JSX.Element {
    const { color = '#78A4F4' } = this.props
    let { percent } = this.props
    const { strokeWidth, status, isHidePercent } = this.props

    if (typeof percent !== 'number') {
      percent = 0
    }

    if (percent < 0) {
      percent = 0
    } else if (percent > 100) {
      percent = 100
    }

    const rootClass = classNames(
      'at-progress',
      {
        [`at-progress--${status}`]: !!status
      },
      this.props.className
    )

    const iconClass = classNames('at-progress__at-icon', {
      'at-progress__at-icon--error': status === 'error',
      'at-progress__at-icon--success': status === 'success'
    })

    return (
      <View className={rootClass}>
        <View className='at-progress__outer'>
          <Progress
            percent={percent}
            strokeWidth={strokeWidth}
            active
            activeMode='forwards'
            activeColor={color}
            borderRadius={10}
          />
        </View>

        {!isHidePercent && (
          <View className='at-progress__content'>
            {!status || status === 'progress' ? (
              `${percent}%`
            ) : (
              // <Text className={iconClass}></Text>
              <AtIcon className={iconClass} value={this.iconStatus} />
            )}
          </View>
        )}
      </View>
    )
  }
}

AtProgress.defaultProps = {
  color: '#78A4F4'
}

AtProgress.propTypes = {
  color: PropTypes.string,
  status: PropTypes.string,
  percent: PropTypes.number,
  strokeWidth: PropTypes.number,
  isHidePercent: PropTypes.bool
}
