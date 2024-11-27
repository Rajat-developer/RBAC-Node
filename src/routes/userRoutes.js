const express = require("express");
const verifyToken = require("../middlewares/authMiddleware");
const router =express.Router();
const authorizeRoles = require("../middlewares/roleMiddleware")


//only admin can access this route 
router.get("/admin", verifyToken, authorizeRoles("admin"), (req,res)=>{
    res.json({message: "welcome admin"})
});

//only admin and manager can access this router 
router.get("/manager", verifyToken, authorizeRoles("admin", "manager") ,(req,res)=>{
    res.json({message: "welcome  manager"})
});

//all can access this router
router.get("/user", verifyToken, authorizeRoles("admin", "manager","user"), (req,res)=>{
    res.json({message: "welcome user"})
});

module.exports= router;