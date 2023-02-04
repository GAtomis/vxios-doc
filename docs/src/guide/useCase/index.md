

## 创建一个请求

### 应用示例
通过导入vxios实例执行GET请求方法并返回一个Promise,通过并通过PromiseAPI进行结果的处理。

```
// 为给定 ID 的 user 创建请求
vxios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```



### GET
::: tip 执行 GET 请求
所有的请求参数配置都继承原生文档
了解请求配置参数[点我](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html#Object-object)
```
/**
 * 快速请求 
 * TS解析 (url:string,option?:any)=>Promise<any> 
 */
vxios("www.github.com/GAtomis/api/get",{data:{name:"Gavin",age:"20"}})

/**
 * 利用api 
 * TS解析 (url:string,data?:any,option?:any)=>Promise<any> 
 */
vxios.get("www.github.com/GAtomis/api/get",{name:"Gavin",age:"20"})
```
:::
### POST
::: tip 执行 POST 请求
所有的请求参数配置都继承原生文档
了解请求配置参数[点我](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html#Object-object)
```
//快捷请求 同上 TS解析 (url:string,option?:any)=>Promise<any> 
vxios("www.github.com/GAtomis/api/post",{data:{name:"Gavin",age:"20"},method:"POST"})
//利用api 同上 TS解析 (url:string,data?:any,option?:any)=>Promise<any> 
vxios.post("www.github.com/GAtomis/api/get",{name:"Gavin",age:"20"})

```
:::




### 上传请求
::: warning 执行上传请求
所有的请求参数配置都继承原生文档
了解请求配置参数[点我](https://developers.weixin.qq.com/miniprogram/dev/api/network/upload/wx.uploadFile.html#Object-object)
```

/**
 * 利用api foo为所得到本地文件地址
 * TS解析 (url:string,data?:any,option?:any)=>Promise<any> 
 */
vxios.uploadFile("www.github.com/GAtomis/api/get",{filePath:foo})
```
:::
### 下载请求
::: warning 执行下载请求
所有的请求参数配置都继承原生文档
了解请求配置参数[点我](https://developers.weixin.qq.com/miniprogram/dev/api/network/download/wx.downloadFile.html#Object-object)
```

/**
 * 利用api foo储存到本地文件地址 key为文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容
 * TS解析 (url:string,data?:any,option?:any)=>Promise<any> 
 */
vxios.downloadFile("www.github.com/GAtomis/api/get",{filePath:foo,name:key})
```
:::






