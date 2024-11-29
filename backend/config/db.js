import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const dbURI = 'mongodb+srv://sahajshukla:VVK8FZqDJeE7ehdf@lat-long.kfl2w.mongodb.net/?retryWrites=true&w=majority&appName=Lat-Long';
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error', err);
        process.exit(1);
    }
};

export default connectDB;



