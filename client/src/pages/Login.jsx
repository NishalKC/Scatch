import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import api from "../services/Api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const [error, setError] = useState(""); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors on a new submit attempt
    
    try {
        let res = await api.post("users/login", {
            email: email,
            password: password
        });
        console.log("data", res?.data);
        navigate("/")
        
    } catch (error) {
        const serverMessage = error.response?.data?.message || error.message || "Something went wrong";
        setError(serverMessage); 
        console.log(error.message);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#F7FAFE] px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl border border-slate-100 shadow-sm p-8 flex flex-col gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-3xl font-extrabold text-blue-500 tracking-tight">Scatch</h1>
          <h2 className="text-xl font-bold text-slate-800">Welcome Back</h2>
          <p className="text-sm text-slate-400">Enter your details to access your account</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 transition-all animate-in fade-in duration-200">
            <p className=" font-medium text-red-500 text-[15px] leading-relaxed">
              {error}
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Email Address
            </label>
            <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-shadow">
              <div className="pl-3.5 text-slate-400 shrink-0">
                <Mail size={18} />
              </div>
              <input
                type="email"
                required
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2.5 outline-none text-sm text-slate-700 bg-transparent placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Password
              </label>
              <a href="#" className="text-xs font-semibold text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>
            <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-shadow">
              <div className="pl-3.5 text-slate-400 shrink-0">
                <Lock size={18} />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2.5 outline-none text-sm text-slate-700 bg-transparent placeholder:text-slate-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="pr-3.5 text-slate-400 hover:text-slate-600 transition-colors shrink-0"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-1">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
            />
            <label htmlFor="remember" className="text-xs font-medium text-slate-500 select-none cursor-pointer">
              Keep me logged in
            </label>
          </div>

          <button
            type="submit"
            className="w-full mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors group shadow-sm shadow-blue-500/10 text-sm"
          >
            <span>Sign In</span>
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </form>
        <div className="relative flex py-2 items-center">
          <div className="grow border-t border-slate-100"></div>
          <span className="shrink mx-4 text-xs font-medium text-slate-400 uppercase tracking-wider">Or continue with</span>
          <div className="grow border-t border-slate-100"></div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
              <path fill="#EA4335" d="M12 5.04c1.64 0 3.12.56 4.28 1.67l3.2-3.2C17.52 1.58 14.96 1 12 1 7.35 1 3.4 3.65 1.5 7.5l3.86 3C6.27 7.58 8.9 5.04 12 5.04z"/>
              <path fill="#4285F4" d="M23.49 12.27c0-.81-.07-1.59-.2-2.34H12v4.43h6.44c-.28 1.47-1.11 2.71-2.36 3.55l3.66 2.84c2.14-1.97 3.39-4.87 3.39-8.48z"/>
              <path fill="#FBBC05" d="M5.36 14.4c-.24-.72-.38-1.5-.38-2.3s.14-1.58.38-2.3L1.5 6.8C.54 8.72 0 10.87 0 13.1s.54 4.38 1.5 6.3l3.86-3z"/>
              <path fill="#34A853" d="M12 23c3.24 0 5.97-1.07 7.96-2.92l-3.66-2.84c-1.01.67-2.3 1.07-4.3 1.07-3.1 0-5.73-2.54-6.64-5.46L1.5 15.85C3.4 19.7 7.35 23 12 23z"/>
            </svg>
            <span>Google</span>
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
            <svg className="w-4 h-4 fill-slate-700 shrink-0" viewBox="0 0 24 24">
              <path d="M16.365 1.43c-.245 1.63-.98 3.222-2.283 4.766-1.265 1.477-2.655 2.68-4.047 2.68-.14 0-.29-.01-.43-.025.175-1.745.97-3.413 2.308-4.88 1.295-1.42 2.74-2.515 4.14-2.54.12 0 .225.01.312.02zM19 19.645c-.81 1.185-1.66 2.37-2.985 2.37-1.285 0-1.7-.785-3.175-.785-1.48 0-1.93.765-3.155.81-1.28.05-2.24-1.29-3.055-2.47-1.665-2.41-2.935-6.8-1.215-9.785 1.555-2.7 4.33-2.83 5.485-2.83 1.255.02 2.305.82 3.015.82.705 0 2.005-1.015 3.525-.86 1.345.06 2.395.535 3.045 1.48-2.695 1.625-2.26 5.25.435 6.345-1.025 2.545-2.11 5.06-2.915 6.915z"/>
            </svg>
            <span>Apple</span>
          </button>
        </div>

        {/* Footer Link */}
        <p className="text-center text-xs font-medium text-slate-500 mt-2">
          Don&apos;t have an account yet?{" "}
          <a href="#" className="font-semibold text-blue-500 hover:underline">
            Sign up for free
          </a>
        </p>

      </div>
    </div>
  );
};

export default Login;
