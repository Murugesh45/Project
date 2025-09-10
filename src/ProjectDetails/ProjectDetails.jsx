import React from 'react'

function ProjectDetails() {
  return (
    <div>
        <p className=" mt-30 h-14  w-full bg-black text-white text-sm  flex justify-center items-center ">
          Sign up and get 20% off your first order.
       <a href=""> <span className="text-md  underline hover:text-gray-300">Sign Up Now</span></a>
        </p>
       <div className="flex justify-between  relative top-3 ">
        <div className="flex space-x-12">
          <div className="md:hidden">
        <i className="fa-solid fa-bars font-bold text-2xl relative top-4 left-6"></i></div>
        <h1 className="uppercase font-bold text-2xl relative bottom-1 right-4 md:mx-15 text-3xl relative top-2 ">shop.co</h1>
        <div className="hidden md:block  ">
          <div className="flex space-x-6">
          <select className="outline-none relative bottom-2 top-1 ">
            <option>Shop</option>
          </select>
          <p className="relative top-3">OnSale</p>
          <p className="relative top-3">NewArraivals</p>
          <p className="relative top-3"> Brands</p>
          <input type="text" placeholder='Search for products...' className='md:h-10 px-6 w-full bg-[#F0F0F0]  rounded-full outline-none relative left-2  mx-2 lg:w-140  relative top-2 transform -translate-x-4 px-6'/>
          
        </div>
        </div>
        </div>
        <div className="sm:nav1 flex gap-3 mx-5 md:flex relative top-4 right-6 ">
          <div className="md:hidden">
          <i className="fa-solid fa-magnifying-glass font-bold text-2xl"></i>
          </div>
         <i className="fa-solid fa-cart-shopping font-bold text-2xl "></i>
          <i className="fa-solid fa-user font-bold text-2xl "></i>
        </div>
        </div>
        <p className='mt-10 mb-0 mx-6'><span className='opacity-50 mr-4'>Home </span><span className='opacity-50 mr-4'>Shop</span><span className='opacity-50 mr-4'>Men</span><span>T-Shirts</span></p>
    <div className='flex my-8 flex-col md:flex-row justify-evenly '>
        <div className=' flex flex-col md:flex-row'>
            <div className='m-4 md:order-2'>
                <img src="/img16.png" className='rounded-xl h-70 w-full md:h-125 '/>
            </div>
            <div className='m-4 flex justify-evenly gap-2 md:flex-col order-1 ' >
                <img src="/img16.png" className='rounded-xl h-18 w-44 md:h-40' />
                 <img src="/img17.png" className='rounded-xl h-18 w-44 md:h-40' />
                  <img src="/img18.png" className='rounded-xl h-18 w-44 md:h-40' />
            </div>
        </div>
        <div className='mx-4 md:w-1/2 md:my-4'>
            <h1 className='font-extrabold  text-3xl w-70 h-14 md:w-100 '>One Life Graphic T-shirt</h1>
            <p className='font-bold text-xl my-4 '>$260<del className='font-bold mx-2 opacity-50'>$300</del> <button className='h-8 w-15  rounded-full  bg-[#FF33331A] '>-40%</button></p>
            <p className='w-full h-12 font-thin'>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
            <hr className='mt-8' />
            <p className='my-4'>Select Colors</p>
            <div className='flex gap-4'>
            <span className='h-10 w-10 rounded-full bg-red-800'></span>
            <span className='h-10 w-10 rounded-full bg-[#314F4A]'></span>
            <span className='h-10 w-10 rounded-full bg-[#31344F]'></span></div>
             <hr className='my-4' />
             <p className='font-thin'>Choose Size</p>
             <button className='h-9 w-18 bg-[#F0F0F0] font-thin rounded-full mx-4 my-4'>Small</button>
             <button className='h-9 w-18 bg-[#F0F0F0] font-thin rounded-full'>Medium</button>
             <button className='h-9 w-18 bg-[#F0F0F0] font-thin rounded-full mx-4'>Large</button>
             <button className='h-9 w-18 bg-[#F0F0F0] font-thin  rounded-full'>X-Large</button>
            <hr className='my-4 '/>
            <div className='flex'>
            <button className='h-10 w-28 bg-[#F0F0F0] rounded-full font-bold'>- 1 +</button>
            <button className='h-10 w-60 bg-black rounded-full text-white mx-4'>Add to Cart</button></div>
        </div>
    </div>
    <div className='flex justify-around mx-4 mt-10 md:flex justify-around'>
        <p className=' h-3'>Product Details</p>
        <p className=' h-3 font-bold border-b-4 pb-10  border-black'>Rating & Reviews</p>
        <p className=' h-3'>FAQs</p>

    </div>
    <hr/>
    <div className='flex justify-between  '>
    <p className='font-bold text-xl mx-4 my-4'>All Reviews<span className='font-bold text-sm opacity-50 mx-2'>(451)</span></p>
    <button className='h-10 w-30 bg-black rounded-full text-white mx-6 my-4'>Write a Review</button>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className=' p-4 m-4  border-2 border-red-200  rounded-xl h-55 md:h-60 lg:h-50'>
<p className='font-bold '>Samantha D. <i class="fa-solid fa-check mx-1 border rounded bg-green-500 text-white "></i></p>
<p className=' font-light'>"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>
<p className='font-light my-4'>Posted on August 14, 2023</p>
</div>
<div className=' p-4 m-4  border-2 border-red-200  rounded-xl h-60 md:h-60 lg:h-50'>
<p className='font-bold '>Alex M. <i class="fa-solid fa-check mx-1 border rounded bg-green-500 text-white "></i></p>
<p className='font-light'>"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."</p>
<p className='font-light my-4'>Posted on August 14, 2023</p>
</div>
<div className=' p-4 m-4  border-2 border-red-200  rounded-xl h-60 md:h-60 lg:h-50'>
<p className='font-bold '>Ethan R. <i class="fa-solid fa-check mx-1 border rounded bg-green-500 text-white "></i></p>
<p className='sm: font-light'>"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."</p>
<p className='font-light my-4'>Posted on August 14, 2023</p>
</div>
<div className=' hidden p-4 m-4  border-2 border-red-200  rounded-xl h-45 md:h-60 lg:h-50 md:grid'>
<p className='font-bold '>Olivia P. <i class="fa-solid fa-check mx-1 border rounded bg-green-500 text-white "></i></p>
<p className='sm: font-light'>"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."</p>
<p className='font-light my-4'>Posted on August 14, 2023</p>
</div>
<div className='hidden p-4 m-4  border-2 border-red-200  rounded-xl h-45 md:h-60 lg:h-50 md:grid'>
<p className='font-bold '>Liam K. <i class="fa-solid fa-check mx-1 border rounded bg-green-500 text-white "></i></p>
<p className='sm: font-light'>"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."</p>
<p className='font-light my-4'>Posted on August 14, 2023</p>
</div>
<div className='hidden p-4 m-4  border-2 border-red-200  rounded-xl h-45 md:h-60 lg:h-50 md:grid'>
<p className='font-bold '>Ava H. <i class="fa-solid fa-check mx-1 border rounded bg-green-500 text-white "></i></p>
<p className='sm: font-light'>"I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."</p>
<p className='font-light my-4'>Posted on August 14, 2023</p>
</div>
    </div>
    

 <p className=' font-extrabold uppercase text-center py-4 text-2xl'>You might also like</p>
    <div className="flex mx-6 gap-2 md:flex justify-evenly">
  <div><img src="/img14.png" className='w-50 h-50 rounded-lg'/><br/><p className='font-bold text-sm lowercase'>Polo with Contrast Trims</p><br/><p className='sm: font-bold relative bottom-6'>$212<del className=' sm: font-bold mx-4 text-red-300'>$260</del></p></div>
  <div><img src="/img15.png" className='w-50 h-50 rounded-lg'/><br/><p className='font-bold text-sm lowercase'>Gradient Graphic T-shirt</p><br/><p className='sm: font-bold relative bottom-6'>$145</p>
  </div>
  <div><img src="/img8.png" className='hidden w-50 h-50 rounded-lg md:flex'/><br/><p className=' hidden font-bold text-sm lowercase md:flex'>LOOSE FIT BERMUDA SHORTS</p><br/><p className='sm: hidden font-bold relative bottom-6 md:flex'>$180</p></div>
  <div><img src="/img9.png" className='hidden w-50 h-50 rounded-lg md:flex'/><br/><p className='hidden font-bold text-sm lowercase md:flex'>FADED SKINNY JEANS</p><br/><p className='sm: hidden font-bold relative bottom-6 md:flex'>$130<del className=' sm: hidden font-bold mx-4 text-red-300 md:flex'>$160</del></p>
  </div>
</div>
<div className='sm: p-6 m-4 border h-75 rounded-lg bg-black md:flex gap-8 md:h-50 '>
  <div className='md:w-1/2 mt-4'>
      <h1 className='sm: font-extrabold text-white text-3xl '>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1></div>
      <div className=' md:w-1/2'>
      <input type="text" placeholder="Enter your email address" className='sm: bg-white mt-4 mb-2 h-12 w-full rounded-full px-4 outline-none ' />
      <button  className=' bg-white my-4 h-12 w-full rounded-full px-4 '>Subscribe to Newsletter</button></div>

    </div >

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

export default ProjectDetails