const express = require("express");
const app = express();

//load configuration from env file

require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middle to parse json request body
app.use(express.json());

const AaharRoutes = require("./routes/Aahar");

//mount the routes

app.use("/api/v1",AaharRoutes);

app.listen(PORT,()=>{
    console.log("start the server");
})


//connect the database
const dbConnect = require("./config/Database");
dbConnect();

app.get("/",(req,res)=>{
    res.send('<h1> This is Homepage</h1>');
})