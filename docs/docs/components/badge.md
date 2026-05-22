# Badge 徽标

---

在元素右上角展示消息提醒，可用于按钮等组件。

## 使用指南

在 Taro 文件中引入组件


```js
import { AtBadge } from 'taro-ui'
```
**组件依赖的样式文件（仅按需引用时需要）**


```scss
@import "~taro-ui/lib/style/components/badge.scss";
```
## 用法


```html
<AtBadge value={10} maxValue={99}>
    <AtButton size='small'>按钮</AtButton>
</AtBadge>
```
## 小红点与文本


```html
<AtBadge dot>
    <AtButton size='small'>按钮</AtButton>
</AtBadge>

<AtBadge value='NEW'>
    <AtButton size='small'>按钮</AtButton>
</AtBadge>

<AtBadge value={'···'}>
    <AtButton size='small'>按钮</AtButton>
</AtBadge>
```
## Badge 参数

| 参数     | 说明       | 类型    | 可选值 | 默认值 |
|:---------|:-----------|:--------|:-------|:-------|
| dot      | 角标红点   | Boolean | -      | false  |
| value    | 角标内容   | String / Number  | -      | -      |
| maxValue | 角标最大值 | Number  | -      | 99     |
