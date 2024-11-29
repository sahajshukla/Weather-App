import React from 'react';

function WeatherCard({ data }) {
  const { name, main, weather, wind } = data;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <p>{weather[0].description}</p>
      <p><strong>Temperature:</strong> {main.temp}°C</p>
      <p><strong>Humidity:</strong> {main.humidity}%</p>
      <p><strong>Wind Speed:</strong> {wind.speed} m/s</p>
    </div>
  );
}

export default WeatherCard;
