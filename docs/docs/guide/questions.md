# 常见问题

---

本章节收集了网友常问问题，提问之前请先阅读该章节

## 出现 xx 问题怎么办？

在提问前，建议升级 `taro` 和 `taro-ui` 至最新版本，仍有问题请按模板提交 [Issue](https://github.com/NervJS/taro-ui/issues/new/choose)

## H5 模式下编译报错？

如果出现类似 `You may need an appropriate loader to handle this file type` 的问题，如下：

```bash
./node_modules/_taro-ui@1.5.4@taro-ui/dist/h5/components/pagination/index.js 101
:11
Module parse failed: Unexpected token (101:11)
You may need an appropriate loader to handle this file type.
|     };
|
>     return <View className={classNames(rootClassName, classObject, this.props.
className)} style={customStyle}>
|         <View className="at-pagination__operate">
|           <View className="at-pagination__btns">
```

请在 `config/index.js` 文件中添加如下配置项：

```js
h5: {
  esnextModules: ['taro-ui']
}
```

## 出现 `Can't resolve './style/index.scss'` 怎么办？

升级至 `taro` 匹配的 `taro-ui` 版本就可以解决
例如 taro 3.x

```json
  ...
  "dependencies": {
    "@tarojs/components": "3.2.2-beta.0",
    "@tarojs/react": "3.2.2-beta.0",
    "@tarojs/runtime": "3.2.2-beta.0",
    "@tarojs/taro": "3.2.2-beta.0",
  },
  ...
```

那么需要升级至

```
"taro-ui": "^3.0.0-alpha.3"
```

## 如何自定义样式？

请查看 [「自定义主题」](https://jd-opensource.github.io/taro-ui/#/docs/customizetheme) 章节

## 自定义样式为什么没有生效（H5 生效，微信小程序没生效）？

`taro-ui` 自定义样式覆盖小程序组件样式使用到了 `globalClass` 这个微信小程序特性，由于微信小程序的限制，自定义的样式需要在 `page` 页面内使用，不能基于第三方组件再进行一层封装，这样做样式会无效。并且确保小程序调试基础库在 `v2.2.3` 以上。

## 如何修改边框、下划线样式？

边框下划线有些组件是使用 `::after` 和 `::before` 伪元素，在微信开发者工具中审查不到，但是实际是存在的，建议用 H5 模式审查样式。
