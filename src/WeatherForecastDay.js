import React from "react";


export default function WeatherForecastDay(props){
    function day () {
        let date = new Date(props.data.time*1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[day];
    }

    return (
        <div className="WeatherForecastDay">
            <p className="day">{day()}</p>
            <p className="temperature">
            {Math.round(props.data.temperature.minimum)}°/<span className="afternoon">{Math.round(props.data.temperature.maximum)}</span>°C
            </p>
            <img src={props.data.condition.icon_url} alt="SheCodes API icons" className="emojiDay"/>
        </div>
    )
}