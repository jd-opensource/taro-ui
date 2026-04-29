import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { View } from '@tarojs/components'
import {
  AtSwipeActionProps,
  AtSwipeActionState
} from '../../../types/swipe-action'
import { uuid } from '../../common/utils'

export default class AtSwipeAction extends React.Component<
  AtSwipeActionProps,
  AtSwipeActionState
> {
  public static defaultProps: AtSwipeActionProps
  public static propTypes: InferProps<AtSwipeActionProps>

  private maxOffsetSize: number

  public constructor(props: AtSwipeActionProps) {
    super(props)
    const { isOpened, maxDistance } = props
    this.maxOffsetSize = maxDistance || 0
    this.state = {
      componentId: uuid(),
      // eslint-disable-next-line no-extra-boolean-cast
      offsetSize: !!isOpened ? -this.maxOffsetSize : 0,
      _isOpened: !!isOpened,
      needAnimation: false,
      eleWidth: 0,
      maxOffsetSize: this.maxOffsetSize
    }
  }

  public componentDidMount(): void {
    // eslint-disable-next-line no-console
    console.warn('SwipeAction 组件 RN 暂不支持')
  }

  public render(): JSX.Element {
    return <View />
  }
}

AtSwipeAction.defaultProps = {
  options: [],
  isOpened: false,
  disabled: false,
  autoClose: false,
  maxDistance: 0,
  areaWidth: 0
}

AtSwipeAction.propTypes = {
  isOpened: PropTypes.bool,
  disabled: PropTypes.bool,
  autoClose: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      style: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      className: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string,
        PropTypes.array
      ])
    })
  ),

  onClick: PropTypes.func,
  onOpened: PropTypes.func,
  onClosed: PropTypes.func
}
