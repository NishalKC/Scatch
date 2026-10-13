const express = require("express")
const { createProduct, Getallproducts, GetproductsbyId, GetproductsByCategory, Addtocart } = require("../controllers/productscontroller")
const protect = require("../middleware/authmiddleware")
const upload = require("../config/multer")
const Route = express.Router()

Route.post("/create", protect,upload.single("image"),createProduct)
Route.get("/getall",Getallproducts)
Route.get("/:id", protect,GetproductsbyId)
Route.get("/category/:category", protect,GetproductsByCategory)
Route.put("/addtocart/:id", protect, Addtocart)

module.exports= Route