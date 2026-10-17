import { EllipsisVertical, Heart, ShoppingCart, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import api from '../services/Api'
import { useState } from 'react'

const ProductCard = ({ product, setErrormessage, user, wishlist = [], setwishlist , setProducts}) => {
  const iswishlist = wishlist.some(item => item._id === product._id)
  const isadmin = product?.owner?._id === user?._id
  const [ShowAction, setShowAction] = useState(false)
 
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

  const handleActions = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setShowAction(!ShowAction)
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

  const handledelete= async (e) => {
    e.stopPropagation()
    e.preventDefault()
    setShowAction(false)
    try{

      await api.delete(`products/delete/${product._id}`)
      setProducts(prev => prev.filter(item=> item._id !== product._id ))
    }catch(error){
      alert(error?.response?.data?.message)
    }
  }

  return (
    <Link 
      to={`/products/${product._id}`} 
      className="mt-3 bg-white rounded-xl border border-slate-100 overflow-hidden flex flex-col group relative hover:shadow-md transition-shadow md:max-h-fit md:w-55 w-35"
    >
      {ShowAction && (
        <div 
          className="fixed inset-0 z-10" 
          onClick={(e) => { e.stopPropagation(); e.preventDefault(); setShowAction(false); }} 
        />
      )}

      <div className="aspect-square bg-slate-50 flex items-center justify-center relative p-4 h-[50%]">
        {product?.discount > 0 && (
          <span className="absolute top-3 left-3 bg-blue-500 text-white text-[10px] font-bold px-2 py-0.5 rounded z-10">
            -{product?.discount}%
          </span>
        )}
        
        <button 
          onClick={AddtoWishlist} 
          className={`absolute top-3 right-3 p-1.5 rounded-full shadow-sm border border-slate-100 transition-colors z-10 ${
            iswishlist ? 'text-red-500 bg-white' : 'bg-white text-slate-400 hover:text-red-500'
          }`}
        >
          <Heart size={16} fill={iswishlist ? 'red' : 'none'} stroke={iswishlist ? 'red' : 'currentColor'} />
        </button>
        
        <img 
          src={product.image} 
          alt={product.name} 
          className="text-slate-300 font-medium text-xs bg-slate-100/50 md:px-4 md:py-2 rounded-md md:h-full md:w-full h-30 w-30 object-contain" 
        />
      </div>

      <div className="p-4 flex flex-col flex-1 gap-3 relative">
        <div className="flex justify-between items-center flex-row w-full gap-2">
          <h3 className="text-sm font-semibold text-slate-700 group-hover:text-blue-600 transition-colors line-clamp-1 flex-1 min-w-0">
            {product.name}
          </h3>
          
          {isadmin ? (
            <div className="relative z-20 ">
              <button 
                onClick={handleActions} 
                className="text-slate-400 hover:text-slate-600 p-3   rounded-full transition-colors"
              >
                {ShowAction ? <X size={15}/>: <EllipsisVertical size={15}/>}
              </button>
              
              {ShowAction && (
                <div className="absolute right-0 top-7 bg-white border border-slate-200 shadow-lg rounded-lg py-1 w-24 flex flex-col text-xs text-slate-700 font-medium header-dropdown">
                  <Link to={`/update/${product?._id}`}  
                    className="text-left px-3 py-1.5 hover:bg-slate-50 transition-colors"
                  >
                    Update
                  </Link>
                  <button  
                  onClick={handledelete}
                    className="text-left px-3 py-1.5 hover:bg-slate-50 text-red-500 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          ):(
            ""
          )}
        </div>

        <p className="text-[13px] text-zinc-500 line-clamp-2">{product?.desc}</p>
        
        <div className="flex items-center justify-between mt-auto pt-2">
          <span className="text-base font-bold text-slate-900">\${product.price}</span>
          <button 
            onClick={Addtocart} 
            className="p-2 rounded-lg bg-slate-50 text-slate-600 hover:bg-blue-600 hover:text-white transition-colors"
          >
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
