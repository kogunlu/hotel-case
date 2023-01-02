import React from 'react'
import RoomCard from './RoomCard'
import roomTypes from "../db/db"


function Rooms() {

    const rooms = roomTypes.map(item => {
       return(
            <RoomCard 
            key={item.name} 
            imageSrc={item.imageSrc}
            description={item.description}
            name={item.name}
            header={item.header}  
            />    
       ) 
    })

  return (
    <div className='flex flex-col items-center py-5 pt-20 bg-gray-50'>
        <p className='font-bold text-xl text-center md:mb-1 lg:text-2xl underline underline-offset-4 '>Odalarımız</p>

        <div className='flex flex-col justify-center items-center lg:flex-row lg:justify-around lg:flex-wrap lg:mx-5 lg:gap-2 lg:pt-5'>
        {rooms}
        </div>
        
    </div>
  )
}

export default Rooms