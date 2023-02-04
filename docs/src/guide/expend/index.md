
## 防重提交
### 关于防重提交
在我们日常生活中会出现某些需求后台需要你做防重的表单提交,这里我们提供了解决方案,并且源码中也为此预留了一些配置来满足一些定制化需求更变。

### tips
::: tip 
由于是基于拦截器的解决方案,为了更灵活的组织防重代码,所以部分防重功能并没有合并到vxiosAPI内,这样大家就可以根据自己的需求去组织自己需要的防重代码
:::

### 流程关系
::: info
示例创建 --> 发出请求--> 添加当前请求标识到pendding中 --> 请求结束 --> 从pendding中清除当前请求标识
:::
### 配置合并提醒
::: warning
🎩由于[`就近原则`](/guide/advanced/#就近原则)拦截器的配置会优先与发起请求时task的配置,如果将防重定义在全局,请重新create一个vxios实例进行个别请求处理。
:::

### 示例代码
```
//引入vxios核心
const vxios = require('@gatomis/vxios')
//建立一个pending Map
const pending=new Map();
//返回参数方法
const getUrl=config=>[config.method,config.url].join('&');
//创建一个添加pending的方法
const addPending=(config)=>{
  const url=getUrl(config)
  if(!pending)return
  if(pending.has(url)){
    config.getTask=task=>task.abort()
  }else{
    pending.clear()
    pending.set(url)
  }
}
//移除一个删除pending的方法
const removePending=config=>{
  const url=getUrl(config)
  if(!pending)return
  if(pending.has(url)){
      pending.delete(url)
  }
  console.log(pending,url);
}

//创建一个自己的实例
const myVxios = vxios.create({
  baseURL: 'https://www.escook.cn'
})
//添加请求拦截器  req
myVxios.interceptors.request.use(config => {
  console.log(config.url);
   addPending(config)
  return config
})
添加响应拦截器 resp
myVxios.interceptors.response.use(res => {
  console.log(res);
   removePending(res.config)
  return res
},err=>{
  //出现或报错后N秒后移除防重
  console.error(err);
  setTimeout(()=> removePending(err.config),5000)
})
```


