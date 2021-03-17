import React from "react";
import axios from "axios";


export default function Weather (){
    function handleResponse (response) {
        alert (`The weather in New York is ${response.data.main.temp}ºC`)
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=5d7a48c45799df1cd3a05ecee722cc4e&units=metric`;
    axios.get(url).then(handleResponse);
    return <h2>   Hello from Weather </h2>;
}