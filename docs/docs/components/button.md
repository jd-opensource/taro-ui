# Button 按钮

---

按钮用于传递用户触摸时会触发的操作

## 使用指南

在 Taro 文件中引入组件


```js
import { AtButton } from 'taro-ui'
```
**组件依赖的样式文件（仅按需引用时需要）**


```scss
@import "~taro-ui/dist/style/components/button.scss";
@import "~taro-ui/dist/style/components/loading.scss";
```
## 一般用法


```html
<AtButton>按钮文案</AtButton>
<AtButton type='primary'>按钮文案</AtButton>
<AtButton type='secondary'>按钮文案</AtButton>
```
## 不同尺寸


```html
<AtButton type='primary' size='normal'>按钮文案</AtButton>
<AtButton type='primary' size='small'>按钮文案</AtButton>
```
## 带 loading icon


```html
<AtButton loading type='primary'>按钮文案</AtButton>
```
## Button 参数

| 微信 | H5 | 参数     | 说明                         | 类型    | 可选值                 | 默认值   |
|:-----|:---|:---------|:-----------------------------|:--------|:-----------------------|:---------|
| √    | √  | type     | 按钮的类型                   | String  | `primary`, `secondary` | -        |
| √    | √  | size     | 按钮的大小                   | String  | `normal`, `small`      | `normal` |
| √    | √  | circle   | 设置按钮圆角                 | Boolean | -                      | false    |
| √    | √  | full    | 是否通栏样式（即按钮宽度为屏幕宽度时的样式）   | Boolean | -                      | false    |
| √    | √  | loading  | 设置按钮的载入状态           | Boolean | -                      | false    |
| √    | √  | disabled[1] | 设置按钮为禁用态（不可点击） | Boolean | -                      | false    |
| √    | -  | formType[2] | 参考[微信button文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) | String | `submit`, `reset`                      | -    |
| √    | -  | openType | 参考[微信button文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) | String | `contact`, `share`, `getUserInfo`, `getPhoneNumber`, `launchApp`, `openSetting`, `feedback`, `getRealnameAuthInfo`                      | -    |
| √    | -  | lang | 参考[微信button文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) | String | -                      | en    |
| √    | -  | sessionFrom | 参考[微信button文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) | String | -                      | -    |
| √    | -  | sendMessageTitle | 参考[微信button文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) | String | -                      | -    |
| √    | -  | sendMessagePath | 参考[微信button文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) | String | -                      | -    |
| √    | -  | sendMessageImg | 参考[微信button文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) | String | -                      | -    |
| √    | -  | showMessageCard | 参考[微信button文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) | Boolean | -                      | false   |
| √    | -  | appParameter | 参考[微信button文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) | String | -                      | -   |

> 注1：由于微信 button 的部分样式属性和 AtButton 有冲突，所以暂未被 AtButton 支持。支持的属性以上表为准

> 注2：formType 为 submit、reset 都可以触发 Form 或 AtForm 的 submit、reset 事件，但是由于微信的限制，只能取到 event.detail 的部分值，比如 formid，不能取到 value。而 reset 也不会使 AtForm 里的 AtInput 等重置

## Button 事件

| 微信 | H5 | 事件名称         | 说明                                                                                         | 返回参数   |
|:-----|:---|:-----------------|:---------------------------------------------------------------------------------------------|:-----------|
| √    | √  | onClick          | 点击按钮时触发                                                                               | event 对象 |
| √    | -  | onGetUserInfo    | 参考[微信button文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) | event 对象 |
| √    | -  | onContact        | 参考[微信button文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) | event 对象 |
| √    | -  | onGetPhoneNumber | 参考[微信button文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) | event 对象 |
| √    | -  | onError          | 参考[微信button文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) | event 对象 |
| √    | -  | onOpenSetting    | 参考[微信button文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) | event 对象 |
