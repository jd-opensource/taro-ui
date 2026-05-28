import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { Image, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
// eslint-disable-next-line
import RootSiblings from 'react-native-root-siblings'
import AtIcon from '../icon'
import { AtToastProps, AtToastState } from '../../../types/toast'
import statusImg from './img.json'

export default class AtToast extends React.Component<
  AtToastProps,
  AtToastState
> {
  public static defaultProps: AtToastProps
  public static propTypes: InferProps<AtToastProps>

  private _timer: NodeJS.Timeout | null

  public constructor(props: AtToastProps) {
    super(props)
    const { isOpened, duration } = props
    if (isOpened) {
      this.makeTimer(duration || 0)
    }
    this._timer = null
    this.state = {
      _isOpened: isOpened
    }
  }

  toast: any

  layout: any = null

  private clearTimmer(): void {
    if (this._timer) {
      clearTimeout(this._timer)
      this._timer = null
    }
  }

  private makeTimer(duration: number): void {
    if (duration === 0) {
      return
    }
    this._timer = setTimeout(() => {
      this.close()
    }, +duration)
  }

  private close(): void {
    const { _isOpened } = this.state
    if (_isOpened) {
      this.setState(
        {
          _isOpened: false
        },
        this.handleClose // TODO: Fix dirty hack
      )
      this.clearTimmer()
      this.toast.update(null)
    }
  }

  private handleClose(event?: CommonEvent): void {
    // TODO: Fix dirty hack
    if (typeof this.props.onClose === 'function') {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.props.onClose(event!)
    }
  }

  private handleClick = (event: CommonEvent): void => {
    const { onClick, status } = this.props
    if (status === 'loading') {
      return
    }
    if (onClick) {
      return onClick(event)
    }
    this.close()
  }

  public UNSAFE_componentWillReceiveProps(nextProps: AtToastProps): void {
    const { isOpened, duration } = nextProps
    if (!isOpened) {
      this.close()
      return
    }

    if (!this.state._isOpened) {
      this.setState({ _isOpened: true }, () => {
        this.toast.update(this.renderContent())
      })
    } else {
      this.clearTimmer()
      this.toast.update(null)
    }
    this.makeTimer(duration || 0)
  }

  public componentDidMount(): void {
    const { _isOpened } = this.state
    if (!this.toast) {
      this.toast = new RootSiblings(null)
    }

    if (_isOpened) {
      this.toast.update(this.renderContent())
    }
  }

  public componentWillUnmount(): void {
    this.toast.destroy()
  }

  onLayout = (event): void => {
    const { _isOpened } = this.state
    if (_isOpened) {
      this.layout = event.nativeEvent.layout
      this.toast.update(this.renderContent())
    }
  }

  private renderContent = (): React.ReactNode => {
    const { customStyle, text, icon, status, image, hasMask } = this.props

    /* eslint-disable @typescript-eslint/no-non-null-assertion */
    const realImg = image || statusImg[status!] || null
    const isRenderIcon = !!(icon && !(image || statusImg[status!]))
    /* eslint-enable @typescript-eslint/no-non-null-assertion */

    const bodyClass = classNames('toast-body', {
      // 'at-toast__body--custom-image': image,
      'toast-body--text': !realImg && !icon
      // [`at-toast__body--${status}`]: !!status
    })

    const iconClass = classNames('at-icon', 'toast-body-content__icon')

    const rootClass = classNames('at-toast', this.props.className, {
      'at-toast--no-mask': !hasMask
    })

    const textClass = classNames('toast-body-content__info', {
      'toast-body-content__info-no-margin': !realImg && !icon
    })

    const rootStyle: any = {}
    if (!hasMask) {
      rootStyle.backgroundColor = 'red'
      rootStyle.marginLeft = this.layout ? (this.layout.width * -1) / 2 : 0
      rootStyle.marginTop = this.layout ? (this.layout.height * -1) / 2 : 0
      rootStyle.opacity = this.layout ? 1 : 0
    }

    return (
      <View className={rootClass} style={rootStyle} onLayout={this.onLayout}>
        <View
          className={bodyClass}
          style={customStyle}
          onClick={this.handleClick}
        >
          <View className='toast-body-content'>
            {realImg ? (
              <View className='toast-body-content__img'>
                <Image
                  className='toast-body-content__img-item'
                  src={realImg}
                  mode='scaleToFill'
                />
              </View>
            ) : null}
            {isRenderIcon && (
              <View className='toast-body-content__icon'>
                <AtIcon className={iconClass} value={icon} />
              </View>
            )}
            {text && <View className={textClass}>{text}</View>}
          </View>
        </View>
      </View>
    )
  }

  public render(): JSX.Element | null {
    return null
  }
}

AtToast.defaultProps = {
  duration: 3000,
  isOpened: false
}

AtToast.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  hasMask: PropTypes.bool,
  image: PropTypes.string,
  isOpened: PropTypes.bool,
  duration: PropTypes.number,
  status: PropTypes.oneOf(['', 'error', 'loading', 'success']),
  onClick: PropTypes.func,
  onClose: PropTypes.func
}
