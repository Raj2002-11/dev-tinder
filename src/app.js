const express = require("express");

const app = express();

app.get("/user",(req,res)=>{
    res.send({firstName: "Raj",lastname:"Dwivedi"})
})

app.post("/user",(req,res)=>{
   res.send("Data Saved succesfull");
    
})

app.delete("/user",(req,res)=>{
    res.send("Deleted Succesfull")
})

app.use("/test",(req,res)=>{
    res.send("Hello From the server");
});



app.listen(3000,()=>{
    console.log("Server is successfull");
    
});