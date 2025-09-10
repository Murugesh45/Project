import React from 'react'



function Header() {
  return (
    <div>
    <div className='bg-[#F2F0F1] my-10 py-8 px-4 h-235   md:flex flex-row justify-evenly  bg-[F2F0F1] md:h-110'>
      <div className='mx-2 my-2 block md:w-1/2 '>
        <h1 className='w-80 h-12 font-bold text-4xl md:text-4xl  font-extrabold'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p className='relative top-20 ms-2 text-light w-full pr-4 '>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
        <button className='bg-black w-full rounded-full text-white my-4 h-14 px-12 py-4 relative top-22 md:w-50'>Shop Now</button>
       <div className='flex flex-col justify-between relative top-24 mx-3 md:flex-row    '>
        <div className='flex justify-between md:flex justify-evenly'>
          <div>
            <h2 className='font-bold text-xl'>200+</h2>
            <p className='text-sm font-light '>International Brands</p>
          </div>
          <div className='border-l ps-4 md:border-none lg:ml-30'>
            <h2 className='font-bold text-xl'>2000+</h2>
            <p className='text-sm font-light' >High-Quality Products</p>
          </div>
        </div>
        <div className='mx-auto mt-6 md:m-0  '>
          <h2 className='font-bold text-xl '>30,000+</h2>
          <p className='text-sm font-light'>Happy Customers</p>
        </div>
       </div>
        </div>
        <div className=' absolute top-190 z-2 w-10 md:hidden'>
          <img src="/image.png" />
        </div>
        <div className=' absolute top-170 right-10 z-2 w-15 md:hidden'>
          <img src="/image.png" />
        </div>

      <div className='w-80 h-100   md:w-1/2 transform -translate-y-20 md:w-90 ' >
        
      
      <img src="/img1.jpg" className='mt-50 md:mt-14'/>
    
     </div>
      </div>
    
      
     
     
      

    
     <div className=' font-bold text-2xl  font-serif text-white relative bottom-10 z-10 bg-black h-30 w-full flex flex-wrap uppercase  justify-around py-4 md: text-3xl flex justify-evenly items-center h-20 bg-black gap-2 w-full pb-8   '>
      <p>verse</p>
      <p>zara</p>
      <p>gucci</p>
      <p>prada</p>
      <p className='lowercase'>Calvin Klein</p>
    </div>
   
    
    </div>
    
    
  
    
    
    
    
  )
}

export default Header