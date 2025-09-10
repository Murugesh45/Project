import React from 'react';
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
  

function Nav() {
  return (
    <>
      <p className=" h-14  w-full bg-black text-white text-sm  flex justify-center items-center ">
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
       
            
      
      
    </>
  );
}

export default Nav;
