import { Home, ShoppingBag, PlusCircle, LayoutDashboard, User, Package, Heart, LogOut } from "lucide-react";

const SideBar = () => {
  return (
    // Shrinks to w-16 on mobile, expands to w-60 on sm screens and up
    <div className="w-16 sm:w-60 min-h-screen px-2 sm:px-4 py-6 border-r border-slate-100 flex flex-col gap-10 bg-white transition-all duration-300">
      
      {/* Top Navigation Group */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <a href="#" className="flex items-center justify-center sm:justify-start gap-3 px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-blue-500 font-medium transition-colors">
            <Home size={18} className="shrink-0" />
            <span className="hidden sm:inline">Home</span>
          </a>
          <a href="#" className="flex items-center justify-center sm:justify-start gap-3 px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-blue-500 font-medium transition-colors">
            <ShoppingBag size={18} className="shrink-0" />
            <span className="hidden sm:inline">Shop</span>
          </a>
          <a href="#" className="flex items-center justify-center sm:justify-start gap-3 px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-blue-500 font-medium transition-colors">
            <PlusCircle size={18} className="shrink-0" />
            <span className="hidden sm:inline">Create</span>
          </a>
          <a href="#" className="flex items-center justify-center sm:justify-start gap-3 px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-blue-500 font-medium transition-colors">
            <LayoutDashboard size={18} className="shrink-0" />
            <span className="hidden sm:inline">Dashboard</span>
          </a>
        </div>
      </div>

      {/* Bottom Account Group */}
      <div className="flex flex-col gap-4 border-t border-slate-100 pt-3">
        {/* Hides the section header entirely on mobile */}
        <span className="hidden sm:block px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
          My Account
        </span>
        
        <div className="flex flex-col gap-1">
          <button className="flex items-center justify-center sm:justify-start gap-3 px-3 py-2.5 rounded-lg text-left text-slate-700 hover:bg-slate-50 hover:text-blue-500 font-medium transition-colors w-full">
            <User size={18} className="shrink-0" />
            <span className="hidden sm:inline">Profile</span>
          </button>
          <button className="flex items-center justify-center sm:justify-start gap-3 px-3 py-2.5 rounded-lg text-left text-slate-700 hover:bg-slate-50 hover:text-blue-500 font-medium transition-colors w-full">
            <Package size={18} className="shrink-0" />
            <span className="hidden sm:inline">Orders</span>
          </button>
          <button className="flex items-center justify-center sm:justify-start gap-3 px-3 py-2.5 rounded-lg text-left text-slate-700 hover:bg-slate-50 hover:text-blue-500 font-medium transition-colors w-full">
            <Heart size={18} className="shrink-0" />
            <span className="hidden sm:inline">Wishlist</span>
          </button>
          <button className="flex items-center justify-center sm:justify-start gap-3 px-3 py-2.5 rounded-lg text-left text-red-600 hover:bg-red-50 font-medium transition-colors w-full mt-2">
            <LogOut size={18} className="shrink-0" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
