import React, { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi';
import user from '../../images/userIcon.jpg';
import photo from '../../images/camera.png';
import UserActivities from './UserActivities';
import { Link } from 'react-router-dom';


const UserCard = () => {

  {/*$(document).ready(function() {

    
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            

            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
               
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }
    

    $(".file-upload").on('change', function(){
        readURL(this);
    });
    
    $(".upload-button").on('click', function() {
       $(".file-upload").click();
    });
});
*/}

  return (
    <div> 
<div className='card-wrapper'>
 

{/*<div class="circle">
       
       <img class="profile-pic" src={user} alt="user-pic"/>
     </div>
     <div class="p-image">
       
     <i class="fa fa-camera upload-button"><img class="photo-pic" src={photo} alt="user-pic"/></i>
        <input class="file-upload" type="file" accept="image/*"/>
  </div>*/}
    

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

        <Link to="/loginForm"> <button className="btnLogOut">Log out</button></Link>
    </div>
    
    
    </div>





    </div>
  )
}

export default UserCard