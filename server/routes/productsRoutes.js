const express = require("express")
const { createProduct, Getallproducts, GetproductsbyId, GetproductsByCategory } = require("../controllers/productscontroller")
const protect = require("../middleware/authmiddleware")
const upload = require("../config/multer")
const Route = express.Router()

Route.post("/create", protect,upload.single("image"),createProduct)
Route.get("/getall", protect,Getallproducts)
Route.get("/:id", protect,GetproductsbyId)
Route.get("/category/:category", protect,GetproductsByCategory)

module.exports= Route