const mongoose = require("mongoose")

const datos = "mongodb+srv://root:root@cluster0.1m50hxz.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(datos)
  .then(()=>console.log("esta conectado a la base de datos"))
  .catch(()=>console.log("fallo la conexion"))