import React from 'react'

function Section() {
  return (
    <div>
 <p className=' font-extrabold uppercase text-center py-4 text-2xl'>New Arraivals</p>
<div className=" flex mx-4 gap-2 md:flex justify-evenly">
  <div><img src="/img2.png" className=' w-50 h-50 rounded-lg'/><br/><p className=' font-bold text-sm lowercase'>T-SHIRT WITH TAPE DETAILS</p><br/><p className=' font-bold relative bottom-6'>$120</p></div>
  <div><img src="/img3.png" className=' w-50 h-50 rounded-lg'/><br/><p className=' font-bold text-sm lowercase'>SKINNY FIT JEANS</p><br/><p className=' font-bold relative bottom-6'>$240<del className='  font-bold mx-4 text-red-300'>$260</del></p>
  </div>
   <div><img src="/img4.png" className='sm: hidden w-50 h-50 rounded-lg md:flex'/><br/><p className='sm: hidden font-bold text-sm lowercase md:flex'>T-SHIRT WITH TAPE DETAILS</p><br/><p className=' hidden font-bold relative bottom-6 md:flex'>$120</p></div>
  <div><img src="/img5.png" className='sm: hidden w-50 h-50 rounded-lg md:flex'/><br/><p className='sm: hidden font-bold text-sm lowercase md:flex'>SKINNY FIT JEANS</p><br/><p className=' hidden font-bold relative bottom-6 md:flex'>$240<del className='hidden font-bold mx-4 text-red-300 md:flex'>$260</del></p>
  </div>
</div>
<div className='mx-4 md:text-center lg:text-center'>
<button className=' text-lg w-full py-2 px-10 border border-red-300 rounded-full md:w-55 lg:w-55'>View All</button></div>

 <p className='my-4 font-extrabold uppercase text-center py-4 text-2xl'>Top Selling</p>
<div className="flex mx-6 gap-2 md:flex justify-evenly">
  <div><img src="/img6.png" className='w-50 h-50 rounded-lg'/><br/><p className='font-bold text-sm lowercase'>Vertical Striped Shirt</p><br/><p className='sm: font-bold relative bottom-6'>$212<del className=' sm: font-bold mx-4 text-red-300'>$260</del></p></div>
  <div><img src="/img7.png" className='w-50 h-50 rounded-lg'/><br/><p className='font-bold text-sm lowercase'>Courage Graphic T-shirt</p><br/><p className='sm: font-bold relative bottom-6'>$145</p>
  </div>
  <div><img src="/img8.png" className='hidden w-50 h-50 rounded-lg md:flex'/><br/><p className=' hidden font-bold text-sm lowercase md:flex'>LOOSE FIT BERMUDA SHORTS</p><br/><p className='sm: hidden font-bold relative bottom-6 md:flex'>$180</p></div>
  <div><img src="/img9.png" className='hidden w-50 h-50 rounded-lg md:flex'/><br/><p className='hidden font-bold text-sm lowercase md:flex'>FADED SKINNY JEANS</p><br/><p className='sm: hidden font-bold relative bottom-6 md:flex'>$130<del className=' sm: hidden font-bold mx-4 text-red-300 md:flex'>$160</del></p>
  </div>
</div>
<div className='mx-4 md:text-center lg:text-center'>
<button className='text-lg w-full p-4   py-2 px-2 border border-red-300  rounded-full md:w-55 lg:w-55 '>View All</button></div>
<div className=' h-230 m-8 p-10 rounded-xl bg-[#F0F0F0] md:h-190 mx-4'>
  <h1 className='uppercase font-serif font-extrabold text-3xl md:text-4xl text-center '>BROWSE BY dress STYLE</h1>
<div className='md:flex gap-4 '>
  <img src="/img10.png "className='h-44  transform scale-x-[-1] w-full my-6 relative my-4 rounded-2xl md:h-70 w-100   '/>
  
  <img src="/img11.png "className='h-44  transform scale-x-[-1] w-full  my-6 relative my-4 rounded-2xl md:w-1/3 md:h-70 '/>
</div>  
<div className='md:flex gap-4'>
  <img src="/img12.png "className='h-44  transform scale-x-[-1] w-full  my-6 relative my-4 rounded-2xl md:w-1/3 md:h-70  '/>
  
  <img src="/img13.png "className='h-44  transform scale-x-[-1] w-full  my-6 relative my-4 rounded-2xl md:h-70 '/>
</div>

</div>

<div className='my-10 font-bold flex md:flex justify-between'>
  <p className=' h-18 w-70 ml-6 font-extrabold uppercase text-2xl md:text-4xl md:w-1/2 '>OUR HAPPY CUSTOMERS</p>
<div className=' flex md:flex relative -top-6 '>  
  <i className="fa-solid fa-arrow-left mr-4 mt-10 "></i>
  <i class="fa-solid fa-arrow-right mr-6 mt-10"></i></div>
  

</div>
<div className='md:flex justify-evenly pb-4 relative -top-4'>
<div className='sm: p-4 m-4  border-2 border-red-200  rounded-xl h-45 md:h-60 lg:h-50'>
<p className='font-bold '>Sarah M. <i class="fa-solid fa-check mx-1 border rounded bg-green-500 text-white "></i></p>
<p className='sm: font-light'>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
</div>
<div className='sm: hidden p-4 m-4  border-2 border-red-200  rounded-xl h-45 md:block md:h-60 lg:h-50'>
<p className='font-bold '>Alex K. <i class="fa-solid fa-check mx-1 border rounded bg-green-500 text-white "></i></p>
<p className='sm: font-light'>"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
</div>
<div className='sm: hidden p-4 m-4  border-2 border-red-200  rounded-xl h-45 md:block md:h-60 lg:h-50'>
<p className='font-bold '>James L. <i class="fa-solid fa-check mx-1 border rounded bg-green-500 text-white "></i></p>
<p className='sm: font-light'>"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p>
</div>
</div>
<div className='sm: p-6 m-4 border h-75 rounded-lg bg-black md:flex gap-8 md:h-50 '>
  <div className='md:w-1/2 mt-4'>
      <h1 className='sm: font-extrabold text-white text-3xl '>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1></div>
      <div className=' md:w-1/2'>
      <input type="text" placeholder="Enter your email address" className='sm: bg-white mt-4 mb-2 h-12 w-full rounded-full px-4 outline-none ' />
      <button  className=' bg-white my-4 h-12 w-full rounded-full px-4 '>Subscribe to Newsletter</button></div>

    </div >
      
          </div>
    

  )
}

export default Section