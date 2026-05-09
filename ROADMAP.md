# Taro UI Roadmap

> 制定时间：2026-05-08
> 当前代码库版本：3.3.1（未发布）
> npm 最新发布：3.2.2（2024-01-04）
> Taro 生态：v3.6.x（长期维护）+ v4.2.x（当前主线）

---

## 现状速览

| 维度 | 状态 |
|------|------|
| **发布状态** | 代码库 3.3.1 已完成工具链升级（tsup/TS5.3/VitePress），但未发布到 npm |
| **Taro 版本** | 开发依赖锁在 `3.6.40`，`peerDependencies` 声明 `>=3`，实际未验证 v4 |
| **架构债务** | 48/48 组件为 Class Component，SCSS `@import` 已废弃，测试用 `nervjs` |
| **Monorepo** | 结构混乱：demo 和文档站混在 `packages/` 中 |

---

## 核心决策

| 决策 | 结论 |
|------|------|
| **发布时机** | 先完成重构，再发布。不零散发版，CHANGELOG 一次性写清楚 |
| **Taro v4 策略** | 重构阶段初始化 `demo-v4` 并完成 H5 编译验证；发布时 `peerDependencies` 仍为 `>=3`，v4 为实验性支持；小程序平台兼容性后续逐步验证 |
| **Monorepo 结构** | `packages/` 只放发布包（`taro-ui`），`examples/` 放 demo，`docs/` 放文档站 |
| **CSS 预编译** | 随重构一起做，构建时产出 `lib/style/index.css`，消除消费者 Sass warnings |

---

## 版本路线图

### v3.3.0 — Monorepo 重构 + CSS 预编译 + 双版本验证（Foundation）

> **目标**：完成内部重构和兼容性验证，为发布做准备。不做发布。

- [ ] **Monorepo 重构**
  - `packages/taro-ui-demo` → `examples/demo`
  - `packages/taro-ui-demo-rn` → `examples/demo-rn`
  - `packages/taro-ui-docs` → `docs/`
  - 更新 `pnpm-workspace.yaml`、root scripts、CI paths
  - 文档站路径修复（iframe preview、build-static.js）
- [ ] **CSS 预编译**
  - 构建时产出 `lib/style/index.css`
  - `package.json` `"style"` 字段指向 CSS 产物
  - 保留 `lib/style/index.scss` 供主题覆盖用户
- [ ] **Taro v4 实验性验证**
  - 新建 `examples/demo-v4`（Taro 4.2.x）
  - 验证 `demo-v4` H5 编译通过
  - 验证 `demo-v4` weapp 编译通过
  - 不阻塞发布：如 v4 有兼容性问题，发布时声明"实验性支持"
- [ ] **清理**
  - 删除过时的 `examples/about-sass-version`
  - 更新 `examples/lazy-load-component` 依赖

**里程碑**：项目结构规范，消费者零 warnings，v4 H5/weapp 验证通过，发布就绪。

---

### v3.3.1 — 恢复发布（Restore Release）

> **目标**：把重构后的版本正式发布到 npm，宣告项目恢复维护。

- [ ] 最终验证全平台编译通过（weapp / h5 / alipay / tt）
- [ ] 撰写 CHANGELOG（一次性涵盖 3.2.2 → 3.3.1：工具链升级 + Monorepo 重构 + CSS 预编译 + 实验性 v4 支持）
- [ ] 发布到 npm
- [ ] 更新官方文档站点
- [ ] 发布说明声明 Taro v4 为实验性支持（H5 已验证，小程序平台持续验证中）

**里程碑**：npm 上重新出现活跃版本，项目恢复维护信号。

---

### v3.3.2 — 快速修复 + v4 持续验证（Stabilize）

> **目标**：处理发布后社区反馈，推进 v4 小程序平台兼容性。

- [ ] 根据社区 Issue 修复 v3.3.1 中发现的问题
- [ ] `demo-v4` alipay / tt / jd / qq 编译验证
- [ ] `demo-v4` 运行时兼容性测试（如有问题，修复后 patch 发布）
- [ ] 根据验证结果调整 Taro v4 兼容策略

**里程碑**：版本稳定，v4 兼容性逐步完善。

---

### v3.4.0 — Function Component 迁移（Modernization）

> **目标**：首批高频组件从 Class → Function Component + Hooks。

- [ ] 制定迁移规范（API 保持 100% 兼容）
- [ ] 优先迁移 Top 10 高频组件：
  - `AtButton`
  - `AtInput`
  - `AtModal`
  - `AtToast`
  - `AtTabs`
  - `AtForm`
  - `AtList`
  - `AtCard`
  - `AtIcon`
  - `AtSwitch`
