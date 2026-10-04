import { Bell, Heart, Search, ShoppingCart } from "lucide-react";
import avatar from "../assets/Nishal.jpg"
const Navbar = () => {
  return (
    <div className="px-5 py-3 border-b border-slate-100">
      <nav className="flex flex-row items-center justify-between gap-8 max-w-7xl mx-auto">
        {/* Logo */}
        <h1 className="text-xl md:text-3xl font-bold text-blue-500 tracking-tight">Scatch</h1>

        <div className="flex flex-1 max-w-3xl border border-slate-200 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
          <input
            type="text"
            placeholder="Search products, brands and more..."
            className="w-full px-4 py-2 outline-none text-sm"
          />
          <button className="bg-blue-500 hover:bg-blue-600 px-1.5 md:px-4 flex items-center justify-center transition-colors">
            <Search color="white" size={18} />
          </button>
        </div>
        <div className=" hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-blue-500 transition-colors"><Heart/></a>
          <a href="#" className="hover:text-blue-500 transition-colors"><ShoppingCart /></a>
          <a href="#" className="hover:text-blue-500 transition-colors"><Bell/></a>
          <div className="flex gap-3 align-middle">
            <img src={avatar} alt=""  className="h-10 w-10 rounded-3xl"/>
            <h1 className="text-[15px] align-middle py-1.5">Nishal KC </h1>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
