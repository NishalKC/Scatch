const express = require("express")
const { Register, login, logout } = require("../controllers/authcontroller")
const Route = express.Router()

Route.post("/register", Register)
Route.post("/login", login)
Route.post("/logout", logout)

module.exports= Route