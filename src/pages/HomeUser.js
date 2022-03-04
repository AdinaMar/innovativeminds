import React, {useState } from 'react'
import UserActivities from '../components/Users/UserActivities'
import UserCard from '../components/Users/UserCard'
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai'

const HomeUser = () => {
  const [isActive, setIsActive] = useState(false);
  
  


  return (
    <div className="home-wrapper">

{(!isActive  ? (

<UserCard /> ):
(<UserActivities />)
)}

{(!isActive ? (
        <GiHamburgerMenu className='menu' onClick={ () => setIsActive(!isActive)} />   ):
      ( <AiOutlineClose className="close-menu" onClick={ () => setIsActive(!isActive)}/>) 
    )} 
  




    </div>
  )
}

export default HomeUser