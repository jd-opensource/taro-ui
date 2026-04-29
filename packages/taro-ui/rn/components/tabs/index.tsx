import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { ScrollView, View } from '@tarojs/components'
import { CommonEvent, ITouchEvent } from '@tarojs/components/types/common'
import Taro from '@tarojs/taro'
import { AtTabsProps, AtTabsState } from '../../../types/tabs'
import { isTest, uuid } from '../../common/utils'

const ENV = Taro.getEnv()
const MIN_DISTANCE = 100
const MAX_INTERVAL = 10

export default class AtTabs extends React.Component<AtTabsProps, AtTabsState> {
  public static defaultProps: AtTabsProps
  public static propTypes: InferProps<AtTabsProps>

  private _tabId: string
  private _touchDot: number
  private _timer: NodeJS.Timeout | null
  private _interval: number
  private _isMoving: boolean
  private tabHeaderRef: any

  public constructor(props: AtTabsProps) {
    super(props)
    this.state = {
      _scrollLeft: 0,
      _scrollTop: 0,
      _scrollIntoView: ''
    }
    this._tabId = isTest() ? 'tabs-AOTU2018' : uuid()
    // 触摸时的原点
    this._touchDot = 0
    // 定时器
    this._timer = null
    // 滑动时间间隔
    this._interval = 0
    // 是否已经在滑动
    this._isMoving = false
  }

  tabLayoutMap = new Map()

  private updateState = (idx: number): void => {
    const { scroll, tabDirection } = this.props
    if (scroll) {
      // 标签栏滚动
      switch (ENV) {
        case Taro.ENV_TYPE.WEAPP:
        case Taro.ENV_TYPE.ALIPAY:
        case Taro.ENV_TYPE.SWAN: {
          const index = Math.max(idx - 1, 0)
          this.setState({
            _scrollIntoView: `tab${this._tabId}${index}`
          })
          break
        }
        case Taro.ENV_TYPE.WEB: {
          const index = Math.max(idx - 1, 0)
          const prevTabItem = this.tabHeaderRef.childNodes[index]
          prevTabItem &&
            this.setState({
              _scrollTop: prevTabItem.offsetTop,
              _scrollLeft: prevTabItem.offsetLeft
            })
          break
        }
        case Taro.ENV_TYPE.RN: {
          const layout = this.tabLayoutMap.get(idx)
          if (layout) {
            const scrollX = tabDirection === 'horizontal'
            const scrollY = tabDirection === 'vertical'
            if (scrollX) {
              let current = idx - 1
              let width = 0
              while (current > 0) {
                width += this.tabLayoutMap.get(current).width
                current--
              }
              this.setState({
                _scrollLeft: width
              })
            }
            if (scrollY) {
              let current = idx - 1
              let height = 0
              while (current > 0) {
                height += this.tabLayoutMap.get(current).height
                current--
              }
              this.setState({
                _scrollTop: height
              })
            }
          }
          break
        }
        default: {
          console.warn('AtTab 组件在该环境还未适配')
          break
        }
      }
    }
  }

  private handleClick(index: number, event: CommonEvent): void {
    this.props.onClick(index, event)
  }

  private handleTouchStart(e: ITouchEvent): void {
    const { swipeable, tabDirection } = this.props
    if (!swipeable || tabDirection === 'vertical') return
    // 获取触摸时的原点
    this._touchDot = e.touches[0].pageX
    this.clearMoveState()
    // 使用js计时器记录时间
    this._timer = setInterval(() => {
      this._interval++
    }, 100)
  }

  private handleTouchMove(e: ITouchEvent): void {
    const { swipeable, tabDirection, current, tabList } = this.props
    if (!swipeable || tabDirection === 'vertical') return

    const touchMove = (e as any).nativeEvent.pageX
    const moveDistance = touchMove - this._touchDot
    const maxIndex = tabList.length
    if (
      !this._isMoving &&
      this._interval < MAX_INTERVAL &&
      this._touchDot > 20
    ) {
      // 向左滑动
      if (current + 1 < maxIndex && moveDistance <= -MIN_DISTANCE) {
        this._isMoving = true
        this.handleClick(current + 1, e)

        // 向右滑动
      } else if (current - 1 >= 0 && moveDistance >= MIN_DISTANCE) {
        this._isMoving = true
        this.handleClick(current - 1, e)
      }
    }
  }

  private handleTouchEnd(): void {
    const { swipeable, tabDirection } = this.props
    if (!swipeable || tabDirection === 'vertical') return
    this.clearMoveState()
  }

  private clearMoveState(): void {
    this._timer && clearInterval(this._timer as NodeJS.Timeout)
    this._interval = 0
    this._timer = null
    this._isMoving = false
  }

