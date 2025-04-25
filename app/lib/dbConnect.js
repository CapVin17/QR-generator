import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connection = {};

async function dbConnect()
{
    if(connection.isConnected){
        console.log("DB already connected.");
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGO_URI);
        connection.isConnected = db.connections[0].readyState;
        console.log("DB connected successfully");
    } catch (error) {
        console.log("DB connection failed", error);
        process.exit(1);
    }
}

export default dbConnect;