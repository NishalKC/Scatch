import { Heart, ShoppingCart, Star } from 'lucide-react'

const ProjectCard = ({product}) => {
  return (
    <div key={product.id} className="bg-white rounded-xl border border-slate-100 overflow-hidden flex flex-col group relative hover:shadow-md transition-shadow h-88 w-55">
                <div className="aspect-square bg-slate-50 flex items-center justify-center relative p-4">
                  {product.discount >0&&(
                    <span className="absolute top-3 left-3 bg-blue-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    -{product.discount}%
                  </span>
                  )}
                  <button className="absolute top-3 right-3 p-1.5 rounded-full bg-white text-slate-400 hover:text-red-500 shadow-sm border border-slate-100 transition-colors">
                    <Heart size={16} />
                  </button>
                  <img src={product.image} alt={product.name} className="text-slate-300 font-medium text-xs bg-slate-100/50 px-4 py-2 rounded-md"></img>
                </div>
                <div className="p-4 flex flex-col flex-1 justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-700 group-hover:text-blue-600 transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1 mt-1 text-amber-500 text-xs">
                      <Star size={12} fill="currentColor" />
                      <span className="font-semibold text-slate-600">{product.rate}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-base font-bold text-slate-900">${product.price}</span>
                    <button className="p-2 rounded-lg bg-slate-50 text-slate-600 hover:bg-blue-600 hover:text-white transition-colors">
                      <ShoppingCart size={16} />
                    </button>
                  </div>
                </div>
              </div>
  )
}

export default ProjectCard