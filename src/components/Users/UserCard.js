import React, { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi';
import user from '../../images/userIcon.jpg';
import UserActivities from './UserActivities';
import { Link } from 'react-router-dom';

const UserCard = () => {


  return (
    <div> 
<div className='card-wrapper'>
 

  
    

    <div className="profile-pic">
        <img src={user} alt="user-pic"/>
        </div>

<div className="user-infos">
    <h2>Name Surname</h2>
    <h3>Administrator</h3>
    <p>E-mailAddress@gmail.com</p>
    <p>+403456789</p>
    <div className="office-info">
        <small>Office &#8470;: 43</small>
        <small>Seat &#8470;: 6</small>
        </div>

        <Link to="/workRemote" className="single-activity">  <button>Work remote</button> </Link>
    </div>
    
    
    </div>





    </div>
  )
}

export default UserCard