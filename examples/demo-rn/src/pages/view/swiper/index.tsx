import React from 'react'
import { AtList, AtListItem } from 'taro-ui'
import {
  Image,
  Slider,
  Swiper,
  SwiperItem,
  Text,
  View
} from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import DocsHeader from '../../components/doc-header'
import './index.scss'

interface SwiperPageState {
  current: number
  duration: number
  interval: number
  isCircular: boolean
  isAutoplay: boolean
  hasIndicatorDots: boolean
  imgUrls: string[]
}

export default class SwiperPage extends React.Component<{}, SwiperPageState> {
  public constructor(props: any) {
    super(props)
    this.state = {
      current: 1,
      duration: 500,
      interval: 5000,
      isCircular: false,
      isAutoplay: false,
      hasIndicatorDots: true,
      imgUrls: [
        'https://img10.360buyimg.com/babel/s700x360_jfs/t25855/203/725883724/96703/5a598a0f/5b7a22e1Nfd6ba344.jpg!q90!cc_350x180',
        'https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180',
        'https://img14.360buyimg.com/babel/s700x360_jfs/t1/4099/12/2578/101668/5b971b4bE65ae279d/89dd1764797acfd9.jpg!q90!cc_350x180'
      ]
    }
  }

  private setAutoPlay = (e: CommonEvent): void => {
    this.setState({
      isAutoplay: e.detail.value
    })
  }

  private setCircular = (e: CommonEvent): void => {
    this.setState({
      isCircular: e.detail.value
    })
  }

  private setIndicatorDots = (e: CommonEvent): void => {
    this.setState({
      hasIndicatorDots: e.detail.value
    })
  }

  private setInterval = (e: CommonEvent): void => {
    this.setState({
      interval: e.detail.value
    })
  }

  private setDuration = (e: CommonEvent): void => {
    this.setState({
      duration: e.detail.value
    })
  }

  public render(): JSX.Element {
    const {
      current,
      isAutoplay,
      duration,
      isCircular,
      interval,
      hasIndicatorDots,
      imgUrls
    } = this.state

    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Swiper 滑块视图容器'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 基础用法 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>基础用法</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <Swiper
                  className='panel__content--example-item--swiper'
                  indicatorColor='#999'
                  indicatorActiveColor='#333'
                  current={current}
                  duration={duration}
                  interval={interval}
                  circular={isCircular}
                  autoplay={isAutoplay}
                  indicatorDots={hasIndicatorDots}
                  previousMargin='20'
                >
                  {imgUrls.map((item, idx) => (
                    <SwiperItem key={idx}>
                      <Image
                        src={item}
                        className='panel__content--example-item--slide-image'
                      />
                    </SwiperItem>
                  ))}
                </Swiper>

                <View className='panel__content--example-item--control-cnt'>
                  <AtList>
                    <AtListItem
                      title='指示点'
                      switchIsCheck={hasIndicatorDots}
                      isSwitch
                      onSwitchChange={this.setIndicatorDots}
                    />
                    <AtListItem
                      title='自动播放'
                      switchIsCheck={isAutoplay}
                      isSwitch
                      onSwitchChange={this.setAutoPlay}
                    />
                    <AtListItem
                      title='循环播放'
                      switchIsCheck={isCircular}
                      isSwitch
                      onSwitchChange={this.setCircular}
                    />
                  </AtList>

                  <View className='panel__content--example-item--slider-list'>
                    <View className='panel__content--example-item--slider-list__item'>
                      <View className='panel__content--example-item--slider-list__item-header'>
                        <Text>幻灯片切换时长(ms)</Text>
                      </View>
                      <View className='panel__content--example-item--slider-list__item-body'>
                        <Slider
                          activeColor='#6190e8'
                          showValue
                          step={1}
                          min={500}
                          max={2000}
                          value={duration}
                          onChange={this.setDuration}
                        ></Slider>
                      </View>
                    </View>
                    <View className='panel__content--example-item--slider-list__item'>
                      <View className='panel__content--example-item--slider-list__item-header'>
                        <Text>自动播放间隔时长(ms)</Text>
                      </View>
                      <View className='panel__content--example-item--slider-list__item-body'>
                        <Slider
                          activeColor='#6190e8'
                          showValue
                          step={1}
                          min={2000}
                          max={10000}
                          value={this.state.interval}
                          onChange={this.setInterval}
                        ></Slider>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
