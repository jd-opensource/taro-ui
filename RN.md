# Taro UI For RN


### 开发


#### 壳
注意 React Native 版本需要保持一致
##### 自定义安装壳子
下载官方壳应用(NervJS/taro-native-shell)[https://github.com/NervJS/taro-native-shell] 选择与 taro-ui react-native 版本一致的分支

##### 使用发布商店 App 壳子
<img src="https://tva1.sinaimg.cn/large/008i3skNgy1gvzhk2732kj30fu0u0aax.jpg" width="300px" />

```
# 组件库与 demo 连接，lerna 对 packages 进行 symlink
lerna bootstrap
```

#### 组件开发
```
cd packages/taro-ui/rn
```

#### 发布
rn 源码发布

#### DEMO 启动
```
cd demo-rn
yarn dev:rn
```
demo 适配开发，更改组件 style 样式，需要更改一下 demo-rn/src/app.scss 触发一下样式重编。

#### DEMO release
需要打一个 tag，比如：
```sh
git tag -a 'v3.1.0-beta.3-rn' -m 'rn qrcode for v3.1.0-beta.3'
git push origin v3.1.0-beta.3-rn
```
git ci 部署，最后生成 release 信息
