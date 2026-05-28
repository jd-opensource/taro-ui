import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { Text, View } from '@tarojs/components'
import { AtPaginationProps, AtPaginationState } from '../../../types/pagination'
import AtButton from '../button/index'
import AtIcon from '../icon'

const MIN_MAXPAGE = 1
const getMaxPage = (maxPage = 0): number => {
  if (maxPage <= 0) return MIN_MAXPAGE
  return maxPage
}

const createPickerRange = (max: number): number[] => {
  const range = new Array(max).fill(0).map((_val, index) => index + 1)
  return range
}

export default class AtPagination extends React.Component<
  AtPaginationProps,
  AtPaginationState
> {
  public static defaultProps: AtPaginationProps
  public static propTypes: InferProps<AtPaginationProps>

  public constructor(props: AtPaginationProps) {
    super(props)
    const { current, pageSize = 20, total } = this.props
    const maxPage = getMaxPage(Math.ceil(total / pageSize))
    this.state = {
      currentPage: current || 1,
      maxPage,
      pickerRange: createPickerRange(maxPage)
    }
  }

  private onPrev(): void {
    let { currentPage } = this.state
    const originCur = currentPage
    currentPage -= 1
    currentPage = Math.max(1, currentPage)
    if (originCur === currentPage) return
    this.props.onPageChange &&
      this.props.onPageChange({ type: 'prev', current: currentPage })
    this.setState({ currentPage })
  }

  private onNext(): void {
    let { currentPage } = this.state
    const originCur = currentPage
    const { maxPage } = this.state
    currentPage += 1
    currentPage = Math.min(maxPage, currentPage)
    if (originCur === currentPage) return
    this.props.onPageChange &&
      this.props.onPageChange({ type: 'next', current: currentPage })
    this.setState({ currentPage })
  }

  public UNSAFE_componentWillReceiveProps(props: AtPaginationProps): void {
    const { total, pageSize = 20, current } = props
    const maxPage = getMaxPage(Math.ceil(total / pageSize))
    if (maxPage !== this.state.maxPage) {
      this.setState({
        maxPage,
        pickerRange: createPickerRange(maxPage)
      })
    }
    if (typeof current === 'number' && current !== this.state.currentPage) {
      this.setState({ currentPage: current })
    }
  }

  // onPickerChange (evt) {
  //   const { value } = evt.detail
  //   const current = +value + 1
  //   if (current === this.state.currentPage) return
  //   this.props.onPageChange && this.props.onPageChange({ type: 'pick', current })
  //   this.setState({
  //     currentPage: current,
  //   })
  // }

  public render(): JSX.Element {
    const {
      icon,
      // pickerSelect,
      customStyle
    } = this.props
    const {
      currentPage,
      maxPage
      // pickerRange,
    } = this.state

    const rootClassName = ['at-pagination']

    const prevDisabled = maxPage === MIN_MAXPAGE || currentPage === 1
    const nextDisabled = maxPage === MIN_MAXPAGE || currentPage === maxPage

    const classObject = {
      'at-pagination--icon': icon
    }

    return (
      <View
        className={classNames(rootClassName, classObject, this.props.className)}
        style={customStyle}
      >
        <View className='at-pagination__btn-prev'>
          {icon && (
            <AtButton
              onClick={this.onPrev.bind(this)}
              size='small'
              disabled={prevDisabled}
            >
              <AtIcon value='chevron-left' className='at-pagination__at-icon' />
            </AtButton>
          )}
          {!icon && (
            <AtButton
              onClick={this.onPrev.bind(this)}
              size='small'
              disabled={prevDisabled}
            >
              上一页
            </AtButton>
          )}
        </View>
        <View className='at-pagination__number'>
          <Text className='at-pagination__number-wrap'>
            <Text className='at-pagination__number-current'>{currentPage}</Text>
            /{maxPage}
          </Text>
        </View>
        <View className='at-pagination__btn-next'>
          {icon && (
            <AtButton
              onClick={this.onNext.bind(this)}
              size='small'
              disabled={nextDisabled}
            >
              <AtIcon
                value='chevron-right'
                className='at-pagination__at-icon'
              />
            </AtButton>
          )}
          {!icon && (
            <AtButton
              onClick={this.onNext.bind(this)}
              size='small'
              disabled={nextDisabled}
            >
              下一页
            </AtButton>
          )}
        </View>
        {/* {pickerSelect && <View className='at-pagination__number'>
          {<Picker mode='selector' range={pickerRange} value={currentPage - 1} onChange={this.onPickerChange.bind(this)}>
            <Text className='at-pagination__number-current'>{currentPage}</Text>/{ maxPage }
          </Picker>}
        </View>} */}
        {/* {!pickerSelect && <View className='at-pagination__number'>
          <Text className='at-pagination__number-current'>{currentPage}</Text>/{ maxPage }
        </View>} */}
      </View>
    )
  }
}

AtPagination.defaultProps = {
  current: 1,
  total: 0,
  pageSize: 20,
  icon: false,
  customStyle: {}
}

AtPagination.propTypes = {
  current: PropTypes.number,
  total: PropTypes.number,
  pageSize: PropTypes.number,
  icon: PropTypes.bool,
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  onPageChange: PropTypes.func
}
