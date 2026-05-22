# Input 按钮

---

用于接受单行文本，支持文本、密码、数字、手机号码、银行卡等类型的输入。

用户可控制是否显示输入框标题，是否出现清除按钮，输入框状态，还可以自定义 Input 组件的右边栏，实现自定义按钮、验证码输入框等。

## 使用指南

在 Taro 文件中引入组件


```js
import { AtInput, AtForm } from 'taro-ui'
```
**组件依赖的样式文件（仅按需引用时需要）**


```scss
@import "~taro-ui/lib/style/components/input.scss";
@import "~taro-ui/lib/style/components/icon.scss";
```
## 一般用法

说明：

* 由于微信开发者工具的问题，Input 的 placeholder 在 value 存在的情况下，会出现重叠，在真机上不会出现此问题，可以忽略
* 由于微信开发者工具的问题，输入法输入中文的时候，maxLength 会限制输入过程中的字符，导致无法输入完整的中文，在真机上不会出现此问题，可以忽略
* 该组件为受控组件，开发者需要通过 onChange 事件来更新 value 值变化，value 与 onChange 函数必填。在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
* 由于小程序组件化的限制，AtInput 嵌套在 AtForm 或原生小程序组件 Form 中的时候，onSubmit 事件获得的 event 中的 event.detail.value 始终为空对象，开发者要获取数据，可以自行在页面的 state 中获取

* 由于此组件是基于小程序的 Input 进行封装，该组件是原生组件，使用前请阅读[使用限制](https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html)
  


```js
import Taro from '@tarojs/taro'
import { AtInput }  from 'taro-ui'
export default class Index extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {
      value: ''
    }
  }
  handleChange (value) {
    this.setState({
      value
    })
    // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
    return value
  }
  render () {
    return (
      <AtInput
        name='value'
        title='标准五个字'
        type='text'
        placeholder='标准五个字'
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
      />
    )
  }
}
```

## 不同输入框类型



```html
<AtForm>
  <AtInput
    name='value1'
    title='文本'
    type='text'
    placeholder='单行文本'
    value={this.state.value1}
    onChange={this.handleChange.bind(this)}
  />
  <AtInput
    name='value2'
    title='数字'
    type='number'
    placeholder='请输入数字'
    value={this.state.value2}
    onChange={this.handleChange.bind(this)}
  />
  <AtInput
    name='value3'
    title='密码'
    type='password'
    placeholder='密码不能少于10位数'
    value={this.state.value3}
    onChange={this.handleChange.bind(this)}
  />
  <AtInput
    name='value4'
    title='身份证'
    type='idcard'
    placeholder='身份证号码'
    value={this.state.value4}
    onChange={this.handleChange.bind(this)}
  />
  <AtInput
    name='value5'
    title='小数'
    type='digit'
    placeholder='请输入小数'
    value={this.state.value5}
    onChange={this.handleChange.bind(this)}
  />
  <AtInput
    name='value6'
    border={false}
    title='手机号码'
    type='phone'
    placeholder='手机号码'
    value={this.state.value6}
    onChange={this.handleChange.bind(this)}
  />
</AtForm>
```

## 不同状态



```html
<AtForm>
  <AtInput
    disabled
    title='禁用'
    type='text'
    placeholder='禁止输入'
    value={this.state.value1}
    onChange={this.handleChange.bind(this)}
  />
  <AtInput
    error
    title='出现错误'
    type='text'
    placeholder='点击按钮触发回调'
    value={this.state.value2}
    onChange={this.handleChange}
    onErrorClick={this.handleClick.bind(this)}
  />
  <AtInput
    editable={false}
    title='不可编辑'
    type='text'
    placeholder='不可编辑'
    value={this.state.value3}
    onChange={this.handleChange.bind(this)}
  />
  <AtInput
    clear
    border={false}
    title='清除按钮'
    placeholder='点击清除按钮清空内容'
    type='text'
    value={this.state.value4}
    onChange={this.handleChange.bind(this)}
  />
  <AtInput 
    required
    border={false}  
    title='必填项' 
    type='text' placeholder='必填项' 
    value={this.state.value5} 
    onChange={this.handleInput.bind(this)} />
</AtForm>
```

