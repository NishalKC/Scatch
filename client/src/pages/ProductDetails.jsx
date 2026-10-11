/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom'
import SideBar from '../components/SideBar'
import api from '../services/Api';
import { useEffect, useState } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const ProductDetails = ({Products}) => {
    const [Product, setProduct] = useState(null)
    const [Loading, setLoading] = useState(true)
    const {id} =useParams()
    const RelatedProducts = Products?.filter((p)=> p?.category == Product?.category & p?._id !== Product?._id).slice(0,4)
    console.log(RelatedProducts);
    

    const loadProduct = async () => {
        try {
            let res = await api.get(`/products/${id}`)
            console.log(res?.data);
            
            setProduct(res?.data)
            setLoading(false)
        } catch (error) {
            console.log(error.message);
            
        }
    }
    
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        loadProduct()
    },[id]
    )
    if(Loading) return(
        <div className='flex items-center align-middle'>
            <h1 className='text-2xl text-zinc-500'>Loading...</h1>
        </div>
    )
  return (
    <div className='md:px-3  flex gap-5'>
        <SideBar/>
        <div className='flex flex-col gap-10 w-full'>
            <div className='flex flex-col md:flex-row gap-5 w-full mt-10 px-5 md:py-3 '>
            <div className='md:w-3/4 md:h-109 '>
                <img src={Product?.image} alt={Product?.name} className='md:h-full md:w-full rounded-2xl ' />
            </div>
            <div className='flex flex-col gap-4 md:pl-19 py-1 w-full'>
                <h1 className='text-4xl capitalize'>{Product?.name}</h1>
                <div className='gap-3'>
                    <h1 className='text-zinc-800 text-xl'>About This Item</h1>
                    <p className='w-full  text-[10px] md:text-[15px] text-zinc-600'>{Product?.desc}</p>
                </div>
                <div>
                    <h1 className='px-3  border w-fit rounded-md text-zinc-400'> {Product?.category}</h1>
                    <h1 className='text-xl'>Owner :- <span  className='text-blue-700'>{Product?.owner?.name}</span></h1>
                </div>
                <div className='flex gap-5 py-1'>
                    <h1 className='text-2xl '>${Product?.price}</h1>
                    {Product?.discount > 0 &&(
                        <h1 className='text-2xl text-blue-400'>{Product?.discount}% OFF</h1>
                    )}
                </div>
                <div className='flex flex-wrap gap-3 md:gap-5 md:text-[15px] w-full'>
                    <button className='capitalize text-white bg-blue-500 px-3 py-1.5 md:px-5 md:py-1.5 rounded-md border border-blue-400 hover:bg-transparent flex  hover:text-blue-500 transition-colors gap-0.5 md:gap-2'><ShoppingCart size={19+3} className='mt-0.50'/>Add to cart</button>
                    <button className='capitalize bg-transparent px-3 py-1.5 md:px-5 md:py-2 rounded-md border text-blue-500 hover:bg-blue-400 hover:text-white transition-colors flex gap-0.5 md:gap-2 '><Heart size={19+3}/>  Wishlist</button>
                </div>
            </div>
            </div>
            <div className='flex flex-col gap-4 md:px-3 py-1'>
                <div className='flex  flex-col md:flex-row justify-between px-5 pr-15 '>
                <h1 className=' text-xl md:text-2xl text-zinc-800'>Products related to </h1>
                <h1 className='text-blue-500 hover:underline transition-colors cursor-pointer pr-10'>View more</h1>
                </div>
                <div className='flex flex-row flex-wrap md:gap-10 mb-10'>
                    {RelatedProducts?.map((product) => (
                        <ProductCard key={product._id} product={product}/>
                    )
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails