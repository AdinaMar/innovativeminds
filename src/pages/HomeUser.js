import React, {useState } from 'react'
import UserActivities from '../components/Users/UserActivities'
import UserCard from '../components/Users/UserCard'
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import UsersManagement from '../components/Users/activities/UsersManagement';
import AddUser from './AddUser';
import EditUser from './EditUser';
import BuildingManagement from '../components/buildingManagement/BuildingManagement';
import AddBuilding from '../components/buildingManagement/AddBuilding';
import EditBuilding from '../components/buildingManagement/EditBuilding';

const HomeUser = (users, setUsers) => {
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
  
<Route path="UsersManagement/*" element={<UsersManagement/>} />
<Route exact path="/addUser" element={<AddUser/>} />
<Route exact path="/editUser/:id" element={<EditUser />} />
<Route exact path="/buildingManagement" element={<BuildingManagement/>} />
<Route exact path="/addBuilding" element={<AddBuilding />} />
<Route exact path="/editBuilding/:id" element={<EditBuilding />} />
</Routes>
</div>
 </BrowserRouter>

    </>
  )
}

export default HomeUser