  private getTabHeaderRef(): void {
    if (ENV === Taro.ENV_TYPE.WEB) {
      this.tabHeaderRef = document.getElementById(this._tabId)
    }
  }

  public UNSAFE_componentWillReceiveProps(nextProps: AtTabsProps): void {
    if (nextProps.scroll !== this.props.scroll) {
      this.getTabHeaderRef()
    }
    if (nextProps.current !== this.props.current) {
      this.updateState(nextProps.current)
    }
  }

  public componentDidMount(): void {
    this.getTabHeaderRef()
    this.updateState(this.props.current)
  }

  public componentWillUnmount(): void {
    this.tabHeaderRef = null
  }

  onLayout = idx => event => {
    this.tabLayoutMap.set(idx, event.nativeEvent.layout)
  }

  public render(): JSX.Element {
    const {
      customStyle = '',
      className,
      height,
      tabDirection,
      // animated,
      tabList,
      scroll,
      current
    } = this.props
    const { _scrollLeft, _scrollTop, _scrollIntoView } = this.state

    const heightStyle = height ? { height: parseInt(height) } : {}
    const underlineStyle = {
      height: tabDirection === 'vertical' ? `${tabList.length * 100}%` : 1,
      width: tabDirection === 'horizontal' ? `${tabList.length * 100}%` : 1
    }
    const bodyStyle: React.CSSProperties = {}
    // let transformStyle = [{ translateY: '' }]
    // let transformStyle = `translate3d(0px, -${current * 100}%, 0px)`
    // if (tabDirection === 'horizontal') {
    //   transformStyle = `translate3d(-${current * 100}%, 0px, 0px)`
    // }
    // Object.assign(bodyStyle, {
    //   transform: transformStyle,
    //   '-webkit-transform': transformStyle
    // })
    // if (!animated) {
    //   bodyStyle.transition = 'unset'
    // }

    const tabItems = tabList.map((item, idx) => {
      const itemCls = classNames({
        'at-tabs__item': true,
        'at-tabs__item--active': current === idx,
        [`at-tabs__item--${tabDirection}`]: true,
        [`at-tabs__item--${tabDirection}--active`]: current === idx
      })

      return (
        <View
          className={itemCls}
          style={{ textAlign: 'center' }}
          id={`tab${this._tabId}${idx}`}
          key={item.title}
          onClick={this.handleClick.bind(this, idx)}
          onLayout={this.onLayout(idx)}
        >
          {item.title}
          {/* <View
            className={classNames({
              'at-tabs__item-underline': true,
              'at-tabs__item-underline--active': current === idx,
            })}
          ></View> */}
        </View>
      )
    })

    const rootCls = classNames(
      {
        'at-tabs': true,
        'at-tabs--scroll': scroll,
        [`at-tabs--${tabDirection}`]: true,
        [`at-tabs--${ENV}`]: true
      },
      className
    )
    const scrollX = tabDirection === 'horizontal'
    const scrollY = tabDirection === 'vertical'

    return (
      <View
        className={rootCls}
        style={Object.assign({}, heightStyle, customStyle)}
      >
        {scroll ? (
          <ScrollView
            id={this._tabId}
            className={`at-tabs__header at-tabs__header--${tabDirection}`}
            style={heightStyle}
            scrollX={scrollX}
            scrollY={scrollY}
            scrollWithAnimation
            scrollLeft={_scrollLeft}
            scrollTop={_scrollTop}
            scrollIntoView={_scrollIntoView}
          >
            {tabItems}
          </ScrollView>
        ) : (
          <View id={this._tabId} className='at-tabs__header'>
            {tabItems}
          </View>
        )}
        <View
          className='at-tabs__body'
          onTouchStart={this.handleTouchStart.bind(this)}
          onTouchEnd={this.handleTouchEnd.bind(this)}
          onTouchMove={this.handleTouchMove.bind(this)}
          style={Object.assign({}, bodyStyle, heightStyle)}
        >
          <View className='at-tabs__underline' style={underlineStyle}></View>
          {this.props.children}
        </View>
      </View>
    )
  }
}

AtTabs.defaultProps = {
  customStyle: {},
  className: '',
  tabDirection: 'horizontal',
  height: '',
  current: 0,
  swipeable: true,
  scroll: false,
  animated: true,
  tabList: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: (): void => {}
}

AtTabs.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  height: PropTypes.string,
  tabDirection: PropTypes.oneOf(['horizontal', 'vertical']),
  current: PropTypes.number,
  swipeable: PropTypes.bool,
  scroll: PropTypes.bool,
  animated: PropTypes.bool,
  tabList: PropTypes.array,
  onClick: PropTypes.func
}
