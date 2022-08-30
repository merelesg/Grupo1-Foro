const express = require("express");
const router = express.Router()
const path = require("path")
const controller = require('../controllers/temasactivoscontroller.js')


router.get("/temasactivos",controller.temasactivos)

module.exports = router;