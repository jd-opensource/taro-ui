# 更新日志

---

项目遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范

<div class="changelog-timeline">

<div class="changelog-item major">

### v2.3.0

<p class="date">2020-02-29</p>

- <span>Calendar</span> 修复因 key 重复导致的日期更新错位问题（[#853](https://github.com/nervjs/taro-ui/issues/853)）
- <span>ImagePicker</span> 修复 AtImagePicker 的 onChange 首参类型错误（[#902](https://github.com/NervJS/taro-ui/issues/902)）
- <span>InputNumber</span> 修复 AtInputNumber onChange 没有 Event 对象的问题（[#923](https://github.com/NervJS/taro-ui/issues/923)）
- <span>Modal</span> 修复 model content 在显示长文本时会溢出（[#954](https://github.com/NervJS/taro-ui/issues/954)）
- <span>Range</span> 只有一个 value 变动的情况也触发渲染（[#952](https://github.com/NervJS/taro-ui/issues/952)）
- <span>Input</span> input 的 clear 清除问题（[#840](https://github.com/NervJS/taro-ui/issues/840)）
- <span>Modal</span> AtModal 模态框属性 isOpened 文档不对（[#844](https://github.com/NervJS/taro-ui/issues/844)）
- <span>ImagePicker</span> 修复 ImagePicker 的 Length 属性可以为 0 的问题（[#901](https://github.com/NervJS/taro-ui/issues/901)）

</div>

<div class="changelog-item major">

### v2.2.0

<p class="date">2019-06-12</p>

- <span>Calendar</span> 组件新增仅显示有效时间组功能（[#527](https://github.com/NervJS/taro-ui/issues/527)）
- 修复 <span>SearchBar</span> 输入框文字显示不全的样式问题（[#539](https://github.com/NervJS/taro-ui/issues/539)）
- 修复 <span>SwipeAction</span> 新版本报错问题（[#574](https://github.com/NervJS/taro-ui/issues/574)）
- <span>SwipeAction</span> 阻止滑动触发默认行为（[#525](https://github.com/NervJS/taro-ui/issues/525)）
- 修复 <span>Accordion</span> 组件折叠后高度仍保留的样式问题（[#629](https://github.com/NervJS/taro-ui/issues/629)）
- 修复 <span>Typings</span>

</div>

<div class="changelog-item major">

### v2.1.0

<p class="date">2019-04-10</p>

- 新增 <span>Fab</span> 浮动按钮组件
- <span>Input</span> 组件事件返回值新增当前事件 event
- <span>InputNumber</span> 组件增加错误回调事件
- <span>NavBar</span> 组件支持自定义字体图标
- <span>SearchBar</span> 组件增加清除按钮回调事件
- <span>TabBar</span> 组件支持图片图标
- 修复 <span>Range</span> 的排序问题（[#481](https://github.com/NervJS/taro-ui/issues/481)）
- 修复 <span>Tabs</span> 内容换行的问题（[#483](https://github.com/NervJS/taro-ui/issues/483)）

</div>

<div class="changelog-item major">

### v2.0.0

<p class="date">2019-02-03</p>

- 适配 <span>百度小程序</span>
- 优化 <span>自定义主题</span> 功能
- 新增 <span>红色主题</span>
- 重构 <span>Accordion</span> 组件
- 修复 <span>Calendar</span> 组件 start 大于 end 的问题（[#366](https://github.com/NervJS/taro-ui/issues/366)）
- 修复 <span>Checkbox</span> 图标变形问题（[#378](https://github.com/NervJS/taro-ui/issues/378)）
- 修复 <span>Form</span> 组件中元素位置偏右的问题（[#158](https://github.com/NervJS/taro-ui/issues/158)）

</div>

<div class="changelog-item">

### v2.0.0-beta.2

<p class="date">2019-01-17</p>

- 日历组件新增 <span>onSelectDate</span> 方法
- 修复 <span>Calendar</span> 组件 onMonthChange 触发的问题（[#305](https://github.com/NervJS/taro-ui/issues/305)）
- 修复 <span>Countdown</span> 组件因为 setState 引起倒计时停止的问题（[#333](https://github.com/NervJS/taro-ui/issues/333)）
- 修复 <span>FloatLayout</span> 组件滑动穿透的问题（[#352](https://github.com/NervJS/taro-ui/issues/352)）
- 新增 <span>FloatLayout</span> 组件标题不存在的容错处理（[#327](https://github.com/NervJS/taro-ui/issues/327)）
- 修复 <span>Tabs</span> 组件的二次点击问题（[#321](https://github.com/NervJS/taro-ui/issues/321)）

</div>

<div class="changelog-item major">

### v2.0.0-beta.1

<p class="date">2019-01-03</p>

- 适配 <span>支付宝小程序</span>
- 新增 <span>自定义主题</span> 功能

</div>

<div class="changelog-item">

### v1.5.4

<p class="date">2018-12-30</p>

- 组件兼容 <span>taro v1.2.3</span> 版本
- 修复 <span>Countdown</span> 组件 onTimeUp 事件多次触发的问题
- 修复 <span>ActionSheet</span> 组件修改 state 无法变更 Title 的问题（[#269](https://github.com/NervJS/taro-ui/issues/269)）
- 修复组件中带有浮层的滑动穿透问题（[#286](https://github.com/NervJS/taro-ui/issues/286)）

</div>

<div class="changelog-item">

### v1.5.3

<p class="date">2018-12-25</p>

- <span>FloatLayout</span> 组件新增 ScrollView 的属性配置（[#258](https://github.com/NervJS/taro-ui/issues/258)）
- <span>InputNumber</span> 组件新增 onBlur 事件
- 修复 <span>ICON</span> 组件的 rpx 转换问题（[#112](https://github.com/NervJS/taro-ui/issues/112)）
- 修复 <span>ImagePicker</span> 组件不能选择同一文件的问题

</div>

<div class="changelog-item">

### v1.5.2

<p class="date">2018-12-13</p>

- 修复 <span>Calendar</span> 组件在禁止滑动状态下无法点击日期的问题
- 修复 <span>Textarea</span> 组件配置 maxLength 无效的问题
- 修复 <span>CountDown</span> 组件在页面隐藏时倒计时未停止的问题
- 修复 <span>Indexes</span> 组件在 H5 下锚点定位错乱的问题

</div>

<div class="changelog-item major">

### v1.5.0

<p class="date">2018-11-27</p>

- 新增 <span>AtImagePicker</span> 图片选择器组件
- 新增 <span>AtRange</span> 范围选择器组件
- 新增 <span>AtIndexes</span> 索引选择器组件
- 新增 <span>AtCalendar</span> 日历组件
- 修复 <span>AtInputNumber</span> max 值失效的问题（[#141](https://github.com/NervJS/taro-ui/issues/141)）

</div>

<div class="changelog-item major">

### v1.4.0

<p class="date">2018-11-11</p>

- 新增 <span>AtCountDown</span> 组件
- 新增 <span>AtDivider</span> 组件
- 新增 <span>AtLoadMore</span> 组件
- 新增 <span>AtSteps</span> 组件
- 新增 <span>AtCurtain</span> 组件
- 新增 <span>AtMessage</span> 组件
- 修复 <span>AtDrawer</span> onClose 事件重复触发的问题（[#167](https://github.com/NervJS/taro-ui/issues/167)）
- 修复 <span>AtDrawer</span> 溢出滚动（[#132](https://github.com/NervJS/taro-ui/issues/132)）
- 修复 <span>AtTabs</span> 在 iOS8 下展示异常（[#163](https://github.com/NervJS/taro-ui/issues/163)）

</div>

<div class="changelog-item">

### v1.3.2

<p class="date">2018-10-20</p>

- <span>Tabs</span> 组件增加纵向布局
- <span>Grid</span> 组件支持自定义图标
- <span>List</span> 组件支持自定义图标
- <span>Button</span> 新增通栏按钮
- <span>SwipeAction</span> 交互优化
- 部分组件的 <span>1px</span> 优化

</div>

<div class="changelog-item major">

### v1.3.1

<p class="date">2018-10-09</p>

- 新增 <span>AtSlider</span> 组件
- 新增 <span>AtSwipeAction</span> 组件
- 新增 <span>AtSearchBar</span> 组件
- 新增 <span>AtAccordion</span> 组件
- 修复 <span>AtSwitch</span> 在禁用状态仍然可以切换的问题（[#95](https://github.com/NervJS/taro-ui/issues/95)）

</div>

<div class="changelog-item">

### v1.2.3

<p class="date">2018-09-30</p>

- <span>AtListItem</span> 组件新增 <span>disabled</span> 属性（[#90](https://github.com/NervJS/taro-ui/issues/90)）
- 开放 <span>AtButton</span> 小程序开放能力的回调
- 完善声明文件 <span>.d.ts</span>
- 修复 <span>AtActionSheet</span> 组件的样式问题（[#78](https://github.com/NervJS/taro-ui/issues/78)）
- 修复 <span>style prop</span> 传空时报错的问题（[#84](https://github.com/NervJS/taro-ui/issues/84)）
- 修复 <span>AtToast</span> 无法自动关闭的问题
- 修复组件参数报 <span>warning</span> 的问题

</div>

<div class="changelog-item">

### v1.2.2

<p class="date">2018-09-20</p>

- <span>AtInput</span> 组件添加 <span>name</span> 参数支持
- 修复 <span>AtFlex</span> 无法换行的问题
- 修复 <span>AtToast</span> 组件的遮罩层无效的问题
- 跳转 <span>AtToast</span> 组件的样式层级

</div>

<div class="changelog-item">

### v1.2.1

<p class="date">2018-09-15</p>

- <span>AtButton</span>, <span>AtInput</span>, <span>AtTextarea</span>, <span>AtForm</span> 组件属性和小程序对齐，例如支持 <span>open-type</span>
- <span>AtAvatar</span> 组件添加 <span>open-data</span> 适配
- <span>AtIcon</span>, <span>AtTabBar</span> 支持自定义图标
- <span>AtTabs</span> 组件支持自动滑动到选中项
- <span>AtGrid</span> 组件增加 <span>noBorder</span> 配置

</div>

<div class="changelog-item">

### v1.1.0

<p class="date">2018-08-29</p>

- 组件添加 <span>全局样式类</span>（[小程序全局样式类](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html)）
- 添加 <span>TypeScript</span> 声明文件

</div>

<div class="changelog-item major">

### v1.0.0

<p class="date">2018-08-24</p>

- 发布 <span>Taro UI</span> v1.0.0
- 发布第一个版本，包含 <span>33</span> 个组件

</div>

</div>
