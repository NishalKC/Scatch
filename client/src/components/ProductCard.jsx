import { Heart, ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
  return (
    <Link to={`/products/${product._id}`} key={product.id} className="bg-white rounded-xl border border-slate-100 overflow-hidden flex flex-col group relative hover:shadow-md transition-shadow md:h-88 md:w-55 w-35">
                <div className="aspect-square bg-slate-50 flex items-center justify-center relative p-4 h-[50%">
                  {product.discount >0&&(
                    <span className="absolute top-3 left-3 bg-blue-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    -{product.discount}%
                  </span>
                  )}
                  <button className="absolute top-3 right-3 p-1.5 rounded-full bg-white text-slate-400 hover:text-red-500 shadow-sm border border-slate-100 transition-colors">
                    <Heart size={16} />
                  </button>
                  <img src={product.image} alt={product.name} className="text-slate-300 font-medium text-xs bg-slate-100/50 md:px-4 md:py-2 rounded-md md:h-full md:w-full h-30 w-30"></img>
                </div>
                <div className="p-4 flex flex-col flex-1 justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-700 group-hover:text-blue-600 transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-base font-bold text-slate-900">${product.price}</span>
                    <button className="p-2 rounded-lg bg-slate-50 text-slate-600 hover:bg-blue-600 hover:text-white transition-colors">
                      <ShoppingCart size={16} />
                    </button>
                  </div>
                </div>
              </Link>
  )
}

export default ProductCard