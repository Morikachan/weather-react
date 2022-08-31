import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css";

function WeatherForecastDay({ data }) {
  function day() {
    const date = new Date(data.dt * 1000);
    const day = date.getDay();

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay text-center">
      <div className="forecast-day">{day()}</div>
      <WeatherIcon iconCode={data.weather[0].icon} size={50} />
      <div className="forecast-temperature">
        <span className="forecast-temperature-max">
          {Math.round(data.temp.max)}°
        </span>
        <span className="forecast-temperature-min">
          {Math.round(data.temp.max)}°
        </span>
      </div>
    </div>
  );
}

export default WeatherForecastDay;
