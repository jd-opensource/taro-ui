# Noticebar 通告栏

---

用于展示一行或多行通告文字。

## 使用指南

在 Taro 文件中引入组件


```js
import { AtNoticebar } from 'taro-ui'
```
**组件依赖的样式文件（仅按需引用时需要）**


```scss
@import "~taro-ui/dist/style/components/noticebar.scss";
```
## 一般用法


```html
<AtNoticebar>这是 NoticeBar 通告栏</AtNoticebar>
```
## 文字滚动


```html
<AtNoticebar marquee>
  这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏
</AtNoticebar>
```
## 带图标


```html
<AtNoticebar icon='volume-plus'>
  这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏
</AtNoticebar>
```
## Noticebar 参数

| 参数     | 说明                              | 类型    | 可选值         | 默认值   |
|:---------|:----------------------------------|:--------|:---------------|:---------|
| close    | 是否需要关闭按钮                  | Boolean | -              | false    |
| single   | 内容是否单行                      | Boolean | -              | false    |
| marquee  | 内容是否滚动（内容只能单行）      | Boolean | -              | false    |
| speed    | 内容滚动速度 （默认速度100px/秒） | Number  | -              | 100      |
| showMore  | “查看更多”是否显示（内容只能单行）      | Boolean | -              | false    |
| moreText | “查看更多”链接文本                | String  | -              | 查看详情 |
| icon     | 内容前的icon图标                  | String  | 参考`icon`组件 | -        |


## Noticebar 事件

| 事件名称   | 说明                 | 返回参数 |
|:-----------|:---------------------|:---------|
| onClose    | 关闭时触发           | -        |
| onGotoMore | 点击”查看更多“时触发 | -        |
