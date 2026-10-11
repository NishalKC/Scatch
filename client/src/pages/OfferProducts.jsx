import { Link } from 'react-router-dom'
import SideBar from '../components/SideBar'
import { ArrowLeft } from 'lucide-react'
import ProductLoader from '../components/ProductLoader'

const OfferProducts = ({Products}) => {
    const OfferProducts = Products?.filter((p)=> p.discount > 0)
  return (
    <div className='flex gap-3 px-3'>
        <SideBar/>
        <div className='flex flex-col py-4 gap-4'>
            <Link to={"/"} className='flex gap-1 px-1 mb-4  text-red-500 hover:underline'><ArrowLeft/> Go Back</Link>
            <h1 className='text-4xl text-blue-400 px-4 mb-3'>Offers</h1>
            <ProductLoader products={OfferProducts}/>
        </div>
    </div>
  )
}

export default OfferProducts