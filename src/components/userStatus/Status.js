import React from 'react'

import {FaUserTimes} from 'react-icons/fa'
import {BsFillPersonCheckFill} from 'react-icons/bs'
const Status = ({active}) => {
  return (
    <>
        {
        (active ? (
            
                <BsFillPersonCheckFill className="icon" />
          
        ) : (
            
      <FaUserTimes className="icon" />
        
        
         )) }
    </>
  )
}

export default Status