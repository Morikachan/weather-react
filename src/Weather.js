import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";
import { Oval } from "react-loader-spinner";

export default function Weather({ defaultCity }) {
  const [weatherData, setData] = useState({ ready: false });
  const [city, setCity] = useState(defaultCity);

  function apiCall() {
    const apiKey = "b5d50f19d48c01a3eb81e79fb9ec7ed2";
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&units=metric&appid=${apiKey}`;
    axios.get(apiURL).then(setWeatherData);
  }

  function cityUpdate(event) {
    setCity(event.target.value);
  }

  function hundleSubmit(event) {
    event.preventDefault();
    apiCall();
  }

  function setWeatherData(response) {
    setData({
      ready: true,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form onSubmit={hundleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  className="form-control search-input"
                  onChange={cityUpdate}
                />
              </div>
              <div className="col-3 p-0">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>

          <WeatherInfo data={weatherData} />
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
      </div>
    );
  } else {
    apiCall();
    return (
      <div className="d-flex justify-content-center  ">
        <Oval
          height={80}
          width={80}
          color="#7c73e6"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#7c73e6"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
  }
}
