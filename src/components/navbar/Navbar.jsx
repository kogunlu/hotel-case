import React from 'react'
import { NavLink } from "react-router-dom";
import Logo from '../logo/Logo';
import "../../style.css"





function Navbar() {

  const activeClassName = "border-transparent border-b-2 text-red-600 border-red-900 text-2xl"
  const passiveClassName = "border-transparent border-b-2 hover:text-red-600"

  return (
    <nav className='h-1/6 w-full border-solid border-none flex flex-col align-center'>
      <div className='flex flex-col items-center justify-center bg-black pb-2'>
        <Logo />
        <p className='text-white text-xl text-center font-serif font-bold pt-2 select-none'>YOUR SECOND HOME</p>

      </div>

      <div className='flex justify-center bg-black'>
      <div className='w-full md:w-10/12 lg:text-xl lg:w-6/12 h-3/6 flex justify-around pt-1 pb-1 bg-black text-white'>
        <NavLink 
        className={({isActive}) => isActive ? activeClassName : passiveClassName }
        to={"/"} 
        >Anasayfa</NavLink>

        <NavLink 
        className={({isActive}) => isActive ? activeClassName : passiveClassName }
        to={"/rooms"}
        >Odalar</NavLink>

        <NavLink 
        className={({isActive}) => isActive ? activeClassName : passiveClassName }
        to={"/gallery"}>Galeri</NavLink>

        <NavLink 
        className={({isActive}) => isActive ? activeClassName : passiveClassName } 
        to={"/contact"}>İletişim</NavLink>
      </div>
      </div>
      
    </nav>
  )
}

export default Navbar