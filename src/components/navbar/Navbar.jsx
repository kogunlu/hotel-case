import React from 'react'
import logo from "../pictures/logo.jpg"
import { Link } from "react-router-dom";



function Navbar() {


  return (
    <nav className='h-1/6 w-full border-solid border-none flex flex-col align-center'>
      <div className='flex justify-center bg-black'>
        <img className='w-3/6' src={logo} alt="logo"></img>
      </div>

      <div className='w-full h-3/6 flex justify-around pt-1 pb-1 bg-gray-200'>
        <Link to={"#"} className="border-transparent border-b-2 hover:border-gray-600 hover:text-gray-800">Anasayfa</Link>
        <Link className="border-transparent border-b-2 hover:border-gray-600 hover:text-gray-800" to={"#"}>Odalar</Link>
        <Link className="border-transparent border-b-2 hover:border-gray-600 hover:text-gray-800" to={"#"}>Galeri</Link>
        <Link className="border-transparent border-b-2 hover:border-gray-600 hover:text-gray-800" to={"#"}>İletişim</Link>
      </div>
  
    </nav>
  )
}

export default Navbar