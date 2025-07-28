import mongoose from "mongoose";

const DB_URI = 'mongodb+srv://hitenunnao:82Gd5dBGoTy9gogO@cluster0.1olr92x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

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


