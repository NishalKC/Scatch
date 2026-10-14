import ProductLoader from "../components/ProductLoader"

const SearchPage = ({products, wishlist, setwishlist, search}) => {
  const filteredProducts = products.filter(item=> item?.name.includes(search) )
  return (
    <div className=" flex flex-col gap-4 py-3 w-full bg-fixed px-0.75">
      <h1 className="w-full px-5 text-2xl text-blue-500 mb-7">Searching for {search}..</h1>
      <ProductLoader products={filteredProducts} wishlist={wishlist} setwishlist={setwishlist} />
    </div>
  )
}

export default SearchPage