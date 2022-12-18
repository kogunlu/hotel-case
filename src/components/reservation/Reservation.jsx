import React, { useState } from 'react'
import "../../style.css"

function Reservation() {

    const [enterDate, setEnterDate] = useState(new Date())
    const [exitDate, setExitDate] = useState(new Date())
    const [visitorNum, setVisitorNum] = useState(0)

    //this state can be used to take the visitor details in order to make the reservation
    const [visitorDetails, setVisitorDetails] = useState({})

    function handleSubmit(e){
        e.preventDefault()

        setVisitorDetails({
            enterDate: enterDate,
            exitDate : exitDate,
            numberOfVisitors: visitorNum
        })

        setEnterDate(new Date())
        setExitDate(new Date())
        setVisitorNum(0)
    }

    function handleMinus(e){
        e.preventDefault()
        if(visitorNum > 0){
            setVisitorNum(visitorNum => visitorNum-1)
        }
    }

    function handlePlus(e){
        e.preventDefault()
        setVisitorNum(visitorNum => visitorNum + 1)
    }


  return (
    <div className='bg-gray-600 text-white flex flex-col items-center pt-2'>
        <h3 className='w-3/6 text-center border-b-2 mb-1'>Rezervasyon Yapın</h3>

        <form className='w-full flex flex-col items-center justify-center mt-2' onSubmit={e => handleSubmit(e)}>
            <div className='w-full flex flex-col items-center justify-center'>

                <div className='w-5/6 flex flex-col items-center justify-end'>
                    <label className='text-center'>Giriş tarihi</label>
                    <input 
                    className='w-full text-black focus:outline-none rounded-lg text-center '
                    type={'date'} 
                    value={enterDate}
                    onChange={e => setEnterDate(e.target.value)}
                    />
                </div>

                <div className='w-5/6 flex flex-col items-center '>
                    <label className='text-center'>Çıkış tarihi</label>
                    <input 
                    className='w-full text-black focus:outline-none rounded-lg text-center' 
                    type={'date'}
                    value={exitDate}
                    onChange={e => setExitDate(e.target.value)} 
                     />
                </div>

                <div className='w-5/6 flex flex-col align-end justify-end'>
                    <label 
                    className='text-center'>
                        Kişi sayısı
                    </label>

                    <div className='flex justify-center'>
                        <button 
                        className='w-1/6 text-white hover:text-black'
                        onClick={e => handleMinus(e)}>-</button>

                        <input 
                        type={'number'} 
                        className="border-none w-full text-black w-2/6 focus:outline-none rounded-lg text-center"
                        placeholder='Kişi sayısı..'
                        value={visitorNum}
                        onChange={e => setVisitorNum(e.target.value)} />

                        <button 
                        className='w-1/6 text-white hover:text-black'
                        onClick={e => handlePlus(e)}>+</button>
                    </div>
                </div>
            </div>

            <button className='w-2/6 my-2 flex justify-center items-center text-white hover:text-black hover:underline-offset-2' type='submit'>Ara</button>
            
        </form>
    </div>
  )
}

export default Reservation