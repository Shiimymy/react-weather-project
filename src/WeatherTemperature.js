import React from "react";

export default function WeatherTemperature(props){

    return (
        <span id="todayTemp">
        {props.celsius} °C   
        </span>
    );
    
}