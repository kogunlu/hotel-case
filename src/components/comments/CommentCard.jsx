import React from 'react'

function CommentCard({imageSrc, header, comment, name, handleHover}) {
  return (
    <div 
    onPointerEnter={() => handleHover()}
    onPointerLeave={() => handleHover()} 
    className='px-1 py-3 w-full md:w-3/12 h-auto flex flex-col items-center justify-between gap-3 border border-neutral-100 rounded-md hover:border-dotted hover:border-neutral-400 md:hover:-translate-y-4 z-0 hover:z-20 hover:backdrop-blur-xl md:opacity-70 hover:opacity-100 xl:mb-10 2xl:mb-32'>
        <div className='flex flex-col justify-between items-center gap-2'>
            <img
            src = {imageSrc}
            className="rounded-full w-24"
            alt="Avatar"
            />
            <h2 className='text-2xl font-semibold text-center'>{header}</h2>
        </div>

        <div className='flex flex-col items-between gap-5'>
            <p className='text-md text-center'>{comment}</p>
            <p className='font-bold italic text-lg text-end'>{name}</p>
        </div>
    </div>
  )
}

export default CommentCard