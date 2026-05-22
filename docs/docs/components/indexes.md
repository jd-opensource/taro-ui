# Indexes 索引选择器

---
索引列表组件，可以通过点击索引导航，快速定位到列表处

## 使用指南

Taro-UI 版本需要在 `v1.5.0` 以上，在 Taro 文件中引入组件


```js
import { AtIndexes } from 'taro-ui'
```
**组件依赖的样式文件（仅按需引用时需要）**


```scss
@import "~taro-ui/lib/style/components/toast.scss";
@import "~taro-ui/lib/style/components/indexes.scss";
@import "~taro-ui/lib/style/components/list.scss";
```
## 一般用法

说明:

* AtIndexes 需要父节点设置高度，如果想整个高度屏幕高度都铺满，设置 `height: 100vh`。



```jsx
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtIndexes } from 'taro-ui'

export default class Index extends Taro.Component {
  onClick (item) {
    console.log(item)
  }
  render() {
    const list = [{
      title: 'A',
      key: 'A',
      items: [
        {
          'name': '阿坝'
          // 此处可加其他业务字段
        },
        {
          'name': '阿拉善'
        }]
      },
      {
        title: 'B',
        key: 'B',
        items: [
          {
            'name': '北京'
          },
          {
            'name': '保定'
          }]
      }
    ]
    return (
      <View style='height:100vh'>
        <AtIndexes
          list={list}
          onClick={this.onClick.bind(this)}
        >
          <View>自定义内容</View>
        </AtIndexes>
      </View>
    )
  }
```

## 跳转到指定key


##### html


```html
<AtIndexes
  list={list}
  onScrollIntoView={fn => { this.scrollIntoView = fn }}
>
  <View className='custom-area'>
    用户自定义内容
    <AtSearchBar  placeholder='跳转到指定Key' onActionClick={this.handleActionClick.bind(this)} />
  </View>
</AtIndexes>
```

##### js


```js
handleActionClick () {
  this.scrollIntoView && this.scrollIntoView(key)
}
```

## 参数

| 参数       | 说明    | 类型    | 可选值   | 默认值   |
| ---------- | ------- | ------- | ------- | --- |
| animation | 是否开启跳转过渡动画 | Boolean  | - | false |
| isVibrate | 是否切换 key 的震动，只在微信小程序有效 | Boolean  | - | true |
| isShowToast | 是否用弹框显示当前 key | Boolean  | - | true |
| topKey | 右侧导航第一个名称 | String  | - | Top |
| list | `[ {'{title:列表标题,key:右侧导航标题,items:[{name: 列表项内容}]}'}]` | Array  | - | - |

## 事件

| 事件名称 | 说明          | 返回参数  |
|---------- |-------------- |---------- |
| onClick | 点击列表项触发事件 |  (item:Object,event) => void |
| onScrollIntoView | 获取跳转事件跳转到指定key | (fn:Function) => void |
