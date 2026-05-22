# LoadMore 页面提示

---
用在列表里面，做滚动加载使用

## 使用指南

在 Taro 文件中引入组件


```js
import { AtLoadMore } from 'taro-ui'
```
**组件依赖的样式文件（仅按需引用时需要）**


```scss
@import "~taro-ui/lib/style/components/load-more.scss";
@import "~taro-ui/lib/style/components/activity-indicator.scss";
@import "~taro-ui/lib/style/components/button.scss";
```
## 一般用法

说明: 开发者自行控制 `status` 来控制展示的状态



```js
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtLoadMore } from 'taro-ui'

export default class LoadMorePage extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {
      status: 'more'
    }
  }
  handleClick () {
    // 开始加载
    this.setState({
      status: 'loading'
    })
    // 模拟异步请求数据
    setTimeout(() => {
      // 没有更多了
      this.setState({
        status: 'noMore'
      })
    }, 2000)
  }
  render () {
    return (
      <AtLoadMore
        onClick={this.handleClick.bind(this)}
        status={this.state.status}
      />
    )
  }
}
```

## 参数

| 参数 | 说明   | 类型    | 可选值   | 默认值   |
| ----| ----- | --------| ------- | -------- |
| noMoreTextStyle | noMore 状态显示文案样式 | String or Object | - | - |
| moreBtnStyle | more 状态按钮样式 | String or Object  | - | - |
| status | 组件状态，more 状态显示查看更多按钮，loading 状态显示加载状态，noMore 显示无更多数据 | String  | 'more', 'loading', 'noMore' | 'more' |
| moreText | more 状态显示文案 | String  | - | '查看更多' |
| loadingText | loading 状态显示文案 | String  | - | '加载中' |
| noMoreText | noMore 状态显示文案 | String  | - | '没有更多' |

## 事件

| 事件名称 | 说明          | 返回参数  |
|---------- |-------------- |---------- |
| onClick | more 状态点击触发的事件 | event  |
