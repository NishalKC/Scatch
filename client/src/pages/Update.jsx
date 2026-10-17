/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/set-state-in-effect */
import { useNavigate, useParams } from "react-router-dom"
import api from "../services/Api"
import { useEffect, useState } from "react"
import Form from "../components/Form"

const Update = ({ setProducts})=>{
    let {id} = useParams()
    const [Product, setProduct] = useState([])
    const navigate = useNavigate()

    const loadProduct = async ()=>{
        try {
            let res = await api.get(`products/${id}`)
            console.log(res?.data);
            setProduct(res?.data)
        } catch (error) {
            alert(error?.response?.data?.message)
        }
    }
    const handleUpdate = async (e)=>{
        e.preventDefault()
        try{
            const formData = new FormData()
            formData.append("name", Product?.name)
            formData.append("price", Product?.price)
            formData.append("category", Product?.category)
            formData.append("stock", Product?.stock)
            formData.append("discount", Product?.discount)
            if (Product?.image instanceof File) {
              formData.append("image", Product.image);
            }
            let res = await api.put(`products/update/${id}`, formData)
            setProducts(prev=> [ res?.data?.product, ...prev.filter(item => item._id !== Product?._id) ])
            if(res?.data) navigate("/shop")
        }catch(error){
            console.log(error?.response?.data?.message);
            
        }
        
    }
    useEffect(()=>{
        loadProduct()
    },[id])
    return (
       <div className='flex gap-3 md:px-3 '>
  
        <Form Product={Product}
         setProduct={setProduct}
         Action={"Update Products"}
         handleSubmit={handleUpdate}
        />

    </div>
    )
}

export default Update