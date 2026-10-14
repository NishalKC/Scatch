import { EllipsisVertical, Heart, ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import api from '../services/Api'

const ProductCard = ({ product, setErrormessage, user, wishlist = [], setwishlist }) => {
  const iswishlist = wishlist.some(item => item._id === product._id)
  const isadmin = product?.owner?._id === user?._id

  const Addtocart = async (e) => {
    e.stopPropagation()
    e.preventDefault()
    try {
      await api.put(`products/addtocart/${product._id}`)
    } catch (error) {
      if (error.response) {
        setErrormessage(error?.response?.data?.message)
      } else {
        alert(error.message)
      }
    }
  }

  const AddtoWishlist = async (e) => {
    e.stopPropagation()
    e.preventDefault()
    try {
      if (iswishlist) {
        setwishlist(prev => prev.filter(item => item._id !== product._id))
      } else {
        setwishlist(prev => [...prev, product])
      }
      await api.put(`products/addtowishlist/${product._id}`)
    } catch (error) {
      setErrormessage(error.response?.data?.message)
    }
  }

  return (
    <Link to={`/products/${product._id}`} className="bg-white rounded-xl border border-slate-100 overflow-hidden flex flex-col group relative hover:shadow-md transition-shadow md:h-88 md:w-55 w-35">
      <div className="aspect-square bg-slate-50 flex items-center justify-center relative p-4 h-[50%]">
        {product?.discount > 0 && (
          <span className="absolute top-3 left-3 bg-blue-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">
            -{product?.discount}%
          </span>
        )}
        <button 
          onClick={AddtoWishlist} 
          className={`absolute top-3 right-3 p-1.5 rounded-full shadow-sm border border-slate-100 transition-colors ${
            iswishlist ? 'text-red-500 bg-white' : 'bg-white text-slate-400 hover:text-red-500'
          }`}
        >
          <Heart size={16} fill={iswishlist ? 'red' : 'none'} stroke={iswishlist ? 'red' : 'currentColor'} />
        </button>
        <img src={product.image} alt={product.name} className="text-slate-300 font-medium text-xs bg-slate-100/50 md:px-4 md:py-2 rounded-md md:h-full md:w-full h-30 w-30 object-contain" />
      </div>

      <div className="p-4 flex flex-col flex-1 justify-between gap-3">
        <div className="flex justify-between items-center flex-row w-full gap-2">
          <h3 className="text-sm font-semibold text-slate-700 group-hover:text-blue-600 transition-colors line-clamp-1 flex-1 min-w-0">
            {product.name}
          </h3>
          {isadmin && (
            <button className="text-slate-400 hover:text-slate-600 p-1 shrink-0 relative z-10">
              <EllipsisVertical size={15}/>
            </button>
          )}
        </div>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-base font-bold text-slate-900">${product.price}</span>
          <button onClick={Addtocart} className="p-2 rounded-lg bg-slate-50 text-slate-600 hover:bg-blue-600 hover:text-white transition-colors">
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
