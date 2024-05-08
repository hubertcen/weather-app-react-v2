// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import Search from "../components/Search";

const Card = () => {
  const [weather, setWeather] = useState("");

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${month} ${date} ${year}`;
  };

  return (
    <div className={typeof weather.main != "undefined"}>
      <main>
        <div className="bg-gray-400 w-full rounded-3xl mb-8">
          <Search setWeather={setWeather} />
        </div>
        {typeof weather.main != "undefined" ? (
          <div className="max-w-2xl mx-auto mt-20">
            <div className="bg-gray-600 rounded-t-xl shadow-lg overflow-hidden">
              <div className="px-6 py-4">
                <div className="flex justify-between items-center">
                  <div className="font-semibold text-xl leading-none text-white">
                    {weather.name}, {weather.sys.country}
                  </div>
                </div>
                <div className="font-semibold text-base leading-none text-gray-200">
                  {dateBuilder(new Date())}
                </div>{" "}
                <div className="font-semibold text-base leading-none text-gray-200">
                  {Math.round(weather.main.temp)}°C
                </div>
                <div className="font-semibold text-base leading-none text-gray-200">
                  {weather.weather[0].main}
                </div>
              </div>
            </div>
            <div className="bg-gray-800 px-6 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-semibold text-gray-300">
                    Min Temperature
                  </p>
                  <p className="text-sm font-semibold text-white">
                    {Math.round(weather.main.temp_min)}°C
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-300">
                    Max Temperature
                  </p>
                  <p className="text-sm font-semibold text-white">
                    {Math.round(weather.main.temp_max)}°C
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-300">Wind</p>
                  <p className="text-sm font-semibold text-white">
                    {weather.wind.speed} m/s
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-300">
                    Cloudiness
                  </p>
                  <p className="text-sm font-semibold text-white">
                    {weather.clouds.all} %
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-300">
                    Humidity
                  </p>
                  <p className="text-sm font-semibold text-white">
                    {weather.main.humidity} %
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-300">
                    Pressure
                  </p>
                  <p className="text-sm font-semibold text-white">
                    {weather.main.pressure} hPa
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
};

export default Card;
