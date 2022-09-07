const mongoose = require("mongoose")
const {model,Schema} = mongoose

const datos = "mongodb+srv://root:root@cluster0.1m50hxz.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(datos,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
  .then(()=>console.log("esta conectado a la base de datos"))
  .catch((err)=>console.log(err))

  /*const registroSchema = new Schema({

  }) */