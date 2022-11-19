import React from "react";
import FormattedDate from "./FormattedDate.js";

export default function WeatherInfo (props) {
    return (
        <div className="WeatherInfo">
            <h1> {props.data.city} </h1>
            <button type="button" id="currentLocation">
                Current Location Weather
            </button>
            <div id="todayDate"><FormattedDate date={props.data.date} id="date"/></div>
            <h2>
                {" "}
                <img src={props.data.iconUrl} alt="SheCodes API icons" id="todayIcon"/>
                <p>{props.data.description}</p>
                <span id="todayTemp">{props.data.temperature}</span>
                °C
            </h2>
            <h6>
                Humidity : <span id="humidity">{props.data.humidity}</span> % | Wind :{" "}
                <span id="wind">{props.data.wind}</span> km/h
            </h6>
        </div>
            
    )
}