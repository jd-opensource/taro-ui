---
name: taro-ui-guide
description: >-
  Guides installation, Taro config, styling, and usage of taro-ui (At* components)
  for WeChat/Alipay/H5/RN. Use when building Taro apps with taro-ui, picking
  components, theming, i18n, or modifying packages/taro-ui source.
---

# Taro UI 使用指南

基于 Taro 3+ 的多端 React 组件库。组件均以 `At` 前缀导出（如 `AtButton`），样式与逻辑分离，需单独引入 SCSS。

官方文档：<https://jd-opensource.github.io/taro-ui/#/>  
源码：`packages/taro-ui/`（本 monorepo）

## 何时使用本 Skill

- 在 Taro 项目中集成、配置或排查 taro-ui
- 选择/组合组件、查 Props、写示例页面
- 自定义主题、国际化、按需加载
- 在本仓库内开发/修复 `packages/taro-ui` 组件

## 版本与安装

| Taro 版本 | taro-ui 版本 |
|-----------|--------------|
| < 3       | `taro-ui@2.3.4` |
| ≥ 3       | `taro-ui@latest`（当前 monorepo 为 3.x） |

```bash
pnpm add taro-ui
# 或 npm install taro-ui@latest
```

**Peer 依赖**：`@tarojs/taro`、`@tarojs/components`、`@tarojs/react`、`react`、`react-dom`（≥16.13）。RN 端另需 `react-native`、`react-native-modal`（可选）。

微信小程序需基础库 **≥ 2.2.3**（`globalClass` 与样式穿透）。

## Taro 项目必配项

在消费方项目的 `config/index.ts`（或 `config/index.js`）中：

**1. H5 编译 node_modules 中的 taro-ui**

```js
h5: {
  esnextModules: ['taro-ui']
}
```

**2. Taro 3.5+ 关闭对 taro-ui 的 prebundle**（否则 `@tarojs/components` 可能未打进 bundle，页面异常）

```js
compiler: {
  type: 'webpack5',
  prebundle: {
    exclude: ['taro-ui']
  }
}
```

## 样式引入

样式在 `taro-ui/dist/style/`，**不会**随 JS 自动注入，必须显式引入。

### 全量（开发/原型）

入口或 `app.scss`：

```js
import 'taro-ui/dist/style/index.scss'
```

```scss
@import 'taro-ui/dist/style/index.scss';
```

### 按需（推荐生产）

页面/全局 SCSS 按组件名引入（`AtButton` → `button.scss`）：

```scss
@import 'taro-ui/dist/style/components/button.scss';
```

或用 `babel-plugin-import`（见 `docs/docs/guide/quickstart.md`）：

```js
// babel.config.js plugins
['import', {
  libraryName: 'taro-ui',
  customName: name => `taro-ui/lib/components/${name.slice(3)}`,
  customStyleName: name => `taro-ui/dist/style/components/${name.slice(3)}.scss`
}, 'taro-ui']
```

`At` 前缀去掉后即为目录名：`AtActionSheet` → `action-sheet`。

## 组件使用模式

### 基础引入

```tsx
import { View } from '@tarojs/components'
import { AtButton } from 'taro-ui'

export default function Page() {
  return (
    <View>
      <AtButton type="primary" onClick={() => {}}>
        按钮
      </AtButton>
    </View>
  )
}
```

### 公共 Props（`AtComponent`）

多数组件支持：

| Prop | 说明 |
|------|------|
| `className` | 外层类名（小程序可用 `globalClass` 覆盖内部 BEM 类） |
| `customStyle` | 内联样式，`string` 或 `CSSProperties` |
| `children` | 子节点 |

类型定义：`packages/taro-ui/types/base.d.ts`。

### 复合组件

按文档组合子组件，例如：

- `AtModal` + `AtModalHeader` / `AtModalContent` / `AtModalAction`
- `AtList` + `AtListItem`
- `AtTabs` + `AtTabsPane`
- `AtActionSheet` + `AtActionSheetItem`

