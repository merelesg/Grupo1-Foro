const express = require("express");
const router = express.Router()
const path = require("path")


router.get("/temasnuevos",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/temasnuevos.html"))
})

router.get("/temasactivos",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/temasactivos.html"))
})

module.exports = router;