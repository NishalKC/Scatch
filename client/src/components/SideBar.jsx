import { Home, ShoppingBag, PlusCircle, LayoutDashboard, User, Package, Heart, LogOut } from "lucide-react";

const SideBar = () => {
  return (
    <div className="w-60 min-h-screen px-4 py-6 border-r border-slate-100 flex flex-col gap-10 bg-white">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-blue-500 font-medium transition-colors">
            <Home size={18} />
            <span>Home</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-blue-500 font-medium transition-colors">
            <ShoppingBag size={18} />
            <span>Shop</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-blue-500 font-medium transition-colors">
            <PlusCircle size={18} />
            <span>Create</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-blue-500 font-medium transition-colors">
            <LayoutDashboard size={18} />
            <span>Dashboard</span>
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-4 border-t border-slate-100 pt-3">
        <span className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
          My Account
        </span>
        
        <div className="flex flex-col gap-1">
          <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-slate-700 hover:bg-slate-50 hover:text-blue-500 font-medium transition-colors w-full">
            <User size={18} />
            <span>Profile</span>
          </button>
          <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-slate-700 hover:bg-slate-50 hover:text-blue-500 font-medium transition-colors w-full">
            <Package size={18} />
            <span>Orders</span>
          </button>
          <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-slate-700 hover:bg-slate-50 hover:text-blue-500 font-medium transition-colors w-full">
            <Heart size={18} />
            <span>Wishlist</span>
          </button>
          <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-red-600 hover:bg-red-50 font-medium transition-colors w-full mt-2">
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
