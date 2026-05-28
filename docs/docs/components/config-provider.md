# ConfigProvider 全局配置

---

通过 Context 为子组件提供国际化等全局配置，默认语言为中文（`zhCN`）。

## 使用指南

在 Taro 文件中引入：

```js
import { ConfigProvider, AtLoadMore, zhCN, enUS } from 'taro-ui'
```

**按需引用时无需额外样式文件**（ConfigProvider 无独立样式）。

## 一般用法

在应用根节点包裹 `ConfigProvider`，并传入语言包：

```js
import { ConfigProvider, AtLoadMore, enUS } from 'taro-ui'

export default function App() {
  return (
    <ConfigProvider locale={enUS}>
      <AtLoadMore status='loading' />
    </ConfigProvider>
  )
}
```

## 内置语言包

| 导出   | 说明             |
| ------ | ---------------- |
| `zhCN` | 简体中文（默认） |
| `enUS` | 英文             |

## 文案优先级

1. 组件 `props`（如 `AtLoadMore` 的 `loadingText`）
2. `ConfigProvider` 的 `locale`
3. 内置 `zhCN` 默认值

## 局部覆盖

`locale` 支持与默认语言包深合并，可只覆盖部分字段：

```js
import { ConfigProvider } from 'taro-ui'

;<ConfigProvider
  locale={{
    LoadMore: {
      moreText: '点击加载更多'
    }
  }}
>
  <Page />
</ConfigProvider>
```

## 受影响的组件

以下组件在未传入对应 props 时，会使用 `ConfigProvider` 中的文案：

- `AtLoadMore`：`loadingText`、`moreText`、`noMoreText`
- `AtSearchBar`：`placeholder`、`actionName`
- `AtNoticebar`：`moreText`
- `AtCountdown`：`format` 各时间单位分隔符
- `AtCalendar`：`monthFormat`、星期表头
- `AtPagination`：`icon={false}` 时的上一页 / 下一页按钮文案

## 参数

| 参数   | 说明                               | 类型            | 默认值 |
| ------ | ---------------------------------- | --------------- | ------ |
| locale | 语言配置，支持与内置 `zhCN` 深合并 | `PartialLocale` | `zhCN` |

## 导出

| 名称            | 说明             |
| --------------- | ---------------- |
| `zhCN`          | 简体中文语言包   |
| `enUS`          | 英文语言包       |
| `Locale`        | 语言包类型       |
| `PartialLocale` | 局部覆盖时的类型 |
