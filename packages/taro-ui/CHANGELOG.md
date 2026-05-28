# 3.2.2 (2024-01-04)

### Bug Fixes

- 修复 taro 模板安装 taro-ui 时的报错 ([1b7652b](https://github.com/nervjs/taro-ui/commit/1b7652b91ab9ff44309cbfe91538e916582a3d1a)), closes [#1732](https://github.com/nervjs/taro-ui/issues/1732) [#1718](https://github.com/nervjs/taro-ui/issues/1718)

# 3.2.1 (2024-01-03)

### Bug Fixes

- **h5:** 解决 AtNoticebar 组件在 web 端卡顿的问题 ([3c07b6d](https://github.com/nervjs/taro-ui/commit/3c07b6d6bc5e1c86cc0217063f976faf395af960)), closes [#1714](https://github.com/nervjs/taro-ui/issues/1714)

### Features

- 添加无法自定义显示天，时，分，秒 ([37fc4d4](https://github.com/nervjs/taro-ui/commit/37fc4d41b052c0940c32043c08dd08f43b9525a0)), closes [#1716](https://github.com/nervjs/taro-ui/issues/1716)

# 3.2.0 (2023-11-20)

New Features

- 添加 Timeline 获取节点信息事件 (#1650)
- List 组件支持自定义 icon 属性 (#1626)
- Card 组件 extra 属性支持 ReactNode (#1684)

Bug Fixes

- 修复 AtAccordion 组件展开高度错误的问题 (#1656)
- 修复 enableNative 属性不存在的问题 (#1654)
- 修复日历组件无法正常加载的问题

Improvements

- yarn 升级到 pnpm
- 完善 CI 流程
- 更新 Taro-UI 文档地址

# 3.1.0 (2023-08-20)

### Bug Fixes

- **modal:** 修复 content 中包含 \n 而无法换行的问题 [#1617](https://github.com/nervjs/taro-ui/issues/1617) ([b404c6b](https://github.com/nervjs/taro-ui/commit/b404c6ba5410a062b6626e631916dfc7cc130f56))
- **types:** 修复 atMessage 类型丢失的问题 ([4cf5335](https://github.com/nervjs/taro-ui/commit/4cf5335be670c3272743826de21971876cdba098)), closes [#1589](https://github.com/nervjs/taro-ui/issues/1589)
- **types:** 修复类型声明不正确的问题 ([7d2610a](https://github.com/nervjs/taro-ui/commit/7d2610a688a5b656def15dc564d92f02bb8697c8))
- **types:** 修复类型声明问题 ([ca82492](https://github.com/nervjs/taro-ui/commit/ca82492c30de1d5d58e3bef24bfe980381e5e9ab))
- 修复 disabled 不生效的问题 ([#1549](https://github.com/nervjs/taro-ui/issues/1549)) ([8e9a7bd](https://github.com/nervjs/taro-ui/commit/8e9a7bd253fa2bff167786c5846a57f4632ff2f3))
- 修复初始化 RootSiblings 报错的问题 ([bb354e0](https://github.com/nervjs/taro-ui/commit/bb354e08410f593f586bd0bea7eaf54553e03201))
- 修复类型声明异常的问题 ([da406aa](https://github.com/nervjs/taro-ui/commit/da406aa0ed0ab92d8dd7d6700a49465c5d765ea8))
- 更新依赖，解决 ts 类型错误 ([af562a7](https://github.com/nervjs/taro-ui/commit/af562a77ebba0968d6a5b44364b112a5368336f1))
- 解决 input 组件 focus 状态丢失的问题 ([3538c3d](https://github.com/nervjs/taro-ui/commit/3538c3d830ca6cd46dc7d2963fe6f1a099e1c25d)), closes [#1463](https://github.com/nervjs/taro-ui/issues/1463)

### Features

- AtSearchBar 增加 enableNative 参数 ([09863bd](https://github.com/nervjs/taro-ui/commit/09863bd0813e2e3682b8832c143c79e9a2522408))
- **nav-bar:** 增加标题点击事件 ([369e71e](https://github.com/nervjs/taro-ui/commit/369e71ee6852748e654eee3e6edebdf34a8d042b))
- react 升级到 18，并解决兼容性问题 ([e8ec931](https://github.com/nervjs/taro-ui/commit/e8ec9319a8a83ee4c35f8fb84d4b6c457f199a5d))
- rn 0.71 ([dc77a8a](https://github.com/nervjs/taro-ui/commit/dc77a8aea76b179cf5f21fbf250ed75b14918162))
- 兼容到 Taro3.4.3 ([66a990d](https://github.com/nervjs/taro-ui/commit/66a990d7f6b176c4a39911e600201268322557d3))
- 更新 3.6 依赖 ([cbbdf77](https://github.com/nervjs/taro-ui/commit/cbbdf771a492daf6225f3b4bdc67655fcbf47f04))

# 3.0.0-alpha.2 (2020-04-18)

### Bug Fixes

- 修复 NoticeBar 的 animation 属性问题 close [#1005](https://github.com/nervjs/taro-ui/issues/1005) ([c453770](https://github.com/nervjs/taro-ui/commit/c453770e7437f8f706a279079d991db25cdd6ae8))
- 修复 SwipeAction 的 onOpened, onClosed 方法判断问题 close [#1004](https://github.com/nervjs/taro-ui/issues/1004) ([7edf2e2](https://github.com/nervjs/taro-ui/commit/7edf2e2f00124d143f166353445f9349455ffeb3))

# [3.0.0-alpha.1](https://github.com/nervjs/taro-ui/compare/v3.0.0-alpha.0...v3.0.0-alpha.1) (2020-04-04)

### Features

- replace webpack with rollup ([f119305](https://github.com/nervjs/taro-ui/commit/f1193056ae7cf7632ad149a1b7a882bfe3d8879a))

# [3.0.0-alpha.0](https://github.com/nervjs/taro-ui/compare/v2.3.1...v3.0.0-alpha.0) (2020-03-28)

## [2.3.3](https://github.com/nervjs/taro-ui/compare/v2.3.2...v2.3.3) (2020-04-11)

### Bug Fixes

- 删除过时的 form 参数, close [#998](https://github.com/nervjs/taro-ui/issues/998) ([ea31144](https://github.com/nervjs/taro-ui/commit/ea31144beb63cd634ab825e15375a98837d0ed9a))
- 利用完整日期做唯一 ID, close [#976](https://github.com/nervjs/taro-ui/issues/976) ([ae6f01f](https://github.com/nervjs/taro-ui/commit/ae6f01f0961caf8082599cafc92150273b759328))
- 用了箭头函数不应再用 bind ([d68541a](https://github.com/nervjs/taro-ui/commit/d68541a5c53079b3b1ea44a069eea72e3a1e42c6))
- **input:** 修复 onChange 不能通过 return 改变 value 的问题, close [#980](https://github.com/nervjs/taro-ui/issues/980) ([c87d025](https://github.com/nervjs/taro-ui/commit/c87d025dae416c8d003018acd07c4661d72187d3))

## [2.3.2](https://github.com/nervjs/taro-ui/compare/v2.3.1...v2.3.2) (2020-03-28)

### Bug Fixes

- fix or ignore typescript error ([a34e6eb](https://github.com/nervjs/taro-ui/commit/a34e6eba767d4a06111992d444a0273154ecbb08))
- fix tsc error ([70f23a5](https://github.com/nervjs/taro-ui/commit/70f23a521b0bab6d13386787b30a6565c6de2288))
- 使 AtGridItem 支持自定义字段 close [#983](https://github.com/nervjs/taro-ui/issues/983) ([8b25687](https://github.com/nervjs/taro-ui/commit/8b2568762a030d464facc8fe9dd6e447d5fd57ab))
- 修复 pxTransform 问题 ([ffd80b1](https://github.com/nervjs/taro-ui/commit/ffd80b1358d67ea8551d6ca9115612c4eb9ded6d))
- 修复 React 警告 ([22ca02c](https://github.com/nervjs/taro-ui/commit/22ca02c0d6547745098adf5d4eab7167a29f80ab))
- 修复组件和页面的错误 ([a455447](https://github.com/nervjs/taro-ui/commit/a4554470a0f4c21486011eb1d1fd7ead488c1dcb))
- 修复页面跳转和循环 key 重复问题 ([dc1a9fc](https://github.com/nervjs/taro-ui/commit/dc1a9fc44beff9e1a25ca93b7ac6ac4fc02cb90b))
- 更新 AtTextarea 的文档 ([19e3460](https://github.com/nervjs/taro-ui/commit/19e346023547e0040ec15447d950c5e38bd57976))
- **input-number:** 在微信小程序中可以输入非数字或者不合法数字 [#985](https://github.com/nervjs/taro-ui/issues/985) ([#986](https://github.com/nervjs/taro-ui/issues/986)) ([5606017](https://github.com/nervjs/taro-ui/commit/56060177619497fd9e8a5685914cd7a9d45b78ef))
- 更新 AtTextarea 的文档 ([19e3460](https://github.com/nervjs/taro-ui/commit/19e346023547e0040ec15447d950c5e38bd57976))
- **input-number:** 在微信小程序中可以输入非数字或者不合法数字 [#985](https://github.com/nervjs/taro-ui/issues/985) ([#986](https://github.com/nervjs/taro-ui/issues/986)) ([5606017](https://github.com/nervjs/taro-ui/commit/56060177619497fd9e8a5685914cd7a9d45b78ef))
- 使 AtGridItem 支持自定义字段 close [#983](https://github.com/nervjs/taro-ui/issues/983) ([8b25687](https://github.com/nervjs/taro-ui/commit/8b2568762a030d464facc8fe9dd6e447d5fd57ab))

### Features

- taro ui next build config ([5da4427](https://github.com/nervjs/taro-ui/commit/5da44271a3e1ce28107b18c3f1d5d56c48f31a2b))
- 增加 onKeyboardHeightChange 事件支持 close [#974](https://github.com/nervjs/taro-ui/issues/974) ([7c47959](https://github.com/nervjs/taro-ui/commit/7c47959c98450c8b7b2fd535da071b8ac8ebe29f))

## [2.3.1](https://github.com/nervjs/taro-ui/compare/v2.3.0...v2.3.1) (2020-03-14)

### Bug Fixes

- 修复文档编译 ([8d2d91d](https://github.com/nervjs/taro-ui/commit/8d2d91d6ea57ff5337d662436e80c181c3c644c5))
- 添加 AtActionSheetItem 导出 close [#981](https://github.com/nervjs/taro-ui/issues/981) ([f8938c2](https://github.com/nervjs/taro-ui/commit/f8938c21919f4bc44734c4d68e579700944eb9bd))
- 移动 AtCalendar 的类型声明 close [#968](https://github.com/nervjs/taro-ui/issues/968) ([d14bd84](https://github.com/nervjs/taro-ui/commit/d14bd848194d765651c36cc4190ffdcefb0f665a))
- **range:** 组件位置计算问题 close [#969](https://github.com/nervjs/taro-ui/issues/969) ([#970](https://github.com/nervjs/taro-ui/issues/970)) ([31f3af9](https://github.com/nervjs/taro-ui/commit/31f3af999f8f4ef7170e37078fedc4bb6a6b0fff))

### Features

- 修改 AtTextarea onChange 的方法签名与 AtInput 一致 close [#967](https://github.com/nervjs/taro-ui/issues/967) ([908c1b7](https://github.com/nervjs/taro-ui/commit/908c1b7cc5e712b301ea517b35090b44a5ebfb67))
- **tab-bar:** 增加了 AtTabBar 的 paddingBottom close [#958](https://github.com/nervjs/taro-ui/issues/958) ([#959](https://github.com/nervjs/taro-ui/issues/959)) ([625b886](https://github.com/nervjs/taro-ui/commit/625b88651c156b1971e6ece44892de6b96f06da5))

# [2.3.0](https://github.com/nervjs/taro-ui/compare/v2.2.4...v2.3.0) (2020-02-29)

### Bug Fixes

- className 应该仅为字符串 ([b4640f7](https://github.com/nervjs/taro-ui/commit/b4640f7856ecd5795790082d7dda266eaaf9740b))
- 修复 AtImagePicker 的 onChange 首参类型错误 close [#902](https://github.com/nervjs/taro-ui/issues/902) ([ff2220c](https://github.com/nervjs/taro-ui/commit/ff2220c88b35d91dfb9349ee86329ef3a4946330))
- 修复因 key 重复导致的日期更新错位问题 ([f5567a7](https://github.com/nervjs/taro-ui/commit/f5567a74857dcb3a7c1836cdca49a6ae22dddfd8)), closes [#837](https://github.com/nervjs/taro-ui/issues/837) [#890](https://github.com/nervjs/taro-ui/issues/890) [#915](https://github.com/nervjs/taro-ui/issues/915) [#939](https://github.com/nervjs/taro-ui/issues/939)
- **button:** 修复组件的规范化问题 ([99c5c26](https://github.com/nervjs/taro-ui/commit/99c5c26047e54493feb80342124262aa293c5591))
- **input-number:** 修复 AtInputNumber onChange 没有 Event 对象的问题 close [#923](https://github.com/nervjs/taro-ui/issues/923) ([ce4b959](https://github.com/nervjs/taro-ui/commit/ce4b959a846cc54862f8428147dcf01fa68ff572))
- **model:** model content 在显示长文本时会溢出 ([#954](https://github.com/nervjs/taro-ui/issues/954)) ([b7629cb](https://github.com/nervjs/taro-ui/commit/b7629cb51feaffde95fac9eb08b8ad42ce68c339))
- **range:** 只有一个 value 变动的情况也触发渲染 close [#952](https://github.com/nervjs/taro-ui/issues/952) ([#953](https://github.com/nervjs/taro-ui/issues/953)) ([1690979](https://github.com/nervjs/taro-ui/commit/16909793f0c07f808071fe7a81bffada6e1dd01f))
- close [#840](https://github.com/nervjs/taro-ui/issues/840) input 的 clear 清除问题 ([31074a3](https://github.com/nervjs/taro-ui/commit/31074a3a9664ff79b97c8a1f7f5ac480b87ea4c8))
- close [#844](https://github.com/nervjs/taro-ui/issues/844) AtModal 模态框属性 isOpened 文档不对 ([c4d68b8](https://github.com/nervjs/taro-ui/commit/c4d68b86a27fe9820a4a1e18a6b73b45a68e0135))
- 修复 ImagePicker 的 Length 属性可以为 0 的问题 close [#901](https://github.com/nervjs/taro-ui/issues/901) ([3e7ff94](https://github.com/nervjs/taro-ui/commit/3e7ff9482d5de9708fc5faf0bb5fc9e78c3a4068))
- 补充 AtInput 和 AtActivityIndicator 的类型 ([855e75a](https://github.com/nervjs/taro-ui/commit/855e75a5ea7000947af4c6256a601053d86e7eae))
- **button:** 增加支付宝小程序 getAuthorize openType ([cb19680](https://github.com/nervjs/taro-ui/commit/cb1968054761937ff482e1aa8ece39879f2db80f))
- **button:** 补充两个 openType，优化示例 ([8d45ac9](https://github.com/nervjs/taro-ui/commit/8d45ac9b1a83aab1b511756f7823d7e1c8d3d41c))
- **docs:** 修复文档图片 ([d81c7f6](https://github.com/nervjs/taro-ui/commit/d81c7f6f6e7b7b6bd345c2be3ab0555a211f5f0a))
- **docs:** 修复文档编译错误 ([d80cefc](https://github.com/nervjs/taro-ui/commit/d80cefcd0ec4a1a9f81e8186681febc49e7ff796))
- **fab:** add className props for AtFab, fixes [#850](https://github.com/nervjs/taro-ui/issues/850) ([57c1e01](https://github.com/nervjs/taro-ui/commit/57c1e0117cd6671745f413d878abe3d0ce8897b6))
- **indexes:** 修复 AtIndexes onScrollIntoView 错误的签名 ([4127509](https://github.com/nervjs/taro-ui/commit/41275097175592a58aab50f56746b039d904da90))
- **steps:** 修复 AtSteps 类型错误 ([90ecb65](https://github.com/nervjs/taro-ui/commit/90ecb652fb350665e4491757b9f7a8890d1a0eda))
- **steps:** 修复 AtSteps 错误的类型定义并更新文档 close [#829](https://github.com/nervjs/taro-ui/issues/829) ([8a83b69](https://github.com/nervjs/taro-ui/commit/8a83b697456fcb92db3ca2e95eb0379491863cdd))
- **tab-bar:** fix postcss 'start value has mixed support, consider using flex-start instead' ([446a8ba](https://github.com/nervjs/taro-ui/commit/446a8bab0f7857e7355fc2d7cbb8e67d74dc5f42))
- **tab-bar:** 修复 AtTabBar TabItem 类型错误 ([0a56de3](https://github.com/nervjs/taro-ui/commit/0a56de324417f3853561bd31e77ee2d217177d64))
- **tab-bar:** 修复 AtTabBar 点击时出现 AtBadge 属性 maxValue 类型不正确的问题 close [#703](https://github.com/nervjs/taro-ui/issues/703) ([6c65a7a](https://github.com/nervjs/taro-ui/commit/6c65a7ac0d4fe69d4231d970ee621b947c2fd752))
- **test:** 修正 AtImagePicker 测试快照和 AtFab 的格式 ([990be58](https://github.com/nervjs/taro-ui/commit/990be582ee201b7d9402332ceecd28266858d19a))
- **types:** 优化组件类型名称 ([f381020](https://github.com/nervjs/taro-ui/commit/f381020910d1551da5e6649fd76c511d1f27ae49))
- **types:** 删除不存在的项目 ([00460d5](https://github.com/nervjs/taro-ui/commit/00460d5189d37666b2c3d2d4142113905b1b0c2d))

### Features

- close [#733](https://github.com/nervjs/taro-ui/issues/733) 控制 AtActivityIndicator 显隐状态 ([7a44008](https://github.com/nervjs/taro-ui/commit/7a440081e8f24bf67f14483fe92d59b9cd35a3e8))
- close[#814](https://github.com/nervjs/taro-ui/issues/814) atInput 添加 required 属性，以及添加快照测试 ([74b33e2](https://github.com/nervjs/taro-ui/commit/74b33e2fe6e8bc97d7449ee21960fbd4985b5632))

## [2.2.4](https://github.com/nervjs/taro-ui/compare/v2.2.3...v2.2.4) (2019-10-17)

### Bug Fixes

- **calendar:** 修复 AtCalendarList 循环 key 反优化 ([7ff1a75](https://github.com/nervjs/taro-ui/commit/7ff1a758083b76be856c3e6806114a3553386d9b))
- **drawer:** 修复 AtDrawer 循环 key 反优化 ([eb6a616](https://github.com/nervjs/taro-ui/commit/eb6a61684346edb49b0451eaf564ecfeda6e059e))
- **grid:** 修复 AtGrid 循环 key 反优化 ([772dbeb](https://github.com/nervjs/taro-ui/commit/772dbebb11314d6b55ce99344cd9e52314b04b8e))
- **pages:** 批量修复页面的 key 反优化问题 ([f83972d](https://github.com/nervjs/taro-ui/commit/f83972da14f6b3239404e5881189d894bad3739c))
- **pagination:** 修复编译器警告: 'this.state.current 与 this.props.current 重复可能会导致渲染结果不如意料之中的结果' ([79be57a](https://github.com/nervjs/taro-ui/commit/79be57a01839977260c8c459f5a8ef2216bfa9e3))
- **rate:** 修复 AtRate 循环 key 反优化 ([f4219b3](https://github.com/nervjs/taro-ui/commit/f4219b3a7fd12452876300d31525a3b6813f85bd))
- **swipe-action:** 修复 AtSwipeAction 循环 key 反优化 ([0fabb04](https://github.com/nervjs/taro-ui/commit/0fabb046521c00d18d0f33cb4d57992920f95edd))
- **timeline:** 修复 AtTimelile 循环 key 反优化 ([d11a1be](https://github.com/nervjs/taro-ui/commit/d11a1beb81e675039ac9ab32fda28aab2725e5cc))
- remove log ([4e4cb12](https://github.com/nervjs/taro-ui/commit/4e4cb1266994760feacf08ea9af2d7fe20b01917))

## [2.2.3](https://github.com/nervjs/taro-ui/compare/v2.2.2...v2.2.3) (2019-10-15)

### Bug Fixes

- **input-number:** 更新测试快照 ([b125e0a](https://github.com/nervjs/taro-ui/commit/b125e0a17cb002857c4be53a97b1c16481149623))
- **search-bar:** 修复 ActionButton 隐藏时搜索框右侧多出 10 像素边距的问题 close [#794](https://github.com/nervjs/taro-ui/issues/794) ([05408b0](https://github.com/nervjs/taro-ui/commit/05408b0bd98946204020b326bdc1abf305fa1c0a))
- [#356](https://github.com/nervjs/taro-ui/issues/356) focus=true 时，键盘不收缩 ([39777f5](https://github.com/nervjs/taro-ui/commit/39777f54d2aa4308e444101a0484aeb5db011f25))
- [#356](https://github.com/nervjs/taro-ui/issues/356) focus=true 时，键盘不收缩 ([d0f364c](https://github.com/nervjs/taro-ui/commit/d0f364c3ef4291d1f7e5329540374fa3fcf56732))
- [#356](https://github.com/nervjs/taro-ui/issues/356) focus=true 时，键盘不收缩 ([b9e48b5](https://github.com/nervjs/taro-ui/commit/b9e48b59f3e7bce6173fc2bec7a9ee4509cbec07))
- close [#306](https://github.com/nervjs/taro-ui/issues/306) SwipeAction 组件滑动的时候没有屏蔽屏幕局上下滑动 ([8c61317](https://github.com/nervjs/taro-ui/commit/8c61317077d526d56c8dceb0a393fe5c761a69e6))
- close [#306](https://github.com/nervjs/taro-ui/issues/306) SwipeAction 组件滑动的时候没有屏蔽屏幕局上下滑动 ([aedfe06](https://github.com/nervjs/taro-ui/commit/aedfe0614caebf589b839f98d18aff7059b6030c))
- close [#306](https://github.com/nervjs/taro-ui/issues/306) SwipeAction 组件滑动的时候没有屏蔽屏幕局上下滑动 ([36d6f59](https://github.com/nervjs/taro-ui/commit/36d6f595c2385c3799ccd41a94083c3d37b57736))
- close [#375](https://github.com/nervjs/taro-ui/issues/375) [#380](https://github.com/nervjs/taro-ui/issues/380) Form 组件 onSubmit 无效 ([7577caa](https://github.com/nervjs/taro-ui/commit/7577caa8799867010921b91f055e155200044994))
- close [#375](https://github.com/nervjs/taro-ui/issues/375) [#380](https://github.com/nervjs/taro-ui/issues/380) Form 组件 onSubmit 无效 ([25d35b1](https://github.com/nervjs/taro-ui/commit/25d35b1732cd7184a0d6505ec3bdf3472f06bec4))
- close [#375](https://github.com/nervjs/taro-ui/issues/375) [#380](https://github.com/nervjs/taro-ui/issues/380) Form 组件 onSubmit 无效 ([461e311](https://github.com/nervjs/taro-ui/commit/461e311858d9b2fff65304e797f25020acebd65c))
- close [#554](https://github.com/nervjs/taro-ui/issues/554) H5 环境下，AtModal 组件传入 ‘content’ 字符串里存在‘\n’之类的，不能实现想得到效果 ([46f93a4](https://github.com/nervjs/taro-ui/commit/46f93a4afa56cb1553c1fe6696ee972174697570))
- close [#554](https://github.com/nervjs/taro-ui/issues/554) H5 环境下，AtModal 组件传入 ‘content’ 字符串里存在‘\n’之类的，不能实现想得到效果 ([4f233c4](https://github.com/nervjs/taro-ui/commit/4f233c4406b5b3cb054f2b4800f028e387c6d518))
- close [#554](https://github.com/nervjs/taro-ui/issues/554) H5 环境下，AtModal 组件传入 ‘content’ 字符串里存在‘\n’之类的，不能实现想得到效果 ([a781f27](https://github.com/nervjs/taro-ui/commit/a781f275151e7b3ae580f949a7433189bba467ca))
- close [#641](https://github.com/nervjs/taro-ui/issues/641) List extraText 值为 0 时的显示问题 ([74a6691](https://github.com/nervjs/taro-ui/commit/74a66919844cc3864996b1b2b59797f95e737ec3))
- close [#641](https://github.com/nervjs/taro-ui/issues/641) List extraText 值为 0 时的显示问题 ([28e89fb](https://github.com/nervjs/taro-ui/commit/28e89fb4ebbc1d36ea55552010ccba0aed72c7b9))
- close [#641](https://github.com/nervjs/taro-ui/issues/641) List extraText 值为 0 时的显示问题 ([2f25266](https://github.com/nervjs/taro-ui/commit/2f2526632e58b565854750e55beb30b8346c8cd9))
- issue [#670](https://github.com/nervjs/taro-ui/issues/670) Range 组件设置 min,max 属性异常 ([1ee207d](https://github.com/nervjs/taro-ui/commit/1ee207da2d057f2db7e444f76967791b5fad6dc4))
- issue [#670](https://github.com/nervjs/taro-ui/issues/670) Range 组件设置 min,max 属性异常 ([3ca3dfc](https://github.com/nervjs/taro-ui/commit/3ca3dfc0a0bf3b451c3204786309d2cf7d104388))
- 多次点击会滚动多余的距离 ([eaaa626](https://github.com/nervjs/taro-ui/commit/eaaa6269e922d02dcb723a52a99858463ccbdec1))
- 移除 swiperAction move 事件 阻止冒泡逻辑 ([cf4549a](https://github.com/nervjs/taro-ui/commit/cf4549aa5157cbcfb2e1e78fbffd62826d5c80a5))
- **image-picker:** key 反优化处理 fix [#635](https://github.com/nervjs/taro-ui/issues/635) ([a1d0a5e](https://github.com/nervjs/taro-ui/commit/a1d0a5ed8087c7f5e6e2138df5ad963672fd66dd))
- **search-bar:** 修复 ActionButton 隐藏时搜索框右侧多出 10 像素边距的问题 close [#794](https://github.com/nervjs/taro-ui/issues/794) ([3f1d872](https://github.com/nervjs/taro-ui/commit/3f1d872946a5ff08f9fc38bed203ff12904384d3))
- 多次点击会滚动多余的距离 ([59bc498](https://github.com/nervjs/taro-ui/commit/59bc4988ab60bfaf0931ba0a0794791346ae5210))
- 移除 swiperAction move 事件 阻止冒泡逻辑 ([25e5612](https://github.com/nervjs/taro-ui/commit/25e5612f386814ce0583f08348671addd1f3b037))
- **button:** 修复样式问题 fix [#534](https://github.com/nervjs/taro-ui/issues/534) ([60074d6](https://github.com/nervjs/taro-ui/commit/60074d69f9ab3332bd4e0b915f96258b0ea189f5))
- **search-bar:** 修复 ActionButton 隐藏时搜索框右侧多出 10 像素边距的问题 close [#794](https://github.com/nervjs/taro-ui/issues/794) ([98ab30c](https://github.com/nervjs/taro-ui/commit/98ab30c0c0f172eea62e63fb9e8b763d51994f59))
- **tabs:** ios 样式 fix [#646](https://github.com/nervjs/taro-ui/issues/646) ([3d811b8](https://github.com/nervjs/taro-ui/commit/3d811b8c77f1b8d17c62ac31042864306e0fc572))
- issue [#670](https://github.com/nervjs/taro-ui/issues/670) Range 组件设置 min,max 属性异常 ([f734a2c](https://github.com/nervjs/taro-ui/commit/f734a2c89852ae965b8ad248ca6e8f32e4ce8f8c))
- 多次点击会滚动多余的距离 ([f895852](https://github.com/nervjs/taro-ui/commit/f8958528b1c649dbd1a9f4a36cc222f1f4d0a131))
- 移除 swiperAction move 事件 阻止冒泡逻辑 ([7a93a3e](https://github.com/nervjs/taro-ui/commit/7a93a3eb4d0aeeb638aa2581c657540076440643))

### Features

- **input-number:** 添加仅禁止输入类型和类型描述，添加文档说明及 demo 用例 [#786](https://github.com/nervjs/taro-ui/issues/786) ([d6bc8e9](https://github.com/nervjs/taro-ui/commit/d6bc8e9cd5099b13451c9e33f9139facac9e6aaf))
- **search-bar:** 增加输入框类型属性 close [#464](https://github.com/nervjs/taro-ui/issues/464) ([4981193](https://github.com/nervjs/taro-ui/commit/498119328577863b85263b47d75d170f991449b3))
- **search-bar:** 添加自定义输入框类型的示例 ([bb25280](https://github.com/nervjs/taro-ui/commit/bb25280ae7d8ca3d9607849c5d25617034fe7194))
- **srarch-bar:** 添加 inputType 类型和类型描述 ([bf1fa96](https://github.com/nervjs/taro-ui/commit/bf1fa96a03d4f79833fcdd05b81ebb8c76c409a9))
- accordion 支持 note 属性 ([9962f97](https://github.com/nervjs/taro-ui/commit/9962f97ca07ff541098eee34449270c2e4bb14d5))
- close [#229](https://github.com/nervjs/taro-ui/issues/229), atCard 组件支持自定义图标 ([89c81eb](https://github.com/nervjs/taro-ui/commit/89c81eb2448041c18a60d74eafba9dce7c975744))
- close [#229](https://github.com/nervjs/taro-ui/issues/229), atCard 组件支持自定义图标 ([784e04f](https://github.com/nervjs/taro-ui/commit/784e04ff8f49ed13213ebaaab8bd3834a6d28963))
- close [#612](https://github.com/nervjs/taro-ui/issues/612) 通过程序接口控制跳转到 指定的 section ([148d143](https://github.com/nervjs/taro-ui/commit/148d14366b7a47e07a180a432069eed73b9244ba))
- 修改组件 accordion/card/indexes 相关文档 ([ac1876a](https://github.com/nervjs/taro-ui/commit/ac1876a9a9984d89a8ecd4c688adebeacc08d7b3))
- **accordion:** 增加图标对 prefixClass 属性支持 ([60aff30](https://github.com/nervjs/taro-ui/commit/60aff3051a3878cf5bd4b3ca5e2f3f5d81bc892d))
- **search-bar:** 增加输入框类型属性 close [#464](https://github.com/nervjs/taro-ui/issues/464) ([7c8fd3e](https://github.com/nervjs/taro-ui/commit/7c8fd3e78123e0305a4caab1430628a52f1ca2a4))
- **search-bar:** 添加自定义输入框类型的示例 ([47f4cdc](https://github.com/nervjs/taro-ui/commit/47f4cdc195193817c049129ec9410f6574575dbb))
- **srarch-bar:** 添加 inputType 类型和类型描述 ([5da79ff](https://github.com/nervjs/taro-ui/commit/5da79ff9edf09dc47878bbd617e793d0c3c763e7))
- accordion 支持 note 属性 ([f10ebe6](https://github.com/nervjs/taro-ui/commit/f10ebe643e8f64ee55dfbc2efc842f6ff07b5f9a))
- close [#229](https://github.com/nervjs/taro-ui/issues/229), atCard 组件支持自定义图标 ([bf7d066](https://github.com/nervjs/taro-ui/commit/bf7d06676a51b5371d7d7bf75fd129ddfcd2f775))
- close [#612](https://github.com/nervjs/taro-ui/issues/612) 通过程序接口控制跳转到 指定的 section ([b48305c](https://github.com/nervjs/taro-ui/commit/b48305c52af67217255b4fd04812ba498daad503))
- close [#612](https://github.com/nervjs/taro-ui/issues/612) 通过程序接口控制跳转到 指定的 section ([be0a300](https://github.com/nervjs/taro-ui/commit/be0a300f6653006679a8c95a3580b1b024ec02f7))
- 修复 tabs 组件无法自动滚动到第一个 tab 位置 ([86fae15](https://github.com/nervjs/taro-ui/commit/86fae1592ead9f27c8a4be22678420129b8b9d3a))
- **search-bar:** 增加输入框类型属性 close [#464](https://github.com/nervjs/taro-ui/issues/464) ([b19514b](https://github.com/nervjs/taro-ui/commit/b19514bfc38c3653a8660592f66600d4bee49c35))
- **search-bar:** 添加自定义输入框类型的示例 ([a751cd1](https://github.com/nervjs/taro-ui/commit/a751cd1a8e214d146f4953e8cc10245383cc9636))
- **srarch-bar:** 添加 inputType 类型和类型描述 ([acec729](https://github.com/nervjs/taro-ui/commit/acec7291d089753152791c856a947c1be78d8384))

## [2.2.2](https://github.com/nervjs/taro-ui/compare/v2.2.1...v2.2.2) (2019-08-27)

### Bug Fixes

- **button:** 修复样式问题 fix [#534](https://github.com/nervjs/taro-ui/issues/534) ([a2c6c1f](https://github.com/nervjs/taro-ui/commit/a2c6c1f054da398fd6ed90af80edf0a025df91be))
- **countdown:** 修复了不显示天数时 hours 传入的值大于 23 显示有误的问题 ([c824efa](https://github.com/nervjs/taro-ui/commit/c824efa963b52b9c7441f446d7454acf6cf4043c))
- **countdown:** 完善倒计时初始化显示不准 ([dd61fa6](https://github.com/nervjs/taro-ui/commit/dd61fa66371fc513edfa1b31ec0731b118479ee9))
- **image-picker:** key 反优化处理 fix [#635](https://github.com/nervjs/taro-ui/issues/635) ([d9ce213](https://github.com/nervjs/taro-ui/commit/d9ce2134f6e013b6c5e99995a836b6422571ca8d))
- **imagePicker:** types 类型修复 fix [#676](https://github.com/nervjs/taro-ui/issues/676) ([4b72b48](https://github.com/nervjs/taro-ui/commit/4b72b489dd51db8b734bd758613fb45d1cea328c))
- **nav-bar:** 修复 test 报错 ([40f53bd](https://github.com/nervjs/taro-ui/commit/40f53bdc8f27bf48d9b9a7281adc9d9845df0a4d))
- **tabs:** ios 样式 fix [#646](https://github.com/nervjs/taro-ui/issues/646) ([15bde71](https://github.com/nervjs/taro-ui/commit/15bde710f94dad6232d8076dae0eecd9f5d917dc))

### Features

- 修复 tabs 组件无法自动滚动到第一个 tab 位置 ([f8ecb46](https://github.com/nervjs/taro-ui/commit/f8ecb462c498a4697d8713298cadb51aa2d78af7))
- **accordion:** 增加图标对 prefixClass 属性支持 ([8ce0618](https://github.com/nervjs/taro-ui/commit/8ce061851451125518da12747e5545ee084cf2d9))
- **nav-bar:** 导航栏 title 部分支持自定义内容 ([73616fc](https://github.com/nervjs/taro-ui/commit/73616fcb887032eae0323d9f5a4bf982f94f1fdb))
- **navbar:** 自定义标题内容 ([691f693](https://github.com/nervjs/taro-ui/commit/691f693423b147af6059c114c474a94b27f6d23d))

## [2.2.1](https://github.com/nervjs/taro-ui/compare/v2.2.0...v2.2.1) (2019-06-18)

### Bug Fixes

- 修复 [#628](https://github.com/nervjs/taro-ui/issues/628) 和 [#637](https://github.com/nervjs/taro-ui/issues/637) ([98d4dd2](https://github.com/nervjs/taro-ui/commit/98d4dd219906b55ba90607efa087985fb149a48d))
- **input:** # 583 AtInput 不触发 onChange 的问题 ([8fd8b1e](https://github.com/nervjs/taro-ui/commit/8fd8b1e2c6277af987c4e546fa5566b26c7fe812))
- **input:** 百度小程序无法输入内容 ([1fcbb19](https://github.com/nervjs/taro-ui/commit/1fcbb19b1eb38bbe45edd00a6bc6f2afce8f7a39))
- **radio:** fix 文字过长不换行 [#548](https://github.com/nervjs/taro-ui/issues/548) ([17c6f4f](https://github.com/nervjs/taro-ui/commit/17c6f4f5e47f024ded85bd92bd6f1693dfa89c6a))
- **timeline:** color 和 icon 同时设置出现两个图标 fix [#550](https://github.com/nervjs/taro-ui/issues/550) ([e24751a](https://github.com/nervjs/taro-ui/commit/e24751afa34dd5917da02fa8e0c2b6ffa587865b))
- **utils:** getEventDetail 获取数据错误 fix [#553](https://github.com/nervjs/taro-ui/issues/553) ([248b247](https://github.com/nervjs/taro-ui/commit/248b2470e400265fe667e46550cce815cd7fe8e1))
- 修复 uuid + 日历案例报错 ([eaac2f6](https://github.com/nervjs/taro-ui/commit/eaac2f6d2ed9a5f3d8247f80c81c1812981859b0))

# [2.2.0](https://github.com/nervjs/taro-ui/compare/v2.1.0...v2.2.0) (2019-06-12)

### Bug Fixes

- **accordion:** AtAccordion 折叠起来保留内容区的高度 fix [#629](https://github.com/nervjs/taro-ui/issues/629) ([19e2ea3](https://github.com/nervjs/taro-ui/commit/19e2ea3ed837a8a6f88637a074f66324c8568d32))
- **SearchBar:** 修复输入框文字显示不全的样式问题 [#539](https://github.com/nervjs/taro-ui/issues/539) ([50cc0fc](https://github.com/nervjs/taro-ui/commit/50cc0fcb26a0e0d373e1b30627fca5fa50f1601d))
- 回滚 pr 判断 ([e005f15](https://github.com/nervjs/taro-ui/commit/e005f156d3414bc3cb10985223f80c93a0768ae8))
- **swipe-action:** 不再以自增作为 id ([9b0a901](https://github.com/nervjs/taro-ui/commit/9b0a901e5c165f9e6ed0d660d409141c7c0cfcfe))
- 修复 SwiperAction 报错问题 closed [#574](https://github.com/nervjs/taro-ui/issues/574) ([f97223f](https://github.com/nervjs/taro-ui/commit/f97223f24b8267cfb6330921dda333d16d4a31cc))
- **swipe-action:** 阻止滑动触发默认行为 ([#525](https://github.com/nervjs/taro-ui/issues/525)) ([24b4892](https://github.com/nervjs/taro-ui/commit/24b48929d6d87bebacd4b813bdab391cafc38fda))
- **tab-bar:** 修复 TypeScript 中 TabItem 没有 image/ selectedImage 属性报错 ([3c71b65](https://github.com/nervjs/taro-ui/commit/3c71b65433e49d861f98b45b6c674127e628cc84))
- **tabbar:** 修复 tabbar 中 props 参数名称错误的问题 ([519837d](https://github.com/nervjs/taro-ui/commit/519837d428fbf3f326f785e14356a1ff0ebf5da8))

### Features

- 添加 @types/loadsh ([a424706](https://github.com/nervjs/taro-ui/commit/a424706972c357cb3b0990e60fe648a886653a3c))
- **Calendar:** Calendar 组件添加仅显示有效时间组功能 ([#527](https://github.com/nervjs/taro-ui/issues/527)) ([b63eb1a](https://github.com/nervjs/taro-ui/commit/b63eb1aebb366046e3416ab806e76a6f3bddca43))
- **curtain:** 增加关闭图标位置的示例 ([d209916](https://github.com/nervjs/taro-ui/commit/d2099164ed7d55af5b5d340766da25e345850fd0))
- **typings:** fix typings of some comps ([c50d4ea](https://github.com/nervjs/taro-ui/commit/c50d4eaa1b9343951bd5e2f6ed01c664abde6049))

# [2.1.0](https://github.com/nervjs/taro-ui/compare/v2.0.2...v2.1.0) (2019-04-10)

### Bug Fixes

- **LoadMore:** 修复按钮宽度问题 ([710fda5](https://github.com/nervjs/taro-ui/commit/710fda59e3c910abac57431b14b3cf34d6749316))
- AtInput 事件返回当前事件 event [#515](https://github.com/nervjs/taro-ui/issues/515) ([3b4d7e4](https://github.com/nervjs/taro-ui/commit/3b4d7e4803296160e356970fc487b8d364f4c96e))
- **input-number:** 修改错误的小驼峰写法 ([a29702c](https://github.com/nervjs/taro-ui/commit/a29702c75bb6351d91b2f00578afac866fbbb71b))
- **range:** 排序问题 fix [#481](https://github.com/nervjs/taro-ui/issues/481) ([7dfeb89](https://github.com/nervjs/taro-ui/commit/7dfeb8978a693e29bf4119837f2dfc02d1eb4d01))
- **tabs:** 内容换行 fix [#483](https://github.com/nervjs/taro-ui/issues/483) ([dde1b82](https://github.com/nervjs/taro-ui/commit/dde1b822bc2ce752fb3a0aa177b57555a33bdf5e))
- 修复测试 ([0dac33b](https://github.com/nervjs/taro-ui/commit/0dac33bc6881d57f5f332298319e5410c480c414))
- **search-bar:** 修复中文输入法候选词的时候和 placehold 重影 ([360f597](https://github.com/nervjs/taro-ui/commit/360f597446a4abab95ef8fc8f75d86c86aa68489))
- **tabs:** 修复右滑返回上一页触发滑动页面的 bug ([ae87341](https://github.com/nervjs/taro-ui/commit/ae87341f456022d9ad83d3a5889dd9900887342e))
- 修复测试 ([557241d](https://github.com/nervjs/taro-ui/commit/557241d1f2cc80be8b3fea4f0d36343244aa0315))
- **SearchBar:** 修改 AtSearchBar 动画的实现，去除以往基于不稳定的 placeholder 长度计算，改用 flexGrow 控制伸缩 ([e4ec5b4](https://github.com/nervjs/taro-ui/commit/e4ec5b4f68a43a3979534579889855512492bd77))
- **SearchBar:** 由于 dom 结构发生细致变化（inline-style 变化了），重新生成 snapshot ([51b01a1](https://github.com/nervjs/taro-ui/commit/51b01a1892aa30f63128acc3fe153c9ebdbfbbd6))
- **tab-bar:** 修改隐藏逻辑 ([6261707](https://github.com/nervjs/taro-ui/commit/62617078c92dab2e47143e9bf5ceb301295fefd2))
- **tabbar:** 修复测试不通过 ([fb5085c](https://github.com/nervjs/taro-ui/commit/fb5085ce2bade6f750a02213a01147d0f8b2cb7a))
- **tabs:** 参数调整 ([308dd49](https://github.com/nervjs/taro-ui/commit/308dd49c688cea21a132d41acfc11e52a936eae7))

### Features

- **AtInputNumber:** 为 AtInputNumber 添加错误提示回调 ([3b2dd28](https://github.com/nervjs/taro-ui/commit/3b2dd28941dec36cf7ee5e75d20f075b73e71e8f))
- **Fab:** 重构 Float Button 组件 ([cae0285](https://github.com/nervjs/taro-ui/commit/cae02851fc74cd67916e3dff74ac820b310d370d))
- **float-button:** Add new feature float-button ([bdef8d0](https://github.com/nervjs/taro-ui/commit/bdef8d0fc32c2ca9254172cef673b8115098dfca))
- **float-button:** Add testing ([4aff9d9](https://github.com/nervjs/taro-ui/commit/4aff9d98e9892bfd3ff9b690da5d238d3f21bf84))
- **float-button:** Fix import ([2e2d89f](https://github.com/nervjs/taro-ui/commit/2e2d89fa7bc0a918b6da6c8ac129c3b6357aeed9))
- **float-button:** H5 support ([d6fd847](https://github.com/nervjs/taro-ui/commit/d6fd8474c0daa24fe1725de1f394441f58112f70))
- **float-button:** Update demo ([54b80c8](https://github.com/nervjs/taro-ui/commit/54b80c8b2bfebcb0571d0b4a7b56d50b60b8542e))
- **NavBar:** 添加 leftIconType，rightFirstIconType，rightFirstIconType 支持自行扩展字体图标 ([1693a07](https://github.com/nervjs/taro-ui/commit/1693a073ff5e3dc3ee87c2578aaa6936ec2f030c))
- **search-bar:** 搜索框增加清除按钮的事件 fix [#438](https://github.com/nervjs/taro-ui/issues/438) ([073ce60](https://github.com/nervjs/taro-ui/commit/073ce604a9808d3eae3e15506fadc44830777a50))
- **search-bar:** 搜索框增加清除按钮的事件 fix [#438](https://github.com/nervjs/taro-ui/issues/438) ([b0cea85](https://github.com/nervjs/taro-ui/commit/b0cea8529c6d4bfd4c0ef04bbf171b3cfa84b810))
- **TabBar:** tab 图标支持图片 ([ad8ea7c](https://github.com/nervjs/taro-ui/commit/ad8ea7cf62b2a5742aacfc2dfd9c67245f321c2c))

## [2.0.2](https://github.com/nervjs/taro-ui/compare/v2.0.1...v2.0.2) (2019-03-05)

### Bug Fixes

- **input-number:** 改正 d.ts, onBlur 为非必填项 ([2635118](https://github.com/nervjs/taro-ui/commit/26351182b469cdbd84092424c768b52eb2717d8c))
- **List:** 修复 extraThumb 不显示的问题 [#418](https://github.com/nervjs/taro-ui/issues/418) ([fb3b7fe](https://github.com/nervjs/taro-ui/commit/fb3b7fe70c53c80c9e764636852489f0e5cb81f3))

### Features

- 修改配置 ([09244f4](https://github.com/nervjs/taro-ui/commit/09244f41f1033bc99230c4bdf272110e9e7bf5ea))
- 新增 issue helper ([a047231](https://github.com/nervjs/taro-ui/commit/a047231174110f564db4d4436e32383abbf423b3))
- 更新 issue template 配置 ([72241ce](https://github.com/nervjs/taro-ui/commit/72241ce1285760318a2bcc56d74b48b351a411de))

## [2.0.1](https://github.com/nervjs/taro-ui/compare/v2.0.0...v2.0.1) (2019-02-21)

### Bug Fixes

- **accordion:** requestAnimationFrame 不存在 ([08be8c6](https://github.com/nervjs/taro-ui/commit/08be8c665984043cd10d374c7155502508bdc344))
- **accordion:** 修复 accordion 问题 ([fd037b9](https://github.com/nervjs/taro-ui/commit/fd037b9382e250ffedac0a4ee694bc72082ec866))
- **input:** 改正 d.ts ([d8a380e](https://github.com/nervjs/taro-ui/commit/d8a380e54640ab2d12e7963241fc329b8bf32ea9))
- **Message:** 修复文字溢出 [#391](https://github.com/nervjs/taro-ui/issues/391) ([aaac2a6](https://github.com/nervjs/taro-ui/commit/aaac2a6e78b113f5481fd8567f7345165b23adc8))
- **Modal:** 修复 android 机的 小黑点 close [#410](https://github.com/nervjs/taro-ui/issues/410) close [#404](https://github.com/nervjs/taro-ui/issues/404) ([01461a4](https://github.com/nervjs/taro-ui/commit/01461a43268071d4d0fa270443ae8086f546c123))
- **swan:** 兼容 swan 百度小程序 ([adb3f94](https://github.com/nervjs/taro-ui/commit/adb3f945a0af43bca527554eb43aec43bdae61be))
- **tabs:** tab-panel 空白 ([39f88d6](https://github.com/nervjs/taro-ui/commit/39f88d66d6572751015ec9d0f6d348ec186d514e))

### Features

- **theme:** 修改配色 ([eca1516](https://github.com/nervjs/taro-ui/commit/eca15164aa5a3ebce7b51cba89091f22be08b03f))
- **theme:** 新增 7Fresh 主题 ([fc18269](https://github.com/nervjs/taro-ui/commit/fc18269c70b8ad001810aae9b666331933e4e20c))
- **theme:** 添加 7Fresh 主题 ([f944162](https://github.com/nervjs/taro-ui/commit/f9441623e7893d5a9e68fe15becfcb721e7728e7))

# [2.0.0](https://github.com/nervjs/taro-ui/compare/v2.0.0-beta.2...v2.0.0) (2019-02-03)

### Bug Fixes

- **accordion:** 适配百度并重构 ([13f927d](https://github.com/nervjs/taro-ui/commit/13f927d40b2fb3be3502ddded46bb4503274ad75))
- **calendar:** 修复组件 start 可以 大于 end 的问题 closed [#366](https://github.com/nervjs/taro-ui/issues/366) ([320f9df](https://github.com/nervjs/taro-ui/commit/320f9df14466cbadf3ef66773c08acccbcbdb28d))
- **Checkbox:** 修复 ICON 变形的问题 [#378](https://github.com/nervjs/taro-ui/issues/378) ([7cada7a](https://github.com/nervjs/taro-ui/commit/7cada7ad9bda12407edb10efbd65bb37b2a6928e))
- **Components:** closed [#336](https://github.com/nervjs/taro-ui/issues/336) [#367](https://github.com/nervjs/taro-ui/issues/367) ([beee397](https://github.com/nervjs/taro-ui/commit/beee39748d5e73cc43290fa0b01ce2032bb9c758))
- **form:** Form 中 button 位置偏右 [#158](https://github.com/nervjs/taro-ui/issues/158) ([da3d0fd](https://github.com/nervjs/taro-ui/commit/da3d0fd0f5dc7d07129d96e24bc4eb40379c3d7d))
- **message:** 适配百度 ([b55cc89](https://github.com/nervjs/taro-ui/commit/b55cc89ca67f462de3a2bd2430ce60f48437ffb1))
- **noticebar:** 修复跑马灯模式在微信小程序字体大小渲染有误的问题 ([3b34feb](https://github.com/nervjs/taro-ui/commit/3b34feb4bc6ca9a46495ac8f15f6eb4ae4c55a4d))
- **range:** 适配百度 ([8e4e8eb](https://github.com/nervjs/taro-ui/commit/8e4e8eb866c64402c23cf51f28d37b1adf02a6ac))
- **tabs:** 修复 inactive 高度未隐藏 ([857baf2](https://github.com/nervjs/taro-ui/commit/857baf28931fa68b8aa6be57846c0bbe3bd8945f))
- **tabs:** 适配百度 ([ee42685](https://github.com/nervjs/taro-ui/commit/ee42685d7fe68ef99ba2524f7921a701e841b694))
- 修复百度小程序 icon ([d4e19be](https://github.com/nervjs/taro-ui/commit/d4e19bee0221c3dda0a16ff9c2fdf098de238130))
- 修复百度小程序 noticebar ([1bedaa9](https://github.com/nervjs/taro-ui/commit/1bedaa982656013af13ccc973c99005337ee573c))
- **SwipeAction:** 处理 h5 clientRectangle 数据问题 ([18e9a4c](https://github.com/nervjs/taro-ui/commit/18e9a4c092a5c964b9c3670fcd165ad8b6dd635b))
- **switch:** 适配百度 ([9bafce5](https://github.com/nervjs/taro-ui/commit/9bafce5fb1c871b975d05167b2741bea43bee8e2))
- **types:** 修复 types 定义 ([fefc0fc](https://github.com/nervjs/taro-ui/commit/fefc0fce50e01e12ce61e122057ec9fae7f68eae))

### Features

- **theme:** 优化自定义主题变量名 ([7f0f0a0](https://github.com/nervjs/taro-ui/commit/7f0f0a0d0e2ff1d15fba82cca11833dfb9c4742b))
- 适配百度 ([0743caf](https://github.com/nervjs/taro-ui/commit/0743caf9992c65c74000c216207ed0c4f27462b7))
- **indexes:** 适配百度 ([4f52def](https://github.com/nervjs/taro-ui/commit/4f52defa1142bd67d4dc6037cc6557397412201c))
- **toast:** 增加 customStyle ([8b63b83](https://github.com/nervjs/taro-ui/commit/8b63b836a19b61a9dac07a811d0e986b2bf189fa))
- 添加红色主题 ([aacfd84](https://github.com/nervjs/taro-ui/commit/aacfd84b94b3b1f8b90cc4c740a461f545d6fa68))
- **image-picker:** 适配百度 ([7043eab](https://github.com/nervjs/taro-ui/commit/7043eab3266fc44bcbf6665cac78a16422df7471))
- **Switch:** 调整样式 ([5b2a2ef](https://github.com/nervjs/taro-ui/commit/5b2a2efede7364358098b9ee9bb258fc399b241d))
- **theme:** 添加红色主题 ([a8caf39](https://github.com/nervjs/taro-ui/commit/a8caf39303468500ff7ee7ed6a605c4e3bc191ce))
- **Theme:** 开放可变更的自定义主题变量 ([3b46579](https://github.com/nervjs/taro-ui/commit/3b46579a0d16fbd019aa234a4a0eb89af1da3dbb))

# [2.0.0-beta.2](https://github.com/nervjs/taro-ui/compare/v2.0.0-beta.1...v2.0.0-beta.2) (2019-01-17)

### Bug Fixes

- **calendar:** 新增日历 onSelectDate 方法 ([6e9ad74](https://github.com/nervjs/taro-ui/commit/6e9ad74ded5067246a6f09be99f94c3bd1b8e08b))
- **Calendar:** 修复 onMonethChange 触发问题 close [#305](https://github.com/nervjs/taro-ui/issues/305) close [#337](https://github.com/nervjs/taro-ui/issues/337) ([360c7a1](https://github.com/nervjs/taro-ui/commit/360c7a1e79a4d63cba780ff4fab832de37de51fe))
- **countdown:** 修复页面 setState 引起倒计时停止 fix [#333](https://github.com/nervjs/taro-ui/issues/333) ([99924c5](https://github.com/nervjs/taro-ui/commit/99924c58f896d456bffc86607d5e1988a11eab8b))
- **FloatLayout:** 修复滚动穿透问题 close [#352](https://github.com/nervjs/taro-ui/issues/352) ([25c8074](https://github.com/nervjs/taro-ui/commit/25c8074cabd9fddfe77628f08199c52146d9f0b9))
- **FloatLayout:** 处理 标题不存在 的问题 [#327](https://github.com/nervjs/taro-ui/issues/327) ([ac44dde](https://github.com/nervjs/taro-ui/commit/ac44dde50750872758c929a16aebcead55d8542a))
- **image-picker:** 修复删除 bug ([d5fd1a4](https://github.com/nervjs/taro-ui/commit/d5fd1a4cb5e91d494ac4c226973c3a59e2360598))
- **image-picker:** 删除时返回新数组 ([c0459d9](https://github.com/nervjs/taro-ui/commit/c0459d9a6755dc0ecc74f24d1a2754fc4827a930))
- **tabs:** tabs 改为受控组件 ([ed87db7](https://github.com/nervjs/taro-ui/commit/ed87db714bd76a9f3465736a0a3602d377228a06))
- **tabs:** 修复二次点击 [#321](https://github.com/nervjs/taro-ui/issues/321) ([a57aa7f](https://github.com/nervjs/taro-ui/commit/a57aa7f48e7055014ab19227c2d669fa2e6640df))
- **textarea:** 参数类型对齐 ([4079d93](https://github.com/nervjs/taro-ui/commit/4079d93271b252720f9e6e135b847787ac14d81d))

# [2.0.0-beta.1](https://github.com/nervjs/taro-ui/compare/v1.5.4...v2.0.0-beta.1) (2019-01-03)

### Bug Fixes

- **Component:** 修复部分问题 ([2d533c4](https://github.com/nervjs/taro-ui/commit/2d533c41c0a8a514eaeeabdadaf1a05da6ec7996))
- **countdown:** 修复倒计时结束事件多次触发的问题 ([c7915a1](https://github.com/nervjs/taro-ui/commit/c7915a17e441396a3f020109d28ccbd6281e3a0a))
- **countdown:** 修复冲突代码 ([2593a31](https://github.com/nervjs/taro-ui/commit/2593a31319d9aae5532e87d318b7fa7b4a10da9c))
- **image-picker:** 适配支付宝 ([0bf1731](https://github.com/nervjs/taro-ui/commit/0bf1731a4a5b2acaee09f904e5add83bf14d5010))
- **indexes:** 支付宝适配 ([5aa8189](https://github.com/nervjs/taro-ui/commit/5aa8189d6e221da2043f678c128a539ec8e057ac))
- **input:** fix [#165](https://github.com/nervjs/taro-ui/issues/165) editabled 无法切换 ([c827afe](https://github.com/nervjs/taro-ui/commit/c827afe112317f95190ed84410b0f14306cb3e5a))
- **input:** 改名 maxLength ([5744a47](https://github.com/nervjs/taro-ui/commit/5744a47efc436ba7ddcb90ec6a0926e64f86af6b))
- **input:** 调整 icon 位置 ([e428342](https://github.com/nervjs/taro-ui/commit/e428342a2bc3200fa85c9e7214b4d5334dc26bb5))
- **input:** 适配支付宝小程序 ([50c7352](https://github.com/nervjs/taro-ui/commit/50c735202c6b2e14a7bf64ffd0aba7143f4b13e7))
- **List:** 修复 arrow 属性导致 list 无法展示问题 ([0a8c31d](https://github.com/nervjs/taro-ui/commit/0a8c31df74db3405aaac57f81c6b9169391ca57e))
- **List:** 修复 Picker 样式导致 List 样式错乱 ([3aa93ef](https://github.com/nervjs/taro-ui/commit/3aa93ef38073e7aa644fee11c6157c60085be55d))
- **search:** 修复 Picker 的 value 只能在 最大和最小之间 ([3c90722](https://github.com/nervjs/taro-ui/commit/3c9072210d4c8ef0e23c9f304a85eadbc0fae045))
- **search-bar:** 支付宝适配 ([6038524](https://github.com/nervjs/taro-ui/commit/603852481d885cf968c496b2a60faad3302e44ce))
- **SwipeAction:** 修复 ios 滚动问题 ([cd92c81](https://github.com/nervjs/taro-ui/commit/cd92c81ed303fdc1afdf56b4a21fad2ed24a5e69))
- **tabs:** 适配支付宝小程序 ([ea0ae28](https://github.com/nervjs/taro-ui/commit/ea0ae28f2add58b35d492ebbd9a4890f21818636))
- **textarea:** 修复支付宝小程序 ([99d6cf0](https://github.com/nervjs/taro-ui/commit/99d6cf011fe2d693346b43287d287cabd8f2b5e9))
- **textarea:** 改名 maxLength ([019e9e4](https://github.com/nervjs/taro-ui/commit/019e9e454180ba834ba82349bc361f39387ee3e3))
- **textarea:** 适配支付宝小程序 ([b793f6b](https://github.com/nervjs/taro-ui/commit/b793f6bffadcdddcc89192b213409c788aad8b86))
- delayQuerySelector 改版 ([4436f17](https://github.com/nervjs/taro-ui/commit/4436f17ef57a6d73e023df3ad59d3164b236c008))
- h5 热更新报错 ([8b9e609](https://github.com/nervjs/taro-ui/commit/8b9e609a0291dce2e2957a755fd75b7152bc19bc))
- 修复支付宝问题 ([b12fe13](https://github.com/nervjs/taro-ui/commit/b12fe13060bbf69e548e9692e5b5a270174f4373))
- 修复支付宝问题、drawer 支持 children 等 ([9248146](https://github.com/nervjs/taro-ui/commit/924814635ada981da99abf542b14a4fbd78fc5ae))
- 去掉无用语句 ([b98a642](https://github.com/nervjs/taro-ui/commit/b98a642ba1d321f7a8f0a7fe34a30ef0943a8b1f))
- **textarea:** 适配支付宝小程序 ([85c00e3](https://github.com/nervjs/taro-ui/commit/85c00e3150c03e30ad92006b2ec4e5ebbf180079))

### Features

- **Accordion:** 兼容支付包小程序 ([41b3868](https://github.com/nervjs/taro-ui/commit/41b3868ee77517599828276ccfe0cc68b4aaaf8f))
- **Curtain:** 重构幕帘样式，增加多 position 支持 ([f9cedb1](https://github.com/nervjs/taro-ui/commit/f9cedb1c875f7b8335c793da6136458e1f4be9b3))
- **customize-theme:** 调整代码结构，更改 css 命名 ([c57e64f](https://github.com/nervjs/taro-ui/commit/c57e64f1a66affd7d0f3289499d15b4a7f130bfe))
- **customize-theme:** 调整代码结构，更改 css 命名 ([b98c4eb](https://github.com/nervjs/taro-ui/commit/b98c4eba05f98ac6961b147b571d805fd233d4c0))
- **customize-theme:** 调整代码结构，更改 css 命名 ([8ab1764](https://github.com/nervjs/taro-ui/commit/8ab1764c3e35d4194851bfdac81b9b54c6194a63))
- **range:** 适配支付宝小程序 ([79d1c3e](https://github.com/nervjs/taro-ui/commit/79d1c3e45aa116aef6e2839a6bb4eedac3e1b743))
- 修复组件在支付宝的问题 和 体验问题 ([257bed9](https://github.com/nervjs/taro-ui/commit/257bed997fc23575c11a79d7c3e3f6d9d43a889c))
- 新增 UUID 方法 ([246ad32](https://github.com/nervjs/taro-ui/commit/246ad320b8e990823c9711e966f363f3bcc32c6d))
- **customize-theme:** 调整代码结构，更改 css 命名 ([6256a0e](https://github.com/nervjs/taro-ui/commit/6256a0e235576223c82ec5a6b03e93f1f2afc195))
- **style:** 组件样式抽离 ([614fd40](https://github.com/nervjs/taro-ui/commit/614fd403ce2cc529b0b6d2e125c66a0f7f8cd585))
- 抽离样式文件，与组件解耦 ([100287c](https://github.com/nervjs/taro-ui/commit/100287c32d231d106805a6a0b383178ba3797cf8))

## [1.5.4](https://github.com/nervjs/taro-ui/compare/v1.5.3...v1.5.4) (2018-12-30)

### Bug Fixes

- **ActionSheet:** 修复 state 无法改变 被 Text 包含的问题 close [#286](https://github.com/nervjs/taro-ui/issues/286) ([9ed24d1](https://github.com/nervjs/taro-ui/commit/9ed24d16346e197c52b8e025133176463d9d0ca5))
- **Components:** 修复组件中带有浮层的 穿透滚动问题 h5 下 close [#286](https://github.com/nervjs/taro-ui/issues/286) ([44040dc](https://github.com/nervjs/taro-ui/commit/44040dc88f34b6a0f6ef74fbfda4fa0f8cb48572))
- **Countdown:** 修复倒计时多次触发的问题 ([260387d](https://github.com/nervjs/taro-ui/commit/260387dfe89efa25d64e94d3b6bda264b9cf8d4c))
- **input:** 改名 maxLength ([5bf9bf1](https://github.com/nervjs/taro-ui/commit/5bf9bf136b889bc2d5c99e5f68844ed9dc1f48ed))
- **SwipeAction:** 移除 log ([a85de1c](https://github.com/nervjs/taro-ui/commit/a85de1cd19cdfbf7ab218f5fb7375e6f02760985))
- **tabs:** 修复兼容性问题 ([59551d3](https://github.com/nervjs/taro-ui/commit/59551d3d43b3b7ec78d3f97ccda7c4da10987208))

### Reverts

- Revert "chore: remove flex component" ([2470617](https://github.com/nervjs/taro-ui/commit/247061750c02640e9abfd38858bf1842adc8086c))

## [1.5.3](https://github.com/nervjs/taro-ui/compare/v1.5.2...v1.5.3) (2018-12-24)

### Bug Fixes

- **@types/avatar:** 优化 avatar 的 types 定义 ([b1aebbb](https://github.com/nervjs/taro-ui/commit/b1aebbb16ec37ea0a367a008dc524538c764ce12))
- **curtain:** 处理冒泡 ([47f2ee6](https://github.com/nervjs/taro-ui/commit/47f2ee6e11afdd08a7088b6a5e129973310ddc71))
- **FloatLayout:** 新增 ScrollView 的一些属性 close [#258](https://github.com/nervjs/taro-ui/issues/258) [#259](https://github.com/nervjs/taro-ui/issues/259) ([bb79794](https://github.com/nervjs/taro-ui/commit/bb797940424b3d7768244c90df86aedaa5c65ada))
- **FloatLayout:** 暂时屏蔽 onClose 回应问题 close [#266](https://github.com/nervjs/taro-ui/issues/266) ([9d7210a](https://github.com/nervjs/taro-ui/commit/9d7210a7a8013594cb3b49dca87438dac842bb12))
- **icon:** 转化 rpx fix [#112](https://github.com/nervjs/taro-ui/issues/112) ([047c938](https://github.com/nervjs/taro-ui/commit/047c938f30df71cd0dffa3463416d255c25333ec))
- **image-picker:** 修复不能选择同一文件 ([4c23d93](https://github.com/nervjs/taro-ui/commit/4c23d9346df6f7c96c0d083da74a4921ffb135c3))
- **segmented-control:** 优化 segmented-control 页面体验 ([631d628](https://github.com/nervjs/taro-ui/commit/631d62881313bbf8ae7f87517fe6235061572378))
- **SwipeAction:** 处理 SwipeAction 的一些问题 close [#225](https://github.com/nervjs/taro-ui/issues/225) ([a671632](https://github.com/nervjs/taro-ui/commit/a67163203aaa3e1e15f6f4d36546fc8269ae0b82))
- **SwipeAction:** 简单处理 h5 作用域问题 ([2ca61b5](https://github.com/nervjs/taro-ui/commit/2ca61b58760b619ad580102a0ae207b2ed7bef60))
- **textarea:** 修复 maxlength 设置无效 ([50f1788](https://github.com/nervjs/taro-ui/commit/50f17889699aaaaf2effc92e89898e9132efe6bb))

### Features

- **input-number:** 增加 onBlur 事件 [#251](https://github.com/nervjs/taro-ui/issues/251) ([a31ffcb](https://github.com/nervjs/taro-ui/commit/a31ffcb5a0e054004e23f7ab969d2a06bd5ebfe6))

## [1.5.2](https://github.com/nervjs/taro-ui/compare/v1.5.1...v1.5.2) (2018-12-13)

### Bug Fixes

- **calendar:** 优化 plugins 的逻辑 ([a04daa7](https://github.com/nervjs/taro-ui/commit/a04daa79ca865fcf76e638a32350999eeff2c09c))
- **calendar:** 修复日历组件 禁止滑动下无法点击日期 ([90e80bf](https://github.com/nervjs/taro-ui/commit/90e80bf6043209903bfa092cab8279413a1583cd))
- **count-down:** 页面隐藏停止 fix [#242](https://github.com/nervjs/taro-ui/issues/242) ([eef0bac](https://github.com/nervjs/taro-ui/commit/eef0bac3d42cc89db74be22b2d1051c1331d810a))
- **doc:** 修复了几个单引号错误 ([#244](https://github.com/nervjs/taro-ui/issues/244)) ([6953a10](https://github.com/nervjs/taro-ui/commit/6953a101beea81ff51ccb5f6bfdf974e9495a1e7))
- **image-picker:** 修复 input 大小不为 0 ([2017bb9](https://github.com/nervjs/taro-ui/commit/2017bb97f0e069992b35602a689a30171889e643))
- **image-picker:** 将 FileReader 替换成 window.URL.createObjectURL ([5274a0b](https://github.com/nervjs/taro-ui/commit/5274a0bf5f2595947dbd81ce7bd52539c509ea82))
- **Indexes:** 修复 H5 下索引位置错落的问题 ([d7d2b5c](https://github.com/nervjs/taro-ui/commit/d7d2b5c5192bfcad5ae82804b48dcd6b454f0c25))
- **list:** 新增 switchColor 属性 close [#235](https://github.com/nervjs/taro-ui/issues/235) ([8a61499](https://github.com/nervjs/taro-ui/commit/8a6149927e45a7b8666bbcb3a0d941740516c569))
- **message:** 定时关闭改成 setState 后的回掉 fix[#226](https://github.com/nervjs/taro-ui/issues/226) ([69861eb](https://github.com/nervjs/taro-ui/commit/69861eb9bb20fecfef277e81f92baf4af188f1aa))
- **search:** 修复支付宝的一些问题 ([cdf681a](https://github.com/nervjs/taro-ui/commit/cdf681a5893af3300b850b92b6d3edee8012212f))
- **Textarea:** 修复 maxLength 设置无效的问题 ([#231](https://github.com/nervjs/taro-ui/issues/231)) ([04909f0](https://github.com/nervjs/taro-ui/commit/04909f0abc7844f2bdb56c299c176e0a6185140a))

### Features

- **component:** 兼容支付宝 API ([440f4d4](https://github.com/nervjs/taro-ui/commit/440f4d469a193a8a6de53a6a15b18db4b069723c))

## [1.5.1](https://github.com/nervjs/taro-ui/compare/v1.5.0...v1.5.1) (2018-12-03)

### Bug Fixes

- **calendar:** 简化日历组件 ([20698a6](https://github.com/nervjs/taro-ui/commit/20698a6ceabdd980e51f4bb71588d168e6c3717e))
- **components:** 移除 iPhone X 的判断逻辑 close [#206](https://github.com/nervjs/taro-ui/issues/206) ([79ba5b0](https://github.com/nervjs/taro-ui/commit/79ba5b0066bd2248414a9cb1b00cb4b6654e1462))
- **message:** fix bug [#204](https://github.com/nervjs/taro-ui/issues/204) ([2d8e52c](https://github.com/nervjs/taro-ui/commit/2d8e52c7c51d2d83ed8d0a8dc3e3cc509e891e28))

### Features

- **input-number:** 开放 input type [#203](https://github.com/nervjs/taro-ui/issues/203) ([6543725](https://github.com/nervjs/taro-ui/commit/6543725f6351cf30628aacb242fa0a3b88e3d218))
- **load-more:** 开放样式 props [#198](https://github.com/nervjs/taro-ui/issues/198) ([71fa238](https://github.com/nervjs/taro-ui/commit/71fa238a375c9668b3c653c1f88d24b189217f79))

# [1.5.0](https://github.com/nervjs/taro-ui/compare/v1.4.0...v1.5.0) (2018-11-27)

### Bug Fixes

- **message:** 调用方式修改 ([dc3d2e9](https://github.com/nervjs/taro-ui/commit/dc3d2e985370a3eedf7329e52ff2dfea3eed0e8e))
- 修复测试 ([dd7b61b](https://github.com/nervjs/taro-ui/commit/dd7b61bf552ebe61d4445434e76e691fa105bdca))
- **calendar:** 修复日历组件滚动问题 + 修复手机机型兼容问题 ([fd544a0](https://github.com/nervjs/taro-ui/commit/fd544a04b5edc6fac3bda282fd02e3e61f7d0410))
- **calendar:** 修复选中日期 mark 的背景色 ([0bbd9fb](https://github.com/nervjs/taro-ui/commit/0bbd9fb03db1b2522436274bffa47dc60d18cd97))
- **calendar:** 处理 箭头控制器 无法使用问题 ([3e82420](https://github.com/nervjs/taro-ui/commit/3e824209123aa050d65118e77b191e64aa26dc66))
- **calendar:** 添加优化属性 ([3c3e070](https://github.com/nervjs/taro-ui/commit/3c3e070b683fffff3616752b6a462852679e6701))
- **count-down:** 修复 props 更新问题 ([3114bc3](https://github.com/nervjs/taro-ui/commit/3114bc3a20d91877550e30f51d34bb20189665dd))
- **divider:** 修复 pxTransform 问题 ([bb6623a](https://github.com/nervjs/taro-ui/commit/bb6623afe65cdc5b57f2f007d499b343647bccb9))
- **form:** 删除无用代码 ([795f152](https://github.com/nervjs/taro-ui/commit/795f1520baf92c8ceb161ecbcaaeed9fadaab72d))
- **image-picker:** 修复 image-picker 细节问题 ([a7167c0](https://github.com/nervjs/taro-ui/commit/a7167c0aa3c34144883eb784040f5ac131e2b9d1))
- **image-picker:** 修复 ref 丢失问题 ([ce664a0](https://github.com/nervjs/taro-ui/commit/ce664a0734ae2743279dfa16f6efaf741b775fe3))
- **image-picker:** 修复 test ([e96ae4f](https://github.com/nervjs/taro-ui/commit/e96ae4fc2dca1318c90c0ae6eada6737af4f27f4))
- **image-picker:** 修改细节 ([2255109](https://github.com/nervjs/taro-ui/commit/22551092a2b056704bb1dae8f86f09fbd7cfd186))
- **indexes:** 修复 H5 端滑动不精准的问题 ([63b9eee](https://github.com/nervjs/taro-ui/commit/63b9eee3682d57ff6eec324de1d69b78766fb084))
- **indexes:** 禁止事件冒泡 ([4d238fb](https://github.com/nervjs/taro-ui/commit/4d238fb13550bb445c9eece0b8493727bbd67a0b))
- **indexes:** 默认去除动画 ([af7dd5e](https://github.com/nervjs/taro-ui/commit/af7dd5e83da6667a8520f76dc9007b57f57f2164))
- **input-number:** fix [#141](https://github.com/nervjs/taro-ui/issues/141) input-number max 值失效 ([8e39738](https://github.com/nervjs/taro-ui/commit/8e39738630d0e1c06db90197ffeaffe91a38aab3))
- **input-number:** 修复 input-number 数字大小限制问题 ([1e8abec](https://github.com/nervjs/taro-ui/commit/1e8abec1afb7c3c88f1aee319da991c24832ad9d))
- **input-number:** 修改 pxTransform 测试方式 ([2c71d15](https://github.com/nervjs/taro-ui/commit/2c71d15921b77db76160f6b0afd929409a9f6c2f))
- **load-more:** 修复 ios 溢出问题 ([99d2d75](https://github.com/nervjs/taro-ui/commit/99d2d756b301fe9abaaa909c21aecb7e757932f2))
- **message:** 修复 message 细节 ([6423668](https://github.com/nervjs/taro-ui/commit/64236684640dc12f38fe5e1e10c14cfd69db6fea))
- **message:** 修复 test ([83603a4](https://github.com/nervjs/taro-ui/commit/83603a4c7e52f27ef7ee6f4fc966c3a69959cc92))
- **message:** 修改演示页面 ([c723dd9](https://github.com/nervjs/taro-ui/commit/c723dd917d95340caeb85cfa38ff6eef937ed085))
- **message:** 修正 type，改变 message api ([507b33c](https://github.com/nervjs/taro-ui/commit/507b33cc2d9d00fc786e813169ea6f0c26c7d973))
- **range:** range padding ([e648f78](https://github.com/nervjs/taro-ui/commit/e648f7881c3f16c3cbce73e6cf35f91cb63817ce))
- **rate:** 修改 pxTransform 测试方式 ([f3063dd](https://github.com/nervjs/taro-ui/commit/f3063dd7f260d1b549cb255c680c3c2595b59a40))
- **search-bar:** 修正函数参数 ([a5d19f0](https://github.com/nervjs/taro-ui/commit/a5d19f09facd751624a9670d2e012e5f6edb5e86))
- **segmented-control:** 修复 pxTransform 测试方式 ([162a8bc](https://github.com/nervjs/taro-ui/commit/162a8bc8c2b7210d076c703b247432eff8ac8ea9))
- **switch:** 修复函数参数 ([eafdcb0](https://github.com/nervjs/taro-ui/commit/eafdcb0d29becb79e268648ada4cbd22f61ec0d0))
- **tab-bar:** 修复函数参数问题 ([9e1309a](https://github.com/nervjs/taro-ui/commit/9e1309a05d65a829133026a748998fe2212ebeab))
- **tabs:** 修复函数参数问题 ([4f3287e](https://github.com/nervjs/taro-ui/commit/4f3287edf98733ed541a9d5b8773bda158c0474d))
- **textarea:** 修复 pxTransform 测试问题 ([6c15ed7](https://github.com/nervjs/taro-ui/commit/6c15ed7bebd89aef026b511c7424edc14350e00e))
- **types:** 添加 AtSlider close [#166](https://github.com/nervjs/taro-ui/issues/166) ([8cb53c3](https://github.com/nervjs/taro-ui/commit/8cb53c358ee45aa83d4a7d33c3154f44a273446f))

### Features

- **calendar:** 优化日历组件快速翻动的处理方式 ([1657d84](https://github.com/nervjs/taro-ui/commit/1657d844eccf8774902466d08e1ca1b301618599))
- **calendar:** 日历组件迁移 ([86696da](https://github.com/nervjs/taro-ui/commit/86696daebd8fdc3d028d9526e96e7c0e075e167c))
- **calender:** 新增区域选择功能 ([c9bf146](https://github.com/nervjs/taro-ui/commit/c9bf1461338fc075527c61c35bf43fc12975c04f))
- **image-picker:** 新增 image-picker type ([38d836f](https://github.com/nervjs/taro-ui/commit/38d836f5dbc139e4fcf1272327519015543be0a5))
- **image-picker:** 新增 image-picker 组件 ([b500eae](https://github.com/nervjs/taro-ui/commit/b500eae5614cf49aa1e06c4198703a399d1140b7))
- **indexes:** 优化索引选择器样式 ([ad2414a](https://github.com/nervjs/taro-ui/commit/ad2414a72fc527e5bf1041eb0d362b9101ab467e))
- **indexes:** 增加 indexes types ([7c7ce09](https://github.com/nervjs/taro-ui/commit/7c7ce09f1370fdfc8510d8d14b90f865b8d55b62))
- **indexes:** 增加滑动跳转 ([5099632](https://github.com/nervjs/taro-ui/commit/509963234b028969890dc7eb82bea58297659589))
- **indexes:** 新增索引选择器组件 ([995decb](https://github.com/nervjs/taro-ui/commit/995decbf5061a20c82fd54727bb6773c5bc86e62))
- **message:** 增加 message type ([eed2a16](https://github.com/nervjs/taro-ui/commit/eed2a163bdf6792dbcc6ad252874b0bc0a724f00))
- **modal:** 新增可控的 overlay 点击关闭属性 close [#166](https://github.com/nervjs/taro-ui/issues/166) ([aa64d57](https://github.com/nervjs/taro-ui/commit/aa64d57c0302ce01771c6a372120a11f099a979c))
- **range:** 新增 range type ([d1355d5](https://github.com/nervjs/taro-ui/commit/d1355d52bded477bf14d8fd87aad9ef1ce141b05))
- **range:** 新增 range 组件 ([68885d7](https://github.com/nervjs/taro-ui/commit/68885d790cc722f9eddae9a463603ff6ce023a57))
- **range:** 更改 Range 滑块的大小 ([efe4be2](https://github.com/nervjs/taro-ui/commit/efe4be215dbe75a31b4cbb6d3d558e976ab566c7))
- **Range:** 滑动的时候禁止事件冒泡 ([9d55d5c](https://github.com/nervjs/taro-ui/commit/9d55d5cfa7600b07d912a5f54a9a55864c3282e5))

### Reverts

- Revert "fix(calendar): 暂时注释箭头控制器的功能" ([794fe75](https://github.com/nervjs/taro-ui/commit/794fe759db497f22f060054b483be2e841b76569))

# [1.4.0](https://github.com/nervjs/taro-ui/compare/v1.3.5...v1.4.0) (2018-11-11)

### Bug Fixes

- **count-down:** 回收定时器 ([5c01fed](https://github.com/nervjs/taro-ui/commit/5c01fed75799333c328d3351d76c91e1ea2ff3db))
- **count-down:** 增加横线 ([3b9e90a](https://github.com/nervjs/taro-ui/commit/3b9e90a1d5b191d19c81ade6e02bfc3059e2f514))
- **curtain:** 去除动画 ([67c47b3](https://github.com/nervjs/taro-ui/commit/67c47b33c2bcfb760b7775a47a00c57c729b692d))
- **curtain:** 修复细节问题 ([a9a2c7c](https://github.com/nervjs/taro-ui/commit/a9a2c7cedee246badb6ae9ab3966ed70a459a874))
- **curtain:** 调整细节 ([56e8380](https://github.com/nervjs/taro-ui/commit/56e83807409265c5340ad794a54c3991467ee2d4))
- **drawer:** 修复 drawer 溢出滚动。 close [#132](https://github.com/nervjs/taro-ui/issues/132) ([bc4f3b7](https://github.com/nervjs/taro-ui/commit/bc4f3b70930250600bdd0b7a9b501b735b3fad9e))
- **Drawer:** 修复 onClose 重复触发的问题 ([#167](https://github.com/nervjs/taro-ui/issues/167)) ([580e8ec](https://github.com/nervjs/taro-ui/commit/580e8ec1cd18ab94d5986278f0336d14c957b9df))
- **Drawer:** 修复弹层无法正常显示的问题 ([34fd07d](https://github.com/nervjs/taro-ui/commit/34fd07db8434009ae00c4a5ba334575b39af7fca))
- **load-more:** 兼容小程序 ([4c50e49](https://github.com/nervjs/taro-ui/commit/4c50e49c552aa5e31b454d9aa65b77c7e52f0c4e))
- **steps:** 细节修改 ([a95ebcf](https://github.com/nervjs/taro-ui/commit/a95ebcff37e5e229fb9d01c08368206812dbcf88))
- **tabs:** fix [#163](https://github.com/nervjs/taro-ui/issues/163) ios 8 下页面异常 ([a76c9c2](https://github.com/nervjs/taro-ui/commit/a76c9c23de9ae0353d4e5e6a30469d8d172c3565))
- **tag:** 补全 type。 close [#161](https://github.com/nervjs/taro-ui/issues/161) ([52a378e](https://github.com/nervjs/taro-ui/commit/52a378e0800b997be4df750cb1c6916103452691))
- 修复 types 是否必须 ([f836ab3](https://github.com/nervjs/taro-ui/commit/f836ab3a03bd1a722978e8be22d5fbca032616a5))
- **textarea:** 组件 props 修改 ([3574aed](https://github.com/nervjs/taro-ui/commit/3574aeda3ab4b62dc04e84322d479e6cc800f94d))

### Features

- **count-down:** 增加新字体 ([e0582ac](https://github.com/nervjs/taro-ui/commit/e0582ac75b48c72473e9d20b62daf9fd879004dc))
- **count-down:** 新增 count-down 倒计时组件 ([ea7875e](https://github.com/nervjs/taro-ui/commit/ea7875e22594e2cf4ba0fb000d39d722a4c0ff4e))
- **curtain:** 增加 curtain 组件 ([3c3402b](https://github.com/nervjs/taro-ui/commit/3c3402b5d7a8000bc6cf5aa38b67c60d564253d6))
- **curtain:** 增加 type ([793e4c2](https://github.com/nervjs/taro-ui/commit/793e4c2a1954baf574756219d9a9f9ba7d5c24dd))
- **divider:** 新增 divider 组件 ([162b515](https://github.com/nervjs/taro-ui/commit/162b515da0e5351698dec0761f77246171aa729b))
- **load-more:** 新增 load-more 文档 ([4869719](https://github.com/nervjs/taro-ui/commit/4869719dc3ebb646e812d1f0d15e72c7e6bc658c))
- **load-more:** 新增 load-more 组件 ([6778ed5](https://github.com/nervjs/taro-ui/commit/6778ed56efbe3cb7628c61de7339dc9c53456b70))
- **message:** 新增消息组件 ([8954217](https://github.com/nervjs/taro-ui/commit/89542179d04a7217544348981310fbc1f0dda924))
- **navbar:** 新增下划线控制变量 [#162](https://github.com/nervjs/taro-ui/issues/162) ([55f4bb0](https://github.com/nervjs/taro-ui/commit/55f4bb01879420538c0cb4b53530e82bea8c3c34))
- **segmented-control:** 优化动画 ([1528b80](https://github.com/nervjs/taro-ui/commit/1528b80add3789dae5f0bb48724611183d7ec835))
- **steps:** 增加 types ([b73c0fa](https://github.com/nervjs/taro-ui/commit/b73c0fab77badcb6e33a19725ce30f2c0df5ff31))
- **steps:** 新增步骤条组件 ([7906467](https://github.com/nervjs/taro-ui/commit/7906467b59ee52af6a828b0af91f215d68816344))

### Reverts

- Revert "test(search-bar): 修复测试" ([8a9aa96](https://github.com/nervjs/taro-ui/commit/8a9aa96dae86d6f0046aead84557ebf749795c2d))

## [1.3.5](https://github.com/nervjs/taro-ui/compare/v1.3.4...v1.3.5) (2018-10-23)

### Bug Fixes

- **slider:** 修复 AtSlider 变更 value 无效的问题 ([#135](https://github.com/nervjs/taro-ui/issues/135)) ([b25e996](https://github.com/nervjs/taro-ui/commit/b25e9964d337dfb6c1f3f2e6007a417632e09958))

## [1.3.4](https://github.com/nervjs/taro-ui/compare/v1.3.3...v1.3.4) (2018-10-22)

### Bug Fixes

- **1px:** 修复组件 noBorder 失效的问题 ([fef44e1](https://github.com/nervjs/taro-ui/commit/fef44e1287515bbe2720ff7251b1702399813c38))
- **toast:** 修复 Toast 组件的 type 文件 close [#131](https://github.com/nervjs/taro-ui/issues/131) ([89e6833](https://github.com/nervjs/taro-ui/commit/89e68338b5a037b2f28debf148470d82a4a450e1))

## [1.3.3](https://github.com/nervjs/taro-ui/compare/v1.3.2...v1.3.3) (2018-10-21)

### Bug Fixes

- **search-bar:** 增加 className，customStyle ([1def61e](https://github.com/nervjs/taro-ui/commit/1def61e72cef37cd538b3e475cfd242e1b30ead7))

### Features

- **1px:** 更改 1px 的实现方式 ([548bf1e](https://github.com/nervjs/taro-ui/commit/548bf1e908319bd917960cd95eec568b0d5d2038))

## [1.3.2](https://github.com/nervjs/taro-ui/compare/v1.3.0...v1.3.2) (2018-10-19)

### Bug Fixes

- **accordion:** 小程序动画 bug ([c435587](https://github.com/nervjs/taro-ui/commit/c435587d5d80facfeef9f8cd8a1734d64327d496))
- **button:** button 的 submit 问题 ([807e024](https://github.com/nervjs/taro-ui/commit/807e024c00f493762d86d7fe659b37d6354be4d3))
- **button:** 修复通栏按钮在父容器 flex 下的 bug ([11806cb](https://github.com/nervjs/taro-ui/commit/11806cbd56d6bf55a4886df2bdb8eb7af1697937))
- **component:** 修复组件的一些问题 ([a6c00df](https://github.com/nervjs/taro-ui/commit/a6c00dfe0bda0f204f51878c7aa26930f32608c2))
- **doc:** 完善 ActivityIndicator 的文档 ([6e9a63f](https://github.com/nervjs/taro-ui/commit/6e9a63f0b1c9cc14adf014c056116c69e4b42d75))
- **grid:** 修复图标父容器没有被完整填充 ([528e145](https://github.com/nervjs/taro-ui/commit/528e1455ef7d8d5355b135a47d9e6f558b195d89))
- **input:** 删除 onChange ([90c47a1](https://github.com/nervjs/taro-ui/commit/90c47a1b47121c4b6bb761670177146d92c7a8f2))
- **input:** 去除 important ([f80ade7](https://github.com/nervjs/taro-ui/commit/f80ade709c8802f94b3cc8d8c5835ca15baf9158))
- **input:** 增加 focus 属性 ([0279161](https://github.com/nervjs/taro-ui/commit/0279161e33c9dbe036a77e081ae12228eecef6b1))
- **list:** 修复 switch 在禁用状态仍然可以切换 fixed [#95](https://github.com/nervjs/taro-ui/issues/95) ([f803697](https://github.com/nervjs/taro-ui/commit/f80369706d018a85b2e8d78b714f88873bec3cf2))
- **noticebar:** 修复样式问题 ([2cb269f](https://github.com/nervjs/taro-ui/commit/2cb269f14469284eb19581308a9cb5b40fe284b3))
- **search-bar:** fixed 状态下宽度问题 ([e8e0d47](https://github.com/nervjs/taro-ui/commit/e8e0d47f88eca6cff768cabd9dd9e1ae9f9ccb72))
- **search-bar:** 完善 search-bar 文档 ([5c899b0](https://github.com/nervjs/taro-ui/commit/5c899b0a3828d5e92fb223cab731676b2481ad5d))
- **swipe-action:** 修复交互问题 ([c06bb39](https://github.com/nervjs/taro-ui/commit/c06bb391552fd20a2eef16525887c1e1ad2211af))
- **taro-ui:** 修复若干 issue 问题, close [#83](https://github.com/nervjs/taro-ui/issues/83) [#54](https://github.com/nervjs/taro-ui/issues/54) [#53](https://github.com/nervjs/taro-ui/issues/53) ([b85a026](https://github.com/nervjs/taro-ui/commit/b85a026499399cd7baef4cf4d563c404e7ab7912))
- **testcase:** 更新测试用例 ([77ed71b](https://github.com/nervjs/taro-ui/commit/77ed71b23b908648c4ca439cf7f96cbfb644623e))

### Features

- **1px:** 优化组件细节，分隔线使用 1rpx ([3ed1e1c](https://github.com/nervjs/taro-ui/commit/3ed1e1c7b8fbd2da0ad7b8d232e34e6352ef4a6d))
- **grid:** 新增 Grid 支持自定义 Icon,修复 Grid 的问题 ([e73374b](https://github.com/nervjs/taro-ui/commit/e73374ba262dc38cb8e0134112983a682df5b8a2))
- **list:** 新增 icon 属性 ([51f853d](https://github.com/nervjs/taro-ui/commit/51f853d6df4fa25c56a8cb63bb856a8da14cd28d))
- **list:** 更新快照 ([4cfde6d](https://github.com/nervjs/taro-ui/commit/4cfde6dd6d0545c253b83c4398d477ed6ef1fbdb))
- **modal:** 新增 modal 遮罩层 可被点击取消 ([0de416f](https://github.com/nervjs/taro-ui/commit/0de416f5df84f3bcb31c7369dd6f2851e5f1a63a))
- **swipe-action:** 完善测试案例 ([350f100](https://github.com/nervjs/taro-ui/commit/350f100e96e9bcb5ea8a732460dadd92b5028c69))
- **tabs:** 增加垂直切换功能 ([956d99f](https://github.com/nervjs/taro-ui/commit/956d99f624c115ad7fa0f090e53b132c7deec3bc))

# [1.3.0](https://github.com/nervjs/taro-ui/compare/v1.2.3...v1.3.0) (2018-10-09)

### Bug Fixes

- **accordion:** 增加默认开启状态 ([b1cddfb](https://github.com/nervjs/taro-ui/commit/b1cddfba51a5d3320e02c533a94de2badbff1902))
- **list:** 列表边框 UI 问题 ([faa1792](https://github.com/nervjs/taro-ui/commit/faa1792e2d97d4007b54b315066e9ed2d400f160))
- **search-bar:** ios 溢出问题 ([4da14da](https://github.com/nervjs/taro-ui/commit/4da14da15a6e61cb7247085fd246b38f9ae5d4c0))
- **search-bar:** 样式优先级 ([01c9355](https://github.com/nervjs/taro-ui/commit/01c93554e2f382dc4b9a0ea8d82cfe39327419e1))

### Features

- **accordion:** 增加 type ([32281fd](https://github.com/nervjs/taro-ui/commit/32281fda0b6e08006beb9b826f32491008cacd97))
- **accordion:** 增加文档 ([b925a17](https://github.com/nervjs/taro-ui/commit/b925a17c0514b5b6cad7299ebeb53f47be98c45f))
- **accordion:** 增加测试 ([ccfef15](https://github.com/nervjs/taro-ui/commit/ccfef15e88f5bf6efbe21644f1e1dc6641af2365))
- **accordion:** 新增组件 ([daa7b57](https://github.com/nervjs/taro-ui/commit/daa7b5704cf95f7eb7badb3caea53358dbf5dfd9))
- **component:** 完成 SwipeAction 组件编写 ([5651075](https://github.com/nervjs/taro-ui/commit/5651075cbc9dd2de769dff8016db7892b5412a9a))
- **search-bar:** 增加 types ([04136a6](https://github.com/nervjs/taro-ui/commit/04136a6d98d59a695ea53724a81200fc0387ee0d))
- **search-bar:** 按照设计稿修改 ([afca35f](https://github.com/nervjs/taro-ui/commit/afca35fe2d19cd54d1c9bceda52bd9c209d83c3e))
- **search-bar:** 新增组件 ([63acb61](https://github.com/nervjs/taro-ui/commit/63acb61e205437d90c522ca2589c142858ba075d))
- **slider:** 新增 Slider 组件 ([9fc6141](https://github.com/nervjs/taro-ui/commit/9fc6141186d472d67e07b9ffff15fa921e446dab))
- **Slider:** 添加测试用例 ([c9295f4](https://github.com/nervjs/taro-ui/commit/c9295f456eb1dc4df39d73e46681cd2113d2c3bb))
- **swipe-action:** 完善测试案例 ([2083653](https://github.com/nervjs/taro-ui/commit/2083653e3610ce963aaddf51371bed2e327d8dab))
- **swipe-action:** 完成 SwipeAction 组件 + 编写文档 + 编写 d.ts 文件 ([8050f43](https://github.com/nervjs/taro-ui/commit/8050f435d72a5c84229a4535e07ad77899465794))

## [1.2.3](https://github.com/nervjs/taro-ui/compare/v1.2.2...v1.2.3) (2018-09-29)

### Bug Fixes

- **action-sheet:** 修复 ActionSheetFooter 样式问题 closed [#78](https://github.com/nervjs/taro-ui/issues/78) ([29a5c6c](https://github.com/nervjs/taro-ui/commit/29a5c6cad6ce16158166da98079fb730309b9b7e))
- **action-sheet:** 完善 UI 问题 [#78](https://github.com/nervjs/taro-ui/issues/78) ([5aa472b](https://github.com/nervjs/taro-ui/commit/5aa472bfca6a75ada360ab5eb367c2ac63fd3fb8))
- **button:** type - sendMessageTitle ([#86](https://github.com/nervjs/taro-ui/issues/86)) ([c4efbb2](https://github.com/nervjs/taro-ui/commit/c4efbb26feb860569a243ce31b208c6decc0a855))
- **button:** 修复 button 的 ts 警告问题 ([d4079bb](https://github.com/nervjs/taro-ui/commit/d4079bb83f9284fd26b0db3cc13660f681ce9082))
- **button:** 修改 button 文档、avatar 条件判断 ([1b8128c](https://github.com/nervjs/taro-ui/commit/1b8128c63af934fbc180635d4ab60ea1b948d1c2))
- **button:** 小程序 button 开放能力回调 ([1d6811d](https://github.com/nervjs/taro-ui/commit/1d6811df7d8647866eca642fde09793fd4affaf0))
- **component:** 修复组件报参数类型错误的 warning ([9760c2f](https://github.com/nervjs/taro-ui/commit/9760c2fc59c6e92261a1bf024d5b50a249c5fc78))
- **components:** 修复组件报错 ([05d035f](https://github.com/nervjs/taro-ui/commit/05d035ff351c794ac62257e58539da47401cc4f2))
- [#84](https://github.com/nervjs/taro-ui/issues/84) style 为 null 处理 ([b21a852](https://github.com/nervjs/taro-ui/commit/b21a8528d4a684d7079d505f118267e38be4919d))
- 修复 types 缺少关键词 和 toast 无法自动关闭 ([bb0bfff](https://github.com/nervjs/taro-ui/commit/bb0bfff3cd5366e62adb790ea555677a308b58b0))
- **input:** fix [#85](https://github.com/nervjs/taro-ui/issues/85) types 错误 ([cb94a89](https://github.com/nervjs/taro-ui/commit/cb94a89887ea1a968e68c06dd28125263398887a))
- **input:** onClick type optional ([509fa35](https://github.com/nervjs/taro-ui/commit/509fa353952b95d61340f013cfb721962bebebfc))
- **input:** types ([2f37f15](https://github.com/nervjs/taro-ui/commit/2f37f157ec720968efaede71cd9ce5317f83fbdb))
- **tabs:** 规范 css ([cf56b03](https://github.com/nervjs/taro-ui/commit/cf56b0329baa24b9caf95a8ffa66e048608f6c33))
- **types:** grid - columnNum ([#73](https://github.com/nervjs/taro-ui/issues/73)) ([04e08f8](https://github.com/nervjs/taro-ui/commit/04e08f8bc5e6ae376a364c9be5e30e6f3cf68bf5))

### Features

- **list:** 新增 disabled 属性 closed [#90](https://github.com/nervjs/taro-ui/issues/90) ([4d710e4](https://github.com/nervjs/taro-ui/commit/4d710e4e2e6da3c1c2e0c9f9284c8e927a39cc1d))

## [1.2.2](https://github.com/nervjs/taro-ui/compare/v1.2.1...v1.2.2) (2018-09-20)

### Bug Fixes

- **button:** 修复 button 案例页 ([1439894](https://github.com/nervjs/taro-ui/commit/143989410749d4888a936f87d9b01983ef711ac5))
- **docs:** 修复 flex 文档错误 ([a8bd73a](https://github.com/nervjs/taro-ui/commit/a8bd73a858718a2b386c4f905b296e6becda6d87))
- **flex:** 无法换行问题 ([443c8e1](https://github.com/nervjs/taro-ui/commit/443c8e1eecd4347de7e6f15e29f7f39c74c7822b))
- **input:** 修复 input name ([b4187f9](https://github.com/nervjs/taro-ui/commit/b4187f9ccdc70b384852951bd45da921d664a509))
- **overlay:** 修复 toast 遮罩层出现,仍然可以点击底部按钮 ([33cc812](https://github.com/nervjs/taro-ui/commit/33cc812cd0ab150879d25e7807f297da220c8c7a))
- **toast:** overlay z-index ([30338e5](https://github.com/nervjs/taro-ui/commit/30338e5abd33ae32066f25fa697647c8fd457cb4))

## [1.2.1](https://github.com/nervjs/taro-ui/compare/v1.2.0...v1.2.1) (2018-09-15)

### Bug Fixes

- **pagination:** 暂时去掉 pagination 的 picker ([94ddf71](https://github.com/nervjs/taro-ui/commit/94ddf711d59b4d6f7525115c6341b3cc2803dcbf))

### Features

- **@types:** className d.ts ([329e5b4](https://github.com/nervjs/taro-ui/commit/329e5b4fafa24bf5aa159b9e3fb41c2de1440a83))
- **1.2.0:** button 等组件增加微信能力 ([c7cfa82](https://github.com/nervjs/taro-ui/commit/c7cfa82ac63aef27c86781d16c76a5a31a7a45a4))
- **taro-ui:** 增加 customStyle ([c38b0a5](https://github.com/nervjs/taro-ui/commit/c38b0a58efd22633ce03ee60ae568aad3f2117a5))
- **taro-ui:** 添加 className 支持 ([d4230fc](https://github.com/nervjs/taro-ui/commit/d4230fc4edd89c8916a78efbd822d35b3741073d))

# [1.2.0](https://github.com/nervjs/taro-ui/compare/v1.1.5...v1.2.0) (2018-09-15)

### Bug Fixes

- **component:** 修复基类带来的 setData 错误 ([35b746c](https://github.com/nervjs/taro-ui/commit/35b746c8de199d1f29302928c853fdcd4438d8ae))
- **doc:** 修复文档的错误 ([378f7f6](https://github.com/nervjs/taro-ui/commit/378f7f6e2dc17361d3b6519ad09c7197632d613a))
- **drawer:** 修改初始状态 ([754317f](https://github.com/nervjs/taro-ui/commit/754317fe587573ff28c1becab39142d772de6b9a))
- **flex:** 修复一些 flex 样式 ([454986b](https://github.com/nervjs/taro-ui/commit/454986bf80afeead3e246f7ceb4c8a346f3d8a8a))
- **form:** 对齐属性 ([e632bfa](https://github.com/nervjs/taro-ui/commit/e632bfaa72c7084db54233fb6c00615534976df7))
- **input:** page 报错 ([7bbd02b](https://github.com/nervjs/taro-ui/commit/7bbd02b55265d06e7150b84c3d3ee864e04477b4))
- **input:** types ([c20d44f](https://github.com/nervjs/taro-ui/commit/c20d44f3e42391530785394395dca08ebd7cc6b3))
- **input:** 删除无用测试 ([6c0e796](https://github.com/nervjs/taro-ui/commit/6c0e796a7d3f5f3f85de9a40fe5219c706f8f3d3))
- **input:** 对齐属性 ([21fa4da](https://github.com/nervjs/taro-ui/commit/21fa4dabc590e189cab68f060b2a3536f76cd6fd))
- **input:** 重新生成镜像 ([b077e3e](https://github.com/nervjs/taro-ui/commit/b077e3ec35e03ef400551c6e73bfa07568a2d477))
- **page:** 修复展示页的问题 ([7f23458](https://github.com/nervjs/taro-ui/commit/7f2345837b2f8a4898e0066ce1b274f5f7740941))
- **pagination:** 修改分页组件 ([a89a713](https://github.com/nervjs/taro-ui/commit/a89a713d06193ca21fd0fdc03ceec96e757a0818))
- **tabs-pane:** 添加默认 font-size ([759d924](https://github.com/nervjs/taro-ui/commit/759d924ac87633b154643ca966b5865d92b24532))
- **type:** 增加 customStyle ([65ed9b7](https://github.com/nervjs/taro-ui/commit/65ed9b7bc812933c6bff7eaebd95dd4d64dd2c23))
- 修改图标展示页 ([eca28d6](https://github.com/nervjs/taro-ui/commit/eca28d601ba2ba743c1886648e93295bfb514530))

### Features

- 增加 className 和 customStyle ([a0a7e3e](https://github.com/nervjs/taro-ui/commit/a0a7e3ef8925880d24350b8b7289b731cb4fa79d))
- 增加 placeholder 和 placeholderClass ([dbbf747](https://github.com/nervjs/taro-ui/commit/dbbf747bc94d1e9852e5f109999e4cb389020597))
- **component:** 修复 className 的问题 ([322b761](https://github.com/nervjs/taro-ui/commit/322b76105c060d2b71228c01dcfedd6f541cdfee))
- **grid:** 增加 noBorder 的属性 ([3a7e8b9](https://github.com/nervjs/taro-ui/commit/3a7e8b93251f0890183e0aa0700340813009b7e2))
- **icon:** resolved [#26](https://github.com/nervjs/taro-ui/issues/26) 自定义 icon ([ed73c91](https://github.com/nervjs/taro-ui/commit/ed73c918307e869f7e3552b4d7e376273becfceb))
- **icon:** 增加 className 和 customStyle ([2c09511](https://github.com/nervjs/taro-ui/commit/2c09511d863a398c687db63fe366351a00daa1cc))
- **input:** 增加 placeholderStyle 和 placeholderClass ([14caf3c](https://github.com/nervjs/taro-ui/commit/14caf3c720450ac42d5b37df057975756bd66d7c))
- [#37](https://github.com/nervjs/taro-ui/issues/37) tabs 支持自动滑动 ([1e1753f](https://github.com/nervjs/taro-ui/commit/1e1753f84eda67b46e21b1b9375df45b823627d0))
- 增加 classNames 工具包 ([a9d52d3](https://github.com/nervjs/taro-ui/commit/a9d52d3323d8e02a961e1a0277bdb57ad84796b3))
- 增加合并 style 公共函数 ([10bee2d](https://github.com/nervjs/taro-ui/commit/10bee2d9c8eb60c31a87e126ab6bac794aefbec5))
- **input:** 增加 className, customStyle ([6d455c7](https://github.com/nervjs/taro-ui/commit/6d455c7a21c52bc8066e326581b01868ce1a15b3))
- **tabbar:** resolved [#36](https://github.com/nervjs/taro-ui/issues/36) tabbar 支持自定义 iconfont 图标 ([ff86663](https://github.com/nervjs/taro-ui/commit/ff86663c216d1840a37968208a5ed8967277d006))
- 增加 style props ([ac36240](https://github.com/nervjs/taro-ui/commit/ac36240baf74f4806f7dd817a770300b7049ceea))
- 对齐 textarea 属性 ([50a1102](https://github.com/nervjs/taro-ui/commit/50a1102437e79760f68f921b4cb0d2b2d24f7e77))

### Reverts

- Revert "Revert "feat(component): 增加 className 的 props"" ([7eec341](https://github.com/nervjs/taro-ui/commit/7eec341eba1f2dd8208abc41f999782853c3fc68))

## [1.1.5](https://github.com/nervjs/taro-ui/compare/v1.1.3...v1.1.5) (2018-09-05)

## [1.1.3](https://github.com/nervjs/taro-ui/compare/v1.1.1...v1.1.3) (2018-09-05)

### Bug Fixes

- **pagination:** 修复分页组件 ([8f9ac2b](https://github.com/nervjs/taro-ui/commit/8f9ac2b109bec0aa0d9ce9c7baa5feff60b16143))
- types ([a017ad0](https://github.com/nervjs/taro-ui/commit/a017ad0faab9d56832ca19d86439b0d7dd27c541))
- types ([26ef8e0](https://github.com/nervjs/taro-ui/commit/26ef8e01ed2f2e457c3e326c8f5059638d98b6e7))
- **docs:** 增加 card 通栏字段 ([2059c19](https://github.com/nervjs/taro-ui/commit/2059c19f1919dfffc62f39e696b536d4fb14ad1d))
- **radio:** 完善非必须 props ([6d0d432](https://github.com/nervjs/taro-ui/commit/6d0d432aaca449d361a576852446d3c036346fd9))
- **tag:** 修复 tag 传参 ([1912a8b](https://github.com/nervjs/taro-ui/commit/1912a8b63cf62dd3a8c597dca1335674f98e9cc0))
- **types:** AtCardProps ([6e418ef](https://github.com/nervjs/taro-ui/commit/6e418ef5adb0da4337aaacfacd0d7388d4122c8a))
- **types:** AtInputNumberProps ([cc8a9bb](https://github.com/nervjs/taro-ui/commit/cc8a9bb1c02110d6d0a9eb70f6f77eb29ba84517))
- **types:** AtInputProps ([41970a6](https://github.com/nervjs/taro-ui/commit/41970a6f86048a6736d95058ef534d5a525a98ec))
- **types:** AtNavBarProps ([f331d9a](https://github.com/nervjs/taro-ui/commit/f331d9ae7a4c3dac61d9514d62908b7b15212ede))
- **types:** AtRateProps ([f01ee00](https://github.com/nervjs/taro-ui/commit/f01ee00a5481ce16e2cbef38fec5666a6e8b2617))
- **types:** AtSegmentedControlProps ([159cb22](https://github.com/nervjs/taro-ui/commit/159cb22df98c1ed662983b7e60b1e1ce21aa0ade))
- **types:** AtSwitchProps ([80efa61](https://github.com/nervjs/taro-ui/commit/80efa61effd186fde7eeb0bdef2da25117f7b741))
- **types:** AtTabBarProps ([8a75691](https://github.com/nervjs/taro-ui/commit/8a75691cb6ad3295e9c6228404542f6bb5b54d3f))
- **types:** AtTabsProps ([454a863](https://github.com/nervjs/taro-ui/commit/454a863e4a151104c06c016c0a9cb6a87c56a482))
- **types:** AtTextareaProps ([a1f70b8](https://github.com/nervjs/taro-ui/commit/a1f70b8dba52cbbdf5e93aee52682b2e5dda510b))
- **types:** content is string array ([58f51e9](https://github.com/nervjs/taro-ui/commit/58f51e94ab13f4e4b40a2ed01b5fee646ff59d48))
- **types:** segmentedControl ([28c28fa](https://github.com/nervjs/taro-ui/commit/28c28fa58e677590dd1edc13b6d6e4d76a39c059))

### Features

- **test:** 完善 list 的测试案例 ([e84a182](https://github.com/nervjs/taro-ui/commit/e84a182dce41dbe572cc38d2056054eb43b8626d))

## [1.1.1](https://github.com/nervjs/taro-ui/compare/v1.1.0...v1.1.1) (2018-09-03)

### Bug Fixes

- **list:** 修复 列表中缺少 switch 的值 ([1feb327](https://github.com/nervjs/taro-ui/commit/1feb3273fc2f6a572d793f9e5a5ba36310f83630))
- AtTimeLine -> AtTimeline ([65a07a5](https://github.com/nervjs/taro-ui/commit/65a07a5f7330a33b71cfa32292407fdb7324a4aa))
- **all:** 修复名字拼错 ([f4025ed](https://github.com/nervjs/taro-ui/commit/f4025ed5bd81dd0833350c166146719fde5c0f45))
- **demo:** 修复展示页面 flex 没有偏移的问题 ([3791d95](https://github.com/nervjs/taro-ui/commit/3791d9576a0804b83af0ff33a2d6e1023414354b))
- **tabbar:** 修复文档错误 ([76f7657](https://github.com/nervjs/taro-ui/commit/76f7657bca813fa2aeb62745fa65b819f204eeda))
- **taro-ui:** 完善 d.ts，修改若干 bug ([e4832b8](https://github.com/nervjs/taro-ui/commit/e4832b88c34eeae542b8903a2387c5bfbd315dc7))
- [#32](https://github.com/nervjs/taro-ui/issues/32) tab 高度问题 ([7f62879](https://github.com/nervjs/taro-ui/commit/7f628792fc3d6b6238dd0a6e7230a72f6e1f0d67))
- remove `Math.abs` ([a2d6717](https://github.com/nervjs/taro-ui/commit/a2d6717b812a83c2888e4b049fb45934590edf4a))

# [1.1.0](https://github.com/nervjs/taro-ui/compare/v1.0.1...v1.1.0) (2018-08-30)

### Bug Fixes

- 适配 taro beta.21 版本 ([53972b7](https://github.com/nervjs/taro-ui/commit/53972b73b13bccd67bf51e624b001ba1d668b39b))
- **build:** 删除 ActionSheet 的测试案例 + 新增 types + 新增 base component 的引用 ([d441b69](https://github.com/nervjs/taro-ui/commit/d441b698e2e6bf8248ebc6acc29d498eca6739fe))
- **component:** 修复 props 和 state 的 key 一致问题 ([ec822bc](https://github.com/nervjs/taro-ui/commit/ec822bcf4d7d9eea91d57da39a99823c2ffecfb7))
- **componnet:** 修复 grid 点击触发的数据 ([90d4aa4](https://github.com/nervjs/taro-ui/commit/90d4aa427b71adc96932ec170088c2b18b6f8a0d))
- 增大图标 ([9a53c70](https://github.com/nervjs/taro-ui/commit/9a53c706610d875c449fa1be17e3ec985afdbf56))
- **component:** 修复 弹出框底部可移动+ 判断环境执行 sysInfo 接口 ([198d88e](https://github.com/nervjs/taro-ui/commit/198d88e2b6d103adaaa0047a11c9b0f130995d10))

### Features

- 组件改为继承自 AtComponent 基类 ([87de708](https://github.com/nervjs/taro-ui/commit/87de708bc2441b3ac1a9f529d52f9317371ec0ac))
- **componnet:** 新增基类 ([7092b1f](https://github.com/nervjs/taro-ui/commit/7092b1ff1fd364c1d9fcd0647831526f834e80ca))

## [1.0.1](https://github.com/nervjs/taro-ui/compare/v1.0.0...v1.0.1) (2018-08-28)

# [1.0.0](https://github.com/nervjs/taro-ui/compare/v1.0.0-beta.4...v1.0.0) (2018-08-27)

### Bug Fixes

- 修复样式冲突 ([a52418e](https://github.com/nervjs/taro-ui/commit/a52418e0215b952d3a5543a58e210f35df8ffcec))
- **actionsheet:** 修复 actionsheet 点击态 ([4cca3ef](https://github.com/nervjs/taro-ui/commit/4cca3ef7600936d16a195611db7b068f9654256b))
- **components:** 修复组件中 this 丢失的问题 完善组件的 defaultProps 和 d.ts 的逻辑 ([f3eccf5](https://github.com/nervjs/taro-ui/commit/f3eccf5ed2f31be10e633de7416027d885787a69))

### Features

- 组件适配 iPhone X ([f7bbcfc](https://github.com/nervjs/taro-ui/commit/f7bbcfcb49e203e547fa3c525eb4616a394c3d28))
- **docs:** 新增无边框的 list 文档 ([2a5799d](https://github.com/nervjs/taro-ui/commit/2a5799d9647d8d3738f16390ea176b5a90cd4e65))

# [1.0.0-beta.4](https://github.com/nervjs/taro-ui/compare/v1.0.0-beta.3...v1.0.0-beta.4) (2018-08-27)

### Bug Fixes

- 修复 ActivityIndicator 打包的问题 ([5ff27af](https://github.com/nervjs/taro-ui/commit/5ff27af0ecbf08639bd76cf1a54a1d35afff860c))
- **docs:** 修复文档标点符号问题 ([22ec476](https://github.com/nervjs/taro-ui/commit/22ec476659b01579d6813b4caab1a2fcf170cd8b))
- **docs:** 修复文档标点符号问题 ([49c8189](https://github.com/nervjs/taro-ui/commit/49c8189ba8822b322d058a393522e79438201f5e))
- **view:** badge 层级 ([301fcd5](https://github.com/nervjs/taro-ui/commit/301fcd525223adf1d8e1f7e1c61061982dbf1453))

### Features

- **activity-indicator:** 更换 Loading ([b216380](https://github.com/nervjs/taro-ui/commit/b216380b34f3f63e2267abae36c1e153f4d2441e))
- **types:** 完善 index 入口文件 ([a036aee](https://github.com/nervjs/taro-ui/commit/a036aeecccf1894eaa19b75c368d4177e704f4cf))
- **types:** 完成 types 的功能 ([b14eb43](https://github.com/nervjs/taro-ui/commit/b14eb431e80646c080188e1adb3a617c14123ff4))
- **types:** 新增 type(d.ts) 文件 ([c70605c](https://github.com/nervjs/taro-ui/commit/c70605c084837c70f1ac6caf6a074f17ac6f105d))

# [1.0.0-beta.3](https://github.com/nervjs/taro-ui/compare/v1.0.0-beta.2...v1.0.0-beta.3) (2018-08-24)

### Bug Fixes

- **button:** small 状态的 loading 大小 ([d85d93d](https://github.com/nervjs/taro-ui/commit/d85d93decb9b965b03c2c2549327644afe08ec3a))
- **button:** 修复 loading ([c934714](https://github.com/nervjs/taro-ui/commit/c934714de06557beba6945dcd95f4f605ac0270b))
- **toast:** 修复 toast 数据没更新问题 ([a1006a6](https://github.com/nervjs/taro-ui/commit/a1006a6dd1b846dea4cd767f7b370062477a156a))

### Features

- **docs:** 改变 flex 的文档 ([2985d7b](https://github.com/nervjs/taro-ui/commit/2985d7bbe9f5d76f076a99f1d919179c536e6cbb))
- **flex:** 缩短 Flex 样式的名称 ([7eacd91](https://github.com/nervjs/taro-ui/commit/7eacd917fa8ea4afe7ec863bd35669f474afec32))
- 发布 v1.0.0-beta.2 ([956ede1](https://github.com/nervjs/taro-ui/commit/956ede1ba1db01cab00bc166769096654eda3ffc))

# [1.0.0-beta.2](https://github.com/nervjs/taro-ui/compare/v1.0.0-beta.1...v1.0.0-beta.2) (2018-08-23)

### Bug Fixes

- 点击态问题 ([858b642](https://github.com/nervjs/taro-ui/commit/858b6429df92d59431e7d0185e8f90bff72f4896))
- **nav-bar:** 去除点击间隙 ([2f234c0](https://github.com/nervjs/taro-ui/commit/2f234c0a790d1f5bea64cc5f4512bfcd4f9fef3e))
- border 更改 ([5c5b6e9](https://github.com/nervjs/taro-ui/commit/5c5b6e9b70c95d633256b6ff4fbdd793eda96630))
- 修复 h5 细节 ([471e0ad](https://github.com/nervjs/taro-ui/commit/471e0ad93fdef723f4f3ed8257f65f222680d2b6))
- 修复 h5 问题 ([1858b7a](https://github.com/nervjs/taro-ui/commit/1858b7a64b21f0625d4f7645b6c128f8fd20b16a))
- 修复 h5 细节 ([c514972](https://github.com/nervjs/taro-ui/commit/c514972f595389a14eba61e32aad3ba48e97774f))
- 修复 Toast loading 问题 + list 边框没对齐问题 ([1b296c2](https://github.com/nervjs/taro-ui/commit/1b296c2b9cef02f1405f3690bd6c1cc311fde796))
- 修复左栏点击有空隙 ([38621b2](https://github.com/nervjs/taro-ui/commit/38621b25fef66cef08f966f7054d41eb107d0376))
- 修复细节 ([0f80f55](https://github.com/nervjs/taro-ui/commit/0f80f55bc198e9b69dfec285ba0f9e6c673f582d))
- 出现 1px 空隙 ([c2cf407](https://github.com/nervjs/taro-ui/commit/c2cf407045fa7e8aaa732ccfd2903d7603f2c46a))
- 手机预览框被遮挡 ([49e808e](https://github.com/nervjs/taro-ui/commit/49e808ebee06e6905be93389199fae350da5c5b4))
- 选中圆圈在 h5 不圆 ([e5d99c6](https://github.com/nervjs/taro-ui/commit/e5d99c60ed85343708e1a4e97570639e51506ffc))
- **actionsheet:** 修复 ActionSheet 的更新问题 ([4ad034a](https://github.com/nervjs/taro-ui/commit/4ad034a69c5fe9b62c166cb2e003b6d6c6815045))
- **button:** 按钮样式 ([5680eef](https://github.com/nervjs/taro-ui/commit/5680eefa3c05fe849aac8b959c08ceb1980768eb))
- **component:** 修复 action 和 layout 的一些问题 ([3370937](https://github.com/nervjs/taro-ui/commit/3370937ef394c047044c2677c1ef96ac03ac98b2))
- **component:** 修复 Modal FlotLayout 的体验问题 ([fcfc04d](https://github.com/nervjs/taro-ui/commit/fcfc04d6ad5489015ade7521258817d2acc25bcc))
- **component:** 修复组件体验问题 ([c8ad754](https://github.com/nervjs/taro-ui/commit/c8ad754e99a586de7fb2e3dd58faaf913d9bf39e))
- **components:** 检查 PropType 没有添加的组件 修复体验问题 ([85a4cbb](https://github.com/nervjs/taro-ui/commit/85a4cbb5f6d0ec8a80cf2d81bf401e2c30b7cb5f))
- **h5:** 修复 h5 的体验问题 ([26b9bd2](https://github.com/nervjs/taro-ui/commit/26b9bd21a61c29f0139d8833c4935ea63fbccfb0))
- **input:** 修复 h5 icon 显示时高度变化 ([8b8eb2d](https://github.com/nervjs/taro-ui/commit/8b8eb2d994afbb77875783fa8d06f386379a1a6a))
- **input:** 清除按钮点击事件 ([e976ca2](https://github.com/nervjs/taro-ui/commit/e976ca20ed27e8600b9c8103ce1fa4f125956480))
- **input:** 调整间距 ([af9b537](https://github.com/nervjs/taro-ui/commit/af9b537db182b669ef4bc2afc5edfc6b458ca38f))
- **input-number:** 禁用时点击态不显示 ([13d120c](https://github.com/nervjs/taro-ui/commit/13d120c5177a5e229cd79743f85cf4e941abff9f))
- **nav-bar:** 文字溢出处理 ([991c1c8](https://github.com/nervjs/taro-ui/commit/991c1c88cdec748141d274ef2c1828c996e1c6c2))
- **navbar:** 更换 icon 顺序 ([993d88d](https://github.com/nervjs/taro-ui/commit/993d88d235e0d18fedee178caf47469406285765))
- **navigation:** timeline 样式 ([d34713b](https://github.com/nervjs/taro-ui/commit/d34713bd1e55313a90a04176cc8157904fe8c38f))
- **navigation:** timeline 样式 ([c21c48f](https://github.com/nervjs/taro-ui/commit/c21c48fba4f88b700005ad23134cc23f443b6234))
- **navigation:** 修复 timeline ([68bb790](https://github.com/nervjs/taro-ui/commit/68bb7909f1e09d54d3435d6c37fc2fe3b7007498))
- **segmented-control:** h5 预览细节调整 ([92d974d](https://github.com/nervjs/taro-ui/commit/92d974de1b6936c927518d38a8f3018cc9a2b18c))
- **segmented-control:** 修复边框问题 ([e1b1a16](https://github.com/nervjs/taro-ui/commit/e1b1a16ef39678c4b583d43012a4d13c6d794917))
- **switch:** h5 switch 不靠右 ([3d461af](https://github.com/nervjs/taro-ui/commit/3d461af123ee33621c2f7a801ccaaa7ba58e8fc8))
- **switch:** 变量替换 ([a878046](https://github.com/nervjs/taro-ui/commit/a87804699d3a38402e8ec99c54ec370096e14f6d))
- **tabbar:** 修复体验问题 ([e6888a2](https://github.com/nervjs/taro-ui/commit/e6888a27a0fb58a4c67fc6fa33e37c8789a8409e))
- **tabs:** 隐藏滚动条 ([35db71d](https://github.com/nervjs/taro-ui/commit/35db71d783512980cc5b777162a98cc921e44e99))
- **taro-ui:** 修复问题 ([53555f9](https://github.com/nervjs/taro-ui/commit/53555f901636d400221572c08b9ab07814e85385))
- **view:** 修复 badge 传参为空字符的情况 ([a6fc736](https://github.com/nervjs/taro-ui/commit/a6fc73652bbd9472d75194db9f92e28b42d16ca2))
- **view:** 修复 noticebar ([f0739a7](https://github.com/nervjs/taro-ui/commit/f0739a79a64b1fd9b241ea1e6f37b6684c73abf7))
- zindex 规范化 ([739f72f](https://github.com/nervjs/taro-ui/commit/739f72f20f58cc9c3800949eab2f119024643bfb))
- 体验细节修改 ([67cf35d](https://github.com/nervjs/taro-ui/commit/67cf35dbb61469fc600530b7295132a37a4a73c7))
- 修复 tabs 滚动时高度变化 ([4230a73](https://github.com/nervjs/taro-ui/commit/4230a737d36dfee4960cb9f79bbc7cb23454fe93))
- 修复细节问题 ([5bbd240](https://github.com/nervjs/taro-ui/commit/5bbd240d0a59c1f1f2f1a12c5d064c3d4d83d047))
- 替换变量 ([bb0adfb](https://github.com/nervjs/taro-ui/commit/bb0adfb3bf359002e75b3b5095f1a82cc724214d))
- **action:** eslint action components again ([85c2df2](https://github.com/nervjs/taro-ui/commit/85c2df220ecd1323f1dc6477b2fce64cd3c1ade3))
- **action:** eslint actions components ([b9e3087](https://github.com/nervjs/taro-ui/commit/b9e30871a2a6982d0b114323a4f91df8aa51cfc8))
- **action-input:** 适配 h5 ([74d7389](https://github.com/nervjs/taro-ui/commit/74d738967031efc9cc7c022f55c890fa29ea9034))
- **basic:** 修复样式 ([f402122](https://github.com/nervjs/taro-ui/commit/f40212246fd5ceecc76e2cec533a6ac2039e78b6))
- **basic:** 修复问题 ([f700b5d](https://github.com/nervjs/taro-ui/commit/f700b5dc39a149c2b46a24e5ffa793f65f8127f9))
- **basic&view:** lint 修复 ([8de1e5c](https://github.com/nervjs/taro-ui/commit/8de1e5cc48b8aca506610b434a5ae7927eb02645))
- **checkbox:** 修复 icon 在 wxapp 不居中 ([ce3cbdb](https://github.com/nervjs/taro-ui/commit/ce3cbdb073cedbad52e90d5d9076b7d3414a4960))
- **checkbox:** 更换图标 ([d060638](https://github.com/nervjs/taro-ui/commit/d0606383df4911abe3258fa402492534bc4c82b7))
- **form:** 修复 style 类型报错 ([f55e170](https://github.com/nervjs/taro-ui/commit/f55e170ba17c0743a70b0ab2befe8f6180328fbf))
- **form:** 增加 border ([b31b236](https://github.com/nervjs/taro-ui/commit/b31b2366309b5c416282e0ed388fb267dd188232))
- **input:** 修复系列细节问题 ([e50da1b](https://github.com/nervjs/taro-ui/commit/e50da1bf1c47a6c0d2a0a4cfe72cf7a42731c96c))
- **input:** 修改示例图片路径 ([16241fe](https://github.com/nervjs/taro-ui/commit/16241fe1cd6aa1a6cf080c9715da7b9b1619adf3))
- **input:** 垂直居中 ([267e332](https://github.com/nervjs/taro-ui/commit/267e332a536819e005fd81a31fc67062af5b674f))
- **input:** 更换图标 ([c53594e](https://github.com/nervjs/taro-ui/commit/c53594e35d00fb54d7e2e982353d0eb52c97363f))
- **input-number:** 修改 input-number 规格 ([2f03a8f](https://github.com/nervjs/taro-ui/commit/2f03a8f6df44fb4444feb6ef18527d6db37c79d2))
- **input-number:** 增加 disabled ([19cc951](https://github.com/nervjs/taro-ui/commit/19cc9513e322e3be73b12895908354c97051a687))
- **input-number:** 更换图标 ([a5b936f](https://github.com/nervjs/taro-ui/commit/a5b936fb0e796b6680b21bc6c24a82f4a62388e2))
- **lint:** 关闭 custom-component-children 校验 ([4918e62](https://github.com/nervjs/taro-ui/commit/4918e62f701be3b98cdaf01a34618a98e0501a4c))
- **nav-bar:** 修改默认函数 ([073fbff](https://github.com/nervjs/taro-ui/commit/073fbff5f59139da87da09e9c20c58c0126a74d4))
- **nav-bar:** 调整间距 ([d0641bb](https://github.com/nervjs/taro-ui/commit/d0641bbf1764a3c14ea42aef22a3e49cc945deeb))
- **radio:** 更换图标 ([eee1ce1](https://github.com/nervjs/taro-ui/commit/eee1ce14d0ea7d0c69896c09882feca79728ee00))
- **rate:** 修改展示页 ([4820c6b](https://github.com/nervjs/taro-ui/commit/4820c6b917f581923bc7d22b1d4b5aaaabeedfa3))
- **rate:** 更换图标 ([fe57ab9](https://github.com/nervjs/taro-ui/commit/fe57ab979a0705c47c3e6f302420d2b44c82e189))
- **segmented-control:** 细节问题 ([d45a321](https://github.com/nervjs/taro-ui/commit/d45a321e2f2899c6c3501b420dcadc82c8577b84))
- **segmented-control:** 解决溢出 ([d346c41](https://github.com/nervjs/taro-ui/commit/d346c41a35b67c7a4903acf8588f705590d7296c))
- **tab-bar:** 修复溢出问题 ([7eb9619](https://github.com/nervjs/taro-ui/commit/7eb961955f57e85aa09df8d99ef74424d7830eb5))
- **tabs:** 内容溢出处理 ([10227fc](https://github.com/nervjs/taro-ui/commit/10227fcf9c7b6e26a73f2a784953c1b9de829779))
- **tabs:** 取消禁止默认事件 ([e76314f](https://github.com/nervjs/taro-ui/commit/e76314fc545a108c278b4a8520089e66aea46182))
- **taro-ui:** 修复问题 ([e56607e](https://github.com/nervjs/taro-ui/commit/e56607e5a12ea8be6aa6981664177c15f3ba8f22))
- **taro-ui:** 修复问题 ([dedb8c7](https://github.com/nervjs/taro-ui/commit/dedb8c7634166c30b65ce21aeab54d6e3a984258))
- **taro-ui:** 修复问题 ([df1ada1](https://github.com/nervjs/taro-ui/commit/df1ada17428610fcf549579c8bf91a8b858628e4))
- icon 合并冲突，将 type 改为 value ([a757215](https://github.com/nervjs/taro-ui/commit/a7572155e1406ae31f8a216074fe42f773af8a55))
- mixin ([f6282dc](https://github.com/nervjs/taro-ui/commit/f6282dcb3ec8052d82eed787b12176e4ee588f04))
- 修改展示页面 ([868dd6b](https://github.com/nervjs/taro-ui/commit/868dd6b754441a9ea81e53cbc92663fc26cf36aa))
- **textarea:** 调整高度 ([97cb452](https://github.com/nervjs/taro-ui/commit/97cb45217147cd416842f3fbf2a29372c4138ea4))
- **view:** noticebar 完善 ([f6806b9](https://github.com/nervjs/taro-ui/commit/f6806b9a3145a43c4f0d5a564710275206340126))
- 修复组件样式失效 ([d465722](https://github.com/nervjs/taro-ui/commit/d4657221f778fd372bc5c24f06da95d39042bba3))
- **wxapp:** 处理兼容问题 ([45b11cb](https://github.com/nervjs/taro-ui/commit/45b11cb2ab4e58c7828deb7833a6d70c91c8108e))
- 修复 scss 变量相乘的问题 ([97d117b](https://github.com/nervjs/taro-ui/commit/97d117bfcd6009c36208f13677e7024ccde35852))
- 修复首页展示错误 ([48f32cd](https://github.com/nervjs/taro-ui/commit/48f32cdc50f7e9f31a57a19aff91b0b782befa24))
- 删除 icon page 路径 ([53dd793](https://github.com/nervjs/taro-ui/commit/53dd7930d2fe3be1b1ecdbaa44e17fbbcf544284))
- 增加 default props ([667b9c3](https://github.com/nervjs/taro-ui/commit/667b9c37fcc507d6280e09b70d73e41003c666e9))
- 居中 icon ([64213b9](https://github.com/nervjs/taro-ui/commit/64213b9c81ac9ced2e585c32fffe2c117d7156eb))
- 样式被注释了 ([afc6db8](https://github.com/nervjs/taro-ui/commit/afc6db81aadf5330fe716c47a238e974ddff0b5d))
- 注释使用 children 的代码 ([143cbd0](https://github.com/nervjs/taro-ui/commit/143cbd0b179e4b36ddcb75b3b279da55d63c53e9))
- 添加 Modal ([1380e2a](https://github.com/nervjs/taro-ui/commit/1380e2aad3f445eba2d1fc1d137f8ea6526c9f97))

### Features

- **Button:** 优化图标旋转的问题，更新展示页 ([0b93599](https://github.com/nervjs/taro-ui/commit/0b9359985eb7a532cc89085595e6454742349292))
- **docs:** 修复一部分的文档问题 ([5971977](https://github.com/nervjs/taro-ui/commit/59719775b2e0590e800b170bbc75800c0c17da94))
- **docs:** 添加组件描述 ([1105b2f](https://github.com/nervjs/taro-ui/commit/1105b2f98f0b8af419208a658ba86ce0ac27806d))
- **docs:** 调整 grid 和 float-layout 的文档 ([8cef6a8](https://github.com/nervjs/taro-ui/commit/8cef6a8c1fe5708daecad7850f30e50f02bb1e1b))
- 修改动画时间 ([33dbd42](https://github.com/nervjs/taro-ui/commit/33dbd42c159e777a67cb0268216d71bef019b018))
- 增加过渡效果 ([fd82138](https://github.com/nervjs/taro-ui/commit/fd82138a9224bb9db12d70546e6a4e9c572d9597))
- 新增文档首页 ([fdeb3ba](https://github.com/nervjs/taro-ui/commit/fdeb3bad0f2c2e3764c067f032add33209f8039b))
- **AcitonSheet:** 优化 ActionSheet 的样式 ([ca42bce](https://github.com/nervjs/taro-ui/commit/ca42bce834cf22940fc0daf38db2a16abe6a811e))
- **action:** 初步完成 action 的优化 ([ee00565](https://github.com/nervjs/taro-ui/commit/ee00565ca1451882a85199075e3c722d25ab1329))
- **action:** 初步完成 action 组件的文档 ([44c684a](https://github.com/nervjs/taro-ui/commit/44c684ad327dd1952bccb00b8c0b71d933fc0cf4))
- **action:** 完善 action 文档 ([73b4abe](https://github.com/nervjs/taro-ui/commit/73b4abe95f516702c91487b0fba1fdf52561cef2))
- **Avatar:** 优化 Avatar 的样式 ([0700c84](https://github.com/nervjs/taro-ui/commit/0700c84c26346313d2dc0ca6cc99a581878dd1ac))
- **Badge:** 优化 Badge 组件样式 ([6305500](https://github.com/nervjs/taro-ui/commit/6305500bea416a71d60e3b14e5656238895d83dd))
- **Button:** 优化 Button 组件，完善 DEMO 页面 ([21a04b0](https://github.com/nervjs/taro-ui/commit/21a04b0f46275453a320d31d27551c541652f3a2))
- **Button:** 按钮边框改为 1px ([8d6a19e](https://github.com/nervjs/taro-ui/commit/8d6a19e3c5b96bb3093bb77395ab4503e9ca0d49))
- **checkbox:** 增加 disabled 状态 ([2206989](https://github.com/nervjs/taro-ui/commit/22069898ef97c3f7ced7744b901ad42b3a65ab08))
- **Checkbox:** 修改 Checkbox 样式 ([e4496ae](https://github.com/nervjs/taro-ui/commit/e4496aeed69ef1199d898cfd7f85f10b2ff6213f))
- **docs:** basic 组件文档 ([db3b577](https://github.com/nervjs/taro-ui/commit/db3b5773ceb4be691807e8b528e264cbac1e08ed))
- **docs:** 增加 tag 文档 ([881bc76](https://github.com/nervjs/taro-ui/commit/881bc766c718238044eb5a9220bcfe7ab4ab7d6c))
- **docs:** 增加文档 ([65cd80c](https://github.com/nervjs/taro-ui/commit/65cd80caf897b2b0f2d0823f279dc476188f5ab5))
- **Form:** 优化样式 ([b0ff170](https://github.com/nervjs/taro-ui/commit/b0ff1703f7e703406c0d7cf47f2b692de4829382))
- **Form:** 修改表单组件的样式 ([5acbef2](https://github.com/nervjs/taro-ui/commit/5acbef21fc22bc9509fcc048424ab8cec965ce44))
- **ICON:** 更换 Loading 图标 ([e218090](https://github.com/nervjs/taro-ui/commit/e218090c8c0907b0a82dd322ce91d639146f3335))
- **ICON:** 添加 alert 图标 ([34f5a1d](https://github.com/nervjs/taro-ui/commit/34f5a1d5f3eb2e5d1eb467387a4bfab5a2719030))
- **ICON:** 添加新图标 ([1342906](https://github.com/nervjs/taro-ui/commit/13429060bf7c485c8d66d549b206ed85ff09bd51))
- **Indicator:** 优化样式，新增图标 ([14d1990](https://github.com/nervjs/taro-ui/commit/14d1990879f2d2272c83fbef1954f1765470e93b))
- **input:** 增加 onConfirm 事件 ([27e443b](https://github.com/nervjs/taro-ui/commit/27e443b840362ad6cd22d36e63c7645fb3004422))
- **input:** 增加控制 input border props ([738b030](https://github.com/nervjs/taro-ui/commit/738b030598177343be0c9b672e6e5345d4aca513))
- **Input:** 调整 Input 样式 ([5e2b435](https://github.com/nervjs/taro-ui/commit/5e2b4358ce84de5dec7e0751e869f868567ca906))
- **layout:** 初步完成 layout 组件 bug ([c4ce79a](https://github.com/nervjs/taro-ui/commit/c4ce79a610a65596e2f7136a15ba54bf5c46a219))
- **layout:** 增加 layout 文档的示例 ([b45464c](https://github.com/nervjs/taro-ui/commit/b45464c17e32887a039bd836166438279a49abc5))
- **layout:** 完善 flex 示例+修复 actionsheet+修复 Card ([3cebff3](https://github.com/nervjs/taro-ui/commit/3cebff30283e218dc9d3d426b16775e8b30a0563))
- **layout:** 新增 falot-layout 动画效果 ([00cbf69](https://github.com/nervjs/taro-ui/commit/00cbf6933a161983a89963aaba696124150823e1))
- **Layout:** 调整布局组件的样式 ([6f6eae2](https://github.com/nervjs/taro-ui/commit/6f6eae2dfd603ed1e241a3ef804734ed1d24ef20))
- **mixins:** 完善 border-thin ([a349b70](https://github.com/nervjs/taro-ui/commit/a349b70758153783741d278ab597c986bef6ae70))
- **Modal:** 优化样式，完善 DEMO 页 ([c258eff](https://github.com/nervjs/taro-ui/commit/c258eff4318148b1869b343cf5e00106c2395169))
- **Navigation:** 调整组件样式 ([18a6e44](https://github.com/nervjs/taro-ui/commit/18a6e4435208c5671c9d8cb3a1222e5c70ff39e4))
- **NoticeBar:** 优化通告栏样式 ([d2d98a9](https://github.com/nervjs/taro-ui/commit/d2d98a921972b30effc23405008d05563b85508f))
- **Progress:** 优化样式，完善 DEMO ([3049115](https://github.com/nervjs/taro-ui/commit/3049115bb43ccdc725657b152a3162fb4b4528ce))
- **radio:** 增加 disabled 状态 ([4a242b0](https://github.com/nervjs/taro-ui/commit/4a242b041061cc22d764e860acb8b9e9489f3c00))
- **Radio:** 修改组件的样式 ([ac30df9](https://github.com/nervjs/taro-ui/commit/ac30df9ee7268aa2be67ae9ac6acb59297a13e87))
- **rate:** 支持显示半星 ([5fecea9](https://github.com/nervjs/taro-ui/commit/5fecea970d740bdf28eb0c8271ce58ea46be3f60))
- **switch:** 增加 border 开关 ([060b0b1](https://github.com/nervjs/taro-ui/commit/060b0b1e26d8ad5576d89db047f4197d3b5b35c2))
- **switch:** 添加 disabled 状态 ([54d55bd](https://github.com/nervjs/taro-ui/commit/54d55bd2e3c19ac9fa308a29ef341eaad15ccdfa))
- **toast:** 组件测试案例 ([0412ea4](https://github.com/nervjs/taro-ui/commit/0412ea44e3aa0f4c0112cbdc80031d69f4736a97))
- **Toast:** 优化样式 ([1dccf04](https://github.com/nervjs/taro-ui/commit/1dccf047ca5ed8cfda2db544a8439550e553116d))
- 为 input、textarea 增加 placeholder mixin ([6a55443](https://github.com/nervjs/taro-ui/commit/6a55443b9b4305dd0859f1b435faafe0c2ebf09c))
- 增加 jest 测试 ([2f523d0](https://github.com/nervjs/taro-ui/commit/2f523d00a297eee76f65f7e30757f0e3d696dc50))
- **tabs:** 增加动画 ([fa7a9c2](https://github.com/nervjs/taro-ui/commit/fa7a9c26c9c7ca48ee6e56e2974e0bf84ce7ee22))
- **tabs:** 增加动画，手势滑动 ([1c4fc7e](https://github.com/nervjs/taro-ui/commit/1c4fc7e7a851b2ef5ec8d1505a8ef41b60876c8e))
- **Tag:** 优化 Tag 样式 ([3f4ff4a](https://github.com/nervjs/taro-ui/commit/3f4ff4a089e866d058be2a3822d72af6557bd569))
- **Tag:** 边框改成 1px ([23d89e7](https://github.com/nervjs/taro-ui/commit/23d89e792d0c1b295eafe49935035d34d663ee3a))
- **textarea:** 增加字数显示开关 ([d5902e7](https://github.com/nervjs/taro-ui/commit/d5902e79b7f8c83cb9cf3c6a5bd9a7715d75edc1))
- **textarea:** 自定义高度、超过字符红字提示 ([31d86fe](https://github.com/nervjs/taro-ui/commit/31d86fe1553feda783697f13424a3f1bde890773))
- **Toast:** 优化样式，完善 Demo 页面 ([00608c6](https://github.com/nervjs/taro-ui/commit/00608c68e71b356e8e41696b1469a3924f4a48ee))
- **view:** noticebar 增加文字滚动功能 ([b2da15f](https://github.com/nervjs/taro-ui/commit/b2da15f88e5d5d52e0b060e768b3c01a42afc4c5))
- 升级 Taro 版本到 beta.6 ([8d2c0f5](https://github.com/nervjs/taro-ui/commit/8d2c0f51651d4343f6771091aff135bc6847d918))
- 增加 disabled，active mixin ([7230d02](https://github.com/nervjs/taro-ui/commit/7230d0259c9f0034972527fbac35730f583ed00d))
- **action:** 更改命名、完成一期任务 ([d91ce31](https://github.com/nervjs/taro-ui/commit/d91ce319d294ef267900fde78b3d071982c02cd3))
- **action:** 完成 Activity Indicator 组件 ([5609737](https://github.com/nervjs/taro-ui/commit/5609737889f4657188be85b1db9c9a6ae7cff979))
- **action-input:** 增加事件属性 ([f9004d8](https://github.com/nervjs/taro-ui/commit/f9004d8a77896fefc715e60eea3580faca52f93c))
- **atui:** 提交按钮和 icon ([1756135](https://github.com/nervjs/taro-ui/commit/17561355380f31837bd5b641604b09e3262e4206))
- **base:** 按钮样式 ([af0158d](https://github.com/nervjs/taro-ui/commit/af0158d828f810f31985d915d8d1a7bcdf723b89))
- **base:** 更新按钮 ([9a8da97](https://github.com/nervjs/taro-ui/commit/9a8da97d607ae9a1a62d4cbce1ab8941275bcb75))
- **checkbox:** 修改示例 ([632c148](https://github.com/nervjs/taro-ui/commit/632c148b5bdb88699ca5e07e4553560a678460d0))
- **componnets:** 优化组件 layout 和 action ([e9d8ac2](https://github.com/nervjs/taro-ui/commit/e9d8ac27926630b3f5575bce6be1fcbebd615c12))
- **doc:** 完善 Button 组件展示页 ([63f5de4](https://github.com/nervjs/taro-ui/commit/63f5de48f85de3276fd771a5c90ff7259de1bed3))
- **doc:** 完善 Noticebar 展示页 ([8a61a97](https://github.com/nervjs/taro-ui/commit/8a61a979a8978ead10af3ffc446da6cf7384f2cd))
- **doc:** 文档头部组件化 ([aab78e2](https://github.com/nervjs/taro-ui/commit/aab78e219f009769db6d0a95197ec3ed2f3936ae))
- **doc:** 添加 PC 文档框架 ([624e733](https://github.com/nervjs/taro-ui/commit/624e733b5b2397cc23b8948f853a50c26755dffa))
- **doc:** 添加字体展示页 ([2f73d2b](https://github.com/nervjs/taro-ui/commit/2f73d2badb8821ed16f133bb51a942fede06e95b))
- **doc:** 添加颜色展示页 ([32eb71b](https://github.com/nervjs/taro-ui/commit/32eb71be7326fc2c79c8d009b12dc5e7adc5279d))
- **doc:** 重构基础组件展示页 ([190bffa](https://github.com/nervjs/taro-ui/commit/190bffa1144a77d3f03517b7d63fa9cfe08ab377))
- **doc:** 重构操作反馈展示页 ([5696ec1](https://github.com/nervjs/taro-ui/commit/5696ec19ecdc7226fa2dc7125b7032c2ff1273a3))
- **doc:** 重构视图展示页 ([9cc2ca8](https://github.com/nervjs/taro-ui/commit/9cc2ca8c0abc85902fb455432e857da1e0900c7d))
- **doc:** 重构表单组件展示页 ([d9645d4](https://github.com/nervjs/taro-ui/commit/d9645d4de5c800e62c3016977a238a28655599d1))
- **docs:** 完善 PC 文档页面 ([9b17db8](https://github.com/nervjs/taro-ui/commit/9b17db8af1b2615e6c96ea4d5543dad4931f8c42))
- **grid:** add folder && file ([5a4d25f](https://github.com/nervjs/taro-ui/commit/5a4d25f4f6bb6c2751e61316738235e89ce0d6f0))
- **ICON:** 替换成自定义的图标库 ([7c1b388](https://github.com/nervjs/taro-ui/commit/7c1b388eed1c42e193312eb2d43df448058d3613))
- **input:** 增加 autofocus 属性 ([759a418](https://github.com/nervjs/taro-ui/commit/759a418bf446d3e67b635ca6d73206d86280f122))
- **input-number:** 增加 size 参数 ([c968116](https://github.com/nervjs/taro-ui/commit/c96811603ce2cf7423140831ed2d7003cfda5996))
- **input-number:** 自定义宽度 ([7a7ccf4](https://github.com/nervjs/taro-ui/commit/7a7ccf48d2ff8702c3615a69a7fdbb246d5b50bf))
- **layout:** list 增加 click 事件 ([0d80914](https://github.com/nervjs/taro-ui/commit/0d809146af09fd5c64e3b59dd97e77779dc70715))
- **layout:** 初步完成 layout 文档 ([f592688](https://github.com/nervjs/taro-ui/commit/f59268896d2c433694c16df5e00520629b229c3c))
- **layout:** 完善 flex 布局示例 ([28de062](https://github.com/nervjs/taro-ui/commit/28de0628f8637c2ac30be2d7ed2ffc5e0328d614))
- **layout:** 完成 Flex 组件 ([3c44f30](https://github.com/nervjs/taro-ui/commit/3c44f302fd542d93256f9b0011221222dfbd28e1))
- **layout:** 完成 float-layout 组件 ([78ae374](https://github.com/nervjs/taro-ui/commit/78ae3744f93d3205eb433e0992502cf6cbd0c422))
- **layout:** 完成 Grid 组件 ([f9b104c](https://github.com/nervjs/taro-ui/commit/f9b104c24635551dae93e66e656edf29daf6d0df))
- **layout:** 完成 list 组件 ([5b88597](https://github.com/nervjs/taro-ui/commit/5b88597b076f3ef7b1aa831341ef265ebcfbc1bc))
- **layout:** 完成卡片组件 ([d39deb5](https://github.com/nervjs/taro-ui/commit/d39deb559f8b4086f39893f78bd39eabe1d6a64c))
- **nav-bar:** 修改 nav-bar 示例 ([80ca035](https://github.com/nervjs/taro-ui/commit/80ca035f72e80b0dbfbd8098909b2d9faeddbc6f))
- **nav-bar:** 新增组件 ([c32f046](https://github.com/nervjs/taro-ui/commit/c32f046e0864fa916fa622eb3384dc42aecfc57e))
- **navigation:** drawer 组件开发 ([dbf256c](https://github.com/nervjs/taro-ui/commit/dbf256c9b2133dcf7fb8664116b2be8586cebb96))
- **navigation:** 修复 drawer 组件 ([2249e79](https://github.com/nervjs/taro-ui/commit/2249e79fedecfe52edae827f2957615c940c75c8))
- **navigation:** 分页组件 ([f1453bb](https://github.com/nervjs/taro-ui/commit/f1453bbf1baabeee4e50ce502493df0b158f32b1))
- **navigation:** 增加 timeline、drawer ([63a90dd](https://github.com/nervjs/taro-ui/commit/63a90ddb3bec918c3c071fb7dd3c3513bf6dbec5))
- **navigation:** 增加分页组件 ([20dc1b9](https://github.com/nervjs/taro-ui/commit/20dc1b93b77ff73bf4504096994c2a259aa38ea3))
- **segmented-control:** 新增组件 ([7ffbd71](https://github.com/nervjs/taro-ui/commit/7ffbd713c801fa94483217f475feb8fffc8af7c7))
- **switch:** 开放 color props ([c18d3d7](https://github.com/nervjs/taro-ui/commit/c18d3d7f19f32062b24c2bc7a93759fa4cbadde4))
- **tabs:** 修改示例页面 ([2bb73e2](https://github.com/nervjs/taro-ui/commit/2bb73e2267a3ac5a750d712e4a2c07cf977957b3))
- add progress ([45e41c7](https://github.com/nervjs/taro-ui/commit/45e41c7ebc664699a5fd7152c4ee24bcd4e220e1))
- 升级 Taro 至 beta5 ([6b5ae4d](https://github.com/nervjs/taro-ui/commit/6b5ae4d5a7b0666c1fb3bdf286f0d189b1dfc35a))
- **tab-bar:** 修改示例 ([a38da87](https://github.com/nervjs/taro-ui/commit/a38da8704d9996d60ea8f66a2bdf09c577572172))
- **tab-bar:** 新增 tab-bar ([df08626](https://github.com/nervjs/taro-ui/commit/df08626cf6ad5d6bfa7f17d0f603c421fea41946))
- **tab-bar:** 新增 tab-bar 组件 ([beeafd7](https://github.com/nervjs/taro-ui/commit/beeafd7be73a64e1509ce741c0fca3b70d5bda30))
- **tabs:** 新增 tab 标签页组件 ([d947ead](https://github.com/nervjs/taro-ui/commit/d947eadda980b9a9f979f9aaab14367ec5fbf19b))
- **textarea:** 增加 props ([be97b36](https://github.com/nervjs/taro-ui/commit/be97b364af90e2fcc9566b6772f6722500f6e1b0))
- **展示页:** 完善组件展示页 ([85fd7fe](https://github.com/nervjs/taro-ui/commit/85fd7fe0c0017ceff0939bae535a0bad5dab7ad8))
- **文档:** 重构文档首页和列表页 ([9a4ce09](https://github.com/nervjs/taro-ui/commit/9a4ce093201df283e8b47d938883c3c294507f70))
- article 样式 ([d6d4085](https://github.com/nervjs/taro-ui/commit/d6d4085af45d803bf870cc78c05478f5bb9d3580))
- 基础组件、视图组件 ([c6d13b0](https://github.com/nervjs/taro-ui/commit/c6d13b053823db376cb3ab7b041d19f4f0c2a6c2))
- 增加 form 表单 ([badbf2d](https://github.com/nervjs/taro-ui/commit/badbf2d30133e04d3e4056e0466b62ca40f78d64))
- 新增表单组件 ([c8b1fa3](https://github.com/nervjs/taro-ui/commit/c8b1fa33a9f493923c2a6eb794fc6f0f088ed766))
- 更改 mixins 引入路径&StyleLint ([485daad](https://github.com/nervjs/taro-ui/commit/485daad2a1f66135ed6804527f4444d390e70004))
- 添加默认主题的 SCSS 变量 ([d79ebdf](https://github.com/nervjs/taro-ui/commit/d79ebdfca4d743ce1580c48cd1a3204eed948754))
