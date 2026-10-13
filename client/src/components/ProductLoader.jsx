import ProductCard from './ProductCard'

const ProductLoader = ({products, setErrormessage, user}) => {
  return (
    <div className="flex fles-row flex-wrap gap-3 w-full md:gap-5 px-1 md:px-8">
        {products?.length >0 ? (
            <>
            {products?.map((product) => (
                <ProductCard key={product._id} user={user} product={product} setErrormessage={setErrormessage} />
                )
            )}
        </>
        ):(
            <h1 className=' text-[16px] text-zinc-600 px-5 '>Products not available  </h1>
        )}
        </div>
  )
}

export default ProductLoader