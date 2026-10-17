import ProductCard from './ProductCard'

const ProductLoader = ({products, setErrormessage, user, wishlist, setwishlist, setProducts}) => {
  return (
    <div className="flex fles-row flex-wrap gap-3  w-full md:gap-5  md:px-5">
        {products?.length >0 ? (
            <>
            {products?.map((product) => (
                <ProductCard  key={product._id} user={user} setwishlist={setwishlist} wishlist={wishlist} product={product} setErrormessage={setErrormessage} setProducts={setProducts} />
                )
            )}
        </>
        ):(
            <h1 className=' text-[16px] text-zinc-600 px-5 fixed min-w-full'>Products not available  </h1>
        )}
        </div>
  )
}

export default ProductLoader