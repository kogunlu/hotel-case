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
    <div className='flex flex-col items-center py-5 bg-gray-50'>
        <p className='font-bold text-xl text-center md:mb-1 '>Odalarımız</p>
        {rooms}
        
    </div>
  )
}

export default Rooms