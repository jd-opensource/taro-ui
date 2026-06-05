#!/usr/bin/env node
/**
 * 从 packages/taro-ui/types 生成 packages/taro-ui-guide/references/*.md
 * 仓库维护脚本，与 Agent SKILL 运行时无关。
 */
const fs = require('fs')
const path = require('path')

const REPO_ROOT = path.resolve(__dirname, '..')
const TYPES_DIR = path.join(REPO_ROOT, 'packages/taro-ui/types')
const OUT_DIR = path.join(REPO_ROOT, 'packages/taro-ui-guide/references')

const MANIFEST = [
  { slug: 'nav-bar', category: 'layout', title: 'NavBar 导航栏', exports: ['AtNavBar'], style: ['nav-bar.scss'], types: ['nav-bar.d.ts'], doc: 'navbar.md' },
  { slug: 'tab-bar', category: 'layout', title: 'TabBar 标签栏', exports: ['AtTabBar'], style: ['tab-bar.scss'], types: ['tab-bar.d.ts'], doc: 'tabbar.md' },
  { slug: 'tabs', category: 'layout', title: 'Tabs 标签页', exports: ['AtTabs', 'AtTabsPane'], style: ['tabs.scss'], types: ['tabs.d.ts', 'tabs-pane.d.ts'], doc: 'tabs.md' },
  { slug: 'drawer', category: 'layout', title: 'Drawer 抽屉', exports: ['AtDrawer'], style: ['drawer.scss'], types: ['drawer.d.ts'], doc: 'drawer.md' },
  { slug: 'float-layout', category: 'layout', title: 'FloatLayout 浮层', exports: ['AtFloatLayout'], style: ['float-layout.scss'], types: ['float-layout.d.ts'], doc: 'float-layout.md' },
  { slug: 'curtain', category: 'layout', title: 'Curtain 幕帘', exports: ['AtCurtain'], style: ['curtain.scss'], types: ['curtain.d.ts'], doc: 'curtain.md' },
  { slug: 'divider', category: 'layout', title: 'Divider 分割线', exports: ['AtDivider'], style: ['divider.scss'], types: ['divider.d.ts'], doc: 'divider.md' },
  { slug: 'fab', category: 'layout', title: 'Fab 悬浮按钮', exports: ['AtFab'], style: ['fab.scss'], types: ['fab.d.ts'], doc: 'fab.md' },

  { slug: 'button', category: 'basic', title: 'Button 按钮', exports: ['AtButton'], style: ['button.scss'], types: ['button.d.ts'], doc: 'button.md' },
  { slug: 'icon', category: 'basic', title: 'Icon 图标', exports: ['AtIcon'], style: ['icon.scss'], types: ['icon.d.ts'], doc: 'icon.md', notes: 'Toast、List 等组件常需同时引入 icon.scss' },
  { slug: 'avatar', category: 'basic', title: 'Avatar 头像', exports: ['AtAvatar'], style: ['avatar.scss'], types: ['avatar.d.ts'], doc: 'avatar.md' },
  { slug: 'badge', category: 'basic', title: 'Badge 徽标', exports: ['AtBadge'], style: ['badge.scss'], types: ['badge.d.ts'], doc: 'badge.md' },
  { slug: 'tag', category: 'basic', title: 'Tag 标签', exports: ['AtTag'], style: ['tag.scss'], types: ['tag.d.ts'], doc: 'tag.md' },
  { slug: 'progress', category: 'basic', title: 'Progress 进度条', exports: ['AtProgress'], style: ['progress.scss'], types: ['progress.d.ts'], doc: 'progress.md' },
  { slug: 'activity-indicator', category: 'basic', title: 'ActivityIndicator 加载', exports: ['AtActivityIndicator'], style: ['activity-indicator.scss'], types: ['activity-indicator.d.ts'], doc: 'activity-indicator.md' },
  { slug: 'load-more', category: 'basic', title: 'LoadMore 加载更多', exports: ['AtLoadMore'], style: ['load-more.scss'], types: ['load-more.d.ts'], doc: 'load-more.md', notes: '文案可通过 ConfigProvider.locale.LoadMore 覆盖' },
  { slug: 'pagination', category: 'basic', title: 'Pagination 分页', exports: ['AtPagination'], style: ['pagination.scss'], types: ['pagination.d.ts'], doc: 'pagination.md' },

  { slug: 'form', category: 'form', title: 'Form 表单', exports: ['AtForm'], style: ['form.scss'], types: ['form.d.ts'], doc: 'form.md' },
  { slug: 'input', category: 'form', title: 'Input 输入框', exports: ['AtInput'], style: ['input.scss'], types: ['input.d.ts'], doc: 'input.md' },
  { slug: 'textarea', category: 'form', title: 'Textarea 多行输入', exports: ['AtTextarea'], style: ['textarea.scss'], types: ['textarea.d.ts'], doc: 'textarea.md' },
  { slug: 'input-number', category: 'form', title: 'InputNumber 数字输入', exports: ['AtInputNumber'], style: ['input-number.scss'], types: ['input-number.d.ts'], doc: 'input-number.md' },
  { slug: 'switch', category: 'form', title: 'Switch 开关', exports: ['AtSwitch'], style: ['switch.scss'], types: ['switch.d.ts'], doc: 'switch.md', notes: '暂不支持 SCSS 变量覆盖主题' },
  { slug: 'checkbox', category: 'form', title: 'Checkbox 多选', exports: ['AtCheckbox'], style: ['checkbox.scss'], types: ['checkbox.d.ts'], doc: 'checkbox.md' },
  { slug: 'radio', category: 'form', title: 'Radio 单选', exports: ['AtRadio'], style: ['radio.scss'], types: ['radio.d.ts'], doc: 'radio.md' },
  { slug: 'rate', category: 'form', title: 'Rate 评分', exports: ['AtRate'], style: ['rate.scss'], types: ['rate.d.ts'], doc: 'rate.md' },
  { slug: 'slider', category: 'form', title: 'Slider 滑块', exports: ['AtSlider'], style: ['slider.scss'], types: ['slider.d.ts'], doc: 'slider.md', notes: '暂不支持 SCSS 变量覆盖主题' },
  { slug: 'range', category: 'form', title: 'Range 范围选择', exports: ['AtRange'], style: ['range.scss'], types: ['range.d.ts'], doc: 'range.md' },
  { slug: 'search-bar', category: 'form', title: 'SearchBar 搜索栏', exports: ['AtSearchBar'], style: ['search-bar.scss'], types: ['search-bar.d.ts'], doc: 'search-bar.md' },
  { slug: 'image-picker', category: 'form', title: 'ImagePicker 图片选择', exports: ['AtImagePicker'], style: ['image-picker.scss'], types: ['image-picker.d.ts'], doc: 'image-picker.md' },

  { slug: 'modal', category: 'feedback', title: 'Modal 对话框', exports: ['AtModal', 'AtModalHeader', 'AtModalContent', 'AtModalAction'], style: ['modal.scss'], types: ['modal.d.ts'], doc: 'modal.md' },
  { slug: 'action-sheet', category: 'feedback', title: 'ActionSheet 动作面板', exports: ['AtActionSheet', 'AtActionSheetItem'], style: ['action-sheet.scss'], types: ['action-sheet.d.ts'], doc: 'action-sheet.md' },
  { slug: 'toast', category: 'feedback', title: 'Toast 轻提示', exports: ['AtToast'], style: ['toast.scss', 'icon.scss'], types: ['toast.d.ts'], doc: 'toast.md', notes: '声明式：isOpened、text、status、onClose' },
  { slug: 'message', category: 'feedback', title: 'Message 消息通知', exports: ['AtMessage'], style: ['message.scss'], types: ['message.d.ts'], doc: 'message.md', notes: '页面挂载 <AtMessage /> 后使用 Taro.atMessage({ message, type, duration })' },
  { slug: 'noticebar', category: 'feedback', title: 'Noticebar 通告栏', exports: ['AtNoticebar'], style: ['noticebar.scss'], types: ['noticebar.d.ts'], doc: 'noticebar.md' },
  { slug: 'swipe-action', category: 'feedback', title: 'SwipeAction 滑动操作', exports: ['AtSwipeAction'], style: ['swipe-action.scss'], types: ['swipe-action.d.ts'], doc: 'swipe-action.md' },

  { slug: 'list', category: 'display', title: 'List 列表', exports: ['AtList', 'AtListItem'], style: ['list.scss'], types: ['list.d.ts'], doc: 'list.md' },
  { slug: 'card', category: 'display', title: 'Card 卡片', exports: ['AtCard'], style: ['card.scss'], types: ['card.d.ts'], doc: 'card.md' },
  { slug: 'grid', category: 'display', title: 'Grid 宫格', exports: ['AtGrid'], style: ['grid.scss'], types: ['grid.d.ts'], doc: 'grid.md' },
  { slug: 'accordion', category: 'display', title: 'Accordion 手风琴', exports: ['AtAccordion'], style: ['accordion.scss'], types: ['accordion.d.ts'], doc: 'accordion.md' },
  { slug: 'timeline', category: 'display', title: 'Timeline 时间轴', exports: ['AtTimeline'], style: ['timeline.scss'], types: ['timeline.d.ts'], doc: 'timeline.md' },
  { slug: 'steps', category: 'display', title: 'Steps 步骤条', exports: ['AtSteps'], style: ['steps.scss'], types: ['steps.d.ts'], doc: 'steps.md' },
  { slug: 'countdown', category: 'display', title: 'Countdown 倒计时', exports: ['AtCountdown'], style: ['countdown.scss'], types: ['countdown.d.ts'], doc: 'countdown.md' },
  { slug: 'calendar', category: 'display', title: 'Calendar 日历', exports: ['AtCalendar'], style: ['calendar.scss'], types: ['calendar.d.ts'], doc: 'calendar.md' },
  { slug: 'indexes', category: 'display', title: 'Indexes 索引选择', exports: ['AtIndexes'], style: ['indexes.scss'], types: ['indexes.d.ts'], doc: 'indexes.md' },
  { slug: 'segmented-control', category: 'display', title: 'SegmentedControl 分段器', exports: ['AtSegmentedControl'], style: ['segmented-control.scss'], types: ['segmented-control.d.ts'], doc: 'segmented-control.md' },

  { slug: 'config-provider', category: 'other', title: 'ConfigProvider 全局配置', exports: ['ConfigProvider', 'zhCN', 'enUS'], style: [], types: ['config-provider.d.ts', 'locale.d.ts'], doc: 'config-provider.md', notes: '无独立样式；locale 与 zhCN/enUS 深合并' },
  { slug: 'loading', category: 'other', title: 'Loading 加载', exports: ['AtLoading'], style: ['loading.scss'], types: [], doc: undefined, notes: '多为 AtButton 等内部使用，亦可单独引用' }
]

