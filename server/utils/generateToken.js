const jwt = require("jsonwebtoken")

const generatetoken = (user) => {
    let token = jwt.sign({
        email: user.email,
        id: user._id
    },process.env.JWT_SCERET,
{
    expiresIn: "7d"
})
    return token
}

module.exports= generatetoken
