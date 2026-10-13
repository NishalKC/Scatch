
const Form = ({
     handleChange, handleFileChange, handleSubmit, Product,
     preview, triggerFileInput, fileInputRef,
        Action
    }) => {
  return (
    <div className=' flex-wrap px-5 py-3 w-full'>
            <h1 className='text-3xl text-zinc-600'>{Action}</h1>
            <form onSubmit={handleSubmit} className='md:flex md:flex-row mt-10 md:gap-10 w-full md:flex-wrap'>
                <div className='flex flex-col gap-1 md:w-1/3 px-5 py-1'>
                    <label htmlFor="title" className='px-5 text-zinc-600 tracking-wider '>Title</label>
                    <input type="text" id="title" onChange={handleChange} name='name' value={Product.name} placeholder='Product Title' className='border border-[#EDF1F6] outline-blue-300 px-5 py-3 rounded-2xl' required />
                </div>

                <div className='flex flex-col gap-1 md:w-1/3 px-5 py-1'>
                    <label htmlFor="price" className='px-5 text-zinc-600 tracking-wider '>Price</label>
                    <input type="number" id="price" onChange={handleChange} name='price' value={Product.price} placeholder='Original Price ($)' className='border border-[#EDF1F6] outline-blue-300 px-5 py-3 rounded-2xl' required />
                </div>

                <div className='flex flex-col gap-1 md:w-1/3 px-5 py-1'> 
                    <label htmlFor="discount" className='px-5 text-zinc-600 tracking-wider '>Discount</label>
                    <input type="number" id="discount" onChange={handleChange} name='discount' value={Product.discount} placeholder='Discount (%)' className='border border-[#EDF1F6] outline-blue-300 px-5 py-3 rounded-2xl' />
                </div>

                <div className='flex flex-col gap-1 md:w-1/3 px-5 py-1'> 
                    <label htmlFor="category" className='px-5 text-zinc-600 tracking-wider '>Category</label>
                    <select 
                        name="category" 
                        id="category" 
                        className='border border-[#EDF1F6] outline-blue-300 px-5 py-3 rounded-2xl bg-white text-zinc-500 cursor-pointer appearance-none'
                        value={Product.category}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled hidden>Select Category</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Electronic">Electronic</option>
                        <option value="Sports">Sports</option>
                        <option value="Home & Living">Home & Living</option>
                    </select>
                </div>

                <div className='flex flex-col gap-1 md:w-1/3 px-5 py-1'>
                    <label htmlFor="stock" className='px-5 text-zinc-600 tracking-wider ' >Stock</label>
                    <input type="number" id="stock" onChange={handleChange} name='stock' value={Product.stock} placeholder='Quantity available' className='border border-[#EDF1F6] outline-blue-300 px-5 py-3 rounded-2xl' required />
                </div>

                <div className='flex flex-col gap-2 px-5 py-1 md:w-1/3'>
                    <label className='px-5 text-zinc-600 tracking-wider'>Product Image</label>
                    <input 
                        type="file" 
                        ref={fileInputRef}
                        accept="image/*" 
                        onChange={handleFileChange} 
                        className='hidden' 
                    />
                    <div 
                        onClick={triggerFileInput}
                        className="w-32 h-32 border-2 border-dashed border-zinc-300 rounded-2xl flex items-center justify-center cursor-pointer hover:border-blue-400 hover:bg-zinc-50 transition-all overflow-hidden mx-5"
                    >
                        {preview ? (
                            <img 
                                src={preview} 
                                alt="Preview" 
                                className="w-full h-full object-cover" 
                            />
                        ) : (
                            <span className="text-4xl text-zinc-400 font-light hover:text-blue-500">+</span>
                        )}
                    </div>
                </div>

                <div className='flex flex-col gap-1 md:w-3/4 px-5 py-1'>
                    <label htmlFor="desc" className='px-5 text-zinc-600 tracking-wider ' >Description</label>
                    <textarea name="desc" id="desc" value={Product.desc} onChange={handleChange}  placeholder='Write details about the product...' className='px-5 py-3 h-30 outline-blue-400 w-full border rounded-2xl border-[#EDF1F6] resize-none'></textarea>
                </div>
                    
                <button type='submit' className='bg-blue-500 text-white font-medium py-3 px-5 max-h-fit block w-1/2 rounded-2xl mx-3 items-center hover:bg-blue-600 transition-colors'>Create Products </button>
            </form>
        </div>
  )
}

export default Form