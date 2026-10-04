import { useState } from "react";
import { User, Mail, Lock, Phone, Eye, EyeOff, ArrowRight } from "lucide-react";
import api from "../services/Api";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const registerData = {
        name,
        email,
        password,
        contact,
      };

      // Calls the /users endpoint mapped in your Express setup
      let res = await api.post("users/register", registerData);
      
      setSuccess(res?.data?.message || "Account created successfully!");
      // Clear form inputs on success
      setName("");
      setEmail("");
      setPassword("");
      setContact("");
    } catch (err) {
      // Axios routes HTTP errors (400, 409, 500) straight to this catch block
      const serverMessage = err.response?.data?.message || err.message || "Something went wrong";
      setError(serverMessage);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#F7FAFE] px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl border border-slate-100 shadow-sm p-8 flex flex-col gap-6">
        
        {/* Header Block */}
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-3xl font-extrabold text-blue-500 tracking-tight">Scatch</h1>
          <h2 className="text-xl font-bold text-slate-800">Create An Account</h2>
          <p className="text-sm text-slate-400">Please fill out your details below</p>
        </div>

        {/* Error Alert Box */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 transition-all animate-in fade-in duration-200">
            <h1 className="text-sm font-bold text-red-600 uppercase tracking-wide mb-1">Registration Error</h1>
            <p className="text-xs font-medium text-red-500 leading-relaxed">{error}</p>
          </div>
        )}

        {/* Success Alert Box */}
        {success && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 transition-all animate-in fade-in duration-200">
            <h1 className="text-sm font-bold text-green-600 uppercase tracking-wide mb-1">Success</h1>
            <p className="text-xs font-medium text-green-500 leading-relaxed">{success}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          {/* Full Name Input */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Full Name</label>
            <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-shadow">
              <div className="pl-3.5 text-slate-400 shrink-0">
                <User size={18} />
              </div>
              <input
                type="text"
                required
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2.5 outline-none text-sm text-slate-700 bg-transparent placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Email Address Input */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Email Address</label>
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

          {/* Contact Number Input */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Contact Number</label>
            <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 transition-shadow">
              <div className="pl-3.5 text-slate-400 shrink-0">
                <Phone size={18} />
              </div>
              <input
                type="tel"
                required
                placeholder="+1 (555) 000-0000"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="w-full px-3 py-2.5 outline-none text-sm text-slate-700 bg-transparent placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Password</label>
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors group shadow-sm shadow-blue-500/10 text-sm"
          >
            <span>Sign Up</span>
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </form>

        {/* Footer Link */}
        <p className="text-center text-xs font-medium text-slate-500 mt-2">
          Already have an account?{" "}
          <a href="#" className="font-semibold text-blue-500 hover:underline">
            Sign in
          </a>
        </p>

      </div>
    </div>
  );
};

export default Register;
