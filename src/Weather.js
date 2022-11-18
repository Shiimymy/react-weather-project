import React from "react";
import "./Weather.css";

export default function Weather(){
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
                <h1> Dublin </h1>
                <button type="button" id="currentLocation">
                    Current Location Weather
                </button>
                <div id="todayDate">Friday</div>
                <h2>
                    {" "}
                    ⛅ <br />
                    <span id="todayTemp">18</span>
                    °C
                </h2>
                <h6>
                    Humidity : <span id="humidity">10</span> % | Wind :{" "}
                    <span id="wind">2</span> km/h
                </h6>
            </div>
        </div>
    );
}
