function ajax(opts){
  const promise = new Promise((resolve,reject) => {
    // 值的初始化
    let url = opts.url,
        type = opts.type || "Get",
        dataType = opts.dataType || function(){},
        onerror = opts.onerror || function(){},
        data = opts.data || {}
    
    // 处理data数据，将其处理成 name=pinger&age=18 的格式，get请求格式
    let dataStr = []
    for(let key in data){
      dataStr.push(key+ "=" + data[key])
    }
    dataStr = dataStr.join('&')

    if(type === "Get"){
      url += "?" + dataStr
    }

    // 创建 XMLHttpRequest 实例对象
    let xhr = new XMLHttpRequest()
    xhr.open(type,url,true)
    xhr.onload = function(){
      if((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304){
        if(dataType === "json"){
          let retJson = JSON.parse(xhr.responseText)
          resolve(retJson)
        } else {
          resolve(xhr.responseText)
        }
      } else {
        reject()
      }
    }

    xhr.onerror = onerror
    if(type === "POST") {
      xhr.send(dataStr)
    } else {
      xhr.send()
    }

  })
  return promise
}

// ajax 测试
ajax({
  url: 'http://api.jirengu.com/getWeather.php',
  data: {
    city: "北京"
  }
}).then(res => {
  console.log(res)
})