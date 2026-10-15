const productModel  = require("../models/products")
const userModel = require("../models/user")


module.exports.createProduct = async (req, res ) => {
    try {
        let { name, desc, price, discount, category, stock}= req.body
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
            image,
            stock
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
        let products = await productModel.find().populate("owner").sort({updatedAt: -1})
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

module.exports.GetproductsByCategory= async(req, res ) => {
    try {
        let {category}= req.params
        let Products = await productModel.find({category: category})
        .populate("owner", "name email contact")
        .sort({updatedAt: -1})
        return res.status(200).json(Products)

    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

module.exports.Addtocart = async (req, res) => {
    try {
        let { id } = req.params;

        let Product = await productModel.findOne({ _id: id });
        if (!Product) {
            return res.status(404).json({ message: "Product not found" });
        }

        const userId = req.user._id.toString();
        const ownerId = Product.owner._id ? Product.owner._id.toString() : Product.owner.toString();

        if (userId === ownerId) {
            return res.status(403).json({ message: "Own product can't add to cart" });
        }

        let user = await userModel.findOne({ _id: req.user._id });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const productAlreadyInCart = user.carts.some(cartItemId => cartItemId.toString() === Product._id.toString());
        if (productAlreadyInCart) {
            return res.status(400).json({ message: "Product already in cart" });
        }

        user.carts.push(Product._id);
        await user.save();

        return res.status(200).json({
            message: "products is added to cart",
            user
        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports.AddtoWishlist= async (req, res)=>{
    try {
        let {id}= req.params
        let product = await productModel.findOne({_id: id})
        let user = await userModel.findOne({_id: req.user._id})
        if(!product) return res.status(404).json({message: "Product not found"})

        let isWishlisted = user.wishlist.includes(product._id);
        
        if (isWishlisted) {
            user.wishlist = user.wishlist.filter(item => !item.equals(product._id));
            await user.save();
            
            return res.status(200).json({ 
                message: "Removed from wishlist successfully", 
                product ,
                user
            });
        } else {
            user.wishlist.push(product._id);
            await user.save(); 
            
            return res.status(200).json({ 
                message: "Added to wishlist successfully", 
                product ,
                user
            });
        }

    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

