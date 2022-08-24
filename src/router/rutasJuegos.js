const express = require("express");
const router = express.Router()
const path = require("path")


router.get("/2Dysim",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/2Dysim.html"))
})

router.get("/simulacionjuego1",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/simulacionjuego1.html"))
})

router.get("/simulacionjuego2",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/simulacionjuego2.html"))
})

router.get("/simulacionjuego3",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/simulacionjuego3.html"))
})

router.get("/simulacionjuego4",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/simulacionjuego4.html"))
})

router.get("/simulacionjuego5",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/simulacionjuego5.html"))
})

router.get("/simulacionjuego6",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/simulacionjuego6.html"))
})

router.get("/simulacionjuego7",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/simulacionjuego7.html"))
})

router.get("/simulacionjuego8",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/simulacionjuego8.html"))
})


router.get("/accion",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/accion.html"))
})

router.get("/accionjuego1",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/accionjuego1.html"))
})

router.get("/accionjuego2",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/accionjuego2.html"))
})

router.get("/accionjuego3",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/accionjuego3.html"))
})

router.get("/accionjuego4",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/accionjuego4.html"))
})

router.get("/accionjuego5",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/accionjuego5.html"))
})

router.get("/accionjuego6",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/accionjuego6.html"))
})

router.get("/accionjuego7",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/accionjuego7.html"))
})

router.get("/accionjuego8",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/accionjuego8.html"))
})

router.get("/aventura",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/aventura.html"))
})

router.get("/aventurajuego1",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/aventurajuego1.html"))
})

router.get("/aventurajuego2",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/aventurajuego2.html"))
})

router.get("/aventurajuego3",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/aventurajuego3.html"))
})

router.get("/aventurajuego4",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/aventura4.html"))
})

router.get("/aventurajuego5",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/aventurajuego5.html"))
})

router.get("/aventurajuego6",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/aventurajuego6.html"))
})

router.get("/aventurajuego7",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/aventurajuego7.html"))
})

router.get("/aventurajuego8",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/aventurajuego8.html"))
})






module.exports = router;