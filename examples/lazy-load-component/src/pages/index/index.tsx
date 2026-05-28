import { Component, PropsWithChildren } from 'react'
import { View } from '@tarojs/components'
import { AtSwipeAction } from 'taro-ui'
import './index.scss'

export default class Index extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View>
        {Array.from({ length: 5 }).map((_, index) => (
          <AtSwipeAction
            key={index}
            options={[
              {
                text: '收藏',
                style: { backgroundColor: '#ffc20e', justifyContent: 'center' }
              }
            ]}
          >
            <View className='item'>Item{index + 1}</View>
          </AtSwipeAction>
        ))}
      </View>
    )
  }
}
