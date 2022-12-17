import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import Reservation from '../reservation/Reservation'
import Rooms from '../rooms/Rooms'



function Home() {

  const [isReservVis, setIsReserveVis] = useState(false)

  useEffect(() => {
    let timer = setTimeout(() => setIsReserveVis(true), 2000)

    return () => clearTimeout(timer)
  },[])


  return (
    <div className=''>
        <Navbar />
        {isReservVis ? <Reservation /> : null }
        <Rooms />
        
    </div>
  )
}

export default Home