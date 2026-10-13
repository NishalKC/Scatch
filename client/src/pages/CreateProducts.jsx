import { useState, useRef } from 'react' 
import api from '../services/Api'
import { useNavigate } from 'react-router-dom'
import Form from '../components/Form'

const CreateProducts = ({setProducts}) => {
    const fileInputRef = useRef(null) 
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
    const [preview, setPreview] = useState(null) 

    const handleChange = (e) => {
        setProduct({
            ...Product,
            [e.target.name]: e.target.value
        })
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0] 
        if (file) {
            setProduct({
                ...Product,
                image: file 
            })
            setPreview(URL.createObjectURL(file)) 
        }
    }

    const triggerFileInput = () => {
        fileInputRef.current.click()
    }

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
         handleChange={handleChange} 
         handleSubmit={handleSubmit}
         triggerFileInput={triggerFileInput}
         preview={preview}
         fileInputRef={fileInputRef}
         handleFileChange={handleFileChange}
         Action={"Create Products"}
        />

    </div>
  )
}

export default CreateProducts
