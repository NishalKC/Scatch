const express = require("express")
const { Register, login, logout, Getme } = require("../controllers/authcontroller")
const protect=  require("../middleware/authmiddleware")
const Route = express.Router()

Route.post("/register", Register)
Route.post("/login", login)
Route.post("/logout", logout)
Route.get("/getme", protect,Getme)

module.exports= Route