const Dotenv= require("dotenv")
Dotenv.config()

const app = require("./app")
const connectDB = require("./config/db")
connectDB()


const port = process.env.PORT
app.listen(port, () => {
    console.log("server is running at port :", port);  
}
)