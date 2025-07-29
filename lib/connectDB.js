import mongoose from "mongoose";

const DB_URI = process.env.DB_URI
console.log(DB_URI)

export const connectDB = async()=>{
    try{
        if(mongoose.connection.readyState === 1){
            console.log("database already connected")
            return;
        }
        await mongoose.connect(DB_URI)
        console.log("mongo db connected")
    }catch(err){
        console.log(err)
        console.log("database not connected")
        process.exit(1)
    }
}


