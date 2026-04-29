import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { View } from '@tarojs/components'
import { Animated } from 'react-native'
import Taro from '@tarojs/taro'
import { AtMessageProps, AtMessageState } from '../../../types/message'

export default class AtMessage extends React.Component<
  AtMessageProps,
  AtMessageState
> {
  public static defaultProps: AtMessageProps
  public static propTypes: InferProps<AtMessageProps>

  private _timer: NodeJS.Timeout | number | null

  public constructor(props: AtMessageProps) {
    super(props)
    this.state = {
      _isOpened: false,
      _message: '',
      _type: 'info',
      _duration: 3000,
      _height: 0,
      translateY: 0
    }
    this._timer = null
  }

  private bindMessageListener(): void {
    Taro.eventCenter.on('atMessage', (options = {}) => {
      const { message, type, duration } = options
      const fromValue = (this.state._height || 0) * -1
      const newState = {
        _isOpened: true,
        _message: message,
        _type: type,
        _duration: duration || this.state._duration,
        translateY: new Animated.Value(fromValue)
      }
      this.setState(newState, () => {
        Animated.timing(this.state.translateY, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true
        }).start(() => {
          // this.animating = false
        })
        clearTimeout(this._timer as number)
        this._timer = setTimeout(() => {
          this.setState({ translateY: new Animated.Value(0) }, () => {
            Animated.timing(this.state.translateY, {
              toValue: fromValue,
              duration: 300,
              useNativeDriver: true
            }).start(() => {
              this.setState({
                _isOpened: false
              })
            })
          })
        }, this.state._duration)
      })
    })
    // 绑定函数
    Taro.atMessage = Taro.eventCenter.trigger.bind(
      Taro.eventCenter,
      'atMessage'
    )
  }

  public componentDidShow(): void {
    this.bindMessageListener()
  }

  public componentDidMount(): void {
    this.bindMessageListener()
  }

  public componentDidHide(): void {
    Taro.eventCenter.off('atMessage')
  }

  public componentWillUnmount(): void {
    Taro.eventCenter.off('atMessage')
  }

  private onLayout(event): void {
    const { height: _height } = event.nativeEvent.layout
    this.setState({ _height })
  }

  public render(): JSX.Element {
    const { className, customStyle } = this.props
    const { _message, _isOpened, _type, translateY } = this.state
    const rootCls = classNames(
      {
        'at-message': true,
        'at-message--show': _isOpened,
        'at-message--hidden': !_isOpened
      },
      `at-message--${_type}`,
      className
    )

    return (
      <Animated.View
        className={rootCls}
        onLayout={this.onLayout.bind(this)}
        style={Object.assign({}, customStyle as object, {
          transform: [{ translateY }]
        })}
      >
        <View className='at-message--content'>{_message}</View>
      </Animated.View>
    )
  }
}

AtMessage.defaultProps = {
  customStyle: {},
  className: ''
}

AtMessage.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
}
