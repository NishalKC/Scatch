import { Minus, Plus, Trash } from "lucide-react";
import { useState } from "react";

const CartProduct = ({ Product, setsubtotal, setdiscount }) => {
  const [ItemCount, setItemCount] = useState(1);
  const [IsChecked, setIsChecked] = useState(false);

  const currentTotalPrice = Product.price * ItemCount;
  const currentTotalDiscount = ((Product.discount || 0) / 100) * currentTotalPrice;

  const handleChecked = (e) => {
    const checked = e.target.checked;
    setIsChecked(checked);

    if (checked) {
      setsubtotal((prev) => prev + currentTotalPrice);
      setdiscount((prev) => prev + currentTotalDiscount);
    } else {
      setsubtotal((prev) => prev - currentTotalPrice);
      setdiscount((prev) => prev - currentTotalDiscount);
    }
  };

  const updateQuantity = (newCount) => {
    if (IsChecked) {
      setsubtotal((prev) => prev - currentTotalPrice + Product.price * newCount);
      setdiscount((prev) => prev - currentTotalDiscount + ((Product.discount || 0) / 100) * (Product.price * newCount));
    }
    setItemCount(newCount);
  };

  return (
    <div className="flex flex-col md:flex-row gap-7 justify-evenly w-full px-3 py-1 bg-white rounded-md align-middle max-h-fit">
      <div className="flex flex-col items-center md:flex-row gap-3">
        <input type="checkbox" checked={IsChecked} onChange={handleChecked} />
        <img src={Product.image} className="w-33 h-33 my-3 p-3 bg-slate-50 rounded-md bg-cover" alt="" />
      </div>
      
      <div className="flex flex-col md:w-1/2 px-5 md:py-3 gap-1.5">
        <h1 className="text-2xl tracking-wider">{Product.name}</h1>
        <h1 className="text-[13px] tracking-wide rounded-xl border px-1 text-green-500 w-fit">{Product.category}</h1>
        <div className="flex gap-7 text-[19px] mt-3">
          <h1 className="font-semibold">${Product.price}</h1>
          <h1 className="font-semibold text-red-500">-{Product.discount ? Product.discount : 0}%</h1>
        </div>
      </div>
      
      <div className="flex align-middle gap-1 mx-auto border border-zinc-500 bg-slate-50 my-auto rounded-md">
        <button 
          className="px-1.5 border-r border-zinc-500 rounded-md" 
          onClick={() => updateQuantity(ItemCount > 1 ? ItemCount - 1 : 1)}
        >
          <Minus size={10} />
        </button>
        <button className="px-1 min-w-fit bg-fixed">{ItemCount}</button>
        <button 
          className="px-1.5 border-l border-zinc-500 rounded-md" 
          onClick={() => updateQuantity(ItemCount + 1)}
        >
          <Plus size={10} />
        </button>
      </div>
      
      <div className="flex flex-row gap-1.5 align-middle px-3 w-35 my-auto mx-auto justify-between">
        <Trash size={18} className="text-zinc-500 mt-1 cursor-pointer" />
        <h1 className="text-zinc-900 text-xl">${currentTotalPrice}</h1>
      </div>
    </div>
  );
};

export default CartProduct;
