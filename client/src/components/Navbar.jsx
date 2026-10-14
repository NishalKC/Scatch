import { Bell, Heart, LogIn, Search, ShoppingBag, ShoppingCart } from "lucide-react";
import avatar from "../assets/Nishal.jpg";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ user, Islogin, setSearch }) => {
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const handleSearch = (e) => {
    if (e.target.value.length > 0) {
      setSearch(e.target.value);
      navigate("/search");
    } else {
      setSearch(null);
      navigate("/shop");
    }
  };

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.blur();
    }
    navigate("/search");
  };

  return (
    <div className="px-5 py-3 border-b border-slate-100">
      <nav className="flex flex-row items-center justify-between gap-8 max-w-7xl mx-auto">
        <h1 className="text-xl md:text-3xl font-bold text-blue-500 tracking-tight flex gap-2">
          <ShoppingBag className="mt-1.5" />Scatch
        </h1>

        <div className="flex flex-1 max-w-3xl border border-slate-200 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
          <input
            ref={inputRef}
            onChange={handleSearch}
            type="text"
            placeholder="Search products, brands and more..."
            className="w-full px-4 py-2 outline-none text-sm"
          />
          <button
            onClick={handleButtonClick}
            className="bg-blue-500 hover:bg-blue-600 px-1.5 md:px-4 flex items-center justify-center transition-colors"
          >
            <Search color="white" size={18} />
          </button>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-blue-500 transition-colors"><Heart /></a>
          <a href="#" className="hover:text-blue-500 transition-colors"><ShoppingCart /></a>
          <a href="#" className="hover:text-blue-500 transition-colors"><Bell /></a>
          {Islogin ? (
            <Link to={"/profile"} className="flex gap-3 align-middle">
              <img src={avatar} alt="" className="h-10 w-10 rounded-3xl" />
              <h1 className="text-[15px] align-middle py-1.5">{user?.name} </h1>
            </Link>
          ) : (
            <button className="flex gap-1.5 text-blue-500 hover:bg-blue-100 px-3 py-1 rounded-2xl transition-colors">
              <LogIn />
              <span>login</span>
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
