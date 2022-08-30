const controller = {}
const path = require('path')

controller.noticiasIndex = (req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/novedades.html"))
}

controller.novedad1 = (req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/novedad1.html"))
}
controller.novedad2 = (req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/novedad2.html"))
}
controller.novedad3 = (req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/novedad3.html"))
}
controller.novedad4 = (req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/novedad4.html"))
}
controller.novedad5 = (req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/novedad5.html"))
}
controller.novedad6 = (req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/novedad6.html"))
}
controller.novedad7 = (req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/novedad7.html"))
}
controller.novedad8 = (req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/novedad8.html"))
}

module.exports = controller