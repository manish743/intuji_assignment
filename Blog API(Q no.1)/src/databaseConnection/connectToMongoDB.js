import mongoose from "mongoose";

const connectToMongoDB = async()=>{
    try {
        await mongoose.connect("mongodb://0.0.0.0:27017/blogs")
        console.log("Application is connected to database successfully");
    } catch (error) {
        console.log("Database connection error", error.message);
    }
}

export default connectToMongoDB;