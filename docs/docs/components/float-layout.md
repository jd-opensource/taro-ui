# FloatLayout 浮动弹层

---

提供 `浮动布局` 的功能，在页面上的层级为 `810`

## 使用指南

在 Taro 文件中引入组件


```js
import { AtFloatLayout } from "taro-ui"
```
**组件依赖的样式文件（仅按需引用时需要）**


```scss
@import "~taro-ui/lib/style/components/float-layout.scss";
```
## 一般用法



```html
<AtFloatLayout isOpened title="这是个标题" onClose={this.handleClose.bind(this)}>
  这是内容区 随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
  随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写
</AtFloatLayout>
```

## AtFloatLayout 参数

| 参数                | 说明                                       | 类型    | 可选值 | 默认值  |
| ------------------- | ------------------------------------------ | ------- | ------ | ------- |
| title               | 元素的标题                                 | String  | -      | -       |
| isOpened            | 控制是否出现在页面上                       | Boolean | -      | `false` |
| scrollY             | 是否垂直滚动                               | Boolean | -      | `false` |
| scrollX             | 是否水平滚动                               | Boolean | -      | `false` |
| scrollTop           | 设置竖向滚动条位置                         | Boolean | -      | `false` |
| scrollLeft          | 设置横向滚动条位置                         | Boolean | -      | `false` |
| upperThreshold      | 距顶部/左边多远时，触发 scrolltolower 事件 | Boolean | -      | `false` |
| lowerThreshold      | 距底部/右边多远时，触发 scrolltolower 事件 | Boolean | -      | `false` |
| scrollWithAnimation | 在设置滚动条位置时使用动画过渡             | Boolean | -      | `false` |

## AtFloatLayout 事件

| 事件名称        | 说明                                         | 返回参数 |
| --------------- | -------------------------------------------- | -------- |
| onClose         | 元素被关闭时候触发的事件                     | -        |
| onScroll        | 滚动时触                                     | -        |
| onScrollToUpper | 滚动到顶部/左边，会触发 onScrollToUpper 事件 | -        |
| onScrollToLower | 滚动到底部/右边，会触发 onScrollToLower 事件 | -        |
