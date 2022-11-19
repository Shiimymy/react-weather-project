import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props){
    const [weatherData, setWeatherData] = useState({ready:false});
    const [city, setCity] = useState(props.defaultCity);
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

    function search () {
        const apiKey = "db2a1fdd3dct42bo026cc4d34a4f22cb";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit (event) {
        event.preventDefault();
        search();
    }

    function handleCityChange (event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <div className="Form">
                        <form id="search-form" onSubmit={handleSubmit}>
                        <input
                            type="search"
                            name="location"
                            id="cityName"
                            required
                            placeholder="New City ..."
                            onChange={handleCityChange}
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
                <WeatherInfo data={weatherData}/>
            </div>
        )
    } else {
        search();
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
