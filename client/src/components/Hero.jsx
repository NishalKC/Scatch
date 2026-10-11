import { ArrowRight, Star} from "lucide-react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const Hero = ({products}) => {
  const first3products= products?.slice(0, 3)
  const categories = [
    { name: "Electronics", count: "2.4k+ Products", bg: "bg-blue-50 text-blue-600" },
    { name: "Fashion", count: "5k+ Products", bg: "bg-purple-50 text-purple-600" },
    { name: "Home & Living", count: "1.8k+ Products", bg: "bg-amber-50 text-amber-600" },
    { name: "Sports", count: "950+ Products", bg: "bg-emerald-50 text-emerald-600" },
  ];
  const MostExp = products?.toSorted((a, b) => b.price - a.price).slice(0, 3)
 
  return (
    <div className="flex-1 min-h-screen px-4 md:px-8 py-8 bg-[#F7FAFE] flex flex-col gap-10 overflow-y-auto">
      
      <div className="w-full bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 md:p-10 text-white flex flex-col justify-center items-start gap-4 relative overflow-hidden shadow-sm">
        <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
          Limited Time Offer
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold max-w-xl leading-tight">
          Discover the Future of Shopping
        </h1>
        <p className="text-blue-100 max-w-md text-sm md:text-base">
          Get up to 50% off on newly arrived electronic accessories and next-gen smart devices.
        </p>
        <Link to={"/shop/offer"} className="mt-2 bg-white text-blue-600 hover:bg-blue-50 px-5 py-2.5 rounded-xl font-semibold flex items-center gap-2 transition-all group text-sm shadow-md shadow-blue-900/10">
          <span>Shop Now</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
        <div className="absolute right-[-10%] top-[-20%] w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold text-slate-800">Browse Categories</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <Link to={`/${cat.name}`} key={i} className="bg-white p-5 rounded-xl border border-slate-100 hover:shadow-md transition-shadow cursor-pointer flex flex-col gap-1">
              <span className={`w-fit px-2.5 py-1 rounded-md text-xs font-bold ${cat.bg}`}>
                {cat.name}
              </span>
              <span className="text-xs text-slate-400 font-medium mt-2">{cat.count}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        <div className="xl:col-span-2 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-slate-800">New Arrivals</h2>
            <Link to={"/shop"} className="text-sm font-semibold text-blue-600 hover:underline">View All</Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {first3products?.map((product) => (
              <ProductCard key={product.id} product={product}/>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-slate-800">Most Expensive</h2>
            <a href="#" className="text-sm font-semibold text-blue-600 hover:underline">View All</a>
          </div>

          <div className="flex flex-col gap-4 flex-1">
            {MostExp?.map((product) => (
              <Link to={`/products/${product._id}`} key={product.id} className="bg-white p-4 rounded-xl border border-slate-100 flex gap-4 items-center hover:shadow-md transition-shadow group cursor-pointer">
                <div className="w-20 h-20 bg-slate-50 rounded-lg shrink-0 flex items-center justify-center text-[10px] text-slate-300 font-medium">
                  <img src={product.image} alt="" />
                </div>
                <div className="flex flex-col justify-between flex-1 py-1">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-700 group-hover:text-blue-600 transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1 mt-0.5 text-amber-500 text-xs">
                      <Star size={12} fill="currentColor" />
                    </div>
                  </div>
                  <span className="text-sm font-bold text-slate-900 mt-2">${product.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};

export default Hero;
