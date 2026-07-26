const express = require("express");

const app = express();

app.use(
    "/user",
    (req,res,next)=>{
    console.log("Handling Route 1!!")
    next();
    // res.send("Resolve 1!!")
    },
    (req,res,next)=>{
    console.log("Handling Route 2!!")
    // res.send("Resolve 2!!")
    next();
    },
    (req,res,next)=>{
    console.log("Handling Route 3!!")
    res.send("Resolve 3!!")
    next()
    }
)

app.listen(3000,()=>{
    console.log("Server is successfull");
    
});