import mongoose from 'mongoose';

const citySchema = new mongoose.Schema({
    city: { type: String, required: true },
    lat: { type: Number, required: true },
    lon: { type: Number, required: true },
});

const City = mongoose.model('City', citySchema);

export default City;

