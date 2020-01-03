#### 一、简单介绍
一个简单展示天气的小项目，弹性布局，可在电脑和手机端显示，使用原生 JavaScript 来完成整个项目。
#### 二、项目步骤
1. 第一步，我会自己封装一个简单的 ajax ,并使用 Promise 来改写，使改写后的 ajax 能链式操作
2. 第二步，简单测试下自己写的 ajax 能否成功获得数据
3. 第三步，数据传输正常，将请求到的数据渲染到页面上

#### 三、版本介绍
##### 第一版：简单获取天气数据，并将天气数据渲染到页面上
1. 实现的功能
- 这一版本城市的名称只能在代码中修改
- 没有 CSS 样式
2. 出现的问题
- 上传到 github 上，请求数据时出现错误，同源策略
- 解决办法一： 先使用了 CORS 来解决，貌似不可以，好像要和后端商量来着，等明天(2020.01.04)再仔细看下
- 解决办法二： 使用 `jsonp`来解决

#### 四、期间用到的 JavaScript 知识点
1. 第一版：
- ES6 语法
- 封装 ajax 用到：`XMLHttpRequest()`对象、`JSON`对象、`Promise`对象及`document`对象的相关属性及方法


