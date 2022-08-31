import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

function WeatherForecast({ coordinates }) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState({});

  function apiOneCall() {
    const longitude = coordinates.lon;
    const latitude = coordinates.lat;
    const apiKey = "b5d50f19d48c01a3eb81e79fb9ec7ed2";
    const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiURL).then(handleResponse);
  }

  useEffect(() => {
    setLoaded(false);
  }, [coordinates]);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast mt-4">
        <div className="row">
          {forecastData.map((dailyForecast, index) => {
            if (index < 6 && index !== 0) {
              return (
                <div className="col mt-3" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    apiOneCall();
    return null;
  }
}

export default WeatherForecast;
