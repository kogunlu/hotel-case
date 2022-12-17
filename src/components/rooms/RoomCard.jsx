import React from 'react'

function RoomCard( { imageSrc, description, name, header } ) {
  return (
    <div className='w-5/6 h-max border-solid border-2 border-slate-200 flex-col items-center justify-center mb-5 rounded-lg'>
        <img className='h-4/6 w-full scale-90 hover:scale-100 ease-in duration-500 rounded-lg ' 
        src={imageSrc} 
        alt={name}></img>

        <div className='h-2/6 w-full flex flex-col justify-center items-center my-5'>
            <h3 className='text-center font-semibold text-lg underline underline-offset-2 my-2 '>{header}</h3>
            <p className='text-center px-5'>{description}</p>
            <button className="group relative h-8 w-6/12 overflow-hidden rounded-lg bg-white text-lg shadow my-5">
                <div className="absolute inset-0 w-2 bg-slate-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-black group-hover:text-white">Detayları Göster</span>
            </button>

        </div>
        
    </div>
  )
}

export default RoomCard