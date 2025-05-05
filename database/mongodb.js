import mongoose from "mongoose";
import { DB_URI,NODE_ENV } from "../config/env.js";
if(!DB_URI){
    throw new("please define db uri")
}

const connectTodatabase=async()=>{
    try{
        await mongoose.connect(DB_URI);
        console.log('connected')
    }catch(error){
        console.log('error connecting database')
        process.exit(1)
    }

}

export default connectTodatabase;