# Tabs 标签页

> 按需阅读：仅在使用本组件时打开此文件。

## 导出

`AtTabs, AtTabsPane`

## 引入

```tsx
import { AtTabs, AtTabsPane } from 'taro-ui'
```

## 样式（按需）

```scss
@import 'taro-ui/dist/style/components/tabs.scss';
```

## 源码与类型

- 实现：`packages/taro-ui/src/components/tabs/`
- 类型：`packages/taro-ui/types/tabs.d.ts`、`packages/taro-ui/types/tabs-pane.d.ts`
- 官方文档：`docs/docs/components/tabs.md`

## 主要 Props

### `AtTabsProps`

| Prop | 可选 | 说明 |
|------|------|------|
| `tabDirection` | 是 | Tab 方向，请跟 AtTabPane 保持一致 |
| `height` | 是 | Tab 高度，当 tabDirection='vertical' 时，需要设置； 当 tabDirection='horizontal' 时，会自动根据内容撑开，请勿设置 |
| `current` | 否 | 当前选中的标签索引值，从 0 计数，开发者需要通过 onClick 事件来改变 current，从而切换 tab |
| `scroll` | 是 | 是否滚动，当标签太多时，建议使用。否则会出现部分标签被隐藏 |
| `animated` | 是 | 是否开启切换动画 |
| `swipeable` | 是 | 是否支持手势滑动切换内容页，当 tabDirection='vertical' 时，无论是否设置，都不支持手势滑动切换内容页 |
| `tabList` | 否 | tab 列表 |
| `onClick` | 否 | 点击或滑动时触发事件 |

### `AtTabsPaneProps`

| Prop | 可选 | 说明 |
|------|------|------|
| `tabDirection` | 是 | Tab 方向，请跟 AtTabs 保持一致 |
| `current` | 否 | 当前选中的标签索引值，从 0 计数，请跟 AtTabs 保持一致 |
| `index` | 否 | tabPane 排序，从 0 计数 |


## 关联

- [tabs-pane](./tabs-pane.md)

---
[← 组件索引](./README.md)
