import mongoose from 'mongoose';
import colors from 'colors';
// import userModel from '../models/user';

const connectToMongoDB = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Connected to MongoDB ${connection.host}`.bgGreen);

        // Create a new user if not already exists
        // const user = new userModel({

        //     name: 'user',
        //     email: 'user@example.com',
        //     password: 'password123',
        // })
        // await user.save()
        // console.log("user is created successfully".bgMagenta);

    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`.bgRed);
    }
};

export default connectToMongoDB;