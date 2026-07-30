# 仓库维护与历史 Issue / PR 治理

> 目标：在恢复维护后，把主列表收敛到「当前主线仍相关」的事项，而不是清空社区记录。

## 当前主线

- **Taro**：3.x（见 `peerDependencies`）
- **分支**：开发与发布以 `next` 为主（发布流程见 `.github/workflows/publish.yml`）
- **包**：`packages/taro-ui`（npm 包名 `taro-ui`）

不在当前主线范围的内容（示例）：Taro 1.x / 2.x 专用问题、已废弃构建链、长期无主线计划的端（如历史快应用移植实验）等，将优先关闭或标记 `wontfix`。

## Issue 策略

| 类型 | 处理 |
|------|------|
| 最新版可复现的 bug | 保留，补标签与版本信息 |
| 符合 ROADMAP 的 enhancement | 保留或链到 ROADMAP issue |
| 提问 / 用法 | 回答后关闭，或标 `answered` |
| \>180 天无活动 | 由 [stale 工作流](../.github/workflows/stale.yml) 标记，再 30 天后关闭 |
| 明确过时 / 无法复现 / 超出范围 | 人工关闭并说明原因 |

关闭历史 issue **不是拒绝反馈**：可在新版本上 **新开 issue** 或评论请求 reopen。

### 推荐标签

- `bug` / `enhancement` / `question`
- `需要复现` / `信息不足` / `to be closed` / `wontfix`
- `fixed but not released` / `waiting taro fix`
- 组件类标签（表单 / 布局 / …）

## PR 策略

| 类型 | 处理 |
|------|------|
| 基于 `dev` 等旧分支、长期无更新 | 关闭，请基于 `next` 重开 |
| 依赖 bot 且路径/主线已变 | 关闭，由当前依赖策略重开 |
| 仍有价值但冲突大 | 关闭并转为 issue，或请作者 rebase 到 `next` |
| 小修复且仍适用 | 邀请 rebase；超时无响应则维护者自行评估 cherry-pick 或关闭 |

## 自动化

- **Stale bot**：`.github/workflows/stale.yml`（可 `workflow_dispatch` 手动跑）
- Issue：180 天 stale → 30 天关闭  
- PR：90 天 stale → 14 天关闭  
- 已指派 assignee 的 issue/PR 豁免；带豁免标签的不处理  

## 人工批量清理（一次性）

恢复维护初期可对 **创建 ≥2 年且长期无活动** 的条目做公告后分批关闭；话术与公告见维护公告 issue（标题含「仓库维护公告」）。
