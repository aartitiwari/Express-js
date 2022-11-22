/* Router level middlewares for clean routing of paths*/

const express = require('express');
const router = express.Router();

router.get('/get',(req,res)=>{
    console.log("Routed to get number one route");
    res.send("get number one router");

})



module.exports = router;



