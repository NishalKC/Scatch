import Hero from "../components/Hero"
import SideBar from "../components/SideBar"

const Home = () => {
  return (
    <div className="flex px-3 bg-[#F7FAFE]">
        <SideBar/>
        <Hero/>
    </div>
  )
}

export default Home