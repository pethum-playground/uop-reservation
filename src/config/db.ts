import mongoose from 'mongoose';

const MONGO_URI = 'mongodb://localhost:27017/uop-reservation';

mongoose.connect(MONGO_URI)
    .then(() => console.log('Successfully connected to MongoDB'))
    .catch(error => console.error('Error connecting to MongoDB', error));
