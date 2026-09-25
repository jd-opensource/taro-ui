# Taro UI 贡献指南

首先感谢您使用 Taro ，Taro 是由凹凸实验室打造的一套遵循 React 语法规范的多端统一开发框架。使用 Taro，我们可以只书写一套代码，再通过 Taro 的编译工具，将源代码分别编译出可以在不同端（微信小程序、H5、App 端等）运行的代码。

Taro 目前还在成长，如果您愿意为 Taro UI 贡献代码或者反馈使用意见，请阅读以下内容。

## 团队成员

Taro 是由 [凹凸实验室](https://aotu.io) 团队的十余名成员开发的项目，而 Taro UI 则是由小分队开发完成的，旨在为 Taro 贡献一套官方的 UI 组件库。

## Issue

Issues 是用来提交 Bug 或 Feature 相关的内容，一个 Bug Issue 应该由代码问题导致的，可重现的 Bug，并且有比较详细的 Bug 描述信息（Taro 版本号，Taro-UI 版本号，运行环境等等）。

在提交 Issue 之前，请搜索 github issues 中是否有相同的问题已被提出，谢谢~

## Pull requests

**第一次提 Pull Request?** 您可以学习这套 _免费_ 的课程
[How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

我们欢迎所有类型的 PR，感谢您愿意花时间贡献代码~

- 如果是组件相关的 PR，麻烦先创建一个 Issue，这么做是避免大家同时修改同一个问题
- Fork 一份代码到自己的账号下，请不要直接在仓库中创建分支
- 基于 `next` 创建一个新分支。新组件分支使用 `feature_component_[Component Name]`（例如 `feature_component_list`），修复分支使用 `fix/` 前缀
- Git Commit Message 使用约定式提交：`feat(button): info about this commit`
- 组件改动请补 `packages/taro-ui/test/components` 下的测试。小程序端暂时无法做测试，请确保这些测试可以通过
- 提交 PR 到 `next`，并写上这次改动的说明

## 开发环境

请确保您的 Node 版本是 18.x，并且 Taro 升级到最新版

```bash
git clone https://github.com/jd-opensource/taro-ui
pnpm install
```

运行项目：

```bash
# 小程序端
pnpm --filter demo dev:weapp

# H5 端
pnpm --filter demo dev:h5

# 文档页面
pnpm --filter docs dev
```

运行测试：

```bash
pnpm --filter taro-ui test
```

项目打包：

```bash
# 小程序端
pnpm build

# H5 端
pnpm build

# 文档页面
pnpm build:doc

# 组件打包
pnpm build:ui
```

文档预览

```bash
pnpm --filter demo build:h5
pnpm --filter docs build
pnpm --filter docs build:static
pnpm --filter docs preview
# visit http://localhost:4173/taro-ui/
```

## 代码规范

项目有引入 `ESLint` 和 `StyleLint`，请务必按照规范编写代码
