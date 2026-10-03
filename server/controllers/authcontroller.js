const userModel = require("../models/user")
const bcrypt = require("bcrypt")
const generatetoken= require("../utils/generateToken")

module.exports.Register= async (req, res ) => {
    try {
        let {name, email, password , contact}= req.body
        if(!name || !email || !password || !contact){
            return res.json({
                message: "all feild are required"
            })
        }
        let user = await userModel.findOne({email})
        if(user){
            return res.json({
                message: "user already exists"
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        let createdUser = await userModel.create({
            name,
            email,
            password: hashedPassword,
            contact
        })
        let token = generatetoken(createdUser)
        res.cookie("token", token,{
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        return res.json({
            message: "user created Sucesfully",
            user: createdUser
        })
    } catch (error) {
        return res.json({
            message: error.message
        })
    }
}

module.exports.login= async(req, res) => {
    try {
        let {email, password}= req.body
        if(!email || !password) return res.json({message: "all field are required"})
        let existinguser = await userModel.findOne({email})
        if(!existinguser) return res.json({message: "email or password is incorrect"})
        
        await bcrypt.compare(password, existinguser.password, (result) => {
            if(!result) return res.json({message: "email or password is incorrect"})
        })
        let token = generatetoken(existinguser)
        res.cookie("token", token,{
            httpOnly: true,
            secure: true,
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        return res.json({
            message: "login Sucesfully",
            user: existinguser
        })
    } catch (error) {
        return res.json({
            message: error.message
        })
    }
}

module.exports.logout= (req, res ) => {
    res.clearCookie("token")
    return res.json({message: "logout Sucesfully"})
}


