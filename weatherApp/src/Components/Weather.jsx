import React, { useState } from "react";
import axios from "axios";
import "./Weather.css"; // Import CSS file

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const API_KEY = "01cf6a06f180f5bdc4bcb92416eb24fa";

  const fetchWeather = async () => {
    if (!city) return;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    try {
      const response = await axios.get(url);
      setWeather(response.data);
    } catch (error) {
      alert("City not found!");
    }
  };

  return (
    <div className="weather-box">
      <h2>Weather App</h2>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {weather && (
  <div className="weather-info">
    <h3>{weather.name}</h3>
    <p>{weather.weather[0].description}</p>
    <div className="weather-sub-info">
      <div className="sub-section">
        <p><strong>Min Temp:</strong> {weather.main.temp_min}°C</p>
        <p><strong>Max Temp:</strong> {weather.main.temp_max}°C</p>
      </div>
      <div className="sub-section">
        <p><strong>Pressure:</strong> {weather.main.pressure} hPa</p>
        <p><strong>Humidity:</strong> {weather.main.humidity}%</p>
      </div>
      <div className="sub-section">
        <p><strong>visibility:</strong> {weather.visibility} m</p>
       
      </div>
      <div className="sub-section">
        <p><strong>Sea Level:</strong> {weather.main.sea_level} hPa</p>
        <p><strong>Ground Level:</strong> {weather.main.grnd_level} hPa</p>
      </div>
    </div>
 
  </div>
)}

    </div>
  );
};

export default Weather;
