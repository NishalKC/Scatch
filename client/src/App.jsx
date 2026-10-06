import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"

import "./App.css"
import Login from "./pages/Login"
import Register from "./pages/Register"
import api from "./services/Api"
import { useEffect, useState } from "react"

const App = () => {
  const [User, setUser] = useState(null)
  const [CurrentRoute, setCurrentRoute] = useState("home")
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
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadUser()
  },[]
  )
  
  return (
    <BrowserRouter>
      <Navbar user={User}/>
      <Routes>
        <Route path="/" element={<Home route={CurrentRoute} setroute={setCurrentRoute}/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App