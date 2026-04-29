import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { Modal, Animated, Dimensions } from 'react-native'
import { AtDrawerProps, AtDrawerState } from '../../../types/drawer'
import AtList from '../list/index'
import AtListItem from '../list/item/index'

const duration = 300

export default class AtDrawer extends React.Component<
  AtDrawerProps,
  AtDrawerState
> {
  public static defaultProps: AtDrawerProps
  public static propTypes: InferProps<AtDrawerProps>

  public constructor(props: AtDrawerProps) {
    super(props)
    this.state = {
      // animShow: false,
      _show: props.show,
      translateX: 0
    }
  }

  // public componentDidMount(): void {
  //   const { _show } = this.state
  // }

  animating = false

  private onItemClick(index: number): void {
    this.props.onItemClick && this.props.onItemClick(index)
    this.animateDrawer(false)
  }

  private onHide(): void {
    if (this.animating) {
      return
    }
    this.animateDrawer(false, this.props.onClose)
  }

  private onMaskClick(): void {
    this.onHide()
  }

  public UNSAFE_componentWillReceiveProps(nextProps: AtDrawerProps): void {
    const { show } = nextProps
    if (show !== this.state._show) {
      this.animateDrawer(show)
    }
  }

  private animateDrawer(isOpened: boolean, cb?: () => void): void {
    this.animating = true
    let fromValue
    let toValue
    let setStateDelay = 0
    const direction = this.props.right ? 1 : -1
    // const offset = Dimensions.get('window').width - this.state._width
    if (isOpened) {
      fromValue = Dimensions.get('window').width * direction
      toValue = 0
    } else {
      setStateDelay = duration
      fromValue = 0
      toValue = Dimensions.get('window').width * direction
    }

    const translateX = new Animated.Value(fromValue)

    this.setState(
      {
        translateX
      },
      () => {
        setTimeout(() => {
          this.setState(
            {
              _show: isOpened
            },
            () => {
              cb && cb()
            }
          )
        }, setStateDelay)

        Animated.timing(this.state.translateX, {
          toValue,
          duration,
          useNativeDriver: true
        }).start(() => {
          this.animating = false
        })
      }
    )
  }

  public render(): JSX.Element {
    const { mask, right, items, width } = this.props
    const { _show, translateX } = this.state
    const rootClassName = ['at-drawer']

    const maskStyle = {
      opacity: _show ? 1 : 0,
      display: mask ? 'flex' : 'none'
    }

    const listStyle: Record<string, any> = {}

    if (width) {
      listStyle.width = Taro.pxTransform(Number(width) || 0)
    }

    const classObject = {
      'at-drawer--show': _show
    }

    const contentClass = {
      'at-drawer__content--right': right,
      'at-drawer__content--left': !right
    }

    return (
      <Modal
        animationType='none'
        transparent={true}
        visible={_show}
        onRequestClose={this.onMaskClick.bind(this)}
      >
        <View
          className={classNames(
            rootClassName,
            classObject,
            this.props.className
          )}
        >
          <View
            className='at-drawer__mask'
            style={maskStyle}
            onClick={this.onMaskClick.bind(this)}
          />

          <Animated.View
            className={classNames('at-drawer__content', contentClass)}
            style={{
              ...listStyle,
              transform: [{ translateX }]
            }}
          >
            {!!items && items.length ? (
              <AtList>
                {items.map((name, index) => (
                  <AtListItem
                    key={`${name}-${index}`}
                    data-index={index}
                    onClick={this.onItemClick.bind(this, index)}
                    title={name}
                    arrow='right'
                  ></AtListItem>
                ))}
              </AtList>
            ) : (
              this.props.children
            )}
          </Animated.View>
        </View>
      </Modal>
    )
  }
}

AtDrawer.defaultProps = {
  show: false,
  mask: true,
  width: '',
  right: false,
  items: []
}

AtDrawer.propTypes = {
  show: PropTypes.bool,
  mask: PropTypes.bool,
  width: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string),
  onItemClick: PropTypes.func,
  onClose: PropTypes.func
}
