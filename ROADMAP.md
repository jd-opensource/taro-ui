# Taro UI Roadmap

> 制定时间：2026-05-08，最近校对：2026-09-25
> 当前代码库版本：3.4.2
> npm：随 `chore(release): publish 3.4.2` 发布（上一版 3.4.1，2026-07-30）
> 主线分支：`next`
> Taro 生态：v3.6.x（开发依赖 `3.6.40`）+ v4.2.x（`examples/demo-v4`，实验性支持）

---

## 现状速览

| 维度          | 状态                                                                                                      |
| ------------- | --------------------------------------------------------------------------------------------------------- |
| **发布状态**  | 3.4.0 已完成函数组件迁移与 `ConfigProvider` 国际化；3.4.1 补回类型声明；3.4.2 发布 3.4.1 之后已合入的积压 |
| **Taro 版本** | 开发依赖锁在 `3.6.40`，`peerDependencies` 仍为 `>=3`。v4 仅 H5 与微信小程序编译验证通过                 |
| **架构债务**  | 组件已是 Function Component。SCSS 仍用 `@import`。`propTypes` 还在。测试为 Jest + React Testing Library   |
| **Monorepo**  | `packages/` 放发布包，`examples/` 放 demo，`docs/` 放文档站                                               |

---

## 核心决策

| 决策              | 结论                                                                                                                             |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **发布时机**      | 重构期已过。修复和小能力按 patch / minor 随 CHANGELOG 发布                                                                      |
| **Taro v4 策略**  | 重构阶段初始化 `demo-v4` 并完成 H5 编译验证；发布时 `peerDependencies` 仍为 `>=3`，v4 为实验性支持；小程序平台兼容性后续逐步验证 |
| **Monorepo 结构** | `packages/` 只放发布包（`taro-ui`），`examples/` 放 demo，`docs/` 放文档站                                                       |
| **CSS 预编译**    | 随重构一起做，构建时产出 `dist/style/index.css`，消除消费者 Sass warnings                                                        |

---

## 版本路线图

### v3.3.0 — Monorepo 重构 + CSS 预编译 + 双版本验证（Foundation）

> **目标**：完成内部重构和兼容性验证，为发布做准备。不做发布。

- [x] **Monorepo 重构**
  - `packages/taro-ui-demo` → `examples/demo`
  - `packages/taro-ui-demo-rn` → `examples/demo-rn`
  - `packages/taro-ui-docs` → `docs/`
  - 更新 `pnpm-workspace.yaml`、root scripts、CI paths
  - 文档站路径修复（iframe preview、build-static.js）
- [x] **CSS 预编译**
  - 构建时产出 `dist/style/index.css`
  - `package.json` `"style"` 字段指向 CSS 产物
  - 保留 `dist/style/index.scss` 供主题覆盖用户
- [x] **Taro v4 实验性验证**
  - 新建 `examples/demo-v4`（Taro 4.2.x）
  - 验证 `demo-v4` H5 编译通过
  - 验证 `demo-v4` weapp 编译通过
  - 不阻塞发布：如 v4 有兼容性问题，发布时声明"实验性支持"
- [x] **清理**
  - 删除过时的 `examples/about-sass-version`
  - 更新 `examples/lazy-load-component` 依赖

**里程碑**：项目结构规范，消费者零 warnings，v4 H5/weapp 验证通过，发布就绪。

---

### v3.3.1 — 恢复发布（Restore Release）

> **目标**：把重构后的版本正式发布到 npm，宣告项目恢复维护。已于 2026-04 发布，后续以 3.3.2 作为恢复维护说明。

- [x] 撰写 CHANGELOG，并发布到 npm
- [x] 官方文档站改为 GitHub Pages
- [ ] 全平台编译验证（alipay / tt / jd / qq）仍未做完，见下方「接下来」

**里程碑**：npm 上重新出现活跃版本。

---

### v3.3.2 — 快速修复（Stabilize）

> 已于 2026-05-21 发布：工具链升级、CSS 预编译、`demo-v4` 的 H5 / 微信小程序验证。

- [x] 发布到 npm，并写明恢复维护
- [ ] `demo-v4` alipay / tt / jd / qq 编译验证（未完成，顺延）

**里程碑**：版本恢复发布。v4 多端验证未结束。

---

### v3.4.0 / v3.4.1 — 函数组件、国际化、类型声明（Modernization）

> 3.4.0（2026-07-13）和 3.4.1（2026-07-30）已发布。

- [x] 迁移规范见 `docs/MIGRATION_FC.md`，对外 props 保持兼容
- [x] 全部组件改为 Function Component（不止原先的 Top 10）
- [x] 测试改为 Jest + React Testing Library（3.3.3）
- [x] `ConfigProvider` + zh_CN / en_US
- [x] 3.4.1 把 `types/` 重新打进 npm 包
- [ ] 移除 `propTypes`，只留 TypeScript 类型（未做）

**里程碑**：组件实现已现代化。`propTypes` 仍保留。

---

### v3.4.2 — 已合入积压（当前发版）

