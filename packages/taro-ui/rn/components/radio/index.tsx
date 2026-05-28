import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { AtRadioProps, RadioOption } from '../../../types/radio'
import AtIcon from '../icon'

export default class AtRadio extends React.Component<AtRadioProps<any>> {
  public static defaultProps: AtRadioProps<any>
  public static propTypes: InferProps<AtRadioProps<any>>

  private handleClick(option: RadioOption<any>, event: CommonEvent): void {
    if (option.disabled) return
    this.props.onClick(option.value, event)
  }

  public render(): JSX.Element {
    const { customStyle, className, options, value, border } = this.props

    return (
      <View className={classNames('at-radio', className)} style={customStyle}>
        {options.map((option, index) => (
          <View
            key={option.value}
            onClick={this.handleClick.bind(this, option)}
            className={classNames({
              'at-radio__option': true,
              'at-radio__option--disabled': option.disabled
            })}
          >
            <View
              className={classNames({
                'at-radio__option-wrap': true,
                'at-radio__option-wrap--without-border':
                  !border || options.length === index + 1
              })}
            >
              <View className='at-radio__option-container'>
                <View
                  className={classNames({
                    'at-radio__title': true,
                    'at-radio__title--disabled': option.disabled
                  })}
                >
                  {option.label}
                </View>
                <View>
                  {value === option.value && (
                    <AtIcon
                      value='check'
                      className={classNames({
                        'at-radio__icon': true,
                        'at-radio__at-icon': true
                      })}
                    />
                  )}
                </View>
              </View>
              {option.desc && (
                <View
                  className={classNames({
                    'at-radio__desc': true,
                    'at-radio__desc--disabled': option.disabled
                  })}
                >
                  {option.desc}
                </View>
              )}
            </View>
          </View>
        ))}
      </View>
    )
  }
}

AtRadio.defaultProps = {
  customStyle: '',
  className: '',
  value: '',
  border: true,
  options: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: (): void => {}
}

AtRadio.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  value: PropTypes.string,
  options: PropTypes.array,
  onClick: PropTypes.func
}
