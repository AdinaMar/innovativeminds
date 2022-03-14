import React from 'react'
import  {BsFillPatchCheckFill} from 'react-icons/bs'
import {FaRegTimesCircle }  from 'react-icons/fa'
const Remote = ({active}) => {
  return (
    <>
        {
        (active ? (
          
                <BsFillPatchCheckFill className="icon" />
         
        ) : (
            
      <FaRegTimesCircle className="icon" />
      
        
         )) }
    </>
  )
}

export default Remote