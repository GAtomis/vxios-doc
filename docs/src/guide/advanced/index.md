
## 实例

### 创建实例
可以使用自定义配置新建一个 vxios 实例 这样跟便于你全局去使用它儿不用在去写一些繁琐的配置


::: tip vxios.create([config])
```
const myVxios = vxio.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
})
```
:::


## 配置

### 配置合并
以下是可用的实例方法。指定的配置将与实例的配置合并。

| 实例  |  方法  |           是否合并 |
| ----- | :----: | -----------------: |
| vxios |  get   | :heavy_check_mark: |
| vxios |  post  | :heavy_check_mark: |
| vxios | create | :heavy_check_mark: |

### 基础配置
这些配置是特有的,就算你不配置他也会存在
```
{
   // `url` 是用于请求的服务器 URL
  url: '/api/get',

  // `method` 是创建请求时使用的方法
  method: 'get', // default

  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 vxio 实例的方法传递相对 URL
  baseURL: 'https://www.github.com',
  //header头添加
  header:{
    'content-type': contentType["json"]
  },
  //默认获得task
  getTask:task=>task,
 // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
  // 如果请求话费了超过 `timeout` 的时间，请求将被中断
  timeout: 2000,
}
```

响应解构
```
const config={method:"get"....}
vxios({...config}).then(res={
  console.log(res)
})
//上面回调打印的结果
{
  cookies: []//开发者服务器返回的 cookies，格式为字符串数组
  data: "Forbidden"//	开发者服务器返回的数据
  errMsg: "request:ok"//错误消息
  header: {Server: "nginx/1.18.0", Date: "Fri, 11 Feb 2022 10:08:43 GMT", Content-Type: "text/plain; charset=utf-8", Content-Length: "9", Connection: "keep-alive", …}//开发者服务器返回的 HTTP Response Header
  statusCode: 403//开发者服务器返回的 HTTP 状态码
}

```
### 就近原则
配置会被上下文中最后执行的同名属性覆盖,最终执行的时候 baseURL为京东
```
const myVxios = vxio.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
})
myVxios.defaults.baseURL="wwww.baidu.com"
myVxios.get("api/get",{},{baseURL:"www.jd.com"})
```
### 其他配置
vxios所有发出的请求都继承与微信原生请求参数,如有需要可以去查看配置[传送门](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html)

## 拦截器
requset和response被 then 或 catch 处理前拦截它们。
### request

::: tip 添加请求拦截器
```
// 添加请求拦截器
vxios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });
```
:::
### response

::: tip 添加响应拦截器
```
// 添加响应拦截器
vxios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
```
:::
### 如何移除拦截器?
通过vxios拦截器内置的clean方法 可以进行拦截器的移除
```
const myVxios = vxios.create({
  baseURL: 'https://www.escook.cn'
})
//创建拦截器
const interReq=myVxios.interceptors.request.use(config => {
  console.log(config.url);
  addPending(config)
  
  return config
})
//移除拦截器
myVxios.interceptors.clean(interReq)

```

## 请求取消

### 什么是task?
task是微信原生的取消请求api,在请求发布之前取消请求,由于请求是异步函数,所以请求会在执行上下文后在进行执行,通过调用task中的方法可以取消这个异步任务
>请求取消是基于wx原生提供的api rquestTask进行二次封装
### 关于task的定义
经过测试得出task结论
* task是异步函数
* task执行顺序在请求方法之前
* task操作不可逆

### 如何在Vxios使用task?
通过参数配置可以在我们函数中使用task的回调函数
> getTask是异步函数,通过执行task.abort方法可以立即停止这个请求的执行
```
//异步请求入栈队列顺序 context>task>request
  myVxios.post("api/post", {
      name: "123",
      age: 23
    },{getTask:task=>{
    //异步
    if(num==1)  task.abort()
  
    }}).then(res=>{
      console.log(res,"结果");
   })
    //同步
    const num=1
```


