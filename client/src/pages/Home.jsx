import Hero from "../components/Hero"
import SideBar from "../components/SideBar"

const Home = ({route}) => {
  return (
    <div className="flex px-3 bg-[#F7FAFE]">
        <SideBar route={route}/>
        <Hero/>
    </div>
  )
}

export default Home