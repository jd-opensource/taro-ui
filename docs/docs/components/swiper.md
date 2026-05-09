# Swiper 滑动视图容器

---

滑块视图容器，常用于走马灯、轮播图

## 使用指南

在 Taro 文件中引入组件
> 注意，这边引入的是 taro 的基础组件库


```js
import { Swiper, SwiperItem } from '@tarojs/components'
```
## 示例


```js
import Taro, { Component } from '@tarojs/taro'
// 引入 Swiper, SwiperItem 组件
import { Swiper, SwiperItem } from '@tarojs/components'

class App extends Component {
  render () {
    return (
      <Swiper
        className='test-h'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        vertical
        circular
        indicatorDots
        autoplay>
        <SwiperItem>
          <View className='demo-text-1'>1</View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-2'>2</View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-3'>3</View>
        </SwiperItem>
      </Swiper>
    )
  }
}
```
## Swiper 参数

| 微信 | H5 | 参数     | 说明                         | 类型    | 可选值                 | 默认值   |
|:-----|:---|:---------|:-----------------------------|:--------|:-----------------------|:---------|
| √    | √  | indicatorDots     | 是否显示面板指示点  | Boolean | - | false |
| √    | √  | indicatorColor     | 指示点颜色 | String  | -  | `rgba(0, 0, 0, .3)` |
| √    | √  | indicatorActiveColor   | 当前选中的指示点颜色 | String  | -  | `000` |
| √    | √  | autoplay   | 是否自动切换 | Boolean  | -  | false |
| √    | √  | interval   | 自动切换时间间隔 | Number  | -  | 5000 |
| √    | √  | duration   | 	滑动动画时长 | Number  | -  | 500 |
| √    | √  | current   | 	当前所在滑块的 index | Number  | -  | 0 |
| √    | √  | circular | 是否采用衔接滑动 | Boolean | -  | false |
| √    |   | skipHiddenItemLayout | 是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息 | Boolean | -  | false |
| √    |   | displayMultipleItems | 同时显示的滑块数量 | Number | -  | 1 |
| √    |   | vertical | 滑动方向是否为纵向 | Boolean | -  | false |
| √    | √  | onChange | current 改变时会触发 change 事件 | EventHandle | -  | - |
| √    |   | onAnimationfinish | 动画结束时会触发 animationfinish 事件 | EventHandle | -  | - |
