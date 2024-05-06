import React from 'react'
import './left.css'

const Left = () => {
  return (
    <div className="left">
        <h3>Today's Highlights</h3>
        <div className="cards">
            <div className="cards1">
            <div className="uv">
                <h4>UV Index</h4>
                <h5 className='uvindex'>5</h5>
            </div>
            <div className="wind">
                <h4>Wind Status</h4>
                <h5 className='speed'>7.70 km/h</h5>
            </div>
            <div className="sun">
                <h4>Sunrise & Sunset</h4>
                <h5 className='rise'>5:50 AM</h5>
                <h5 className='set'>6:35 PM</h5>
            </div>
            </div>
            <div className="cards2">
            <div className="humid">
                <h4>Humidity</h4>
                <h5 className='humidper'>5 %</h5>
            </div>
            <div className="visible">
                <h4>Visiblity</h4>
                <h5 className='distance'>5.2 KM</h5>
            </div>
            <div className="air">
                <h4>Air Quality</h4>
                <h5 className='airndex'>105</h5>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Left
