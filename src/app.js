const express = require("express");
const app = express();
const path = require("path")
const rutas = require('./router/rutas.js')
const rutasJuegos =require("./router/rutasJuegos.js")
const rutNoticias =require("./router/rutNoticias.js")
const rutComunidad =require("./router/rutComunidad.js")


app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.resolve(__dirname,"../public")));

app.use('/', rutas);

app.use("/juegos", rutasJuegos)

app.use("/noticias",rutNoticias)

app.use("/comunidad",rutComunidad)

app.listen(3000, ()=>{
    console.log("el servidor esta corriendo en localhost:3000")
})