import React from 'react'

function MainCommentCard({imageSrc, header, comment, name, isHover}) {

    const classListActive = "px-5 py-2 w-full h-auto flex flex-col items-center justify-between gap-3 rounded-md backdrop-blur-xl z-20 border border-neutral-100 rounded-md md:border-b-2 md:border-t-0 md:border-l-2 md:border-r-2 shadow-lg"
    const classListPassive = "px-5 py-2 w-full h-auto flex flex-col items-center justify-between gap-3 rounded-md backdrop-blur-xl z-0 md:blur-sm border border-neutral-100 rounded-md md:border-none"

  return (
    <div className={isHover ? classListPassive : classListActive}>
        <div className='flex flex-col justify-between items-center gap-2'>
            <img
            src = {imageSrc}
            className="rounded-full w-24"
            alt="Avatar"
            />
            <h2 className='text-2xl font-semibold text-center'>{header}</h2>
        </div>

        <div className='flex flex-col items-between gap-5 lg:w-8/12'>
            <p className='text-md text-center'>{comment}</p>
            <p className='font-bold italic text-lg text-end md:text-center'>{name}</p>
        </div>
    </div>
  )
}

export default MainCommentCard