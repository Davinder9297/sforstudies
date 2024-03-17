// import mongoose from "mongoose";

// mongoose.connect("mongodb://localhost:27017/main");
const mongoose=require('mongoose')
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://davinder:davinder@cluster0.ed9lgev.mongodb.net/sforstudies");
const ourschema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    image:{
        type:String
    }
});
const user=new mongoose.model("user",ourschema)
module.exports=user;
// export signup;   