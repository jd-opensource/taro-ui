# Changelog

## [3.4.0](https://github.com/jd-opensource/taro-ui/compare/v3.3.3...v3.4.0) (2026-07-13)

> **现代化发布**：全部组件完成 Class → Function Component 迁移，新增国际化（ConfigProvider）能力，构建与发布流程进一步收敛。

### Features

- **Function Component 迁移**：全部 48 个组件从 Class Component 迁移为 Function Component + Hooks，props API 保持 100% 兼容 ([#1886](https://github.com/jd-opensource/taro-ui/pull/1886))
- **国际化 i18n**：新增 `ConfigProvider` 组件，通过 `locale` prop 覆盖组件内置文案；内置 zh_CN / en_US 语言包，默认中文零配置 ([#1891](https://github.com/jd-opensource/taro-ui/pull/1891))

### Bug Fixes

- **exports 兼容**：恢复 `lib/style/*` 与 `lib/*` 到 `dist/` 的 exports 映射，修复老路径引用失效（该修复曾随 3.3.4 被 revert 一并回滚）
- **PX 单位**：修复 Prettier 将 Taro `PX` 单位误转为小写导致的样式问题 ([#1901](https://github.com/jd-opensource/taro-ui/pull/1901))
- **README**：补充 `packages/taro-ui/README.md` 修复 npm 页面展示，修复文档无效链接 ([#1895](https://github.com/jd-opensource/taro-ui/pull/1895), [#1897](https://github.com/jd-opensource/taro-ui/pull/1897))

### Build & Toolchain

- **stylelint 15**：迁移至 stylelint 15 兼容的 SCSS preset；修复 demo-rn metro 路径
- **CI**：publish 步骤限定仅对 release 提交执行，避免误发布 ([#1899](https://github.com/jd-opensource/taro-ui/pull/1899))

### 附注：3.3.3（静默发布，未单独记录）

3.3.3 包含：测试框架迁移至 Jest + React Testing Library ([#1883](https://github.com/jd-opensource/taro-ui/pull/1883))、构建产物统一收敛至 `dist/` 并保持 `lib/` 路径兼容 ([#1884](https://github.com/jd-opensource/taro-ui/pull/1884))、CI 自定义 setup action ([#1885](https://github.com/jd-opensource/taro-ui/pull/1885))。

---

## [3.3.2](https://github.com/jd-opensource/taro-ui/compare/v3.3.1...v3.3.2) (2026-05-21)

> **恢复维护发布**：taro-ui 在停更多年后恢复活跃维护，本次发布包含大量工具链升级、构建系统重构和 bug 修复。

### Build & Toolchain

- **tsup 迁移**：将 taro-ui 核心库从 Rollup 迁移至 tsup，简化构建配置并提升构建速度 ([#1851](https://github.com/jd-opensource/taro-ui/pull/1851))
- **TypeScript 5.3**：升级 TypeScript 至 5.3，修复跨平台兼容性 ([#1851](https://github.com/jd-opensource/taro-ui/pull/1851))
- **CSS 预编译**：构建流程集成 Sass 预编译，彻底消除消费者构建时的 Sass deprecation 警告 ([#1841](https://github.com/jd-opensource/taro-ui/pull/1841))
- **Sass deprecation 静默**：`build:css` 脚本增加 `--silence-deprecation=import` 和 `--silence-deprecation=slash-div` 参数
- **Sass @import 保持**：为保持向后兼容，回退 Sass `@import` 迁移计划（`@use`/`@forward` 回退），计划在 v3.5.0 重新推进 ([#1841](https://github.com/jd-opensource/taro-ui/pull/1841))

### Monorepo & Examples

- **文档站迁移**：将文档站从 `packages/taro-ui-docs` 迁移至项目根目录 `docs/` ([#1858](https://github.com/jd-opensource/taro-ui/pull/1858))
- **VitePress 迁移**：文档站从 webpack 4 迁移至 VitePress，支持暗黑模式、iframe 组件预览 ([#1858](https://github.com/jd-opensource/taro-ui/pull/1858))
- **demo-v4 新增**：新增 Taro v4 实验性支持示例项目 `examples/demo-v4`，已验证 H5 和微信小程序 ([#1877](https://github.com/jd-opensource/taro-ui/pull/1877))
- **示例项目修复**：修复 demo-rn 在 Node 20 下的兼容性问题，添加 `metro-config@0.73.10`
- **CDN 图片修复**：将示例项目中失效的外部 CDN 图片替换为本地资源

### Bug Fixes

- **AtInput 光标**：修复输入时光标默认跳转到开头的 bug ([#1836](https://github.com/jd-opensource/taro-ui/issues/1836))
- **AtTextarea / AtInputNumber 非受控**：当 `value` prop 被省略时，组件以非受控模式工作，避免 React controlled/uncontrolled 警告 ([#1837](https://github.com/jd-opensource/taro-ui/issues/1837))
- **OpenData 静态导入**：避免 `OpenData` 的静态导入，修复小红书平台及企业微信构建报错 ([#1842](https://github.com/jd-opensource/taro-ui/issues/1842), [#1844](https://github.com/jd-opensource/taro-ui/issues/1844))
- **react-native-modal optional peerDeps**：将 `react-native-modal` 标记为 optional peer dependency，解决 npm ERESOLVE 冲突 ([#1843](https://github.com/jd-opensource/taro-ui/issues/1843))
- **WXSS calc() 语法**：修复 `toast.scss` 中 `calc()` 语法导致企业微信编译失败的问题 ([#1844](https://github.com/jd-opensource/taro-ui/issues/1844))
- **ESM 输出**：修复 ESM 输出配置，禁用 webpack `usedExports` 优化

### CI / CD

- **GitHub Actions 升级**：将所有 GitHub Actions 升级至最新版本
- **GitHub Pages 部署**：新增 GitHub Pages 自动部署工作流，替换已停止维护的 TCB 部署
- **pnpm 版本管理**：移除硬编码 pnpm 版本，改为使用 `packageManager` 字段管理
- **NODE_OPTIONS**：在 publish workflow 中添加 `NODE_OPTIONS=--openssl-legacy-provider` 以修复 Node 20 OpenSSL 错误
- **H5 构建集成**：CI 中增加 H5 demo 构建验证步骤

### Dependencies

- 升级 Taro 生态依赖从 `3.6.6` 至 `3.6.40`
- 升级各示例项目中的安全依赖（express、follow-redirects、ip、tar 等）

---

## [3.3.1](https://github.com/jd-opensource/taro-ui/compare/v3.3.0...v3.3.1) (2026-04-22)

### Bug Fixes

- **avatar:** avoid static OpenData import to fix xhs platform build error ([#1842](https://github.com/jd-opensource/taro-ui/issues/1842))
- **deps:** mark react-native as optional peer dependency to resolve npm ERESOLVE conflict ([#1843](https://github.com/jd-opensource/taro-ui/issues/1843))
- **toast:** fix enterprise WeChat compilation by removing OpenData and correcting calc() syntax ([#1844](https://github.com/jd-opensource/taro-ui/issues/1844))

### CI Fixes

- add `NODE_OPTIONS: --openssl-legacy-provider` to publish workflow

---

## [3.3.0](https://github.com/jd-opensource/taro-ui/compare/v3.2.2...v3.3.0) (2024-01-04)

### Features

- **countdown:** 支持自定义显示天、时、分、秒 ([#1716](https://github.com/jd-opensource/taro-ui/issues/1716))
- Add support for additional platforms and update dependencies
- Add `onChooseAvatar` event handler to `TaroButtonProps`

### Bug Fixes

- Fix Windows environment path separator issue when copying style files ([#1752](https://github.com/jd-opensource/taro-ui/pull/1752))
- Fix list item props to allow string values for `title` and `extraText` ([#1749](https://github.com/jd-opensource/taro-ui/pull/1749))

### Dependencies

- Upgrade Taro from `3.6.6` to `3.6.40` and fix build tooling
- Security updates for `express`, `follow-redirects`, `ip`, `tar`, `webpack-dev-middleware`, `es5-ext`

---

## 3.2.2 (2024-01-04)

### Bug Fixes

- 修复部分已知问题

### 历史版本

更早的变更记录请查看 [GitHub Releases](https://github.com/jd-opensource/taro-ui/releases)。
