import React, { useState } from 'react'
import './page.css'
import clear from '../Items/clear.png'
import cloud from '../Items/cloud.png'
import drizzle from '../Items/drizzle.png'
import humidity from '../Items/humidity.png'
import rain from '../Items/rain.png'
import search from '../Items/search.png'
import snow from '../Items/snow.png'
import wind from '../Items/wind.png'

const Page = () => {

  let apiKey = "ef83202d509ede0d63446ed6204b3987"
  const [Wicon, setWicon] = useState(clear);

  const searchCity = async() => {
    const city = document.getElementsByClassName("cityName")
    if(city[0].value === ""){
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city[0].value}&units=Metric&appid=${apiKey}`;
    let response = await fetch(url);
    let data = await response.json();
    const humidityPercent = document.getElementsByClassName("humidityper");
    const windSpeed = document.getElementsByClassName("windsp");
    const cityData = document.getElementsByClassName("nameCity");
    const temp = document.getElementsByClassName("tempDisplay");
    const curr = document.getElementsByClassName("type");

    humidityPercent[0].innerHTML = data.main.humidity + "%";
    windSpeed[0].innerHTML = data.wind.speed + "km/h";
    temp[0].innerHTML = data.main.temp + "°C";
    cityData[0].innerHTML = data.name;
    curr[0].innerHTML = data.weather[0].description;

    if(data.weather[0].icon === "01d" || data.weather.icon === "01n"){
      setWicon(clear);
    }
    else if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n"){
      setWicon(cloud);
    }
    else if(data.weather[0].icon === "03d" || data.weather[0].icon === "03n"){
      setWicon(drizzle);
    }
    else if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n"){
      setWicon(drizzle);
    }
    else if(data.weather[0].icon === "09d" || data.weather[0].icon === "09n"){
      setWicon(rain);
    }
    else if(data.weather[0].icon === "10d" || data.weather[0].icon === "10n"){
      setWicon(rain);
    }
    else if(data.weather[0].icon === "13d" || data.weather[0].icon === "13n"){
      setWicon(rain);
    }
    else{
      setWicon(clear);
    }

  }
  return (
    <div className="body">
      <h1>Weather Forecast</h1>
    <div className='container'>
    <div className="top-bar">
      <input type='text' className='cityName' placeholder='Search'></input>
      <div className="searchicon" onClick={()=>{searchCity()}}>
        <img src = {search} alt='' />
      </div>
    </div>
    <div className="weatherinfo">
      <img src={Wicon} alt="" />
      <h2 className='nameCity'>City Name</h2>
      <h1 className='tempDisplay'>24 °C</h1>
      <h3 className='type'>Sunny</h3>
    </div>
    <div className="others">
        <div className="humidity">
          <img src={humidity} alt="" />
          <h4>Humidity</h4>
          <h5 className='humidityper'>64%</h5>
        </div>
        <div className="wind">
          <img src={wind} alt="" />
          <h4>Wind</h4>
          <h5 className='windsp'>8 km/h</h5>
        </div>
      </div>
  </div>
    </div>
  )
}

export default Page
