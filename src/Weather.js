import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate.js"

export default function Weather(props){
    const [weatherData, setWeatherData] = useState({ready:false});
    function handleResponse (response){
        setWeatherData ({
            ready : true,
            city : response.data.city,
            date : new Date(response.data.time*1000),
            temperature : Math.round(response.data.temperature.current),
            humidity : response.data.temperature.humidity,
            wind : Math.round(response.data.wind.speed),
            iconName: response.data.condition.icon,

        })
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <div className="Form">
                    <div>
                        <form id="search-form">
                        <input
                            type="search"
                            name="location"
                            id="cityName"
                            required
                            placeholder="New City ..."
                        />
                        <button type="submit" id="submit">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-search"
                            viewBox="0 0 16 16"
                            >
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                            Change
                        </button>
                        </form>
                    </div>
                </div>
                <div className="Header">
                    <h1> {weatherData.city} </h1>
                    <button type="button" id="currentLocation">
                        Current Location Weather
                    </button>
                    <div id="todayDate">Last Update on <FormattedDate date={weatherData.date}/></div>
                    <h2>
                        {" "}
                        <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png" alt="Weather Icon"></img>
                        <br />
                        <span id="todayTemp">{weatherData.temperature}</span>
                        °C
                    </h2>
                    <h6>
                        Humidity : <span id="humidity">{weatherData.humidity}</span> % | Wind :{" "}
                        <span id="wind">{weatherData.wind}</span> km/h
                    </h6>
                </div>
            </div>
        );
    } else {
        const apiKey = "db2a1fdd3dct42bo026cc4d34a4f22cb";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        return (
            <div className="Loading">
            <div className="Form">
                    <div>
                        <form id="search-form">
                        <input
                            type="search"
                            name="location"
                            id="cityName"
                            required
                            placeholder="New City ..."
                        />
                        <button type="submit" id="submit">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-search"
                            viewBox="0 0 16 16"
                            >
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                            Change
                        </button>
                        </form>
                    </div>
                </div>
            <h2>Loading ...</h2>
            </div>
        )
    }

}
