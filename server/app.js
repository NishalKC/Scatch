const cookieParser = require("cookie-parser")
const express = require("express")
const app = express()
const userRoutes= require("./routes/userRoutes")

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.use("/users", userRoutes)

app.get("/", (req, res ) => {
    res.json({
        message: "Scatch is running"
    })
}
)

module.exports= app