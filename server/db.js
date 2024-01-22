import dotenv from "dotenv";
import mongoose from "mongoose";
import { MONGODB_URL } from "./config.js";

dotenv.config()

export async function connectDB() {

    try {
        const db = await mongoose.connect(MONGODB_URL)
        console.log('>>>DB CONNECT')

    } catch (error) {
        console.log('>>> DB NO CONECT')
        console.log(error)
    }
}