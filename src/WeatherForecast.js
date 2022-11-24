import axios from "axios";
import React from "react";
import "./WeatherForecast.css"; 

export default function WeatherForecast(props) {

    function handleResponse (response) {
        console.log (response.data)
    }
    console.log(props);

    const apiKey = "db2a1fdd3dct42bo026cc4d34a4f22cb";
    let city = props.city;
    let forecastURL = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

    axios.get (forecastURL).then(handleResponse);

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
