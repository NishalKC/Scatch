const mongoose = require("mongoose")

const userSchema= mongoose.Schema({
    name: {
        type:String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minlength: 6
    },
    avatar: {
        type: String,
        default: ""
    },
    contact: {
        type: Number,
        required: true,
        unique: true,
        minlength:10
    },
    products :[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "products"
    }],
    wishlist:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "products"
    }],
    carts:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "products"
    }] ,
},{timestamps: true})

module.exports= mongoose.model("user", userSchema)