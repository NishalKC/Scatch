import { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import api from '../services/Api'
import { Link, useParams } from 'react-router-dom'
import ProductLoader from '../components/ProductLoader'
import {  ArrowLeft } from 'lucide-react'

const ProductsBYCategory = () => {
    const [Products, setProducts] = useState(null)
    const{category} = useParams()

    const loadProducts = async() => {
        try {
            let res = await api.get(`products/category/${category}`)
            console.log(res?.data);
            setProducts(res?.data)
            
        } catch (error) {
            console.log(error.message);
            
        }
    }
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        loadProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[category]
    )
  return (
    <div className='flex gap-5 px-3'>
        <SideBar/>
        <div className='flex flex-col gap-5 py-5 '>
            <Link to={"/"} className=' flex gap-1 text-red-500 hover:underline transition-shadow'><ArrowLeft size={16} className='mt-1'/>Go Back</Link>
            <h1 className='px-3 text-3xl text-blue-500'>{category} Products</h1>
            {Products?.length >0 ?(

                <ProductLoader products={Products}/>
            ):(
                <h1 className='px-5 text-xl text-zinc-400'>NO products Founded</h1>
            )}
        </div>
    </div>
  )
}

export default ProductsBYCategory