- [ ] 同步更新对应组件的测试用例（nervjs → React Testing Library）
- [ ] 移除 PropTypes，纯 TypeScript 类型
- [ ] 发布到 npm

**里程碑**：核心组件现代化，包体积可能减小，Tree-shaking 更优。

---

### v3.5.0 — 全组件 FC 迁移 + SCSS 升级（Completion）

> **目标**：完成剩余 38 个组件的 FC 迁移，升级样式系统。

- [ ] 迁移剩余全部组件为 Function Component
- [ ] SCSS `@import` → `@use` / `@forward`
- [ ] 验证主题覆盖能力不受影响
- [ ] 清理代码中所有 TODO/FIXME/hack（百度小程序 hack 等）
- [ ] 测试体系全面现代化（RTL + jest）
- [ ] 发布到 npm

**里程碑**：项目全面现代化，技术债务清零。

---

### v4.0.0 — Taro v4 官方适配 + 新特性（Major）

> **目标**：正式声明支持 Taro v4，引入新特性。

- [ ] 验证 `taro-ui` 在 Taro v4 下全平台无 breaking changes
- [ ] `peerDependencies` 更新为 `"@tarojs/*": ">=3 || ^4"`
- [ ] 新特性（待定，根据社区需求）：
  - 国际化 i18n（提取组件硬编码文案）
  - 暗色主题 / CSS Variables 主题方案
  - 新组件：Skeleton（骨架屏）、Watermark（水印）等
- [ ] 发布 Major 版本

**里程碑**：项目跟上 Taro 主线，具备长期竞争力。

---

## Taro v4 兼容性策略（详细）

| 阶段 | 版本 | v4 状态 | peerDependencies |
|------|------|---------|-----------------|
| 重构期 | v3.3.0 | 初始化 `demo-v4`，H5 + weapp 编译验证 | `>=3`（不变） |
| 首次发布 | v3.3.1 | 实验性支持，发布说明声明 | `>=3`（不变） |
| 持续验证 | v3.3.2+ | 逐步验证 alipay / tt / jd / qq，修复问题 | `>=3`（不变） |
| 正式适配 | v4.0.0 | 全平台验证通过，正式声明 | `>=3 \|\| ^4` |

**为什么不在 v3.3.1 就声明 `>=3 || ^4`？**
- 避免过度承诺。如果用户用 Taro v4 编译支付宝小程序出问题，npm 上却声明了兼容，体验更差。
- 实验性支持是诚实策略：H5 已验证，其他平台欢迎测试反馈。

---

## 长期维护轨道（Continuous）

与上述版本并行推进，不绑定具体版本号：

| 方向 | 具体事项 |
|------|---------|
| **CI/CD** | 完善多平台构建测试、Dependabot 自动更新依赖 |
| **文档** | 组件文档与代码同步机制、暗色主题文档 |
| **社区** | Issue 模板、PR 模板、贡献者指南更新 |
| **RN 生态** | 评估 React Native 0.72+/Expo 适配 |
| **性能** | 组件渲染性能基准测试 |

---

## 时间预估

```mermaid
gantt
    title Taro UI Roadmap Timeline
    dateFormat  YYYY-MM
    section Foundation
    v3.3.0 重构+验证     :active, 2026-05, 4w
    v3.3.1 发布          :milestone, after v3.3.0, 0d
    section Stabilize
    v3.3.2 Hotfix+v4验证  :2026-06, 3w
    section Modernization
    v3.4.0 FC迁移(Top10) :2026-07, 6w
    v3.5.0 全FC迁移      :2026-09, 8w
    section Major
    v4.0.0 Taro v4适配   :2027-Q1, 12w
```

---

## 附录：未竟的历史计划

来自 `PLANS.md`（v2.3.0）：

| 计划 | 原计划时间 | 当前状态 | Roadmap 归属 |
|------|----------|---------|-------------|
| 组件 JSX props 改造 | v2.3.0 | ❌ 未开始 | v3.4.0 / v3.5.0（FC 迁移覆盖）|
| 字节跳动小程序适配 | v2.3.0 | ❌ 未开始 | 已在 `peerDependencies` 中声明，需验证 |
| QQ 轻应用适配 | v2.3.0 | ❌ 未开始 | 同上 |
| 国际化 i18n | v2.3.0 | ❌ 未开始 | v4.0.0 |

---

*Roadmap 是活文档，会根据实际进展和社区反馈调整。*
