/* eslint-disable no-unused-vars */
import SideBar from "../components/SideBar"
import  ProductCard from "../components/ProductCard"
import ProductLoader from "../components/ProductLoader"

const Shop = ({products,user}) => {
        
  return (
    <div className="flex md:px-3">
        <div className="w-1/3">
        <SideBar />
        </div>
        <div className="flex flex-col  gap-5 md:gap-10 py-3 items-center">
            <h1 className="text-2xl md:text-4xl text-blue-400 px-5">All Products</h1>
            <ProductLoader products={products}/>
        </div>
    </div>
  )
}

export default Shop