## 自定义右边栏



```html

<AtInput
  clear
  title='验证码'
  type='text'
  maxLength='4'
  placeholder='验证码'
  value={this.state.value}
  onChange={this.handleChange.bind(this)}
>
  <Image src='https://aotu.io/img.png' />
</AtInput>
```

## Input 参数

| 参数   |  微信小程序 |  h5 | 说明   | 类型    | 可选值 | 默认值   |
| ---   | ----  | ---- | ---- | ------- | ------- | ------ |
| name  | √ | √ | 输入框的唯一标识，有传入点击 title 会聚焦输入框 | String  | - | - |
| type  | √ | √ | 输入框类型 | String | `text`,`number`,`password`,`phone`,`idcard`,`digit` | `text` |
| value | √ | √ | 输入框当前值，开发者需要通过 onChange 事件来更新 value 值，必填 | String  | - | - |
| placeholder | √ | √ | 占位符  | String  | - | - |
| placeholderStyle | √ | x | 指定 placeholder 的样式，只在小程序有效  | String  | - | - |
| placeholderClass | √ | x | 指定 placeholder 的样式类，只在小程序有效  | String | - | - |
| title     | √ | √ | 输入框左侧标题，若传入为空，则不显示标题  | String | - | -  |
| maxLength | √ | √ |最大长度 | Number  | -  | 140      |
| cursorSpacing | √ | x |指定光标与键盘的距离，单位 px 。取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离,只在微信小程序有效 | Number  | -  | 50      |
| confirmType | √ | x |设置键盘右下角按钮的文字,只在小程序有效| String | - | '完成' |
| cursor | √ | x |指定 focus 时的光标位置 | Number | - | - |
| selectionStart | √ | x |光标起始位置，自动聚集时有效，需与 selection-end 搭配使用 | Number | - | -1 |
| selectionEnd | √ | x |光标结束位置，自动聚集时有效，需与 selection-start 搭配使用 | Number | - | -1 |
| adjustPosition | √ | x |键盘弹起时，是否自动上推页面 | Boolean | - | true |
| disabled    | √ | √ |是否禁止输入，禁止点击按钮  | Boolean | - | false    |
| border    | √ | √ | 是否显示下划线边框  | Boolean | - | true    |
| editable  | √ | √ | 是否可编辑 | Boolean | - | True |
| error     | √ | √ | 是否出现错误 | Boolean | - | false |
| clear     | √ | √ | 是否显示清除按钮，需要传入 onChange 事件来改变value | Boolean | - | false |
| autoFocus  | √ | x | 是否自动聚焦 | Boolean | - | false |
| focus     | √ | √ | 是否聚焦 | Boolean | - | false |
| required  | √ | √ | 是否必填 | Boolean | - | false |

## Input 事件

| 事件名称 |  微信小程序 |  h5 | 说明  | 返回参数  |
|------- |---  |----- |---- | -------- |
| onChange | √ | √ | 输入框值改变时触发的事件，开发者需要通过 onChange 事件来更新 value 值变化，onChange 函数必填。小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值, v2.0.3 版本可以获取 event 参数  | (value,event) => void  |
| onFocus | √ | √ | 输入框被选中时触发的事件，v2.0.3 版本可以获取 event 参数 | (value,event) => void   |
| onBlur | √ | √ | 输入框失去焦点时触发的事件，v2.0.3 版本可以获取 event 参数 | (value,event) => void   |
| onConfirm | √ | x | 点击完成按钮时触发，v2.0.3 版本可以获取 event 参数 | (value,event) => void   |
| onErrorClick | √ | √ | 点击错误按钮触发的事件 | () => void |
| onClick | √ | √ | 当 editable 为 false时，点击组件触发的事件  | () => void |
| onKeyboardHeightChange | √ |   | 键盘高度发生变化的时候触发此事件 | (event) => void |
