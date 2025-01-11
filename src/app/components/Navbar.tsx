import React from 'react'
import { SiBurgerking } from "react-icons/si";
import { FaSearch } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";







const Navbar = () => {
  return (
    <div>
      <div className='grid xl:grid-col-1 grid-cols-1'>
      <div className='p-5'>
      <div className='py-3 px-3 rounded-xl border w-full bg-gradient-to-r from-black to grey-900'>
     <div className='flex justify-between items-center'>
      <div className='flex justify-items-center items-center gap-2'>
     {/**logo burger */}
     
     <SiBurgerking className='w-6 h-6 text-yellow-500 hover:text-red-500' />
        {/**search bar */}
        <div style={{position:"relative"}}>
          <input className="rounded-3xl py-3 outline-none text-xs w-{350px} px-10 hidden lg:block md:block" placeholder='search menu'/>
          <FaSearch className='w-5 h-5 text-yellow-600 absolute right-3 top-1/4 transform translate-y-1/4 hidden lg;block md:block' />

     </div>
     </div>  

     <div>
     <nav className='flex justify-center flex-wrap gap-6 text-slate-500 font-medium bg-gradient-to-r from-black to-slate-900'>
      <a className='hover:text-red-600 text-amber-500' href='/'>Home</a>
      <a className='hover:text-red-600 text-amber-500' href='/about'>About</a>
      <a className='hover:text-red-600 text-amber-500' href='/contact'>Contact</a>
      <a className='hover:text-red-600 text-amber-500' href='/reservation'>Reservation</a>
     </nav>

     </div>

    <div className='flex justify-center items-center gap-2'>
    <FaBolt className=' w-5 h-5 text-amber-400 lg:block md:block' />
    <p className='text-sm text-white lg:block md:block'>Oder now and get it with
      <span className='text-amber-400'>15 mint!</span>
    </p>
      
            {/**shopping card */}
            <FaShoppingCart  className=' inline-block w-8 h-8 text-amber-500 relative'/> 
          

      
      
      
            </div>

      </div>
      </div>
      </div>
      </div>
      </div>
  )
}

export default Navbar
