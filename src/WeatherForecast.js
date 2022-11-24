import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay"
import "./WeatherForecast.css"; 

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse (response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded){
        console.log(forecast);
        return (
        <div className="WeatherForecast">
        <div className="container text-center">
            <div className="row">
            <div className="col-md">
            <WeatherForecastDay data={forecast[0]}/>
            </div>
            <div className="col-md">
                <p className="day">{forecast[1].time}</p>
                <p className="temperature">
                {Math.round(forecast[1].temperature.minimum)}°/<span className="afternoon">{Math.round(forecast[1].temperature.maximum)}</span>°C
                </p>
                <p className="emojiDay">☀️</p>
            </div>
            <div className="col-md">
                <p className="day">{forecast[2].time}</p>
                <p className="temperature">
                {" "}
                {Math.round(forecast[2].temperature.minimum)}°/<span className="afternoon">{Math.round(forecast[2].temperature.maximum)}</span>°C
                </p>
                <p className="emojiDay">☁️</p>
            </div>
            <div className="col-md">
                <p className="day">{forecast[3].time}</p>
                <p className="temperature">
                {" "}
                {Math.round(forecast[3].temperature.minimum)}°/<span className="afternoon">{Math.round(forecast[3].temperature.maximum)}</span>°C{" "}
                </p>
                <p className="emojiDay">⛅</p>
            </div>
            <div className="col-md">
                <p className="day">{forecast[4].time}</p>
                <p className="temperature">
                {" "}
                {Math.round(forecast[4].temperature.minimum)}°/<span className="afternoon">{Math.round(forecast[4].temperature.maximum)}</span>°C
                </p>
                <p className="emojiDay">⛅</p>
            </div>
            </div>
        </div>
        </div>
        )
    } else {
        const apiKey = "db2a1fdd3dct42bo026cc4d34a4f22cb";
        let city = props.city;
        let forecastURL = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

        axios.get (forecastURL).then(handleResponse);
        return null;
} }