> 3.4.1 标签之后当天下午合进 `next`、当时没有升版本的改动。

- [x] 日历 `disabledDate`、浮层 `closeOnClickOverlay` / `position`、步进器 `changeOnBlur`
- [x] 图标 `onClick`、复选框 `onChange` 第二个参数、抽屉遮罩、手风琴默认展开、H5 `.at-frozen`
- [ ] 发到 npm，并补 GitHub Release

**里程碑**：npm 与 `next` 上的组件代码重新对齐。

---

### 接下来

1. **SCSS**（[#1871](https://github.com/jd-opensource/taro-ui/issues/1871)）：`@import` 改 `@use` / `@forward`，确认主题覆盖还能用。原先放在 3.5.0。
2. **Taro v4 多端**：`demo-v4` 补支付宝、字节、京东、QQ 的编译验证。通过之前 `peerDependencies` 保持 `>=3`。
3. **仓库分流**：按 `docs/MAINTENANCE.md` 处理打开的历史 issue。
4. **更后面**：去掉 `propTypes`；暗色主题 / CSS Variables（[#1873](https://github.com/jd-opensource/taro-ui/issues/1873)）；骨架屏、水印。国际化已在 3.4.0 落地，不再作为 4.0.0 的前提。

---

### v4.0.0 — Taro v4 官方适配 + 新特性（Major）

> **目标**：正式声明支持 Taro v4，引入新特性。

- [ ] 验证 `taro-ui` 在 Taro v4 下全平台无 breaking changes
- [ ] `peerDependencies` 更新为 `"@tarojs/*": ">=3 || ^4"`
- [ ] 新特性（待定，根据社区需求）：
  - 暗色主题 / CSS Variables 主题方案（国际化已在 3.4.0 完成）
  - 新组件：Skeleton（骨架屏）、Watermark（水印）等
- [ ] 发布 Major 版本

**里程碑**：项目跟上 Taro 主线，具备长期竞争力。

---

## Taro v4 兼容性策略（详细）

| 阶段     | 版本    | v4 状态                                  | peerDependencies |
| -------- | ------- | ---------------------------------------- | ---------------- |
| 重构期   | v3.3.0  | 初始化 `demo-v4`，H5 + weapp 编译验证    | `>=3`（不变）    |
| 首次发布 | v3.3.1  | 实验性支持，发布说明声明                 | `>=3`（不变）    |
| 持续验证 | v3.3.2+ | 逐步验证 alipay / tt / jd / qq，修复问题 | `>=3`（不变）    |
| 正式适配 | v4.0.0  | 全平台验证通过，正式声明                 | `>=3 \|\| ^4`    |

**为什么不在 v3.3.1 就声明 `>=3 || ^4`？**

- 避免过度承诺。如果用户用 Taro v4 编译支付宝小程序出问题，npm 上却声明了兼容，体验更差。
- 实验性支持是诚实策略：H5 已验证，其他平台欢迎测试反馈。

---

## 长期维护轨道（Continuous）

与上述版本并行推进，不绑定具体版本号：

| 方向        | 具体事项                                    |
| ----------- | ------------------------------------------- |
| **CI/CD**   | 完善多平台构建测试、Dependabot 自动更新依赖 |
| **文档**    | 组件文档与代码同步机制、暗色主题文档        |
| **社区**    | Issue 模板、PR 模板、贡献者指南更新         |
| **RN 生态** | 评估 React Native 0.72+/Expo 适配           |
| **性能**    | 组件渲染性能基准测试                        |

---

## 时间预估

```mermaid
gantt
    title Taro UI Roadmap Timeline
    dateFormat  YYYY-MM
    section Foundation
    v3.3.0 重构+验证     :done, 2026-05, 4w
    v3.3.1 发布          :done, milestone, 2026-04, 0d
    section Stabilize
    v3.3.2 恢复维护发布   :done, 2026-05, 3w
    section Modernization
    v3.4.x FC 与 i18n    :done, 2026-07, 4w
    v3.4.2 积压发版      :active, 2026-09, 1w
    section Next
    SCSS @use            :2026-10, 4w
    v4 多端验证          :2026-10, 6w
    section Major
    v4.0.0 Taro v4适配   :2027-Q1, 12w
```

---

## 附录：未竟的历史计划

来自 `PLANS.md`（v2.3.0）：

| 计划                | 原计划时间 | 当前状态  | Roadmap 归属                           |
| ------------------- | ---------- | --------- | -------------------------------------- |
| 组件 JSX props 改造 | v2.3.0     | 已由函数组件迁移覆盖 | 3.4.0                                      |
| 字节跳动小程序适配  | v2.3.0     | 未验证               | 已在 `peerDependencies` 中声明，需验证 |
| QQ 轻应用适配       | v2.3.0     | 未验证               | 同上                                   |
| 国际化 i18n         | v2.3.0     | 已发布               | 3.4.0 `ConfigProvider`                 |

---

_Roadmap 是活文档，会根据实际进展和社区反馈调整。_
