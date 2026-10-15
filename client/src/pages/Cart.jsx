import { Lock } from "lucide-react";
import CartProduct from "../components/CartProduct"

const Cart = ({Carts}) => {

    const subtotal = Carts.reduce((acc, current) => {
    return acc + (Number(current.price) || 0);
  }, 0);

  const totalDiscount = Carts.reduce((acc, current) => {
    return acc + (Number(current.discount) || 0);
  }, 0);

  const totalAmount = Math.max(0, subtotal - totalDiscount);
  return (
    <div className="flex gap-3 p-5 w-full">
      <div  className="flex flex-col px-3 w-4/6  ">
        <h1 className="text-2xl">Your carts</h1>
        <p>{Carts.length} Products in cart</p>
        <div className="flex-col gap-3 px-3 py-4 w-full bg-white rounded-md">
          {Carts.map(Product=>(
            <>
            <CartProduct Product={Product} />
            <hr className="mx-5 my-1 text-zinc-400" />
            </>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-white w-2/6 rounded-md px-5 py-3">
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