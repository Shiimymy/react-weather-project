import React from "react";
import "./WeatherForecast.css"; 

export default function WeatherForecast() {
    return (
    <div className="WeatherForecast">
      <div className="container text-center">
        <div className="row">
          <div className="col-md">
            <p className="day"> Thu </p>
            <p className="temperature">
              8°/<span className="afternoon">17°</span>C
            </p>
            <p className="emojiDay">☁️</p>
          </div>
          <div className="col-md">
            <p className="day">Fri</p>
            <p className="temperature">
              7°/<span className="afternoon">15°</span>C
            </p>
            <p className="emojiDay">☀️</p>
          </div>
          <div className="col-md">
            <p className="day">Sat</p>
            <p className="temperature">
              {" "}
              8°/<span className="afternoon">16°</span> C
            </p>
            <p className="emojiDay">☁️</p>
          </div>
          <div className="col-md">
            <p className="day">Sun</p>
            <p className="temperature">
              {" "}
              9°/<span className="afternoon">17°</span> C{" "}
            </p>
            <p className="emojiDay">⛅</p>
          </div>
          <div className="col-md">
            <p className="day">Mon</p>
            <p className="temperature">
              {" "}
              10°/<span className="afternoon">17°</span> C
            </p>
            <p className="emojiDay">⛅</p>
          </div>
        </div>
      </div>
    </div>
  );
}
