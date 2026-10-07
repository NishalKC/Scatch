const userModel = require("../models/user")
const bcrypt = require("bcrypt")
const generatetoken = require("../utils/generateToken")

module.exports.Register = async (req, res) => {
    try {
        let { name, email, password, contact } = req.body
        if (!name || !email || !password || !contact) {
            return res.status(400).json({ // Bad Request
                message: "all fields are required"
            })
        }
        let user = await userModel.findOne({ email })
        if (user) {
            return res.status(409).json({ // Conflict
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
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        return res.status(201).json({ 
            message: "user created Successfully",
            user: createdUser
        })
    } catch (error) {
        return res.status(500).json({ 
            message: error.message
        })
    }
}

module.exports.login = async (req, res) => {
    try {
        let { email, password } = req.body
        if (!email || !password) return res.status(400).json({ message: "all fields are required" }) 
        
        let existinguser = await userModel.findOne({ email })
        if (!existinguser) return res.status(401).json({ message: "email or password is incorrect" })
        
        let passwordmatch = await bcrypt.compare(password, existinguser.password)
        if (!passwordmatch) return res.status(401).json({ message: "email or password is incorrect" }) 

        let token = generatetoken(existinguser)
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        return res.status(200).json({ 
            message: "login Successfully",
            user: existinguser
        })
    } catch (error) {
        return res.status(500).json({ 
            message: error.message
        })
    }
}

module.exports.logout = (req, res) => {
    res.clearCookie("token")
    return res.status(200).json({ message: "logout Successfully" }) // OK
}

module.exports.Getme= (req, res ) => {
    try {
        let user = req.user
        return res.status(200).json({user})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
