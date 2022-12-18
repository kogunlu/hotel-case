import React, {useState, useEffect, useRef} from 'react'
import "./slider.css"
import {hotelArray} from "./dataSlider"
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill  } from "react-icons/bs";
import {motion} from "framer-motion"
import SliderCard from './SliderCard';



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
      <div className='w-full flex justify-center gap-2 items-center mt-2 '>
        {arr.map( (imageSrc, i ) => {
          return (<img 
            key={i} 
            src={imageSrc} 
            alt="thumbnail" 
            onClick={() => image(i)}
            className={index === i ? "active h-12 rounded-lg" : "h-12 rounded-lg" }
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
    <div className='mt-5 flex flex-col items-center justify-center'>
      <p className='text-xl font-bold text-center'>Otel Görselleri</p>
      <div className='w-full relative h-max border-solid border-2 border-slate-200 mb-5 pb-2 rounded-lg'>
      <img className='mainImg h-10/12 w-full rounded-lg' src={imgs[index]} alt="hotelPicture"></img>
      <div className='actions'>
        <button className=' bg-none text-white rounded hover:text-slate-300 focus:outline-none' 
        onClick={prev}
        >
          <BsFillArrowLeftCircleFill />
        </button>
        <button className=' bg-none text-white rounded hover:text-slate-300 focus:outline-none' 
        onClick={next}
        >
          <BsFillArrowRightCircleFill />
        </button>

      </div>

      <Thumbnail arr={imgs} image={setIndex} index={index} />
    </div>
  </div>
  )
}

export default Slider