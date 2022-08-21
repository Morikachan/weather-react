import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function Weather({ data }) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>{data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={data.date} />, {data.description}
            </li>
            <li>
              Humidity: {data.humidity}%, Wind: {data.wind} m/h
            </li>
          </ul>
        </div>
        <div className="col-6">
          <div className="temperature-container d-flex justify-content-end align-items-center">
            <WeatherIcon iconCode={data.icon} />{" "}
            <span className="temperature">{data.temperature}</span>
            <span className="units">°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
