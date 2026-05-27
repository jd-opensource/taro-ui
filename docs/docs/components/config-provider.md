# ConfigProvider 全局配置

---
通过 Context 为子组件提供国际化等全局配置。

## 使用指南

在 Taro 文件中引入组件：

```js
import { ConfigProvider, AtLoadMore, zhCN, enUS } from 'taro-ui'
```

## 一般用法

在应用根节点包裹 `ConfigProvider`，并传入语言包：

```js
import { ConfigProvider, AtLoadMore, enUS } from 'taro-ui'

export default function App() {
  return (
    <ConfigProvider locale={enUS}>
      <AtLoadMore status="loading" />
    </ConfigProvider>
  )
}
```

更多说明见 [国际化指南](/guide/i18n)。

## 参数

| 参数 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| locale | 语言配置，支持与内置 `zhCN` 深合并 | `PartialLocale` | `zhCN` |

## 导出

| 名称 | 说明 |
| ---- | ---- |
| `zhCN` | 简体中文语言包 |
| `enUS` | 英文语言包 |
