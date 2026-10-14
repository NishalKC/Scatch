import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import ProductLoader from '../components/ProductLoader'
import { useState, useEffect } from 'react'

const OfferProducts = ({ Products, wishlist, setwishlist }) => {
    const [Errormessage, setErrormessage] = useState(null)
    const OfferProducts = Products?.filter((p) => p.discount > 0)

    useEffect(() => {
        if (Errormessage) {
            const timer = setTimeout(() => {
                setErrormessage(null)
            }, 3000)

            return () => clearTimeout(timer)
        }
    }, [Errormessage])

    return (
        <div className='flex gap-3 px-3 relative min-h-screen'>
            <div className='flex flex-col py-4 gap-4 w-full'>
                <Link to={"/"} className='flex gap-1 px-1 mb-4 text-red-500 hover:underline'>
                    <ArrowLeft /> Go Back
                </Link>
                {Errormessage && (
                    <div className="fixed top-5 left-0 right-0 z-9999 flex justify-center pointer-events-none">
                        <h1 
                            role="alert" 
                            className="pointer-events-auto flex items-center justify-center text-center px-5 py-3 text-red-500 font-medium border border-red-200 bg-white shadow-xl rounded-md min-w-62.5"
                        >
                            {Errormessage}
                        </h1>
                    </div>
                )}
                
                <h1 className='text-4xl text-blue-400 px-4 mb-3'>Offers</h1>
                <ProductLoader products={OfferProducts} setErrormessage={setErrormessage} wishlist={wishlist}  setwishlist={setwishlist}/>
            </div>
        </div>
    )
}

export default OfferProducts
