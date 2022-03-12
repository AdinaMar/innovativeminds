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
import OfficeManagement from '../components/officeManagement/OfficeManagement';
import AddOffice from '../components/officeManagement/AddOffice';
import EditOffice from '../components/officeManagement/EditOffice';
import OfficeStatus from '../components/officeStatus/OfficeStatus';
import OfficeInfo from '../components/officeStatus/OfficeInfo';
import DeskAssignement from '../components/deskAssignement/DeskAssignement';

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
<Route exact path="/officeManagement" element={<OfficeManagement/>} />
<Route exact path="/addOffice" element={<AddOffice />} />
<Route exact path="/editOffice/:id" element={<EditOffice />} />
<Route exact path="/officeStatus" element={<OfficeStatus />} />
<Route exact path="/officeInfo/:id" element={<OfficeInfo />} />
<Route exact path="deskAssignement" element={<DeskAssignement />} />
</Routes>
</div>
 </BrowserRouter>

    </>
  )
}

export default HomeUser