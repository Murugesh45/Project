import React from 'react'

function Cart() {
  return (
    <div>
       <h1 className='font-bold text-4xl m-4 mx-6 uppercase '>Your Cart</h1> 
       <div className='md:flex justify-evenly'>
       <div className='h-150 m-4 p-4 border rounded-xl  '>
       <div className='flex gap-4'>
        <div className='w-1/3'>
            <img src="img14.png" className='h-40 w-40 rounded-xl'/>
        </div>
        <div>
            <h2 className='font-bold text-xl my-2'>Gradient Graphic T-shirt</h2>
            <p className='font-light text-md'>Size: Large</p>
            <p className='font-light text-md my-2'>Color: White</p>
      <div className='flex justify-between'>           
    <p className='font-bold text-xl'>$145</p>
             <button className='h-10 w-20 bg-[#F0F0F0] rounded-full font-bold  md:ml-50 md:w-40'>- 1 +</button>
</div> 
        </div>
       </div>
       <hr className='my-4' /> 
        <div className='flex gap-4'>
        <div className='w-1/3'>
            <img src="img4.png" className='h-40 w-40 rounded-xl'/>
        </div>
        <div>
            <h2 className='font-bold text-xl my-2'>Checkered Shirt</h2>
            <p className='font-light text-md'>Size: Large</p>
            <p className='font-light text-md my-2'>Color: White</p>
      <div className='flex justify-between'>           
    <p className='font-bold text-xl'>$180</p>
             <button className='h-10 w-20 bg-[#F0F0F0] rounded-full font-bold md:ml-50 md:w-40'>- 1 +</button>
</div> 
        </div>
       </div>
       <hr className='my-4'/>
        <div className='flex gap-4'>
        <div className='w-1/3'>
            <img src="img9.png" className='h-40 w-40 rounded-xl'/>
        </div>
        <div>
            <h2 className='font-bold text-xl my-2'>Skinny Fit Jeans</h2>
            <p className='font-light text-md'>Size: Large</p>
            <p className='font-light text-md my-2'>Color: Black</p>
      <div className='flex justify-between'>           
    <p className='font-bold text-xl'>$240</p>
             <button className='h-10 w-20 bg-[#F0F0F0] rounded-full font-bold md:ml-50 md:w-40'>- 1 +</button>
</div> 
        </div>
       </div>
        
       

       </div>
       <div className='h-100 p-4 m-4 border rounded-xl md:h-120'>
        <p className='font-bold text-2xl'>Order Summary</p>
        <div className='flex justify-between mx-10 my-4'>
            <p className='font-light text-xl'>Subtotal</p>
            <p className='font-bold text-xl'>$565</p>
        </div>
        <div className='flex justify-between mx-10' >
            <p className='font-light text-xl'>Discount(-20%)</p>
            <p className='font-bold text-xl text-red-500'>-$113</p>
        </div>
        <div className='flex justify-between mx-10 my-4'>
            <p className='font-light text-xl'>Delivery Fee</p>
            <p className='font-bold text-xl'>$15</p>
        </div>
        <hr/>
        <div className='flex justify-between mx-10 my-4'>
            <p className='font-light text-xl' > Total</p>
            <p className='font-bold text-xl'>$467</p>
        </div>
        <div className='flex'>
        <button className='h-12  bg-[#F0F0F0] rounded-full my-2 w-2/3 '>Add promo code</button>
        <button className='h-12 w-25  rounded-full bg-black text-white mx-8 my-2'>Apply</button></div>
        <button className='h-13 w-full bg-black text-white rounded-full my-4 '>Goto Checkout</button>
       </div>
       </div>
       
       
       
    </div>
  )
}

export default Cart