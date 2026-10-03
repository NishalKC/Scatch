const mongoose = require("mongoose")

const ConnectDb =() => {
    try {
        mongoose.connect(process.env.MONGODB_URI)
        console.log("mongoDb Connected sucesfully");
        
    } catch (error) {
        console.log("mongoDB connection fail");

        process.exit(1)
        
    }
}

module.exports = ConnectDb