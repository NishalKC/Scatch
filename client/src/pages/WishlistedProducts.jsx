import ProductLoader from "../components/ProductLoader"

const WishlistedProducts = ({Wishlist, setwishlist}) => {
  return (
    <div className=" flex flex-col gap-4 py-3">
        <h1 className="text-3xl text-blue-500 w-full px-7">My Wishlist</h1>
        <ProductLoader products={Wishlist} wishlist={Wishlist} setwishlist={setwishlist}/>
    </div>
  )
}

export default WishlistedProducts