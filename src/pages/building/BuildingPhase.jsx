import React, {useEffect} from 'react'
import {useNavigate} from "react-router-dom"

function BuildingPhase() {



  const navigate = useNavigate()

  

    useEffect(() => {
      let timer = setTimeout(() => navigate("/"), 5000)
  
      return () => clearTimeout(timer)
    },[])

    
    
  


  return (
    <div className='flex flex-col justify-center items-center'>
        <p className="text-xl font-bold text-center">This page is in the phase of development...</p>
        <p>You will be re-directed to the home page...</p>
    </div>
  )
}

export default BuildingPhase