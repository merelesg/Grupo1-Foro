const controller = {}
const path = require('path')


controller.index = (req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/index.html"))
}

controller.login = (req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/iniciarSesion.html"))
}

controller.registro = (req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/registro.html"))
}


module.exports = controller