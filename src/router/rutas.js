const express = require("express");
const router = express.Router()
const path = require("path")
const controller = require('../controllers/iniciocontroller.js')

router.get("/",controller.index)

router.get("/login", controller.login)

router.get("/registro", controller.registro)







module.exports = router;