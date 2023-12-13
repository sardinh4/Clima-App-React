import React, { useState } from "react";
import './ClimaApp.css';

import search_icon from'../Assets/search.png';
import clear_icon from'../Assets/clear.png';
import cloud_icon from'../Assets/cloud.png';
import drizzle_icon from'../Assets/drizzle.png';
import humidity_icon from'../Assets/humidity.png';
import rain_icon from'../Assets/rain.png';
import snow_icon from'../Assets/snow.png';
import wind_icon from'../Assets/wind.png';

const ClimaApp = () => {
    
    let api_key ="930eaa4bba317b5282b6eef843ca617c";
    const [wicon, setWicon] = useState(cloud_icon);

    const search = async () => {
        const element = document.getElementsByClassName("cityInput");
        if (element[0].value==="")
        {
            return 0;
        }
        
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
        
        let response = await fetch(url);
        let data = await response.json();

        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-rate");
        const temprature = document.getElementsByClassName("clima-temp");
        const location = document.getElementsByClassName("clima-location");

        humidity[0].innerHTML = data.main.humidity+" %";
        wind[0].innerHTML = data.wind.speed+" km/h";
        temprature[0].innerHTML = data.main.temp+" °c";
        location[0].innerHTML = data.name;

        if (data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
        {
            setWicon(clear_icon);
        }
        else if (data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
        {
            setWicon(cloud_icon);
        }
        else if (data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
        {
            setWicon(drizzle_icon);
        }
        else if (data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
        {
            setWicon(drizzle_icon);
        }
        else if (data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
        {
            setWicon(rain_icon);
        }
        else if (data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
        {
            setWicon(rain_icon);
        }
        else if (data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
        {
            setWicon(snow_icon);
        }
        else
        {
            setWicon(clear_icon)
        }

    } 

    return(
        <div className="main">
            <div className="Container">
            <div className="Top-bar">
                <input type="text" className="cityInput" placeholder="Digite aqui sua cidade" />
                <div className="search-icon" onClick={()=>{search()}}>
                    <img src={search_icon} alt="search-icon"/>
                </div>
            </div>

            <div className="clima-image">
                <img src={cloud_icon} alt="" />
            </div>

            <div className="clima-temp">
                24°c
            </div>

            <div className="clima-location">
                London
            </div>

            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} className="icon" alt="" />
                    <div className="data">
                        <div className="humidity-percent">54%</div>
                        <div className="text">Humidade</div>
                    </div>
                </div>

                <div className="element">
                    <img src={wind_icon} className="icon" alt="" />
                    <div className="data">
                        <div className="wind-rate">18 km/h</div>
                        <div className="text">Vento</div>
                    </div>
                </div>
            </div> 
            
        </div> 
        </div>
    )
}

export default ClimaApp
