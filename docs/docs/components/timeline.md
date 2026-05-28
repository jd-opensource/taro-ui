# Timeline 时间轴

---

垂直展示一系列的时间流信息。

## 使用指南

在 Taro 文件中引入组件

```js
import { AtTimeline } from 'taro-ui'
```

**组件依赖的样式文件（仅按需引用时需要）**

```scss
@import '~taro-ui/dist/style/components/timeline.scss';
@import '~taro-ui/dist/style/components/icon.scss';
```

## 用法

```html
<AtTimeline
  items={[
    { title: '刷牙洗脸' },
    { title: '吃早餐' },
    { title: '上班' },
    { title: '睡觉' }
  ]}
>
</AtTimeline>
```

## 自定义默认图标颜色、自定义图标

```html
<AtTimeline
  items={[
    { title: '刷牙洗脸' },
    { title: '吃早餐', color: 'green' },
    { title: '上班', color: 'red' },
    { title: '睡觉', color: 'yellow' }
  ]}
>
</AtTimeline>

<AtTimeline
  items={[
    { title: '刷牙洗脸', icon: 'check-circle' },
    { title: '吃早餐', icon: 'clock' },
    { title: '上班', icon: 'clock' },
    { title: '睡觉', icon: 'clock' }
  ]}
>
</AtTimeline>
```

## 标记最后一个为幽灵节点（即时间轴未完成，还在记录过程中）

```html
<AtTimeline
  pending
  items={[
    { title: '刷牙洗脸' },
    { title: '吃早餐' },
    { title: '上班' },
    { title: '睡觉' }
  ]}
>
</AtTimeline>
```

## 添加更多内容

```html
<AtTimeline
  pending
  items={[
    { title: '刷牙洗脸', content: ['大概8:00'], icon: 'check-circle' },
    { title: '吃早餐', content: ['牛奶+面包', '餐后记得吃药'], icon: 'clock' },
    { title: '上班', content: ['查看邮件', '写PPT', '发送PPT给领导'], icon: 'clock' },
    { title: '睡觉', content: ['不超过23:00'], icon: 'clock' }
  ]}
>
</AtTimeline>
```

## Timeline 参数

| 参数        | 说明                                    | 类型                 | 可选值 | 默认值 |
| :---------- | :-------------------------------------- | :------------------- | :----- | :----- |
| pending     | 最后一项是否为未完成态                  | Boolean              | -      | false  |
| items       | 需展示的内容。数组对象参数参考下文 item | Array Of Object      | -      | []     |
| onClickItem | 点击 item 触发的事件                    | (current, e) => void | -      | []     |

## Timeline 事件

| 事件名称    | 说明                 | 返回参数           |
| ----------- | -------------------- | ------------------ |
| onClickItem | 点击 item 触发的事件 | current,步骤索引值 |

## items object 字段详解

| 参数    | 说明        | 类型   | 可选值           | 默认值 |
| :------ | :---------- | :----- | :--------------- | :----- |
| title   | 标题        | String | 必填             | -      |
| content | 子项内容    | Array  | -                | []     |
| icon    | 自定义 icon | String | 参考`icon`组件   | -      |
| color   | icon 颜色   | String | green/red/yellow | blue   |
