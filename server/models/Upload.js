// import mongoose from "mongoose";

// mongoose.connect("mongodb://localhost:27017/main");
const mongoose=require('mongoose')
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://davinder:davinder@cluster0.ed9lgev.mongodb.net/sforstudies");
const ourschema=new mongoose.Schema({
    education:{
        type:String
    },
    email:{
        type:String
    },
    subeducation:{
        type:String
    },
    semester:{
        type:String
    },
    course:{
        type:String
    },
    subject:{
        type:String
    },
    doc:{
        type:String
    },
});
const Notes=new mongoose.model("Notes",ourschema)
module.exports=Notes;
// export signup;   