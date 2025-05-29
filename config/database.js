

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // MongoDB connection string - replace with your MongoDB URI
        const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://hardikarorah:C78bWzVq0g2UvXb8@cluster0.qad17pa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
        
        const conn = await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;

