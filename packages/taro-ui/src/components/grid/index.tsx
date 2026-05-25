import classNames from 'classnames'
import _chunk from 'lodash/chunk'
import PropTypes from 'prop-types'
import React from 'react'
import { Image, Text, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { AtGridItem, AtGridProps } from '../../../types/grid'
import { mergeStyle } from '../../common/utils'

function AtGrid({
  data = [],
  mode = 'square',
  columnNum = 3,
  hasBorder = true,
  className,
  onClick
}: AtGridProps): JSX.Element | null {
  const handleClick = (
    item: AtGridItem,
    index: number,
    row: number,
    event: CommonEvent
  ): void => {
    if (typeof onClick === 'function') {
      const clickIndex = row * columnNum + index
      onClick(item, clickIndex, event)
    }
  }

  if (Array.isArray(data) && data.length === 0) {
    return null
  }

  const gridGroup = _chunk(data, columnNum)

  const bodyClass = classNames(
    ['at-grid__flex-item', 'at-grid-item', `at-grid-item--${mode}`],
    {
      'at-grid-item--no-border': !hasBorder
    }
  )

  return (
    <View className={classNames('at-grid', className)}>
      {gridGroup.map((item, i) => (
        <View className='at-grid__flex' key={`at-grid-group-${i}`}>
          {item.map((childItem, index) => (
            <View
              key={`at-grid-item-${index}`}
              className={classNames(bodyClass, {
                'at-grid-item--last': index === columnNum - 1
              })}
              onClick={event => handleClick(childItem, index, i, event)}
              style={{
                flex: `0 0 ${100 / columnNum}%`
              }}
            >
              <View className='at-grid-item__content'>
                <View className='at-grid-item__content-inner'>
                  <View className='content-inner__icon'>
                    {childItem.image && (
                      <Image
                        className='content-inner__img'
                        src={childItem.image}
                        mode='scaleToFill'
                      />
                    )}
                    {childItem.iconInfo && !childItem.image && (
                      <Text
                        className={classNames(
                          childItem.iconInfo.prefixClass || 'at-icon',
                          {
                            [`${childItem.iconInfo.prefixClass || 'at-icon'}-${
                              childItem.iconInfo.value
                            }`]: childItem.iconInfo.value
                          },
                          childItem.iconInfo.className
                        )}
                        style={mergeStyle(
                          {
                            color: childItem.iconInfo.color,
                            fontSize: `${childItem.iconInfo.size || 24}px`
                          },
                          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                          childItem.iconInfo!.customStyle!
                        )}
                      />
                    )}
                  </View>
                  <Text className='content-inner__text'>{childItem.value}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      ))}
    </View>
  )
}

AtGrid.propTypes = {
  mode: PropTypes.string,
  onClick: PropTypes.func,
  hasBorder: PropTypes.bool,
  columnNum: PropTypes.number,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      value: PropTypes.string,
      iconInfo: PropTypes.shape({
        size: PropTypes.number,
        value: PropTypes.string,
        color: PropTypes.string,
        prefixClass: PropTypes.string,
        customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        className: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
      })
    })
  )
}

export default AtGrid
