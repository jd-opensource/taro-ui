# Grid 栅格布局

---

提供在移动端常见的 `宫格` 布局，帮助快速实现宫格效果

## 使用指南

在 Taro 文件中引入组件

```js
import { AtGrid } from 'taro-ui'
```

**组件依赖的样式文件（仅按需引用时需要）**

```scss
@import '~taro-ui/dist/style/components/grid.scss';
```

## 一般用法

```html
<AtGrid data={ [ { image:
'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
value: '领取中心' }, { image:
'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
value: '找折扣' }, { image:
'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
value: '领会员' }, { image:
'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
value: '新品首发' }, { image:
'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
value: '领京豆' }, { image:
'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
value: '手机馆' } ] } />
```

## 矩形用法

```html
<AtGrid mode='rect' data={ [ { image:
'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
value: '领取中心' }, { image:
'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
value: '找折扣' }, { image:
'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
value: '领会员' }, { image:
'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
value: '新品首发' }, { image:
'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
value: '领京豆' }, { image:
'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
value: '手机馆' } ] } />
```

## 是否有边框

```html
<AtGrid mode='rect' hasBorder={false} data={ [ { image:
'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
value: '领取中心' }, { image:
'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
value: '找折扣' }, { image:
'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
value: '领会员' }, { image:
'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
value: '新品首发' }, { image:
'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
value: '领京豆' }, { image:
'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
value: '手机馆' } ] } />
```

## AtGrid 参数

| 参数      | 说明           | 类型                                  | 可选值           | 默认值   |
| --------- | -------------- | ------------------------------------- | ---------------- | -------- |
| data      | 宫格布局数据源 | [{'{ iconInfo? , value? , image? }'}] | -                | -        |
| mode      | 布局模式       | String                                | `square`，`rect` | `square` |
| hasBorder | 是否有边框     | Boolean                               | -                | `true`   |
| columnNum | 每一列有多少个 | Number                                | -                | -        |

## AtGrid 事件

| 事件名称 | 说明               | 返回参数                      |
| -------- | ------------------ | ----------------------------- |
| onClick  | 点击宫格触发的事件 | (item: object, index: number) |
