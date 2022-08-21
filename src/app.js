const express = require("express");
const app = express();
const path = require("path")

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.resolve(__dirname,"../public")))

app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/index.html"))
})

app.get("/login",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/iniciarSesion.html"))
})

app.get("/registro",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/registro.html"))
})

app.get("/2Dysim",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/2Dysim.html"))
})

app.get("/simulacionjuego1",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/simulacionjuego1.html"))
})

app.get("/simulacionjuego2",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/simulacionjuego2.html"))
})

app.get("/simulacionjuego3",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/simulacionjuego3.html"))
})

app.get("/simulacionjuego4",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/simulacionjuego4.html"))
})

app.get("/simulacionjuego5",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/simulacionjuego5.html"))
})

app.get("/simulacionjuego6",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/simulacionjuego6.html"))
})

app.get("/simulacionjuego7",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/simulacionjuego7.html"))
})

app.get("/simulacionjuego8",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/simulacionjuego8.html"))
})


app.get("/accion",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/accion.html"))
})

app.get("/accionjuego1",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/accionjuego1.html"))
})

app.get("/accionjuego2",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/accionjuego2.html"))
})

app.get("/accionjuego3",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/accionjuego3.html"))
})

app.get("/accionjuego4",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/accionjuego4.html"))
})

app.get("/accionjuego5",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/accionjuego5.html"))
})

app.get("/accionjuego6",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/accionjuego6.html"))
})

app.get("/accionjuego7",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/accionjuego7.html"))
})

app.get("/accionjuego8",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/accionjuego8.html"))
})

app.get("/aventura",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/aventura.html"))
})

app.get("/aventurajuego1",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/aventurajuego1.html"))
})

app.get("/aventurajuego2",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/aventurajuego2.html"))
})

app.get("/aventurajuego3",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/aventurajuego3.html"))
})

app.get("/aventurajuego4",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/aventura4.html"))
})

app.get("/aventurajuego5",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/aventurajuego5.html"))
})

app.get("/aventurajuego6",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/aventurajuego6.html"))
})

app.get("/aventurajuego7",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/aventurajuego7.html"))
})

app.get("/aventurajuego8",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/aventurajuego8.html"))
})


app.get("/novedades",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/novedades.html"))
})

app.get("/novedad1",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/novedad1.html"))
})

app.get("/novedad2",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/novedad2.html"))
})

app.get("/novedad3",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/novedad3.html"))
})

app.get("/novedad4",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/novedad4.html"))
})

app.get("/novedad5",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/novedad5.html"))
})

app.get("/novedad6",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/novedad6.html"))
})

app.get("/novedad7",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/novedad7.html"))
})

app.get("/novedad8",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/novedad8.html"))
})


app.get("/temasnuevos",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/temasnuevos.html"))
})

app.get("/temasactivos",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/temasactivos.html"))
})




app.listen(3000, ()=>{
    console.log("el servidor esta corriendo en localhost:3000")
})