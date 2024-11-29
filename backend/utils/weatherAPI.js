// utils/weatherAPI.js
import axios from 'axios';

// OpenWeather API key
const API_KEY = 'dcafa26fdc1a6b5a63108f303b55b078'; // Replace with your actual OpenWeather API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const getWeatherData = async (lat, lon) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                lat: lat,
                lon: lon,
                appid: API_KEY,
                units: 'metric', // 'metric' for Celsius, 'imperial' for Fahrenheit
            },
        });
        return response.data; // Return weather data from OpenWeather
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw new Error('Unable to fetch weather data');
    }
};

export default getWeatherData;

