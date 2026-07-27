const mongoose = require("mongoose");

const connectDB = async() =>{
await mongoose.connect("mongodb+srv://admin:8xlmGmVLvhZglkVY@cluster0.u45xsqz.mongodb.net/DevTinder");
};

module.exports = connectDB;

