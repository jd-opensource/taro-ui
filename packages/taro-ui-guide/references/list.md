# List 列表

> 按需阅读：仅在使用本组件时打开此文件。

## 导出

`AtList, AtListItem`

## 引入

```tsx
import { AtList, AtListItem } from 'taro-ui'
```

## 样式（按需）

```scss
@import 'taro-ui/dist/style/components/list.scss';
```

## 源码与类型

- 实现：`packages/taro-ui/src/components/list/`
- 类型：`packages/taro-ui/types/list.d.ts`
- 官方文档：`docs/docs/components/list.md`

## 主要 Props

### `AtListProps`

| Prop | 可选 | 说明 |
|------|------|------|
| `hasBorder` | 是 | 是否有边框 |

### `AtListItemProps`

| Prop | 可选 | 说明 |
|------|------|------|
| `hasBorder` | 是 | 是否有边框 |
| `disabled` | 是 | 是否禁用 |
| `note` | 是 | 元素的描述信息 |
| `title` | 是 | 元素的标题 |
| `thumb` | 是 | 元素的主要缩略图 |
| `isSwitch` | 是 | 额外信息是否开关 |
| `extraText` | 是 | 额外信息的文本 |
| `extraThumb` | 是 | 额外信息的缩略图 |
| `switchIsCheck` | 是 | 额外信息开关的值 |
| `switchColor` | 是 | 开关的颜色 |
| `iconInfo` | 是 | icon 信息 |
| `icon` | 是 | 自定义 icon |
| `arrow` | 是 | 箭头的方向 |
| `onClick` | 是 | 用户点击元素触发的事件 |
| `onSwitchChange` | 是 | 用户点击切换 Switch 时触发 |


---
[← 组件索引](./README.md)
