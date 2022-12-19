import React, { useEffect, useState } from 'react'
import Message from '../../components/message/Message'
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
    <>
        <Navbar />
        {isReservVis ? <Reservation /> : null }
        <Slider/>
        <Rooms />
        <Message />
        <Footer />
    </>
  )
}

export default Home