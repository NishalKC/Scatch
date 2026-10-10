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

const App = () => {
  const [User, setUser] = useState(null)
  const [Products, setProducts] = useState(null)

  const loadUser = async () => {
    try {
      let res = await api.get("users/getme")
      let user = res?.data.user
      console.log(user);
      setUser(user)
      
    } catch (error) {
      console.log(error?.res?.message);
      
    }
  }
  const loadProducts = async ()=>{
    try{
      let res = await api.get("products/getall")
      setProducts(res?.data)
      
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
  
  return (
    <BrowserRouter>
      <Navbar user={User}/>
      <Routes>
        <Route path="/" element={<Home products={Products}/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/Shop" element={<Shop products={Products} user={User} />}/>
        <Route path="/profile" element={<Profile  user={User}/>}/>
        <Route path="/create-products" element={<CreateProducts setProducts={setProducts}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App