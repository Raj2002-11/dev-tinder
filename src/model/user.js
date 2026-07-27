const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    firstName:{
        type: String
    },
    lastName:{
        type: String
    },
    emailId: {
        type:String
    },
    age:{
        type:Number
    },
    password:{
        type:String
    },
    gender:{
        type:String
    }
});

const User= mongoose.model("User",UserSchema);

module.exports = User;