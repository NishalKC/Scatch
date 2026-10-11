import ProductCard from './ProductCard'

const ProductLoader = ({products}) => {
  return (
    <div className="flex fles-row flex-wrap gap-3 w-full md:gap-8 px-1 md:px-10">
                {products?.map((product) => (
                    <ProductCard key={product._id} product={product}/>
                )
                )}
            </div>
  )
}

export default ProductLoader