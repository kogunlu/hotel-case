import React, { useEffect, useState } from 'react'
import Message from '../../components/message/Message'
import Reservation from '../../components/reservation/Reservation'
import Rooms from '../../components/rooms/Rooms'
import Slider from '../../components/slider/Slider'




function Home() {

  const [isReservVis, setIsReserveVis] = useState(false)

  useEffect(() => {
    let timer = setTimeout(() => setIsReserveVis(true), 2750)

    return () => clearTimeout(timer)
  },[])



  return (
    <div className='lg:text-lg'>
        {isReservVis ? <Reservation /> : null }
        <Slider/>
        <Rooms />
        <Message />
    </div>
  )
}

export default Home