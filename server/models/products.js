const mongoose = require("mongoose")

const productsSchema =  mongoose.Schema({
    name: {
        type: String,
        required:true,
        trim: true
    },
    desc: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    discount:{
        type: Number,
        default: 0
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    image:{
        type: String,
        default: ""
    },
    category:{
        type: String,
        required: true,
        trim: true
    }
},{timestamps: true})

module.exports= mongoose.model("products", productsSchema)