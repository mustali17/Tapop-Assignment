const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    imgpath:{
        type:String,
        required:true
    },
    date:{
        type:Date
    }
});


// create model

const users = new mongoose.model("users",userSchema);

module.exports = users;

