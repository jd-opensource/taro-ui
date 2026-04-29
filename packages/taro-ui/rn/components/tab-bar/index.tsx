import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { Image, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { AtTabBarProps, TabItem } from '../../../types/tab-bar'
import AtBadge from '../badge/index'
import AtIcon from '../icon'

export default class AtTabBar extends React.Component<AtTabBarProps> {
  public static defaultProps: AtTabBarProps
  public static propTypes: InferProps<AtTabBarProps>

  // constructor () {
  //   super(...arguments)
  //   this.state = {
  //     isIPhoneX: false
  //   }
  // }

  // componentDidMount () {
  //   const curEnv = Taro.getEnv()

  //   if (
  //     curEnv === Taro.ENV_TYPE.WEAPP &&
  //     Taro.getSystemInfoSync().model.indexOf('iPhone X') >= 0
  //   ) {
  //     this.setState({ isIPhoneX: true })
  //   }
  // }

  private handleClick(index: number, event: CommonEvent): void {
    this.props.onClick(index, event)
  }

  public render(): JSX.Element {
    const {
      customStyle = {},
      className,
      fixed,
      backgroundColor,
      tabList,
      current,
      color,
      iconSize,
      fontSize,
      selectedColor
    } = this.props
    // const { isIPhoneX } = this.state
    const defaultStyle = {
      color: color || ''
    }
    const selectedStyle = {
      color: selectedColor || ''
    }
    const titleStyle: React.CSSProperties = {}

    if (fontSize) {
      titleStyle.fontSize = +fontSize
    }

    const rootStyle = {
      backgroundColor: backgroundColor || ''
    }
    const imgStyle: any = {
      // width: iconSize,
      // height: iconSize
    }
    if (iconSize) {
      imgStyle.width = iconSize
      imgStyle.height = iconSize
    }

    return (
      <View
        className={classNames(
          {
            'at-tab-bar': true,
            'at-tab-bar--fixed': fixed
            // 'at-tab-bar--ipx': isIPhoneX
          },
          className
        )}
        style={Object.assign(rootStyle, customStyle)}
      >
        {tabList.map((item: TabItem, i: number) => (
          <View
            className={classNames('at-tab-bar__item', {
              'at-tab-bar__item--active': current === i
            })}
            style={current === i ? selectedStyle : defaultStyle}
            key={`tab-bar-${i}`}
            onClick={this.handleClick.bind(this, i)}
          >
            <View>
              {item.iconType ? (
                <AtBadge
                  dot={!!item.dot}
                  value={item.text}
                  maxValue={Number(item.max)}
                >
                  <View className='at-tab-bar__icon'>
                    {/* <Text
                      className={classNames(
                        `${item.iconPrefixClass || 'at-icon'}`,
                        {
                          [`${item.iconPrefixClass || 'at-icon'}-${
                            item.selectedIconType
                          }`]: current === i && item.selectedIconType,
                          [`${item.iconPrefixClass || 'at-icon'}-${
                            item.iconType
                          }`]: !(current === i && item.selectedIconType),
                        },
                      )}
                      style={{
                        color: current === i ? selectedColor : color,
                        fontSize: +(iconSize ? `${iconSize}` : ''),
                      }}
                    ></Text> */}
                    <AtIcon
                      value={item.iconType}
                      size={iconSize}
                      color={current === i ? selectedColor : color}
                      className='at-tab-bar__icon'
                    />
                  </View>
                </AtBadge>
              ) : null}
            </View>
            <View>
              {item.image ? (
                <AtBadge
                  dot={!!item.dot}
                  value={item.text}
                  maxValue={Number(item.max)}
                >
                  <View className='at-tab-bar__icon'>
                    <Image
                      className={classNames('at-tab-bar__inner-img', {
                        'at-tab-bar__inner-img--inactive': current !== i
                      })}
                      mode='widthFix'
                      src={item.selectedImage || item.image}
                      style={imgStyle}
                    ></Image>
                    <Image
                      className={classNames('at-tab-bar__inner-img', {
                        'at-tab-bar__inner-img--inactive': current === i
                      })}
                      mode='widthFix'
                      src={item.image}
                      style={imgStyle}
                    ></Image>
                  </View>
                </AtBadge>
              ) : null}
            </View>
            <View>
              <AtBadge
                dot={item.iconType || item.image ? false : !!item.dot}
                value={item.iconType || item.image ? '' : item.text}
                maxValue={item.iconType || item.image ? 0 : Number(item.max)}
              >
                <View
                  className='at-tab-bar__title'
                  style={{
                    ...titleStyle,
                    color: current === i ? selectedColor : color
                  }}
                >
                  {item.title}
                </View>
              </AtBadge>
            </View>
          </View>
        ))}
      </View>
    )
  }
}

AtTabBar.defaultProps = {
  customStyle: {},
  className: '',
  selectedColor: '#6190E8',
  color: '#333',
  fixed: false,
  current: 0,
  tabList: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: (): void => {}
}

AtTabBar.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  fixed: PropTypes.bool,
  backgroundColor: PropTypes.string,
  current: PropTypes.number,
  iconSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string,
  selectedColor: PropTypes.string,
  tabList: PropTypes.array,
  onClick: PropTypes.func
}
