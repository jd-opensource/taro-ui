# Class 组件 → Function 组件迁移指南

本文档说明如何将 `packages/taro-ui` 中的 Class 组件迁移为 Function 组件（FC），并保持对外 API、运行时行为与测试快照一致。

## 目标

- 统一组件实现为 Function 组件，便于维护与后续 React 版本兼容
- **不改变**对外 props、DOM 结构、样式 class、事件语义
- 每个组件单独 PR，必须通过对应 `test/components/*.test.js`

## 迁移状态

| 状态       | 说明                                                                                         |
| ---------- | -------------------------------------------------------------------------------------------- |
| **已完成** | `packages/taro-ui/src/components` 下全部 **58** 个组件入口（含子组件）均已改为 Function 组件 |
| 验证       | `pnpm run build:ui` + `cd packages/taro-ui && pnpm test`（**354** 项测试、**314** 快照）     |

`src/components` 内已无 `export default class`。`src/common/component.tsx` 中的 `AtComponent` 基类仍保留（无组件继承，仅对外 export）。

### 分阶段记录（历史）

| 阶段 | 范围                                                                                                                                                                                                                                                                                                                      |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PR-1 | 展示类：`divider`、`tag`、`badge`、`progress`、`icon`、`card`、`steps`、`timeline`、`curtain`、`load-more`、`activity-indicator`、`segmented-control`、`form`、`list`、`flex`、`tabs-pane`、`grid`、`rate`、`radio`、`checkbox`、`switch`、`fab`、`nav-bar` 及 modal/action-sheet/countdown/swipe-action 子组件、`avatar` |
| PR-2 | `input`（`useRef` 保存 `inputClearing`）、`textarea`、`input-number`、`image-picker`                                                                                                                                                                                                                                      |
| PR-3 | `modal`、`action-sheet`、`accordion`、`drawer`、`float-layout`、`pagination`、`tabs`、`slider`、`range`、`search-bar`、`tab-bar`、`toast`、`message`、`indexes`、`swipe-action`、`noticebar`、`countdown`                                                                                                                 |
| PR-4 | `calendar` 子树：`ui/day-list`、`ui/date-list`、`controller`、`body`、`index`                                                                                                                                                                                                                                             |

## 基本步骤

1. 阅读 `src/components/<name>/index.tsx` 与 `test/components/<name>.test.js`
2. 按本文约定改写为 Function 组件
3. 根目录执行构建：`pnpm run build:ui`
4. 在 `packages/taro-ui` 下跑测试：`pnpm exec jest test/components/<name>.test.js --no-coverage`
5. 快照失败时先确认是否为**非预期**行为变化；仅当 DOM/样式确实应与旧版一致时再更新快照

## 代码约定

### 1. 组件声明

```tsx
// 之前
export default class AtXxx extends React.Component<AtXxxProps, AtXxxState> {
  public render(): JSX.Element { ... }
}

// 之后
function AtXxx(props: AtXxxProps): JSX.Element { ... }

AtXxx.propTypes = { ... }

export default AtXxx
```

- 移除 `public static defaultProps`、`public static propTypes` 类静态声明
- 类型仍从 `packages/taro-ui/types/<name>.d.ts` 引用（如 `AtButtonProps`）
- 无 state 的组件可删除 `AtXxxState` 的 import（类型文件中的 `State` 接口可保留，供历史类型导出）

### 2. 默认值：`defaultProps` → 解构默认参数

React 18+ 不推荐在 Function 组件上使用 `defaultProps`，统一改为参数解构默认值：

```tsx
// 之前
AtLoading.defaultProps = { size: 0, color: '' }

// 之后
function AtLoading({ color = '', size = 0 }: AtLoadingProps): JSX.Element {
```

将原 `defaultProps` 中的每一项映射到函数参数默认值；未在 `defaultProps` 中声明的 prop 保持可选，不设默认参数。

### 3. 保留 `propTypes`

`propTypes` 继续挂在函数组件上，构建产物中会保留（`tsup` 不会剥离）：

```tsx
AtLoading.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
```

| 环境                       | 是否校验                                  |
| -------------------------- | ----------------------------------------- |
| 开发 / `NODE_ENV=test`     | 是，`console.error` 输出 Failed prop type |
| 生产 `NODE_ENV=production` | 否（React 跳过运行时校验）                |

TypeScript 的 `interface` 与 `propTypes` 互补，迁移时**不要删除** `propTypes` 块。

### 4. 实例方法 → 函数内 handler

```tsx
// 之前
private onClick(event: CommonEvent): void {
  if (!this.props.disabled) {
    this.props.onClick && this.props.onClick(event)
  }
}
// JSX: onClick={this.onClick.bind(this)}

// 之后
const handleClick = (event: CommonEvent): void => {
  if (!disabled) {
    onClick && onClick(event)
  }
}
// JSX: onClick={handleClick}
```

