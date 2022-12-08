const express = require('express');
const app = express();
const path = require('path');
const frontRouter = require('./routes/front/index')
app.set("view engine","ejs")
app.use("/static",express.static(path.join(__dirname,"public")))
app.use("/libs",express.static(path.join(__dirname,"node_modules")))
app.use("/",frontRouter)


app.listen(3000,(err)=>{
    console.log("Listening");
})