import React, { useState } from 'react'
import CommentCard from './CommentCard'
import MainCommentCard from './MainCommentCard'
import {comments, mainComment} from "./CommentData.js"


function Comments() {

    const [isHover, setIsHover] = useState(false)

    function handleHover(){
        setIsHover(!isHover)
    }

    const commentCards = comments.map((item, index) => {
      return  (
        <CommentCard
            key={item.visitorName}
            imageSrc={item.visitorImg}
            comment={item.visitorComment}
            name={item.visitorName}
            header = {item.visitorHeader}
            handleHover={handleHover}
        />
      )
    })



  return (
    <div className='w-full h-full flex flex-col items-center mt-5 mb-16 relative'>
        <h2 className='text-2xl font-bold underline underline-offset-4 mb-5 text-center'>Misafirlerimiz Ne Düşünüyor?</h2>
        <div className='w-10/12 flex flex-col md:flex-row justify-evenly'>
             {commentCards}
        </div> 

        <div className='w-10/12 md:absolute bottom-0'>
            <MainCommentCard 
            imageSrc={mainComment.visitorImg}
            comment={mainComment.visitorComment}
            name={mainComment.visitorName}
            header={mainComment.visitorHeader}
            isHover={isHover}  />
        </div>
        
    </div>
  )
}

export default Comments