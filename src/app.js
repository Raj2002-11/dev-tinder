const express = require("express");

const app = express();

app.use("/",(req,res)=>{
    res.send("Hello from dashboad");
});


app.use("/hello",(req,res)=>{
    res.send("Hello Hello");
});


app.use("/test",(req,res)=>{
    res.send("Hello From the server");
});

app.listen(3000,()=>{
    console.log("Server is successfull");
    
});