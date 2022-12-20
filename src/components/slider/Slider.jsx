import React, {useState, useEffect} from 'react'
import "./slider.css"
import {hotelArray} from "./dataSlider"
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill  } from "react-icons/bs";



function Slider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
  },[])
  
  const imgs = []

  hotelArray.map(item => {
    return (
      imgs.push(item.picture)
    )
  })

  const Thumbnail = ({arr, image, index}) => {
    return (
      <div className='w-full flex justify-center gap-2 items-center py-2 border-solid border-l-2 border-r-2 border-b-2 border-slate-200 rounded-b-lg '>
        {arr.map( (imageSrc, i ) => {
          return (<img 
            key={i} 
            src={imageSrc} 
            alt="thumbnail" 
            onClick={() => image(i)}
            className={index === i ? "active h-12 md:h-16 lg:h-18 rounded-lg" : "h-12 md:h-16 lg:h-18 rounded-lg" }
            ></img>)
          
        })}
      </div>  
    )
  }

  const next = () => {
    if(index === imgs.length -1 ){
      setIndex(0)
    }else{
      setIndex(index => index+1)
    }
  }

  const prev = () => {
    if(index === 0){
      setIndex(imgs.length -1)
    }else{
      setIndex(index => index-1)
    }
  }


  return (
    <div className='flex flex-col items-center lg:pt-5 bg-gradient-to-b from-white to-gray-50'>

      <div className='mt-3 md:w-10/12 lg:w-full flex flex-col items-center justify-center'>
        <p className='text-xl font-bold text-center'>Otel Görselleri</p>
        <div className='w-full lg:w-8/12 relative h-max mb-5 pb-2 rounded-t-lg'>
        <img className='mainImg w-full rounded-t-lg' src={imgs[index]} alt="hotelPicture"></img>
        <div className='actions'>
          <button className=' bg-none text-white md:text-2xl lg:text-3xl rounded hover:text-slate-300 focus:outline-none' 
          onClick={prev}
          >
            <BsFillArrowLeftCircleFill />
          </button>
          <button className=' bg-none text-white md:text-2xl lg:text-3xl rounded hover:text-slate-300 focus:outline-none' 
          onClick={next}
          >
            <BsFillArrowRightCircleFill />
          </button>

        </div>

        <Thumbnail arr={imgs} image={setIndex} index={index} />
      </div>
    </div>
  </div>
    
  )
}

export default Slider