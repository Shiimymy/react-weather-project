import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay"
import "./WeatherForecast.css"; 

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.city]);

    function handleResponse (response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded){
        return (
        <div className="WeatherForecast">
            <div className="container text-center">
                <div className="row">
                    {forecast.map(function(dailyForecast, index) {
                        if (index < 5) {
                        return (
                            <div className="col-md" key={index}>
                            <WeatherForecastDay data={dailyForecast}/>
                            </div>
                        );
                        } else {
                            return null
                        }
                    })}
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
