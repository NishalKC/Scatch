const express = require("express")
const app = express()

const cookieParser = require("cookie-parser")
const userRoutes= require("./routes/userRoutes")
const productsRoutes = require("./routes/productsRoutes")
const cors = require("cors")

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}))
app.use("/users", userRoutes)
app.use("/products", productsRoutes)

app.get("/", (req, res ) => {
    res.json({
        message: "Scatch is running"
    })
}
)

module.exports= app