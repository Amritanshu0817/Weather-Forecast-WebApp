import React, { useEffect, useState } from 'react'
import sunny from '../Items/clear.png'
import search from '../Items/search.png'
import './right.css'
import rise from '../Items/rise.png'
import set from '../Items/imagesset.png'
import clouds from '../Items/clouds full.png'
import little from '../Items/cloud.png'
import snow from '../Items/snow.png'
import thunder from '../Items/thunder.png'
import rain from '../Items/rain.png'
import mist from '../Items/mist.png'

const Right = () => {
    const [date, setDate] = useState(new Date());
    const [dateTime, setDateTime] = useState(new Date());
    const [riseTime, setRiseTime] = useState();
    const [Wicon, setWicon] = useState(sunny);

    useEffect(() => {
      const interval = setInterval(() => {
        setDateTime(new Date());
      }, 1000); // Update every second
  
      return () => clearInterval(interval); // Cleanup function to clear the interval
    }, []);
  
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = days[dateTime.getDay()];
    const time = dateTime.toLocaleTimeString();

    // const [Wdate, setWdate] = useState("03/05/2024");
    let apiKey = "ef83202d509ede0d63446ed6204b3987"

    const searchCity = async() => {
        const city = document.getElementsByClassName("cityname")
        if(city[0].value === ""){
          return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city[0].value}&units=Metric&appid=${apiKey}`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        // setRise(data.sys.sunrise);
        let date = new Date(rise * 1000);
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();
        let seconds = "0" + date.getSeconds();
        setRiseTime(hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2));

        const uvIndex = document.getElementsByClassName("uvindex");
        const windSpeed = document.getElementsByClassName("speed");
        const maxi = document.getElementsByClassName("max");
        const mini = document.getElementsByClassName("min");
        const humidity = document.getElementsByClassName("humidper");
        const visibility = document.getElementsByClassName("distance");
        const air = document.getElementsByClassName("airindex");
        const name = document.getElementsByClassName("city");
        const tempr = document.getElementsByClassName("temp");
        const wtype = document.getElementsByClassName("type");
        const feels = document.getElementsByClassName("feel");

        name[0].innerHTML = data.name;
        tempr[0].innerHTML = data.main.temp + "°C";
        wtype[0].innerHTML = data.weather[0].main;
        feels[0].innerHTML = "Feels Like " + data.main.feels_like+ "°C";
        uvIndex[0].innerHTML = data.current.uvi;
        windSpeed[0].innerHTML = data.wind.speed + "m/s";
        humidity[0].innerHTML = data.main.humidity + "%";
        visibility[0].innerHTML = data.visibility + "m";
        maxi[0].innerHTML = "Max = " + data.main.temp_max + "°C";
        mini[0].innerHTML = "Min = " + data.main.temp_min + "°C";

        if(data.weather[0].icon === "01d" || data.weather.icon === "01n"){
            setWicon(sunny);
          }
          else if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n"){
            setWicon(little);
          }
          else if(data.weather[0].icon === "03d" || data.weather[0].icon === "03n"){
            setWicon(little);
          }
          else if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n"){
            setWicon(clouds);
          }
          else if(data.weather[0].icon === "09d" || data.weather[0].icon === "09n"){
            setWicon(rain);
          }
          else if(data.weather[0].icon === "10d" || data.weather[0].icon === "10n"){
            setWicon(rain);
          }
          else if(data.weather[0].icon === "11d" || data.weather[0].icon === "11n"){
            setWicon(thunder);
          }
          else if(data.weather[0].icon === "13d" || data.weather[0].icon === "13n"){
            setWicon(snow);
          }
          else if(data.weather[0].icon === "50d" || data.weather[0].icon === "50n"){
            setWicon(mist);
          }
          else{
            setWicon(sunny);
          }
    }

  return (
    <div className="main">
        <div className="right">
    <div className="Container">
        <div className="search">
            <input type='text' placeholder='Search For Places' className='cityname'></input>
            <span><img src = {search} alt='icon' onClick={()=>{searchCity()}}></img></span>
        </div>
        <div className="cityinfo">
            <div className="image">
            <img src= {Wicon} alt=''></img>
            </div>
            <h2 className='city'>Gururgram</h2>
            <h1 className='temp'>27 °C</h1>
            <h2 className='feel'> </h2>
            <h3 className='type'> </h3>
            <h2 className='time'>{dayOfWeek} {time}</h2>
        </div>
    </div>
    </div>
    
    <div className="left">
        <h3>Today's Highlights</h3>
        <div className="cards">
            <div className="cards1">
            <div className="uv">
            <span>UV Index</span>
                <h2 className='uvindex'>5</h2>
            </div>
            <div className="wind">
                <span>Wind Speed</span>
                <h2 className='speed'>7.70 km/h</h2>
            </div>
            <div className="sun">
                <span>Temprature</span>
                <p className='max'></p>
                <p className='min'></p>
                {/* <span>Sunrise & Sunset</span>
                <div className="rising">
                <img src={rise} alt='rise'></img>
                05:25 AM
                </div>
                <div className="setting">
                <img src={set} alt='set'></img>
                06:15 PM
                </div> */}
            </div>
            </div>
            <div className="cards2">
            <div className="humid">
                <span>Humidity</span>
                <h2 className='humidper'>5 %</h2>
            </div>
            <div className="visible">
                <span>Visiblity</span>
                <h2 className='distance'>5.2 KM</h2>
            </div>
            <div className="air">
                <span>Air Quality</span>
                <h2 className='airndex'>105</h2>
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Right