- 在参数解构后直接使用 `disabled`、`onClick` 等，无需 `bind`
- 命名建议：`handleClick`、`handleGetUserInfo`（与私有方法 `onClick` 区分，避免与 props 同名遮蔽）

### 5. `constructor` / `state` 的处理

#### 仅初始化环境等「不变」数据（参考 `button`）

原在 `constructor` 中根据 `Taro.getEnv()` 写入 state：

```tsx
// 之前
this.state = {
  isWEB: Taro.getEnv() === Taro.ENV_TYPE.WEB,
  ...
}

// 之后（每次 render 计算即可，env 在实例生命周期内不变）
const isWEB = Taro.getEnv() === Taro.ENV_TYPE.WEB
const isWEAPP = Taro.getEnv() === Taro.ENV_TYPE.WEAPP
const isALIPAY = Taro.getEnv() === Taro.ENV_TYPE.ALIPAY
```

测试环境通过 `test/__mock__/taro.js` 将 `getEnv()` 固定为 `WEB`，行为与迁移前一致。

#### 真正的 UI state（`setState`）

需改为 `useState` / `useReducer`，并核对：

- `componentDidMount` / `componentWillUnmount` → `useEffect`
- `componentWillReceiveProps` / `UNSAFE_*` → `useEffect` + 依赖项

**有生命周期或复杂 state 的组件**（如 `message`、`toast`、`calendar`）应单独评估，不要机械替换。

### 6. `render` 中的解构

将 `render()` 内对 `this.props` 的解构上移到函数参数；逻辑保持逐行等价，避免顺带重构。

### 7. TypeScript 注意点

**`type` 等 prop 允许空字符串但类型未包含 `''`**

`AtButton` 原在 `render` 里写 `type = ''`，而 `AtButtonProps['type']` 仅为 `'primary' | 'secondary'`。迁移时可：

```tsx
function AtButton({ type, ... }: AtButtonProps) {
  const buttonType = type ?? ''
  const classObject = {
    [`at-button--${buttonType}`]: buttonType
      ? TYPE_CLASS[buttonType as keyof typeof TYPE_CLASS]
      : false
  }
}
```

不要在参数上写 `type = ''`，否则会触发 `TS2322`。

**索引 `TYPE_CLASS[type]`**

`type` 为 `undefined` 时不能直接作为索引，需先收窄或使用 `buttonType` 辅助变量（见上）。

### 8. 不要改动的部分

- 对外导出名、`className` 前缀、`packages/taro-ui/types/*.d.ts` 中的公共 props（除非类型本就错误且单独立项修复）
- SCSS、`dist` 构建配置、组件在 `src/index.ts` 中的导出路径
- 测试用例的断言逻辑（除非修复测试本身 bug）

## 参考实现

### 无 state：`loading`

路径：`packages/taro-ui/src/components/loading/index.tsx`

要点：解构默认值、`propTypes`、纯展示逻辑。

### 构造函数 state + 事件：`button`

路径：`packages/taro-ui/src/components/button/index.tsx`

要点：`Taro.getEnv()`、多平台 `Button` 子节点、`AtLoading` 子组件、disabled 时阻止 `onClick`。

## 测试说明

- 测试入口：`packages/taro-ui/test/components/<name>.test.js`
- import 路径 `../../lib/components/...` 经 Jest `moduleNameMapper` 映射到 **`dist/`**，因此**必须先** `pnpm run build:ui`
- 常见用例：快照（`toMatchSnapshot`）、`fireEvent` + `queryByClass`
- 跑单个文件：

```bash
cd packages/taro-ui
pnpm exec jest test/components/button.test.js --no-coverage
```

- 更新快照（确认无行为回归后）：

```bash
pnpm run test:update -- test/components/button.test.js
```

## PR 检查清单

- [ ] 仅修改目标组件及相关必要类型，diff 尽量小
- [ ] `pnpm run build:ui` 成功
- [ ] 对应 `*.test.js` 全部通过
- [ ] 未引入 `defaultProps`（Function 组件）
- [ ] `propTypes` 与原 class 组件一致
- [ ] 有 `setState` / 生命周期的组件已单独说明 Hook 方案（或暂不迁移并备注原因）

## 建议迁移顺序

1. **简单展示类**：`divider`、`tag`、`badge`、`progress`、`icon` …
2. **仅 props + 事件**：`checkbox`、`radio`、`switch`、`fab` …
3. **含子组件拼装**：`list`、`modal`、`action-sheet` …
4. **含 state / 副作用**：`message`、`toast`、`indexes`、`calendar` …

优先迁移已有测试且快照稳定的组件，降低回归风险。
