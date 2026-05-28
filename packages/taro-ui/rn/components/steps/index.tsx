/* eslint-disable @typescript-eslint/ban-ts-comment */
import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { Text, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { AtStepsProps } from '../../../types/steps'
import AtIcon from '../icon'

export default class AtSteps extends React.Component<AtStepsProps> {
  public static defaultProps: AtStepsProps
  public static propTypes: InferProps<AtStepsProps>

  private handleClick(current: number, event: CommonEvent): void {
    this.props.onChange(current, event)
  }

  public render(): JSX.Element {
    const { customStyle, className, items, current } = this.props

    return (
      <View className={classNames('at-steps', className)} style={customStyle}>
        {!!items &&
          items.map((item, i) => {
            const active = i === current
            const inactive = i !== current
            return (
              <View
                key={item.title}
                className={classNames({
                  'at-steps__item': true,
                  'at-steps__item--active': active,
                  'at-steps__item--inactive': inactive
                })}
                onClick={this.handleClick.bind(this, i)}
              >
                <View className='at-steps__circular-wrap'>
                  {i !== 0 && <View className='at-steps__left-line' />}
                  {item.status ? (
                    // <View
                    //   className={classNames({
                    //     'at-icon': true,
                    //     'at-icon-check-circle': item.status === 'success',
                    //     'at-icon-close-circle': item.status === 'error',
                    //     'at-steps__single-icon': true,
                    //     'at-steps__single-icon--success':
                    //       item.status === 'success',
                    //     'at-steps__single-icon--error': item.status === 'error',
                    //   })}
                    // ></View>
                    <AtIcon
                      className={classNames('at-icon', {
                        'at-steps__single-icon': true,
                        'at-steps__single-icon--success':
                          item.status === 'success',
                        'at-steps__single-icon--error': item.status === 'error'
                      })}
                      value={
                        item.status === 'success'
                          ? 'check-circle'
                          : 'close-circle'
                      }
                    />
                  ) : (
                    <View
                      className={classNames('at-steps__circular', {
                        'at-steps__circular--active': active
                      })}
                    >
                      {item.icon ? (
                        <AtIcon
                          className={classNames('at-icon', {
                            'at-steps__circle-icon': true,
                            'at-steps__circle-icon--active': active,
                            'at-steps__circle-icon--inactive': inactive
                          })}
                          value={item.icon.value}
                        />
                      ) : (
                        <Text
                          className={classNames({
                            'at-steps__num': true,
                            'at-steps__item--text__active': active,
                            'at-steps__item--inactive': inactive
                          })}
                        >
                          {i + 1}
                        </Text>
                      )}
                    </View>
                  )}
                  {i !== items.length - 1 && (
                    <View className='at-steps__right-line'></View>
                  )}
                </View>
                <Text
                  className='at-steps__title'
                  // @ts-ignore
                  numberOfLines={1}
                >
                  {item.title}
                </Text>
                <Text
                  className='at-steps__desc'
                  // @ts-ignore
                  numberOfLines={2}
                >
                  {item.desc}
                </Text>
              </View>
            )
          })}
      </View>
    )
  }
}

AtSteps.defaultProps = {
  customStyle: '',
  className: '',
  current: 0,
  items: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: (): void => {}
}

AtSteps.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  current: PropTypes.number,
  items: PropTypes.array,
  onChange: PropTypes.func
}
