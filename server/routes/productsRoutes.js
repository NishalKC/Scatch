const express = require("express")
const { createProduct } = require("../controllers/productscontroller")
const protect = require("../middleware/authmiddleware")
const Route = express.Router()

Route.post("/create", protect,createProduct)

module.exports= Route