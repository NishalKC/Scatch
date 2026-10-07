const express = require("express")
const { createProduct, Getallproducts, GetproductsbyId } = require("../controllers/productscontroller")
const protect = require("../middleware/authmiddleware")
const upload = require("../config/multer")
const Route = express.Router()

Route.post("/create", protect,upload.single("image"),createProduct)
Route.get("/getall", protect,Getallproducts)
Route.get("/:id", protect,GetproductsbyId)

module.exports= Route