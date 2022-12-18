import React, { useEffect, useState } from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
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
    <div className=''>
        <Navbar />
        {isReservVis ? <Reservation /> : null }
        <Slider/>
        <Rooms />
        <Footer />
    </div>
  )
}

export default Home