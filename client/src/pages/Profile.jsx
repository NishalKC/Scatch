import SideBar from "../components/SideBar"
import avatar from "../assets/Nishal.jpg"
import { Mail, Phone } from "lucide-react"

const Profile = ({ user }) => {
  return (
    <div className="flex p-6 gap-8 w-full min-h-screen bg-zinc-50">
      <SideBar />
      
      <div className="flex-1 max-w-xl bg-white border border-zinc-200 rounded-2xl p-6 h-fit space-y-6">
        
        <div className="flex items-center gap-4">
          <img src={avatar} alt={user?.name} className="h-20 w-20 rounded-full object-cover border border-zinc-200" />
          <div>
            <h1 className="text-xl font-bold text-zinc-800">{user?.name}</h1>
            <p className="text-zinc-500 text-sm flex gap-1"><Mail size={13} className="mt-1"/>{user?.email}</p>
            <p className="text-zinc-400 text-xs flex gap-1"><Phone size={13}/>{user?.contact}</p>
          </div>
        </div>

        <hr className="border-zinc-100" />
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-100">
            <span className="text-xs text-zinc-400 font-medium block">Total Sales</span>
            <span className="text-lg font-bold text-zinc-800">{user?.sales}</span>
          </div>
          <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-100">
            <span className="text-xs text-zinc-400 font-medium block">Total Products</span>
            <span className="text-lg font-bold text-zinc-800">{user?.products.length}</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Profile
