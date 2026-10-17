import { useState } from 'react' 
import api from '../services/Api'
import { useNavigate } from 'react-router-dom'
import Form from '../components/Form'

const CreateProducts = ({setProducts}) => {
    const navigation = useNavigate()
    const [Product, setProduct] = useState({
        name: "",
        price: 0,
        discount: 0,
        category: "",
        stock: 0,
        desc: "",
        image: null 
    })
   
    const handleSubmit = async (e) => {
        e.preventDefault() 
        
        try {
            const formData = new FormData()
            formData.append('name', Product.name)
            formData.append('price', Product.price)
            formData.append('discount', Product.discount)
            formData.append('category', Product.category)
            formData.append('stock', Product.stock)
            formData.append('desc', Product.desc)
            if (Product.image) formData.append('image', Product.image)
            let res = await api.post("products/create", formData)
            let createdProduct = res?.data?.product
            setProducts((prev)=> [createdProduct, ...prev])
            navigation("/shop")
            
        
        } catch (error) {
            console.error(error.message)
        }
    }
    
  return (
    <div className='flex gap-3 md:px-3 '>
  
        <Form Product={Product}
         handleSubmit={handleSubmit}
         setProduct={setProduct}
         Action={"Create Products"}
         image={null}
        />

    </div>
  )
}

export default CreateProducts
