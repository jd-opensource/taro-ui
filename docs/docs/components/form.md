# Form 表单组件

---

将组件内的用户输入的值提交。由于小程序组件化的限制，要触发 onSubmit，必须使用 AtButton 且设置 `formType='submit'`，onSubmit 事件获得的 event 中的 event.detail.value 始终为空对象，开发者要获取数据，可以自行在页面的 state 中获取

## 使用指南

在 Taro 文件中引入组件

```js
import { AtForm } from 'taro-ui'
```

**组件依赖的样式文件（仅按需引用时需要）**

```scss
@import '~taro-ui/dist/style/components/form.scss';
```

## 一般用法

```js
import Taro from '@tarojs/taro'
import { AtForm, AtInput, AtButton } from 'taro-ui'
export default class Index extends Taro.Component {
  constructor() {
    super(...arguments)
    this.state = {
      value: ''
    }
  }
  handleChange(value) {
    this.setState({
      value
    })
  }
  onSubmit(event) {
    console.log(this.state.value)
  }
  onReset(event) {
    this.setState({
      value: ''
    })
  }
  render() {
    return (
      <AtForm
        onSubmit={this.onSubmit.bind(this)}
        onReset={this.onReset.bind(this)}
      >
        <AtInput
          name='value'
          title='文本'
          type='text'
          placeholder='单行文本'
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
        />
        <AtButton formType='submit'>提交</AtButton>
        <AtButton formType='reset'>重置</AtButton>
      </AtForm>
    )
  }
}
```

## 参数

| 参数         | 说明                             | 类型    | 可选值 | 默认值 |
| ------------ | -------------------------------- | ------- | ------ | ------ |
| reportSubmit | 是否返回 formId 用于发送模板消息 | Boolean | -      | false  |

## 事件

| 事件名称 | 说明                                                                                                                                                                        | 返回参数 |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| onSubmit | 携带 form 中的数据触发 submit 事件，由于小程序组件化的限制，onSubmit 事件获得的 event 中的 event.detail.value 始终为空对象，开发者要获取数据，可以自行在页面的 state 中获取 | event    |
| onReset  | 表单重置时会触发 reset 事件                                                                                                                                                 | event    |
