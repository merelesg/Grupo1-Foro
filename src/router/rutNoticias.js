const express = require("express");
const router = express.Router()
const path = require("path")


router.get("/novedades",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/novedades.html"))
})

router.get("/novedad1",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/novedad1.html"))
})

router.get("/novedad2",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/novedad2.html"))
})

router.get("/novedad3",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/novedad3.html"))
})

router.get("/novedad4",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/novedad4.html"))
})

router.get("/novedad5",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/novedad5.html"))
})

router.get("/novedad6",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/novedad6.html"))
})

router.get("/novedad7",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/novedad7.html"))
})

router.get("/novedad8",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/novedad8.html"))
})



module.exports = router;