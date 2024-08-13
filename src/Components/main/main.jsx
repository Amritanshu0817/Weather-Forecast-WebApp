import React, { useEffect, useState } from 'react'
import './main.css'
import search from '../Items/search.png'
import sunny from '../Items/clear.png'
import clouds from '../Items/clouds full.png'
import little from '../Items/cloud.png'
import snow from '../Items/snow.png'
import thunder from '../Items/thunder.png'
import rain from '../Items/rain.png'
import mist from '../Items/mist.png'


const Main = () => {

    const [dateTime, setDateTime] = useState(new Date());
    const [currentDate, setCurrentDate] = useState(new Date());
    const [Wicon, setWicon] = useState(sunny);



    useEffect(() => {
        const interval = setInterval(() => {
          setDateTime(new Date());
        }, 1000); 
    
        return () => clearInterval(interval); 
      }, []);
      const time = dateTime.toLocaleTimeString();

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentDate(new Date());
        }, 1000); 
    
        return () => clearInterval(interval); 
      }, []); 
    
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const formattedDate = currentDate.toLocaleDateString('en-US', options);

      let apiKey = "ef83202d509ede0d63446ed6204b3987"

      const searchCity = async() => {
        const city = document.getElementsByClassName("cityname")
        if(city[0].value === ""){
          return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city[0].value}&units=Metric&appid=${apiKey}`;
        let response = await fetch(url);
        let data = await response.json();

        const name = document.getElementsByClassName("top");
        const tempr = document.getElementsByClassName("tempdis");
        const wtype = document.getElementsByClassName("info");
        const description = document.getElementsByClassName("moreinfo")
        const feels = document.getElementsByClassName("tempval");
        const humidity = document.getElementsByClassName("humid");
        const pressure = document.getElementsByClassName("press")
        const windSpeed = document.getElementsByClassName("wispeed");
        const visibility = document.getElementsByClassName("visib");

        name[0].innerHTML = data.name + ", " + data.sys.country;
        tempr[0].innerHTML = data.main.temp + "°C";
        wtype[0].innerHTML = data.weather[0].main;
        description[0].innerHTML = data.weather[0].description;
        feels[0].innerHTML = data.main.feels_like+ " °C";
        humidity[0].innerHTML = data.main.humidity + " %";
        pressure[0].innerHTML = data.main.pressure + " hPa";
        windSpeed[0].innerHTML = data.wind.speed + " m/s";
        visibility[0].innerHTML = data.visibility + " m";

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
    <div className="body">
        
        <div className="content">
           <div className="dleft">
            <div className="top">
            Gurugram, IN
            </div>
            <div className="bottom">
                <div className="date">
                    <div className="time">
                        {time}
                    </div>
                    <div className="day">
                        {formattedDate}
                    </div>
                </div>
                
                <div className="tempdis">
                    
                </div>
            </div>
           </div>
           <div className="dright">
            <div className="searching">
            <input placeholder='Search For City' className='cityname' onSubmit={() => (searchCity())}></input>
            <span><img src={search} alt="icon" className='sicon' onClick={()=> (searchCity())}/></span>
            </div>
            <div className="displaycon">
                <div className="png">
                    <img src={Wicon} alt='png' className='pngd'></img>
                </div>
                <div className="info">
                   
                </div>
                <div className="moreinfo">
                    
                </div>
            </div>
            <div className="responses">
                <div className="tempr">
                   <div className="key">Feels Like: </div>
                    <div className="tempval">
                        
                    </div>
                </div>
                <div className="tempr">
                   <div className="key">Humidity: </div>
                    <div className="humid">
                        
                    </div>
                </div>
                <div className="tempr">
                   <div className="key">Pressure: </div>
                    <div className="press">

                    </div>
                </div>
                <div className="tempr">
                   <div className="key">Wind Speed: </div>
                    <div className="wispeed">
                        
                    </div>
                </div>
                <div className="tempr">
                   <div className="key">Visibility: </div>
                    <div className="visib">
                        
                    </div>
                </div>
            </div>
           </div>
        </div>
        </div>
  )
}

export default Main
