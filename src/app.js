const express = require("express");
const connectDB = require("./config/database")
const app = express();
const User = require("./model/user");

app.use(express.json());  // handing middleware

app.post("/signup",async (req,res)=>{

    // creating a new instance of the user model
    const user = new User(req.body);

    try{
        await user.save();
    res.send("User Added successfully")}
    catch(err){
        res.status(400).send("Error saving the user " + err.message);
    }


});


//get user by email
app.get("/user",async (req,res)=>{
    const UserEmail =req.body.emailId; 

    try{

        const user = await User.findOne({emailId: UserEmail});
        res.send(user);
        // const users = await User.find({emailId: UserEmail});
        // if(users.length === 0){
        //     res.status(404).send("User not found")
        // }
        // else{
        //     res.send(users)
        // }
    }
    catch(err){
        res.status(400).send("Something went wrong");
    }
 
})

//get user feed 
app.get("/feed", async (req,res)=>{

    try{
        const users = await User.find({});
        res.send(users);
    }
    catch(err){
        res.status(404).send("Something")
    }
})

// get user by id
app.get("/id", async (req,res)=>{
    try{
    const userId = req.body._id;

    const user = await User.findById(userId);
    if(!user){
        res.status(400).send("User not found!!")
    }
    else{
        res.send(user);
    }
        
    }
    catch(err){
        res.status(404).send("Something went wrong");
    }
})

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

