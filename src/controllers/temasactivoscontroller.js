const controller = {}
const path = require('path')


controller.temasactivos = (req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/temasactivos.html"))
}


module.exports = controller