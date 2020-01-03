ajax({
  url: 'http://api.jirengu.com/getWeather.php',
      data: {
        city: "北京"
      },
  dataType: 'json'
}).then(res => {
  // console.log(res)  测试是否成功获得返回的数据
  let $container = document.querySelector(".container"),
      times = res.results[0].weather_data,
      results = res.results[0].index
      // console.log(times) 
      // console.log(results)
  // 先声明 content 为全局变量，若在 for 循环中定义的话，出了循环就不能再使用了(块级作用域),要给content赋初始值，不然页面渲染时会出现一个 undefined
  let content = ''
  for (let key in times){
    content += `
      <li>
        <p>${times[key].date}</p>
        <img src="${times[key].dayPictureUrl}" alt=""/>
        <img src="${times[key].nightPictureUrl}" alt=""/>
        <p>${times[key].temperature}</p>
        <p>${times[key].weather}</p>
        <p>${times[key].wind}</p>
      </li>
    `
  }
  for(let key in results){
    content += `
      <li>
        <p>${results[key].title}</p>
        <p>${results[key].tipt} <span>: ${results[key].zs}</span></p>
        <p>${results[key].des}</p>
      </li>
    `
  }

  let text = `
    <p>${res.results[0].currentCity}</p>
    <p>${res.date}</p>
    <ul>${content}</ul>
  `
  $container.innerHTML = text

})