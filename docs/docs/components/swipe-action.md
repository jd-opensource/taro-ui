# SwipeAction 滑动操作

---

提供一颗可以通过滑动触发选项的容器

## 使用指南

Taro-UI 版本需要在 `v1.3.1` 以上，在 Taro 文件中引入组件


```js
import { AtSwipeAction } from "taro-ui"
```
**组件依赖的样式文件（仅按需引用时需要）**


```scss
@import "~taro-ui/lib/style/components/swipe-action.scss";
```
## 一般用法



```html
<AtSwipeAction options={[
  {
    text: '取消',
    style: {
      backgroundColor: '#6190E8'
    }
  },
  {
    text: '确认',
    style: {
      backgroundColor: '#FF4949'
    }
  }
]}>
  <View className='normal'>AtSwipeAction 一般使用场景</View>
</AtSwipeAction>
```

## 禁止滑动



```html
<AtSwipeAction disabled options={[
  {
    text: '取消',
    style: {
      backgroundColor: '#6190E8'
    }
  },
  {
    text: '确认',
    style: {
      backgroundColor: '#FF4949'
    }
  }
]}>
  <View className='normal'>禁止滑动展示</View>
</AtSwipeAction>
```

## 自动关闭



```html
<AtSwipeAction autoClose options={[
  {
    text: '取消',
    style: {
      backgroundColor: '#6190E8'
    }
  },
  {
    text: '确认',
    style: {
      backgroundColor: '#FF4949'
    }
  }
]}>
  <View className='normal'>点击按钮自动关闭</View>
</AtSwipeAction>
```

## 传递点击事件



```html
<AtSwipeAction onClick={this.handleClick} options={[
  {
    text: '取消',
    style: {
      backgroundColor: '#6190E8'
    }
  },
  {
    text: '确认',
    style: {
      backgroundColor: '#FF4949'
    }
  }
]}>
  <View className='normal'>点击事件触发</View>
</AtSwipeAction>
```

## 开启和关闭事件



```html
<AtSwipeAction
  options={[
  {
    text: '取消',
    style: {
      backgroundColor: '#6190E8'
    }
  },
  {
    text: '确认',
    style: {
      backgroundColor: '#FF4949'
    }
  }
]}
  onOpened={this.handleOpened}
  onClosed={this.handleClosed}
>
  <View className='normal'>开启和关闭时触发事件</View>
</AtSwipeAction>
```

## 与 List 组件使用



```html
<AtList>
  <AtSwipeAction options={[
  {
    text: '取消',
    style: {
      backgroundColor: '#6190E8'
    }
  },
  {
    text: '确认',
    style: {
      backgroundColor: '#FF4949'
    }
  }
]}>
    <AtListItem title='Item1' />
  </AtSwipeAction>
  <AtSwipeAction options={[
  {
    text: '取消',
    style: {
      backgroundColor: '#6190E8'
    }
  },
  {
    text: '确认',
    style: {
      backgroundColor: '#FF4949'
    }
  }
]}>
    <AtListItem title='Item2' />
  </AtSwipeAction>
  <AtSwipeAction
    options={[
      {
        text: '警告',
        style: {
          backgroundColor: '#FFC82C'
        }
      }
    ]}
  >
    <AtListItem title='Item3' />
  </AtSwipeAction>
</AtList>
```

## 控制只显示单个



```html
<AtList>
  {list.map((item, index) => (
    <AtSwipeAction
      key={index}
      onOpened={this.handleSingle.bind(this, index)}
      isOpened={item.isOpened}
      options={item.options}
    >
      <AtListItem title={item.title} />
    </AtSwipeAction>
  ))}
</AtList>
```

## 参数

| 参数      | 说明                    | 类型                                 | 可选值 | 默认值  |
| --------- | ----------------------- | ------------------------------------ | ------ | ------- |
| isOpened  | 是否开启                | Boolean                              | -      | `true`  |
| disabled  | 是否禁止滑动            | Boolean                              | -      | `false` |
| autoClose | 点击选项时,是否自动关闭 | Boolean                              | -      | `false` |
| options   | 展示的选项数组          | [{'{ text , style? , className? }'}] | -      | `[]`    |

## 事件

| 事件名称 | 说明           | 返回参数 |
| -------- | -------------- | -------- |
| onClick  | 点击触发事件   | -        |
| onOpened | 完全打开时触发 | -        |
| onClosed | 完全关闭时触发 | -        |
