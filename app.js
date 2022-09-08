const express = require("express");
const path = require("path")
const rutas = require('./src/router/rutas.js')
const rutNoticias =require("./src/router/rutNoticias.js")
const rutComunidad =require("./src/router/rutComunidad.js")
require("./config/db.js")
const register= require('./src/router/register')
const bd=require('body-parser');
const { json } = require("stream/consumers");

//inicia la app//
const app = express();

app.set('views', path.join(dirname, 'views'));

app.use(bd.json())
app.use(bd.urlencoded({ extended: false }))


app.use(express.static(path.resolve(dirname,"./public")));

app.use('/', rutas);

///register
app.post('/register',(req,res)=>{
        let info=req.body
        console.log(info);
        res.send(JSON.stringify(info) )
})

/////



app.use("/noticias",rutNoticias)

app.use("/comunidad",rutComunidad)



app.listen(3000, ()=>{
    console.log("el servidor esta corriendo en localhost:3000")
})