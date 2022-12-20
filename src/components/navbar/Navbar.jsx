import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../logo/Logo';
import "../../style.css"





function Navbar() {


  return (
    <nav className='h-1/6 w-full border-solid border-none flex flex-col align-center'>
      <div className='flex flex-col items-center justify-center bg-black pb-2'>
        <Logo />
        <p className='text-white text-xl text-center font-serif font-bold pt-2 hover:text-red-600 hover:underline hover:underline-offset-4'>YOUR SECOND HOME</p>

      </div>

      <div className='flex justify-center bg-black'>
      <div className='w-full md:w-10/12 lg:text-xl lg:w-6/12 h-3/6 flex justify-around pt-1 pb-1 bg-black text-white'>
        <Link to={"/"} className="border-transparent border-b-2 hover:border-red-900 hover:text-red-600 hover:text-2xl">Anasayfa</Link>
        <Link className="border-transparent border-b-2 hover:border-red-900	 hover:text-red-600 hover:text-2xl" to={"/rooms"}>Odalar</Link>
        <Link className="border-transparent border-b-2 hover:border-red-900 hover:text-red-600 hover:text-2xl" to={"/gallery"}>Galeri</Link>
        <Link className="border-transparent border-b-2 hover:border-red-900 hover:text-red-600 hover:text-2xl" to={"/contact"}>İletişim</Link>
      </div>
      </div>
      
    </nav>
  )
}

export default Navbar