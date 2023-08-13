
let todayCard=document.querySelector(".weather-container");
let button=document.querySelector(".button");
let cityCodeInput=document.getElementById("city-code");
let cityCode;


async function weatherApp (){
    let data= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=e6fab524e7ea4760a0c52819230608&q=${cityCode}&days=7`)
    let response=await data.json();
    console.log(response);
    
   let temp=response.current.temp_c;
   let src=response.forecast.forecastday[0].day.condition.icon;
   let maxTemp_1=response.forecast.forecastday[1].day.maxtemp_c;
   let minTemp_1=response.forecast.forecastday[1].day.mintemp_c;
   let src_1=response.forecast.forecastday[1].day.condition.icon;
   let src_2=response.forecast.forecastday[2].day.condition.icon;
   let maxTemp_2=response.forecast.forecastday[2].day.maxtemp_c;
   let minTemp_2=response.forecast.forecastday[2].day.mintemp_c;
   let day1=getDayName(new Date(response.forecast.forecastday[1].date));
   let day2=getDayName(new Date(response.forecast.forecastday[2].date));
   let day3=getDayName(new Date(response.forecast.forecastday[3].date));
   let description=response.current.condition.text;
   let description_1=response.forecast.forecastday[1].day.condition.text;
   let description_2=response.forecast.forecastday[2].day.condition.text;
   let clouds=response.current.cloud;
   let windSpeed=response.current.gust_kph;
   let windDirection=response.current.wind_dir;
    let location=response.location.name;
   

todayCard.innerHTML=`<div class="weather-table table-left p-4 position-relative col-12 col-lg-4">
<div class="date p-2 d-flex justify-content-between"><div class="day">${day1}</div><div class="day-date">${new Date(response.forecast.forecastday[1].date).getDate()+getMonthName(new Date())}</div></div>
<div class="location mt-4 p-2">${location}</div>
<div class="temp-icon d-flex justify-content-between align-items-center"><div class="temperature-day p-2">${temp}<sup>o</sup>c</div>
<div class="icon"><img src=${src}></div></div>

<div class="description p-2">${description}</div>
<div class="more-details d-flex justify-content-between p-2"><div class="detail-img text-center"><img src="../images/icon-umberella.png" class="p-2"> ${clouds} %</div><div class="detail-img text-center"><img src="../images/icon-wind.png" class="p-2"> ${windSpeed} km/h</div><div class="detail-img text-center"><img src="../images/icon-compass.png" class="p-2">${windDirection}</div></div>
</div>
<div class="weather-table text-center middle p-4 position-relative col-12 col-lg-4">
<div class="date p-2">${day2}</div>
<div class="icon mt-4 m-auto"><img src=${src_1}></div>
<div class="temperature p-2">${maxTemp_1}<sup>o</sup>c</div>
<div class="mintemperature p-2">${minTemp_1}<sup>o</sup>c</div>
<div class="description p-2">${description_1}</div>

</div>
<div class="weather-table table-right p-4 position-relative text-center col-12 col-lg-4">
<div class="date p-2">${day3}</div>
<div class="icon mt-4 m-auto"><img src=${src_2}></div>
<div class="temperature p-2">${maxTemp_2}<sup>o</sup>c</div>
<div class="mintemperature p-2">${minTemp_2}<sup>o</sup>c</div>
<div class="description p-2">${description_2}</div>

</div>`
}

cityCode='cairo';
weatherApp();
//------------------------------------
button.addEventListener("click",function(){
    cityCode=cityCodeInput.value
    weatherApp();
})
//------------------------------------
cityCodeInput.addEventListener("keyup",()=>{
    cityCode=cityCodeInput.value;
    weatherApp();
})

//--------------------------------------
function getDayName(date = new Date(), locale = 'en-US') {
    return date.toLocaleDateString(locale, {weekday: 'long'});
  }
function getMonthName(date = new Date(), locale = 'en-US') {
    return date.toLocaleDateString(locale, {month: 'long'});
  }
  

  