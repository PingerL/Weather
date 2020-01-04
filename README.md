#### 一、简单介绍
一个简单展示天气的小项目，弹性布局，可在电脑和手机端显示，使用原生 JavaScript 来完成整个项目。
#### 二、项目步骤
1. 第一步，我会自己封装一个简单的 ajax ,并使用 Promise 来改写，使改写后的 ajax 能链式操作
2. 第二步，简单测试下自己写的 ajax 能否成功获得数据
3. 第三步，数据传输正常，将请求到的数据渲染到页面上

#### 三、版本介绍
##### 第一版：简单获取天气数据，并将天气数据渲染到页面上
1. 实现的功能
- 这一版本城市的名称只能在脚本中修改
- 没有 CSS 样式
2. 出现的问题
- 问题一：上传到 github 上，请求数据时出现错误，同源策略 报错：`Mixed Content: The page at 'https://pingerl.github.io/Weather/index.html' was loaded over HTTPS, but requested an insecure script 'http://api.jirengu.com/getWeather.php'. This request has been blocked; the content must be served over HTTPS.`
- 尝试一： 先使用了 CORS 来解决，貌似不可以，好像要和后端商量来着(抽个时间好好看下 CORS)
- 尝试二： 使用 jsonp 来解决，这个也要和后端合作来着(🤦‍，之前学的都忘记了......)
- 尝试三： 😄，不尝试了，还是把接口改下吧，调用数据接口：`https://jirenguapi.applinzi.com/getWeather.php`

**总结：JSONP、CORS 这两种跨域请求方式都需要对方服务器支持。假设对方服务器不提供支持怎么办？还有一个必杀技，自己搭建 server 中请求中转**
- 待尝试：自己搭建 server 中请求中转：
        1. 搭建服务器，创建接口，如 `https://pingerl.github.io/Weather`
        2. 设置这个接口允许 CORS 跨域
        3. 我们的页面向自己的这个接口发请求
        4. 接口收到请求后，在服务器端向`http://api.jirengu.com/getWeather.php `这个接口要数据（在服务端不存在同源策略限制），拿到数据后，返回给前端页面
        
##### 第二版：可在页面上输入要查询的城市，点击按钮查询对应城市天气
1. 新增功能
- 页面新增 input 输入框， 点击按钮实现查询功能
- 给页面添加样式
2. 版本一使用 `document.querySelector('.container').innerHTML = text`来插入获取的数据内容， innerHTML 会将以前的页面全部覆盖。所以在 HTML 上，在 class 为 container 的元素上新增一个 `<div class="des"></div>` 元素来包裹要插入的数据，main.js 中对应位置变成 `document.querySelector('.des').innerHTML = text`
##### 第三版：整理代码，将实现某一功能的代码块抽成函数，使页面整洁
如：
```
function render(){
  ajax(data).then(res => {
    <!-- 这里是一大段代码 -->
  }).catch(err => {
    console.log(err)
  })
}
```
改成：
```
function setData(res){
  //...code
}
  
ajax(data)
  .then(res => setData(res)})
  .catch(err => {
    console.log(err)
  })
```

#### 四、期间用到的 JavaScript 知识点
1. 第一版：
- ES6 语法
- 封装 ajax 用到：`XMLHttpRequest()`对象、`JSON`对象、`Promise`对象及`document`对象的相关属性及方法


