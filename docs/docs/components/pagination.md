# Pagination 分页器

---

用于展示页码、请求数据等。

## 使用指南

在 Taro 文件中引入组件

```js
import { AtPagination } from 'taro-ui'
```

**组件依赖的样式文件（仅按需引用时需要）**

```scss
@import '~taro-ui/dist/style/components/pagination.scss';
@import '~taro-ui/dist/style/components/button.scss';
@import '~taro-ui/dist/style/components/icon.scss';
```

## 用法

```html
<AtPagination total="{50}" pageSize="{10}" current="{1}"> </AtPagination>

<AtPagination icon total="{50}" pageSize="{10}" current="{1}"> </AtPagination>
```

## Pagination 参数

| 参数     | 说明                     | 类型    | 可选值 | 默认值 |
| :------- | :----------------------- | :------ | :----- | :----- |
| current  | 当前页                   | Number  | -      | 1      |
| total    | 数据总量                 | Number  | -      | 0      |
| pageSize | 每页数据量               | Number  | -      | 20     |
| icon     | 是否以 icon 形式展示按钮 | Boolean | -      | false  |

## Pagination 事件

| 事件名称     | 说明               | 返回参数      |
| :----------- | :----------------- | :------------ |
| onPageChange | 点击页码按钮时触发 | type, current |
