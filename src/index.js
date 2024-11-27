const express = require ("express");
const dotenv = require("dotenv").config();
const dbconnect =require("./db/dbconnect");
const authRoutes= require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const app= express();

dbconnect(); 

//Middleware
app.use(express.json());

//Routes
app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);

// Start the server
 const PORT= process.env.PORT || 5000
 app.listen(PORT, ()=>{
    console.log(`Server is running at port ${PORT}`);
    
 });