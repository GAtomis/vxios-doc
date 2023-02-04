


## 关于Vxios
设计这个mini库的初衷是为了统一管理微信的所有请求方法,目的是将所有微信与网络的请求统一Promise化，并且能与web端Axios进行相互迁移(仍在完善中),
## 特性
* 支持Promise API
* CommonJS模块规范
* ES6书写风格
* 拦截请求和响应
* 集成所有wx请求
* 开箱即用的取消请求
## 开始使用

Vxios是一个基于微信请求封装的mini请求库

### 安装
::: warning
🎩 仅限于微信小程序中使用,uniApp未测试
:::

```shell
//npm
npm i @gatomis/vxios -s
or
//yarn
yarn add @gatomis/vxios -s
```
### 引入项目

::: warning
🎩小程序必须打开npm功能才可以使用npm,构建npm完毕后通过CommonJs规范导入js中
:::
```
//来自./app.js
//创建实例
const vxios = require('@gatomis/vxios')
```
### 基于原型
本项目原型基于[微信开发手册](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html)

