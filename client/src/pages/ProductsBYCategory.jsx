import { useEffect, useState } from 'react'
import api from '../services/Api'
import { Link, useParams } from 'react-router-dom'
import ProductLoader from '../components/ProductLoader'
import {  ArrowLeft } from 'lucide-react'

const ProductsBYCategory = ({wishlist,  setwishlist}) => {
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
        <div className='flex flex-col gap-5 py-5 '>
                <Link to={"/"} className=' flex gap-1 text-red-500 hover:underline transition-shadow'><ArrowLeft size={16} className='mt-1'/>Go Back</Link>
                <h1 className='px-3 text-3xl text-blue-500'>{category} Products</h1>
                <ProductLoader products={Products} wishlist={wishlist} setwishlist={setwishlist}/>
        </div>
    </div>
  )
}

export default ProductsBYCategory