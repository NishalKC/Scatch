import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"

import "./App.css"
import Login from "./pages/Login"
import Register from "./pages/Register"

const App = () => {
  // const loadUser = async () => {
  //   try {
  //     let res = await 
  //   } catch (error) {
  //     console.log(error?.res?.message);
      
  //   }
  // }
  
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App