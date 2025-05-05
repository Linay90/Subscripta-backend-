import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type: string,
        required:[true,"user is required"],
        trim:true,
        minLength:2,
        maxLength:50,
    },

    email:{
        type: string,
        required:[true,'user email is required'],
        unique:true,
        trim:true,
        lowercase:true,
        match:[]
    }
})