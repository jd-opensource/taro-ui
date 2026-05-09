import React from 'react'
import { AtButton, AtCalendar } from 'taro-ui'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

type DateObject = {
  value: string
}

interface IndexState {
  now: number
  minDate: string
  maxDate: string
  multiCurentDate: {
    start: number
  }
  mark: DateObject[]
  validDates: DateObject[]
  [key: string]: any
}

export default class Index extends React.Component<{}, IndexState> {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro日历组件展示'
  }

  public constructor(props: any) {
    super(props)
    this.state = {
      now: Date.now(),
      minDate: '2018/06/11',
      maxDate: '2020/12/12',
      multiCurentDate: {
        start: Date.now()
      },
      mark: [
        {
          value: '2018/11/11'
        }
      ],
      validDates: [
        {
          value: '2019/04/17'
        },
        {
          value: '2019/04/21'
        },
        {
          value: '2019/05/04'
        },
        {
          value: '2019/05/28'
        }
      ]
    }
  }

  private handleClick = (key: string, value: string): void => {
    this.setState({
      [key]: value
    })
  }

  // private handleDayClick = (...arg): void => {
  //   console.log('handleDayClick', arg)
  // }

  // private handleDayLongClick = (...arg): void => {
  //   console.log('handleDayLongClick', arg)
  // }

  private handleDateChange = (arg: any): void => {
    Taro.showToast({
      title: `handleDateChange: ${JSON.stringify(arg)}`,
      icon: 'none'
    })
  }

  private handleMonthChange = (arg: any): void => {
    Taro.showToast({
      title: `handleMonthChange: ${JSON.stringify(arg)}`,
      icon: 'none'
    })
  }

  public render(): JSX.Element {
    const {
      now,
      minDate,
      maxDate,
      mark,
      multiCurentDate,
      validDates
    } = this.state
    return (
      <View className='page calendar-page'>
        <DocsHeader title='Calendar 日历' />

        <View className='doc-body'>
          <View className='doc-body--panel'>
            <View className='panel__title'>一般案例</View>
            <View className='panel__content'>
              <AtCalendar onMonthChange={this.handleMonthChange} />
            </View>
          </View>

          <View className='doc-body--panel'>
            <View className='panel__title'>跳转到指定日期</View>
            <View className='panel__content'>
              <AtCalendar currentDate={now} />
              <View className='body_controllers'>
                <AtButton
                  size='small'
                  onClick={this.handleClick.bind(this, 'now', '2018/01/01')}
                >
                  跳转到 2018/01/01
                </AtButton>
                <AtButton
                  size='small'
                  onClick={this.handleClick.bind(this, 'now', '2018/06/18')}
                >
                  跳转到 2018/6/18
                </AtButton>
              </View>
            </View>
          </View>

          <View className='doc-body--panel'>
            <View className='panel__title'>指定最小日期和最大日期</View>
            <View className='panel__content'>
              <AtCalendar minDate={minDate} maxDate={maxDate} />
              <View className='body_controllers'>
                <AtButton
                  size='small'
                  onClick={this.handleClick.bind(this, 'minDate', '2018/01/01')}
                >
                  设置最小值 2018/1/1
                </AtButton>
                <AtButton
                  size='small'
                  onClick={this.handleClick.bind(this, 'maxDate', '2019/12/31')}
                >
                  设置最大值 2019/12/31
                </AtButton>
              </View>
            </View>
          </View>

          <View className='doc-body--panel'>
            <View className='panel__title'>标记时间</View>
            <View className='panel__content'>
              <AtCalendar marks={mark} />
              <View className='body_controllers'>
                <AtButton
                  size='small'
                  className='button'
                  onClick={this.handleClick.bind(this, 'mark', [
                    {
                      value: Date.now()
                    }
                  ])}
                >
                  标记当前时间
                </AtButton>
              </View>
            </View>
          </View>

          <View className='doc-body--panel'>
            <View className='panel__title'>禁止滑动</View>
            <View className='panel__content'>
              <AtCalendar isSwiper={false} />
            </View>
          </View>

          <View className='doc-body--panel'>
            <View className='panel__title'>垂直滑动</View>
            <View className='panel__content'>
              <AtCalendar isVertical onSelectDate={this.handleDateChange} />
            </View>
          </View>

          <View className='doc-body--panel'>
            <View className='panel__title'>范围选择</View>
            <View className='panel__content'>
              <AtCalendar
                onSelectDate={this.handleDateChange}
                isMultiSelect
                currentDate={multiCurentDate}
              />
              <View className='body_controllers'>
                <AtButton
                  size='small'
                  className='button'
                  onClick={this.handleClick.bind(this, 'multiCurentDate', {
                    start: '2018/10/28',
                    end: '2018/11/11'
                  })}
                >
                  设置选择区间为 2018/10/28 - 2018/11/11
                </AtButton>
              </View>
            </View>
          </View>

          <View className='doc-body--panel'>
            <View className='panel__title'>有效时间组</View>
            <View className='panel__content'>
              <AtCalendar validDates={validDates} />
            </View>
          </View>
        </View>
      </View>
    )
  }
}