按组件查阅：[references/README.md](references/README.md)（如 `references/button.md`）。**仅在使用该组件时**打开对应文件。

### 受控与回调

- 开关类：`open` / `isOpened` + `onClick` / `onClose`（以各组件 `types/*.d.ts` 为准）
- 表单类：`AtForm` 包裹 `AtInput`、`AtSwitch` 等，注意 `formType`、校验文案
- 环境判断：组件内部常用 `Taro.getEnv()` 区分 WEB / WEAPP / ALIPAY

查 Props 时**优先读** `references/<slug>.md`，其次 `packages/taro-ui/types/<component>.d.ts` 与 `docs/docs/components/<name>.md`。

### 命令式 API：`AtMessage`

页面需挂载 `<AtMessage />`，再通过 `Taro.atMessage` 调用：

```tsx
import Taro from '@tarojs/taro'
import { AtMessage } from 'taro-ui'

// render 中: <AtMessage />
Taro.atMessage({ message: '提示', type: 'success', duration: 3000 })
// type: info | success | error | warning
```

`AtToast` 为声明式：`isOpened`、`text`、`status`、`onClose`。

### 国际化 `ConfigProvider`

```tsx
import { ConfigProvider, AtLoadMore, enUS } from 'taro-ui'

export default function App({ children }) {
  return (
    <ConfigProvider locale={enUS}>
      {children}
    </ConfigProvider>
  )
}
```

- 内置：`zhCN`（默认）、`enUS`
- `locale` 与默认包深合并，可只覆盖部分 key（如 `LoadMore.moreText`）
- 优先级：组件 props > `ConfigProvider.locale` > 默认 `zhCN`

## 自定义主题

1. **SCSS 变量**（推荐）：在引入默认样式**之前**覆盖变量，再 `@import` 全量样式。

```scss
$color-brand: #6190e8;
@import 'taro-ui/dist/style/index.scss';
```

变量表：`packages/taro-ui/src/style/variables/default.scss`。

2. **globalClass**：在 **Page** 级 SCSS 用 `.my-btn.at-button { }` 覆盖（自定义组件内无效）。

3. **`customStyle`**：仅部分组件支持，优先用前两种方式。

> `AtSlider`、`AtSwitch` 暂不支持 SCSS 变量覆盖主题。

## 在本仓库开发 taro-ui

```bash
pnpm install          # 根目录，仅允许 pnpm
pnpm build:ui         # 构建 packages/taro-ui → dist/
pnpm --filter demo dev:h5
pnpm --filter demo dev:weapp
pnpm --filter docs dev
```

组件实现路径：

| 内容 | 路径 |
|------|------|
| 组件实现 | `packages/taro-ui/src/components/<name>/` |
| 类型 | `packages/taro-ui/types/<name>.d.ts` |
| 样式 | `packages/taro-ui/src/style/components/<name>.scss` |
| 导出 | `packages/taro-ui/src/index.ts` |
| RN 实现 | `packages/taro-ui/rn/components/` |
| 单测 | `packages/taro-ui/test/components/` |

新增/修改组件：同步更新 `src/index.ts`、类型文件、样式、`test` 快照；提交信息格式 `feat(ComponentName): ...`（见 `.github/CONTRIBUTING.md`）。

## Agent 工作流

1. **确认场景**：消费方 Taro 项目 vs 本 monorepo 源码修改。
2. **查 API**：`references/<slug>.md` → `types/*.d.ts` → `docs/docs/components/*.md`。
3. **写用法**：`import { AtX } from 'taro-ui'` + 对应 `dist/style/components/x.scss`。
4. **排查样式缺失**：是否引入 SCSS；H5 是否配置 `esnextModules`；是否配置 `prebundle.exclude`。
5. **排查小程序样式**：基础库版本、`globalClass`、BEM 类名是否与文档一致。

## 延伸阅读

- [references/README.md](references/README.md) — 组件索引（按维度渐进披露）
- `docs/docs/guide/quickstart.md` — 快速上手与 babel 按需
- `docs/docs/guide/customize-theme.md` — 主题详解
