import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connection = mongoose.connect(process.env.MONGO_URI || "mongodb://user:pass@localhost:54413", {
    useUnifiedTopology: true,
} as ConnectOptions);

if (!connection) {
    console.log('Error connecting to MongoDB');
}

export default connection;