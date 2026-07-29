const mongoose = require("mongoose")
const validator = require("validator")

const UserSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required:true,
    },
    lastName:{
        type: String,
    },
    emailId: {
        type:String,
        lowercase:true,
        required:true,
        unique:true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email address " + value);
            }
        }
    },
    age:{
        type:Number,
    },
    password:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("Password not strong enough " + value);
            }
        }
    },
    gender:{
        type:String,
        validate(value){
            if(!["male","female","other"].includes(value)){
                throw new Error("Gender data is not valid");
            }
        } 
    },
    photoUrl:{
        type:String,
        default:"https://img.icons8.com/?size=100&id=7821&format=png&color=000000",
        validate(value){
            if(!validator.isURL(value)){
                throw new Error("Invalid Photo URL: " + value);
            }
        }
    },
    about:{
        type:String,
        default:"This is a default about of the user"
    },
    skills:{
        type:[String],
    }
},
{
    timestamps:true
});

const User= mongoose.model("User",UserSchema);

module.exports = User;