import { Lock } from "lucide-react";
import CartProduct from "../components/CartProduct"
import { useState } from "react";

const Cart = ({Carts}) => {

 const [subtotal, setsubtotal] = useState(0)
 const [totalDiscount, settotalDiscount] = useState(0)

  const totalAmount = Math.max(0, subtotal - totalDiscount);
  return (
    <div className="flex md:max-h-screen  flex-col-reverse md:flex-row gap-10 md:gap-3 p-5 w-full">
      <div  className="flex flex-col px-3 w-full md:w-4/6  ">
      <div className=" flex justify-between w-full mb-1">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl">Your carts</h1>
          <p>{Carts.length} Products in cart</p>
        </div>
        <div className="flex self-end">
            <a href="" className="text-red-500 hover:underline transition-shadow">Delete all</a>
          </div>
      </div>
        <div className="flex-col gap-3 px-3 py-4 w-full bg-white rounded-md h-[80%] overflow-y-auto">
          {Carts.map(Product=>(
            <>
            <CartProduct Product={Product} setdiscount={settotalDiscount} setsubtotal={setsubtotal} />
            <hr className="mx-5 my-5 md:my-1 text-zinc-400" />
            </>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-white w-full md:w-2/6 rounded-md px-5 py-3">
          <h1 className="text-[19px] font-semibold">Order summery</h1>
          <div className="flex flex-col gap-1.5  w-full">
            <div className="w-full flex justify-between">
              <h1>Sub total {`(${Carts.length})`}</h1>
              <h1>{subtotal}</h1>
            </div>
            <div className="w-full flex justify-between">
              <h1>Total discount</h1>
              <h1>{totalDiscount}</h1>
            </div>
            <div className="w-full flex justify-between">
              <h1>Shipping </h1>
              <h1>Free </h1>
            </div>
            <div className="w-full flex justify-between">
              <h1>Estimeted Tax</h1>
              <h1>0</h1>
            </div>
          </div>
          <hr  className=" my-1"/>
          <div className="w-full flex justify-between">
              <h1>Total Amount </h1>
              <h1>{totalAmount}</h1>
            </div>
            <button className="flex gap-3 w-full text-white py-3 bg-blue-500 rounded-md px-auto justify-center text-center">
              <Lock size={17} color="white" className="mt-1"/>
              <span>Procced to CheckOut</span>
            </button>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Cart