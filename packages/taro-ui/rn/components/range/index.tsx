import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { AtRangeProps, AtRangeState } from '../../../types/range'
import '../../style/components/range.scss'

export default class AtRange extends React.Component<
  AtRangeProps,
  AtRangeState
> {
  public static defaultProps: AtRangeProps
  public static propTypes: InferProps<AtRangeProps>

  private width: number
  private left: number
  private deltaValue: number
  private currentSlider: string

  public constructor(props: AtRangeProps) {
    super(props)
    const { min = 0, max = 100 } = props
    // range 宽度
    this.width = 0
    // range 到屏幕左边的距离
    this.left = 0
    this.deltaValue = max - min
    this.currentSlider = ''
    this.state = {
      aX: 0,
      bX: 0
    }
  }

  private handleClick = (event: CommonEvent): void => {
    if (this.currentSlider && !this.props.disabled) {
      let sliderValue = 0
      // const detail = getEventDetail(event)
      // sliderValue = detail.x - this.left
      const x = event.detail.x
      sliderValue = x - this.left
      this.setSliderValue(this.currentSlider, sliderValue, 'onChange')
    }
  }

  private handleTouchMove(sliderName: string, event: any): void {
    if (this.props.disabled) return

    const clientX = event.nativeEvent.pageX
    this.setSliderValue(sliderName, clientX - this.left, 'onChange')
  }

  private handleTouchEnd(sliderName: string): void {
    if (this.props.disabled) return

    this.currentSlider = sliderName
    this.triggerEvent('onAfterChange')
  }

  private setSliderValue(
    sliderName: string,
    targetValue: number,
    funcName: string
  ): void {
    const distance = Math.min(Math.max(targetValue, 0), this.width)
    const sliderValue = Math.floor((distance / this.width) * 100)
    if (funcName) {
      this.setState(
        {
          [sliderName]: sliderValue
        },
        () => this.triggerEvent(funcName)
      )
    } else {
      this.setState({
        [sliderName]: sliderValue
      })
    }
  }

  private setValue(value: number[]): void {
    const { min = 0 } = this.props
    const aX = Math.round(((value[0] - min) / this.deltaValue) * 100) // fix issue #670
    const bX = Math.round(((value[1] - min) / this.deltaValue) * 100) // fix issue #670
    this.setState({ aX, bX })
  }

  private triggerEvent(funcName: string): void {
    const { min = 0, max = 100 } = this.props
    const { aX, bX } = this.state
    const a = Math.round((aX / 100) * this.deltaValue) + min // fix issue #670
    const b = Math.round((bX / 100) * this.deltaValue) + min // fix issue #670
    const result = [a, b]
      .map(value => Math.min(max, Math.max(min, value)))
      .sort((x, y) => x - y) as [number, number]

    if (funcName === 'onChange') {
      this.props.onChange && this.props.onChange(result)
    } else if (funcName === 'onAfterChange') {
      this.props.onAfterChange && this.props.onAfterChange(result)
    }
  }

  // private updatePos(): void {
  //   delayQuerySelector('.at-range__container', 0).then(rect => {
  //     this.width = Math.round(rect[0].width)
  //     this.left = Math.round(rect[0].left)
  //   })
  // }

  private onLayout = (event: any): void => {
    const { width, x } = event.nativeEvent.layout
    this.width = width
    this.left = x
  }

  public UNSAFE_componentWillReceiveProps(nextProps: AtRangeProps): void {
    const { value } = nextProps
    // this.updatePos()
    if (
      this.props.value![0] !== value![0] ||
      this.props.value![1] !== value![1]
    ) {
      this.setValue(value!)
    }
  }

  public componentDidMount(): void {
    const { value } = this.props
    // this.updatePos()
    this.setValue(value!)
  }

  public render(): JSX.Element {
    const {
      className,
      customStyle,
      sliderStyle,
      railStyle,
      trackStyle,
      blockSize,
      disabled
    } = this.props

    const rootCls = classNames(
      'at-range',
      {
        'at-range--disabled': disabled
      },
      className
    )

    const { aX, bX } = this.state
    // const sliderCommonStyle = {
    //   width: blockSize ? `${blockSize}PX` : '',
    //   height: blockSize ? `${blockSize}PX` : '',
    //   marginLeft: blockSize ? `${-blockSize / 2}PX` : ''
    // }
    const sliderCommonStyle: React.CSSProperties = {}
    if (blockSize) {
      sliderCommonStyle.width = Taro.pxTransform(blockSize)
      sliderCommonStyle.height = Taro.pxTransform(blockSize)
      sliderCommonStyle.marginLeft = Taro.pxTransform(-blockSize / 2)
    }

    const sliderAStyle = {
      ...sliderCommonStyle,
      left: `${aX}%`
    }
    const sliderBStyle = {
      ...sliderCommonStyle,
      left: `${bX}%`
    }
    const containerStyle: React.CSSProperties = {}
    if (blockSize) {
      containerStyle.height = Taro.pxTransform(blockSize)
    }
    // const containerStyle = {
    //   height: blockSize ? `${blockSize}PX` : ''
    // }
    const smallerX = Math.min(aX, bX)
    const deltaX = Math.abs(aX - bX)
    const atTrackStyle = {
      left: `${smallerX}%`,
      width: `${deltaX}%`
    }

    const shadowStyle = {
      shadowOffset: {
        width: 0,
        height: 0
      },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 2
    }

    return (
      <View className={rootCls} style={customStyle} onClick={this.handleClick}>
        <View
          className='at-range__container'
          style={containerStyle}
          onLayout={this.onLayout}
        >
          <View className='at-range__rail' style={railStyle}></View>
          <View
            className='at-range__track'
            style={Object.assign({}, atTrackStyle, trackStyle!)}
          ></View>
          <View
            className='at-range__slider'
            style={Object.assign({}, shadowStyle, sliderAStyle, sliderStyle!)}
            onTouchMove={this.handleTouchMove.bind(this, 'aX')}
            onTouchEnd={this.handleTouchEnd.bind(this, 'aX')}
          ></View>
          <View
            className='at-range__slider'
            style={Object.assign({}, shadowStyle, sliderBStyle, sliderStyle!)}
            onTouchMove={this.handleTouchMove.bind(this, 'bX')}
            onTouchEnd={this.handleTouchEnd.bind(this, 'bX')}
          ></View>
        </View>
      </View>
    )
  }
}

AtRange.defaultProps = {
  customStyle: '',
  className: '',
  sliderStyle: '',
  railStyle: '',
  trackStyle: '',
  value: [0, 0],
  min: 0,
  max: 100,
  disabled: false,
  blockSize: 0
}

AtRange.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  sliderStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  railStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  trackStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  value: PropTypes.array,
  min: PropTypes.number,
  max: PropTypes.number,
  disabled: PropTypes.bool,
  blockSize: PropTypes.number,
  onChange: PropTypes.func,
  onAfterChange: PropTypes.func
}
