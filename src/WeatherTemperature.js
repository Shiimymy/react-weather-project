import React, {useState} from "react";

export default function WeatherTemperature(props){
    const [unit, setUnit]= useState("celsius");

    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

     function convertToCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === "celsius") {
    return (
        <span id="todayTemp">{props.celsius}
            <span className="unit">
                °C
            </span> |  <span className="unit">
                <a href="/" className="infoLinks" onClick={convertToFahrenheit}>°F</a>
            </span>
        </span>
    );
    }  else {
        let fahrenheit = (props.celsius * 9/5) + 32;

        return (
        <span id="todayTemp">
            {Math.round(fahrenheit)}
            <span className="unit">
                <a href="/" className="infoLinks" onClick={convertToCelsius}>°C</a>
            </span> |  <span className="unit">
                °F
            </span>
        </span>
    );
    }
}