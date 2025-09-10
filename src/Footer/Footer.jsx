import React from 'react'

function Footer() {
  return (
    <div >
        <div className='md:flex '>
        <div className='md:w-1/3 mt-4'>
       <h1 className=" uppercase font-bold text-2xl mx-4 ">shop.co</h1>
       <p className=' px-4 my-4 '>We have clothes that suits your style and which you're proud to wear. From women to men.</p>
       <div className=' w-34 h-7 flex gap-3 mx-4'>
           <i class="fa-brands fa-twitter"></i>
           <i class="fa-brands fa-facebook"></i>
           <i class="fa-brands fa-instagram"></i>
           <i class="fa-brands fa-github"></i>
       </div>
       </div>
    <div className=' flex justify-around md:w-1/3  '>
    <div className=' flex flex-col gap-2 mt-4 relative right-4  h-35 '>
        <p className=' uppercase font-bold'>company</p>
        <p className=' font-light'>About</p>
        <p className=' font-light'>Features</p>
        <p className=' font-light'>Works</p>
        <p className=' font-light'>Career</p>

    </div>
    <div className=' flex flex-col gap-2 mt-4 h-35 '>
        <p className=' uppercase font-bold'>Help</p>
        <p className=' font-light'>Customer Support</p>
        <p className=' font-light'>Delivery Details</p>
        <p className=' font-light'>Terms & Conditions</p>
        <p className=' font-light'>Privacy Policy</p>

    </div>
    </div>
    <div className=' flex  justify-around mt-4 md:w-1/3 mb-4  '>
    <div className=' flex flex-col gap-2 mt-4 h-35 md:mt-0'>
        <p className=' uppercase font-bold'>Faq</p>
        <p className=' font-light'>Account</p>
        <p className=' font-light'>Manage Deliveries</p>
        <p className=' font-light'>Orders</p>
        <p className=' font-light'>Payment</p>

    </div>
    <div className=' flex flex-col gap-2 mt-4 h-35 md:mt-0 '>
        <p className=' uppercase font-bold'>Reasources</p>
        <p className=' font-light'>Free eBook</p>
        <p className=' font-light'>Development Tutorial</p>
        <p className=' font-light'>How to -Blog</p>
        <p className=' font-light'>Youtube Playlist</p>
        

    </div>
    </div>
    </div>
    <hr className=' my-6'/>
    <div className='flex flex-col mx-4 md:flex justify-between mx-8 py-4 '>
        <div>
    <p className='text-center pb-2 '>Shop.co © 2000-2023, All Rights Reserved</p></div>
    <div className="flex gap-4 items-center justify-center my-2 ">
  <i className="fa-brands fa-cc-visa"></i>
  <i className="fa-brands fa-cc-mastercard"></i>
  <i className="fa-brands fa-google-pay"></i>
  <i className="fa-brands fa-cc-paypal"></i>
</div>

    </div>
    
    

    </div>
    
    
  )
}

export default Footer