// routes/weatherRoutes.js

import express from 'express';
import Weather from '../models/Weather.js';

const router = express.Router();

// POST route to save weather data
router.post('/weather', async (req, res) => {
  const { city, temperature, description } = req.body;

  try {
    const newWeather = new Weather({
      city,
      temperature,
      description,
    });
    await newWeather.save();
    res.status(201).json({ message: 'Weather data saved.' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving weather data.', error });
  }
});

// GET route to get weather data by city
router.get('/weather/:city', async (req, res) => {
  const { city } = req.params;

  try {
    const weather = await Weather.findOne({ city });
    if (!weather) {
      return res.status(404).json({ message: 'City not found.' });
    }
    res.status(200).json(weather);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching weather data.', error });
  }
});

export default router;
