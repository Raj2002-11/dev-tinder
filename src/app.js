const express = require("express");
const connectDB = require("./config/database")
const app = express();
const User = require("./model/user");


app.post("/signup",async (req,res)=>{
    
    //creating a new instance of the user model
    const user = new User({
        firstName: "Virat",
        lastName: "Kholi",
        emailId:"Vira@gmail.com",
        password:"Virat123"
    });

    try{await user.save();
    res.send("User Added successfully")}
    catch(err){
        res.status(400).send("Error saving the user " + err.message);
    }
});


connectDB()
.then(()=>{
    console.log("Database connection established....");
    app.listen(3000,()=>{
    console.log("Server is successfull");
});
})
.catch(err=>{
    console.log("Database cannot be connected"); 
});

