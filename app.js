const express = require("express");
const path = require("path")
const rutas = require('./src/router/rutas.js')
const rutNoticias =require("./src/router/rutNoticias.js")
const rutComunidad =require("./src/router/rutComunidad.js")

/*inicia la app*/
const app = express();

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.resolve(__dirname,"./public")));

app.use('/', rutas);

app.use("/noticias",rutNoticias)

app.use("/comunidad",rutComunidad)

app.listen(3000, ()=>{
    console.log("el servidor esta corriendo en localhost:3000")
})