import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"

import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App