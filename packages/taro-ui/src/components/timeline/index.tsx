import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Text, View } from '@tarojs/components'
import { AtTimelineProps } from '../../../types/timeline'

export default function AtTimeline({
  pending = false,
  items = [],
  customStyle = {},
  className,
  onClickItem
}: AtTimelineProps): JSX.Element {
  const rootClassName = ['at-timeline']
  if (pending) rootClassName.push('at-timeline--pending')

  const rootClassObject = {
    'at-timeline--pending': pending
  }

  const itemElems = items.map((item, index) => {
    const { title = '', color, icon, content = [] } = item

    const iconClass = classNames({
      'at-icon': true,
      [`at-icon-${icon}`]: icon
    })

    const itemRootClassName = ['at-timeline-item']
    if (color) itemRootClassName.push(`at-timeline-item--${color}`)

    const dotClass: string[] = []
    if (icon) {
      dotClass.push('at-timeline-item__icon')
    } else {
      dotClass.push('at-timeline-item__dot')
    }

    const handleItemClick = (itemIndex: number, e: any): void => {
      onClickItem?.(itemIndex, e)
    }

    return (
      <View
        className={classNames(itemRootClassName)}
        key={`at-timeline-item-${index}`}
        onClick={e => handleItemClick(index, e)}
      >
        <View className='at-timeline-item__tail'></View>
        <View className={classNames(dotClass)}>
          {icon && <Text className={iconClass}></Text>}
        </View>
        <View className='at-timeline-item__content'>
          <View className='at-timeline-item__content-item'>{title}</View>
          {content.map((sub, subIndex) => (
            <View
              className='at-timeline-item__content-item at-timeline-item__content--sub'
              key={subIndex}
            >
              {sub}
            </View>
          ))}
        </View>
      </View>
    )
  })
  return (
    <View
      className={classNames(rootClassName, rootClassObject, className)}
      style={customStyle}
    >
      {itemElems}
    </View>
  )
}

AtTimeline.propTypes = {
  pending: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.object),
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
}
