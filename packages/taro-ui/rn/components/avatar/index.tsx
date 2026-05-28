import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { Image, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { AtAvatarProps, AtAvatarState } from '../../../types/avatar'

let OpenData: any = null
if (process.env.TARO_ENV === 'rn') {
  OpenData = View
} else {
  OpenData = require('@tarojs/components')
}

const SIZE_CLASS = {
  large: 'large',
  normal: 'normal',
  small: 'small'
}

export default class AtAvatar extends React.Component<
  AtAvatarProps,
  AtAvatarState
> {
  public static defaultProps: AtAvatarProps
  public static propTypes: InferProps<AtAvatarProps>

  public constructor(props: AtAvatarProps) {
    super(props)
    this.state = {
      isWEAPP: Taro.getEnv() === Taro.ENV_TYPE.WEAPP,
      _width: 0
    }
  }

  private onLayout = (event: any): void => {
    const { width } = event.nativeEvent.layout
    this.setState({ _width: width })
  }

  public render(): JSX.Element {
    const { _width } = this.state
    const { size, circle, image, text, openData, customStyle } = this.props
    const rootClassName = ['at-avatar']
    const iconSize = SIZE_CLASS[size || 'normal']
    const classObject = {
      [`at-avatar--${iconSize}`]: iconSize,
      'at-avatar--circle': circle
    }

    let letter = ''
    if (text) letter = text[0]

    let elem: React.ReactNode
    if (openData && openData.type === 'userAvatarUrl' && this.state.isWEAPP) {
      elem = <OpenData type={openData.type}></OpenData>
    } else if (image) {
      elem = <Image className='at-avatar__img' src={image} />
    } else {
      // elem = <Text className='at-avatar__text'>{letter}</Text>
      // TODO: RN
      elem = letter
    }

    let style = customStyle
    if (typeof customStyle === 'object' && _width && circle) {
      style = { ...customStyle, borderRadius: _width / 2 }
    }

    return (
      <View
        className={classNames(rootClassName, classObject, this.props.className)}
        style={style}
        onLayout={this.onLayout}
      >
        {elem}
      </View>
    )
  }
}

AtAvatar.defaultProps = {
  size: 'normal',
  circle: false,
  text: '',
  image: '',
  customStyle: {},
  className: ''
}

AtAvatar.propTypes = {
  size: PropTypes.oneOf(['large', 'normal', 'small']),
  circle: PropTypes.bool,
  text: PropTypes.string,
  image: PropTypes.string,
  openData: PropTypes.object,
  customStyle: PropTypes.oneOfType([PropTypes.object]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
}
