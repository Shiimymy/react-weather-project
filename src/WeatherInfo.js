import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo (props) {
    return (
        <div className="WeatherInfo">
            <h1> {props.data.city} </h1>
            <div id="todayDate"><FormattedDate date={props.data.date} id="date"/></div>
            <h2>
                {" "}
                <img src={props.data.iconUrl} alt="SheCodes API icons" id="todayIcon"/>
                <p>{props.data.description}</p>
                <WeatherTemperature celsius={props.data.temperature}/>
            </h2>
            <h6>
                Humidity : <span id="humidity">{props.data.humidity}</span> % | Wind :{" "}
                <span id="wind">{props.data.wind}</span> km/h
            </h6>
        </div>
            
    )
}