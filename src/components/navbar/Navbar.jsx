import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../logo/Logo';
import "../../style.css"





function Navbar() {


  return (
    <nav className='h-1/6 w-full border-solid border-none flex flex-col align-center'>
      <div className='flex flex-col items-center justify-center bg-black pb-2'>
        <Logo />
        <p className='text-white text-xl text-center font-serif font-bold pt-2'>YOUR SECOND HOME</p>

      </div>

      <div className='w-full h-3/6 flex justify-around pt-1 pb-1 bg-gray-200'>
        <Link to={"/"} className="border-transparent border-b-2 hover:border-black hover:text-gray-800">Anasayfa</Link>
        <Link className="border-transparent border-b-2 hover:border-black hover:text-gray-800" to={"/rooms"}>Odalar</Link>
        <Link className="border-transparent border-b-2 hover:border-black hover:text-gray-800" to={"/gallery"}>Galeri</Link>
        <Link className="border-transparent border-b-2 hover:border-black hover:text-gray-800" to={"/contact"}>İletişim</Link>
      </div>
    </nav>
  )
}

export default Navbar