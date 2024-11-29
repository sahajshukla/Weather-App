import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import WeatherCard from './WeatherCard';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  // Function to fetch weather data based on city
  const getWeather = async () => {
    try {
      setError('');
      const response = await axios.get(`http://localhost:5004/weather/${city}`);
      setWeatherData(response.data);  // Set the weather data
    } catch (err) {
      setError('City not found or error fetching data.');
      setWeatherData(null);  // Reset the weather data on error
    }
  };

  // Handle input change
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <div className="search">
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          placeholder="Enter city name"
        />
        <button onClick={getWeather}>Get Weather</button>
      </div>

      {/* Display error message if there is one */}
      {error && <p className="error">{error}</p>}

      {/* Display the weather card if data exists */}
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
}

export default App;

