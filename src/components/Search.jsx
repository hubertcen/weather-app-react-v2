// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";

const api = {
  key: "175f50ac9e5c411302cb91bb59fb5df8",
  url: "https://api.openweathermap.org/data/2.5/",
};

// eslint-disable-next-line react/prop-types
const Search = ({ setWeather }) => {
  const [query, setQuery] = useState("");

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.url}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
        });
    }
  };
  return (
    <div className="h-full relative flex items-center justify-between p-2 font-light">
      <input
        type="text"
        className="p-1 flex-1 bg-transparent outline-none placeholder:text-white"
        placeholder="Search for a city"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        onKeyDown={search}
      />
    </div>
  );
};

export default Search;
