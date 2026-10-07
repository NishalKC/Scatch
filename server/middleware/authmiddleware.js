const jwt = require("jsonwebtoken")
const userModel = require("../models/user")

const isloggined = async (req, res , next)=>{
    try{
        let token = req.cookies.token
        if(!token || token ==="") return res.status(401).json({message: "You must logn first"})
        let encode = jwt.verify(token , process.env.JWT_SCERET)
        req.user= await userModel.findOne({_id: encode.id}).select("-password");
        next()
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}
module.exports= isloggined