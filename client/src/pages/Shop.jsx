import SideBar from "../components/SideBar"
import  ProductCard from "../components/ProductCard"

const Shop = ({products, user}) => {

    const  AllProducts = products?.filter((p)=> p?.owner._id !== user._id)
    console.log("all",AllProducts);
    
  return (
    <div className="flex ">
        <SideBar />
        <div className="flex flex-col gap-10 py-3 text-center items-center">
            <h1 className="text-4xl text-blue-400 px-5">All Products</h1>
            <div className="flex flex-wrap gap-8 px-10">
                {AllProducts?.map((product) => (
                    <ProductCard key={product._id} product={product}/>
                )
                )}
            </div>
        </div>
    </div>
  )
}

export default Shop