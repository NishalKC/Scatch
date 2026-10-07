const productModel  = require("../models/products")
const userModel = require("../models/user")


module.exports.createProduct = async (req, res ) => {
    try {
        let { name, desc, price, discount, category}= req.body
        if(!name || !desc || !price || !category) return res.status(401).json({message: "name, category, price and desc are required"})
        let image = ""
        if(req.file) image = req.file.path
        let user = await userModel.findOne({_id: req.user._id})
        let product = await productModel.create({
            name,
            desc, 
            price,
            category,
            discount,
            owner: req.user._id,
            image
        })
        user.products.push(product._id)
        await user.save()

        return res.status(201).json({
            message: "Products created sucesfully",
            product
        })
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

module.exports.Getallproducts= async (req, res )=>{
    try{
        let products = await productModel.find().populate("owner")
        return res.status(200).json(products)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

module.exports.GetproductsbyId= async (req, res)=>{
    try{
        let {id} = req.params
        let product= await productModel.findOne({_id: id}).populate("owner", "name email contact")
        return res.status(200).json(product)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}