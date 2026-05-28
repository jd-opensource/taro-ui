import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { Modal } from 'react-native'
import { View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { AtCurtainProps } from '../../../types/curtain'
import AtIcon from '../icon'
export default class AtCurtain extends React.Component<AtCurtainProps> {
  public static defaultProps: AtCurtainProps
  public static propTypes: InferProps<AtCurtainProps>

  private onClose(e: CommonEvent): void {
    this.props.onClose(e)
  }

  public render(): JSX.Element {
    const { className, customStyle, isOpened, closeBtnPosition } = this.props

    const curtainClass = classNames(
      {
        'at-curtain': true,
        'at-curtain--closed': !isOpened
      },
      className
    )
    const btnCloseClass = classNames({
      'at-curtain__btn-close': true,
      [`at-curtain__btn-close--${closeBtnPosition}`]: closeBtnPosition
    })

    return (
      <Modal
        animationType='fade'
        transparent={true}
        visible={isOpened}
        onRequestClose={() => {
          this.props.onClose({} as any)
        }}
      >
        <View className={curtainClass} style={customStyle}>
          <View className='at-curtain__container'>
            <View className='at-curtain__body'>
              {this.props.children}
              <View className={btnCloseClass} onClick={this.onClose.bind(this)}>
                <AtIcon
                  className='at-curtain__btn-close__at-icon'
                  value='close'
                  size={16}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    )
  }
}

AtCurtain.defaultProps = {
  customStyle: '',
  className: '',
  isOpened: false,
  closeBtnPosition: 'bottom',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClose: (): void => {}
}

AtCurtain.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  isOpened: PropTypes.bool,
  closeBtnPosition: PropTypes.string,
  onClose: PropTypes.func
}
