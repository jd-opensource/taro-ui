# Avatar 头像

---

用于展示用户头像

## 使用指南

在 Taro 文件中引入组件


```js
import { AtAvatar } from 'taro-ui'
```
**组件依赖的样式文件（仅按需引用时需要）**


```scss
@import "~taro-ui/lib/style/components/avatar.scss";
```
## 用法


```html
<AtAvatar image='https://jdc.jd.com/img/200'></AtAvatar>
<AtAvatar text='凹凸实验室'></AtAvatar>

<AtAvatar circle image='https://jdc.jd.com/img/200'></AtAvatar>
<AtAvatar circle text='凹凸实验室'></AtAvatar>
```
## Avatar 参数

| 微信 | H5 | 参数     | 说明                                                                                          | 类型    | 可选值                           | 默认值   |
|:-----|:---|:---------|:----------------------------------------------------------------------------------------------|:--------|:---------------------------------|:---------|
| √    | √  | size     | 头像大小                                                                                      | String  | `large`, `normal`, `small`       | `normal` |
| √    | √  | circle   | 头像是否圆形                                                                                  | Boolean | -                                | false    |
| √    | √  | image    | 头像图片地址                                                                                  | String  | -                                | -        |
| √    | √  | text     | 以文字形式展示头像                                                                            | String  | -                                | -        |
| √    | -  | openData | 参考微信[开放数据](https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html) | Object  | {'{ type: \\'userAvatarUrl\\'}'} | -        |

> 注意：openData 仅支持 type 为 userAvatarUrl
