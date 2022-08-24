const express = require("express");
const router = express.Router()
const path = require("path")

router.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/index.html"))
})

router.get("/login",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/iniciarSesion.html"))
})

router.get("/registro",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/registro.html"))
})





module.exports = router;