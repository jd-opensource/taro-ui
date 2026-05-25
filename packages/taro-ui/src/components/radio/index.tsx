import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Text, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { AtRadioProps, RadioOption } from '../../../types/radio'
import { noop } from '../../common/utils'

function AtRadio({
  customStyle = '',
  className = '',
  value = '',
  options = [],
  onClick = noop
}: AtRadioProps<any>): JSX.Element {
  const handleClick = (option: RadioOption<any>, event: CommonEvent): void => {
    if (option.disabled) return
    onClick(option.value, event)
  }

  return (
    <View className={classNames('at-radio', className)} style={customStyle}>
      {options.map(option => (
        <View
          key={option.value}
          onClick={event => handleClick(option, event)}
          className={classNames({
            'at-radio__option': true,
            'at-radio__option--disabled': option.disabled
          })}
        >
          <View className='at-radio__option-wrap'>
            <View className='at-radio__option-container'>
              <View className='at-radio__title'>{option.label}</View>
              <View
                className={classNames({
                  'at-radio__icon': true,
                  'at-radio__icon--checked': value === option.value
                })}
              >
                <Text className='at-icon at-icon-check'></Text>
              </View>
            </View>
            {option.desc && (
              <View className='at-radio__desc'>{option.desc}</View>
            )}
          </View>
        </View>
      ))}
    </View>
  )
}

AtRadio.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  value: PropTypes.string,
  options: PropTypes.array,
  onClick: PropTypes.func
}

export default AtRadio
