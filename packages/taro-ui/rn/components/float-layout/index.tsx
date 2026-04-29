import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { ScrollView, Text, View } from '@tarojs/components'
import { Modal, Animated, Dimensions } from 'react-native'
import {
  AtFloatLayoutProps,
  AtFloatLayoutState
} from '../../../types/float-layout'
import { handleTouchScroll } from '../../common/utils'
import AtIcon from '../icon'

const duration = 300

export default class AtFloatLayout extends React.Component<
  AtFloatLayoutProps,
  AtFloatLayoutState
> {
  public static defaultProps: AtFloatLayoutProps
  public static propTypes: InferProps<AtFloatLayoutProps>

  public constructor(props: AtFloatLayoutProps) {
    super(props)

    const { isOpened } = props
    this.state = {
      _isOpened: isOpened,
      translateY: 0
    }
  }

  public UNSAFE_componentWillReceiveProps(nextProps: AtFloatLayoutProps): void {
    const { isOpened } = nextProps

    if (this.props.isOpened !== isOpened) {
      handleTouchScroll(isOpened)
    }

    if (isOpened !== this.state._isOpened) {
      this.animateLayout(isOpened)
    }
  }

  animating = false

  private animateLayout(isOpened: boolean, cb?: () => void): void {
    this.animating = true
    let fromValue
    let toValue
    let setStateDelay = 0
    if (isOpened) {
      fromValue = Dimensions.get('window').height
      toValue = 0
    } else {
      setStateDelay = duration
      fromValue = 0
      toValue = Dimensions.get('window').height
    }

    const translateY = new Animated.Value(fromValue)

    this.setState(
      {
        translateY
      },
      () => {
        setTimeout(() => {
          this.setState(
            {
              _isOpened: isOpened
            },
            () => {
              cb && cb()
            }
          )
        }, setStateDelay)

        Animated.timing(this.state.translateY, {
          toValue,
          duration,
          useNativeDriver: true
        }).start(() => {
          this.animating = false
        })
      }
    )
  }

  private handleClose = (): void => {
    const onClose = this.props.onClose as (() => void) | undefined
    if (typeof onClose === 'function') {
      onClose()
    }
  }

  private close = (): void => {
    if (this.animating) {
      return
    }
    this.animateLayout(false, this.handleClose)
  }

  public render(): JSX.Element {
    const { _isOpened, translateY } = this.state
    const {
      title,
      scrollY,
      scrollX,
      scrollTop,
      scrollLeft,
      upperThreshold,
      lowerThreshold,
      scrollWithAnimation
    } = this.props

    const rootClass = classNames(
      'at-float-layout',
      {
        'at-float-layout--active': _isOpened
      },
      this.props.className
    )

    return (
      <Modal
        animationType='none'
        transparent={true}
        visible={_isOpened}
        onRequestClose={this.close.bind(this)}
      >
        <View className={rootClass}>
          <View
            onClick={this.close.bind(this)}
            className='at-float-layout__overlay'
          />
          <Animated.View
            className='at-float-layout__container layout'
            style={{ transform: [{ translateY }] }}
          >
            {title ? (
              <View className='layout-header'>
                <Text className='layout-header__title'>{title}</Text>
                <View
                  onClick={this.close.bind(this)}
                  className='layout-header__btn-close'
                >
                  <AtIcon
                    value='close'
                    className='layout-header__btn-close__at-icon'
                  />
                </View>
              </View>
            ) : null}
            <View className='layout-body'>
              <ScrollView
                scrollY={scrollY}
                scrollX={scrollX}
                scrollTop={scrollTop}
                scrollLeft={scrollLeft}
                upperThreshold={upperThreshold}
                lowerThreshold={lowerThreshold}
                scrollWithAnimation={scrollWithAnimation}
                onScroll={this.props.onScroll}
                onScrollToLower={this.props.onScrollToLower}
                onScrollToUpper={this.props.onScrollToUpper}
                className='layout-body__content'
              >
                {this.props.children}
              </ScrollView>
            </View>
          </Animated.View>
        </View>
      </Modal>
    )
  }
}

AtFloatLayout.defaultProps = {
  title: '',
  isOpened: false,

  scrollY: true,
  scrollX: false,
  scrollWithAnimation: false
}

AtFloatLayout.propTypes = {
  title: PropTypes.string,
  isOpened: PropTypes.bool,
  scrollY: PropTypes.bool,
  scrollX: PropTypes.bool,
  scrollTop: PropTypes.number,
  scrollLeft: PropTypes.number,
  upperThreshold: PropTypes.number,
  lowerThreshold: PropTypes.number,
  scrollWithAnimation: PropTypes.bool,
  onClose: PropTypes.func,
  onScroll: PropTypes.func,
  onScrollToLower: PropTypes.func,
  onScrollToUpper: PropTypes.func
}
