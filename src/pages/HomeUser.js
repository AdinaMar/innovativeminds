import React, {useState } from 'react'
import UserActivities from '../components/Users/UserActivities'
import UserCard from '../components/Users/UserCard'
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import UsersManagement from '../components/Users/activities/UsersManagement';
import AddUser from './AddUser';



const HomeUser = () => {
  const [isActive, setIsActive] = useState(false);
  



  return (

    <>  
<BrowserRouter>
  
    <div className="home-wrapper">

{(!isActive  ? (

<UserCard /> ):
(<UserActivities />)
)}

{(!isActive ? (
        <GiHamburgerMenu className='menu' onClick={ () => setIsActive(!isActive)} />   ):
      ( <AiOutlineClose className="close-menu" onClick={ () => setIsActive(!isActive)}/>) 
    )} 
  


<Routes>
{/*<Route exact path="/" element={<UserCard/>} />*/}
  
<Route path="/UsersManagement" element={<UsersManagement/>} />
<Route path="/UsersManagement/AddUser" element={<AddUser/>} />

</Routes>
</div>
 </BrowserRouter>

    </>
  )
}

export default HomeUser