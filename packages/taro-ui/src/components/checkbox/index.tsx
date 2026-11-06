import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Text, View } from '@tarojs/components'
import { AtCheckboxProps, CheckboxOption } from '../../../types/checkbox'
import { noop } from '../../common/utils'

function AtCheckbox<T>({
  customStyle = '',
  className = '',
  options = [],
  selectedList = [],
  onChange = noop
}: AtCheckboxProps<T>): JSX.Element {
  const handleClick = (option: CheckboxOption<T>): void => {
    const { disabled, value } = option
    if (disabled) return

    const selectedSet = new Set(selectedList)
    if (!selectedSet.has(value)) {
      selectedSet.add(value)
    } else {
      selectedSet.delete(value)
    }
    onChange([...selectedSet], value)
  }

  const rootCls = classNames('at-checkbox', className)

  return (
    <View className={rootCls} style={customStyle}>
      {options.map(option => {
        const { value, disabled, label, desc } = option
        const optionCls = classNames('at-checkbox__option', {
          'at-checkbox__option--disabled': disabled,
          'at-checkbox__option--selected': selectedList.includes(value)
        })

        return (
          <View
            className={optionCls}
            // React 的 key 只接受 string | number，这里与 runtime 的隐式转换保持一致
            key={String(value)}
            onClick={() => handleClick(option)}
          >
            <View className='at-checkbox__option-wrap'>
              <View className='at-checkbox__option-cnt'>
                <View className='at-checkbox__icon-cnt'>
                  <Text className='at-icon at-icon-check'></Text>
                </View>
                <View className='at-checkbox__title'>{label}</View>
              </View>
              {desc && <View className='at-checkbox__desc'>{desc}</View>}
            </View>
          </View>
        )
      })}
    </View>
  )
}

AtCheckbox.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  options: PropTypes.array,
  selectedList: PropTypes.array,
  onChange: PropTypes.func
}

export default AtCheckbox
