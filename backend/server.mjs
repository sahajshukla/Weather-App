import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import City from './models/City.js';  // Import the City model
import getWeatherData from './utils/weatherAPI.js';  // Import the weather API helper
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};

// Connect to MongoDB
connectDB();
app.use(cors());
// Weather route
app.get('/weather/:city', async (req, res) => {
    const { city } = req.params;
    console.log(`Looking for city: ${city}`);

    try {
        // Fetch city data from MongoDB
        const cityData = await City.findOne({ city: { $regex: new RegExp('^' + city + '$', 'i') } });

        if (!cityData) {
            console.log('City not found in database');
            return res.status(404).send('City not found in database');
        }

        // Log found city data
        console.log(`Found city data: ${JSON.stringify(cityData)}`);

        // Fetch weather data using lat and lon from MongoDB
        const weatherData = await getWeatherData(cityData.lat, cityData.lon);

        // Send weather data in response
        res.json(weatherData);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        res.status(500).send('Error fetching weather data');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
