import React from 'react'
import {
  AtButton,
  AtCountdown,
  AtLoadMore,
  AtNoticebar,
  AtPagination,
  AtSearchBar,
  ConfigProvider,
  enUS,
  zhCN
} from 'taro-ui'
import type { Locale } from 'taro-ui'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

interface ConfigProviderPageState {
  locale: Locale
  lang: 'zh' | 'en'
  loadMoreStatus: 'more' | 'loading' | 'noMore'
  searchValue: string
}

export default class ConfigProviderPage extends React.Component<
  {},
  ConfigProviderPageState
> {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'ConfigProvider'
  }

  public constructor(props: any) {
    super(props)
    this.state = {
      locale: zhCN,
      lang: 'zh',
      loadMoreStatus: 'more',
      searchValue: ''
    }
  }

  private toggleLocale(): void {
    const nextLang = this.state.lang === 'zh' ? 'en' : 'zh'
    this.setState({
      lang: nextLang,
      locale: nextLang === 'zh' ? zhCN : enUS
    })
  }

  private handleLoadMoreClick(): void {
    this.setState({ loadMoreStatus: 'loading' })
    setTimeout(() => {
      this.setState({ loadMoreStatus: 'noMore' })
    }, 1500)
  }

  private handleSearchChange(value: string): void {
    this.setState({ searchValue: value })
  }

  public render(): JSX.Element {
    const { locale, lang, loadMoreStatus, searchValue } = this.state

    return (
      <View className='page'>
        <DocsHeader title='ConfigProvider 国际化' />

        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__title'>切换语言</View>
            <View className='panel__content'>
              <AtButton type='primary' onClick={this.toggleLocale.bind(this)}>
                {lang === 'zh' ? '切换为 English (enUS)' : '切换为中文 (zhCN)'}
              </AtButton>
            </View>
          </View>

          <ConfigProvider locale={locale}>
            <View className='panel'>
              <View className='panel__title'>AtLoadMore</View>
              <View className='panel__content no-padding'>
                <AtLoadMore
                  status={loadMoreStatus}
                  onClick={this.handleLoadMoreClick.bind(this)}
                />
              </View>
            </View>

            <View className='panel'>
              <View className='panel__title'>AtSearchBar</View>
              <View className='panel__content no-padding'>
                <AtSearchBar
                  value={searchValue}
                  showActionButton
                  onChange={this.handleSearchChange.bind(this)}
                />
              </View>
            </View>

            <View className='panel'>
              <View className='panel__title'>AtPagination</View>
              <View className='panel__content no-padding'>
                <AtPagination
                  total={50}
                  pageSize={10}
                  current={1}
                  icon={false}
                />
              </View>
            </View>

            <View className='panel'>
              <View className='panel__title'>AtNoticebar</View>
              <View className='panel__content no-padding'>
                <AtNoticebar showMore>
                  {lang === 'zh'
                    ? '这是一条通告栏消息'
                    : 'This is a notice bar message'}
                </AtNoticebar>
              </View>
            </View>

            <View className='panel'>
              <View className='panel__title'>AtCountdown</View>
              <View className='panel__content'>
                <AtCountdown
                  isShowDay
                  day={1}
                  hours={2}
                  minutes={30}
                  seconds={8}
                />
              </View>
            </View>
          </ConfigProvider>
        </View>
      </View>
    )
  }
}
