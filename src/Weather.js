import React, { useState } from "react";
import axios from "axios";


export default function Weather (){

    let [cityValue, setCity] = useState ("");
    let [info,setInfo]= useState ("");

    function CityValue (event){
        setCity (event.target.value);
    }

    function openWeatherInfo (event) {

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=5d7a48c45799df1cd3a05ecee722cc4e&units=metric`;
        axios.get(url).then(openWeatherInfo);
    }
    
    
    function displayInfo(response) {
        setInfo({
          temperature: response.data.main.temp,
          description: response.data.weather[0].description,
          humidity: response.data.main.humidity,
          wind: response.data.wind.speed,
    
          icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        });
      }
    
    
    return (
        <div class="boxed">
          <form onSubmit={openWeatherInfo}>
            <input type="search" onChange={CityValue} />
            <input type="submit" value="Search" />
          </form>
          <ul>
            <li>Temperature: {Math.round(info.temperature)}°C</li>
            <li>Description: {info.description}</li>
            <li>Humidity: {info.humidity}%</li>
            <li>Wind: {info.wind}km/h</li>
            <li>
              <img src={info.icon} alt={info.description} />
            </li>
          </ul>
        </div>
      );
}