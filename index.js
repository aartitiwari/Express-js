const express = require("express");
const app = express();

const PORT = 3000;

app.get('/',(req,res)=>{
    console.log("works");
    res.send("works")
})

app.listen(PORT,()=>{
    console.log(`express app listening on port  ${PORT}`);
    

  
    app.get('/ram',(req,res)=>{
        console.log("yeh aata kya");
        res.send('ram called')
    })
})