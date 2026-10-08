import Hero from "../components/Hero"
import SideBar from "../components/SideBar"

const Home = ({ products}) => {
  return (
    <div className="flex px-3 bg-[#F7FAFE]">
        <SideBar />
        <Hero products={products}/>
    </div>
  )
}

export default Home