const CATEGORY_LABEL = {
  layout: '布局与导航',
  basic: '基础',
  form: '表单',
  feedback: '反馈',
  display: '展示',
  other: '其他'
}

function extractInterfaces(content) {
  const interfaces = []
  const re = /(?:export )?interface (\w+)[^{]*\{([\s\S]*?)\n\}/g
  let m = re.exec(content)
  while (m !== null) {
    interfaces.push({ name: m[1], body: m[2] })
    m = re.exec(content)
  }
  return interfaces
}

function extractPropsFromBody(body) {
  const props = []
  const lines = body.split('\n')
  let docLines = []
  for (const line of lines) {
    if (/^\s*\/\*\*/.test(line)) {
      docLines = []
      continue
    }
    if (/^\s*\*\//.test(line)) continue
    const docMatch = line.match(/^\s*\*\s+(.+)/)
    if (docMatch) {
      const text = docMatch[1].trim()
      if (text.startsWith('@')) continue
      docLines.push(text)
      continue
    }
    const propMatch = line.match(/^\s*(\w+)(\?)?:\s*/)
    if (propMatch && !['extends', 'Omit'].some(k => line.includes(k))) {
      const name = propMatch[1]
      if (!name.startsWith('_')) {
        const doc = docLines.join(' ').trim() || '—'
        props.push({ name, optional: !!propMatch[2], doc })
      }
      docLines = []
    }
  }
  return props
}

function readTypesFiles(files) {
  const allInterfaces = []
  for (const file of files) {
    const p = path.join(TYPES_DIR, file)
    if (!fs.existsSync(p)) continue
    const content = fs.readFileSync(p, 'utf8')
    for (const iface of extractInterfaces(content)) {
      const ifaceProps = extractPropsFromBody(iface.body)
      if (ifaceProps.length) allInterfaces.push({ name: iface.name, props: ifaceProps })
    }
  }
  return allInterfaces
}

function renderComponentMd(entry) {
  const importList = entry.exports.join(', ')
  const styleBlock =
    entry.style.length === 0
      ? '_无独立样式文件_'
      : entry.style
          .map(s => `@import 'taro-ui/dist/style/components/${s}';`)
          .join('\n')

  const interfaces = readTypesFiles(entry.types)
  let propsSection = ''
  if (interfaces.length) {
    const propInterfaces = interfaces.filter(
      i =>
        (i.name.endsWith('Props') && !i.name.includes('State')) ||
        i.name === 'Options'
    )
    for (const iface of propInterfaces) {
      if (iface.props.length === 0) continue
      const heading =
        iface.name === 'Options'
          ? '`Taro.atMessage` Options'
          : `\`${iface.name}\``
      propsSection += `\n### ${heading}\n\n`
      propsSection += '| Prop | 可选 | 说明 |\n|------|------|------|\n'
      for (const p of iface.props.slice(0, 24)) {
        propsSection += `| \`${p.name}\` | ${p.optional ? '是' : '否'} | ${p.doc} |\n`
      }
      if (iface.props.length > 24) {
        propsSection += `\n> 另有 ${iface.props.length - 24} 项，见完整类型文件。\n`
      }
    }
  } else {
    propsSection = '\n见 `packages/taro-ui/types/` 或官方文档。\n'
  }

  const srcDir = entry.exports[0].startsWith('Config')
    ? 'config-provider'
    : entry.slug

  const docLine = entry.doc
    ? `- 官方文档：\`docs/docs/components/${entry.doc}\``
    : ''

  const relatedLine =
    entry.related && entry.related.length
      ? `\n## 关联\n\n${entry.related.map(s => `- [${s}](./${s}.md)`).join('\n')}\n`
      : ''

  const notesBlock = entry.notes ? `\n## 注意\n\n${entry.notes}\n` : ''

  return `# ${entry.title}

> 按需阅读：仅在使用本组件时打开此文件。

## 导出

\`${importList}\`

## 引入

\`\`\`tsx
import { ${importList} } from 'taro-ui'
\`\`\`

## 样式（按需）

\`\`\`scss
${styleBlock}
\`\`\`

## 源码与类型

- 实现：\`packages/taro-ui/src/components/${srcDir}/\`
- 类型：${entry.types.map(t => `\`packages/taro-ui/types/${t}\``).join('、') || '—'}
${docLine}

## 主要 Props
${propsSection}
${notesBlock}${relatedLine}
---
[← 组件索引](./README.md)
`
}

function renderIndex() {
  const byCategory = {}
  for (const entry of MANIFEST) {
    if (!byCategory[entry.category]) byCategory[entry.category] = []
    byCategory[entry.category].push(entry)
  }

  let md = `# 组件参考索引

按组件维度渐进披露：仅在使用某组件时阅读对应 \`references/<slug>.md\`。

命名：导出 \`AtFoo\` → 文件 \`foo.md\`（kebab-case）。

## 分类

`
  for (const [cat, label] of Object.entries(CATEGORY_LABEL)) {
    const items = byCategory[cat]
    if (!items || !items.length) continue
    md += `### ${label}\n\n`
    for (const e of items) {
      md += `- [${e.title}](./${e.slug}.md) — \`${e.exports.join('`, `')}\`\n`
    }
    md += '\n'
  }

  md += `## 维护（仓库贡献者）

修改 \`packages/taro-ui/types\` 后重新生成，勿手改各文件 Props 表：

\`\`\`bash
pnpm run generate:guide-references
\`\`\`
`
  return md
}

fs.mkdirSync(OUT_DIR, { recursive: true })

for (const entry of MANIFEST) {
  const outPath = path.join(OUT_DIR, `${entry.slug}.md`)
  fs.writeFileSync(outPath, renderComponentMd(entry))
  console.log('wrote', entry.slug)
}

fs.writeFileSync(path.join(OUT_DIR, 'README.md'), renderIndex())
console.log('wrote README.md')
