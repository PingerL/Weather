function render(data) {ajax(data
).then(res => {
  // console.log(res)  //测试是否成功获得返回的数据
  let $des = document.querySelector(".des"),
      times = res.results[0].weather_data,
      results = res.results[0].index
      // console.log(times) 
      // console.log(results)
  // 先声明 content 为全局变量，若在 for 循环中定义的话，出了循环就不能再使用了(块级作用域),要给content赋初始值，不然页面渲染时会出现一个 undefined
  let content = ''
  for(let key in results){
    content += `
      <li>
        <p>${results[key].title}</p>
        <p>${results[key].tipt} <span>: ${results[key].zs}</span></p>
        <p>${results[key].des}</p>
      </li>
    `
  }
  content += `<p class = "shupai" >未<br/>来<br/>三<br/>天</p>`

  for (let i = 1; i < times.length; i++) {
    content += `
      <li>
        <p>${times[i].date}</p>
        <img src="${times[i].dayPictureUrl}" alt=""/>
        <img src="${times[i].nightPictureUrl}" alt=""/>
        <p>${times[i].temperature}</p>
        <p>${times[i].weather}</p>
        <p>${times[i].wind}</p>
      </li>
    `
  }


  let text = `
  <div style="text-align: center">
  <h1>${res.results[0].currentCity}</h1>
  <span>${times[0].date}</span>
  <div style="margin:10px 0" >
    <img src="${times[0].dayPictureUrl}"  style="" alt=""/>
    <img src="${times[0].nightPictureUrl}"  style=""alt=""/></div>
  </div>
  <div style="text-align: center">
    <p style="display: inline-block">${times[0].temperature}</p>
    <p style="display: inline-block">${times[0].weather}</p>
    <p style="display: inline-block">${times[0].wind}</p>
  </div>
</div>
    <ul>${content}</ul>
  `
  $des.innerHTML = text

})
}

function getInputVal(){
  let $input = document.querySelector('.input-box')
  let $city = $input.value
  let $data = {
    url: 'http://api.jirengu.com/getWeather.php',
    data: {
      city: $city
    },
    dataType: 'json'
  }
  render($data)
}
