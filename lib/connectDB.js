import mongoose from "mongoose";

export const connectDB = async()=>{
    try{
        if(mongoose.connection.readyState === 1){
            console.log("database already connected")
            return;
        }
        await mongoose.connect(process.env.DB_URI)
        console.log("mongo db connected")
    }catch(err){
        console.log(err)
        console.log("database not connected")
        process.exit(1)
    }
}


