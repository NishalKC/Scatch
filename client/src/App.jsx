/* eslint-disable react-hooks/set-state-in-effect */
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"

import "./App.css"
import Login from "./pages/Login"
import Register from "./pages/Register"
import api from "./services/Api"
import { useEffect, useState } from "react"
import Shop from "./pages/Shop"
import Profile from "./pages/Profile"
import CreateProducts from "./pages/CreateProducts"
import ProductDetails from "./pages/ProductDetails"
import ProductsBYCategory from "./pages/ProductsBYCategory"
import OfferProducts from "./pages/OfferProducts"
import SideBar from "./components/SideBar"
import WishlistedProducts from "./pages/WishlistedProducts"
import SearchPage from "./pages/SearchPage"

const App = () => {
  const [User, setUser] = useState(null)
  const [Products, setProducts] = useState(null)
  const [Islogin, setIslogin] = useState(false)
  const [Wishlist , setWishlist]= useState([])
  const [Search, setSearch] = useState(null)

  const loadUser = async () => {
    try {
      let res = await api.get("users/getme")
      let user = res?.data?.user
      if(user) setIslogin(true)
      setUser(user)
      setWishlist(user?.wishlist)
    } catch (error) {
      console.log(error?.res?.message);
      
    }
  }
  const loadProducts = async ()=>{
    try{
      let res = await api.get("products/getall")
      setProducts(res?.data)
      console.log(res?.data);
      
    }catch(error){
      console.log(error?.res?.message)
    }
  }

  
  
  useEffect(() => { 
    loadUser()
  },[]
  )
  useEffect(() => {
    loadProducts() 
  },[]
  )
  console.log(Search);
  
  return (
    <BrowserRouter>
      <Navbar user={User} Islogin={Islogin} setSearch={setSearch}/>
      <div className="flex px-3">
      <SideBar islogin={Islogin} setIslogin={setIslogin} />
      <Routes>
        
        <Route path="/" element={<Home products={Products} wishlist={Wishlist}/>}/>
        <Route path="/login" element={<Login setIslogin={setIslogin} setUser={setUser}/>}/>
        <Route path="/register" element={<Register setUser={setUser} setislogin={setIslogin} />}/>
        <Route path="/search" element={<SearchPage search={Search} products={Products} wishlist={Wishlist} setwishlist={setWishlist}/>}/>
        <Route path="/Shop" element={<Shop products={Products} user={User} wishlist={Wishlist} setwishlist={setWishlist}/>}/>
        <Route path="/profile" element={<Profile  user={User}/>}/>
        <Route path="/create-products" element={<CreateProducts setProducts={setProducts}/>}/>
        <Route path="/products/:id" element={<ProductDetails Products={Products} wishlist={Wishlist} setwishlist={setWishlist}/>} />
        <Route path="/:category" element={<ProductsBYCategory Products={Products} wishlist={Wishlist}   setwishlist={setWishlist}/>} />
        <Route path="/shop/offer" element={<OfferProducts Products={Products} wishlist={Wishlist} setwishlist={setWishlist}/>} />
        <Route path="/wishlist" element={<WishlistedProducts Wishlist={Wishlist} setwishlist={setWishlist}/>} />
      </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App