import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import { BrowserRouter,Link, Routes, Route} from 'react-router-dom'
import UsersManagement from './activities/UsersManagement'
import Routess from '../RoutesAdmin/Routess'
import OfficeManagement from '../officeManagement/OfficeManagement'

const UserActivities = () => {
  return (
      
<>


       
    <div className="activities-wrapper">
   {/*<AiOutlineClose className="close-menu"/> */}
        <div className="activities-container">
        

     
       {/* {Routess.map((data,index)=>{
            return(
              <p className="single-activity">
                    <Link to={data.route}>{data.name}</Link>
                    </p>
            )
        })} */}


<Link to="/UsersManagement" className="single-activity">
        <p>Users Management</p>
         </Link>

           <Link to="/buildingManagement"  className="single-activity">
            <p>Building Management</p>
            </Link>

            <Link to="/officeManagement"  className="single-activity">
            <p>Office Management</p>
            </Link>

           <Link to="/officeStatus"  className="single-activity">
            <p>Office Status</p>
            </Link>

            <Link to="/deskAssignement" className="single-activity">
            <p>Desk Assignement</p>
            </Link>

            <Link to="/RemoteApproval" className="single-activity">
            <p>Remote work approval</p>
            </Link>

            <Link to="/userStatus"  className="single-activity">
            <p>Users Status</p>
            </Link>

        

            </div>
         
        </div>
      

        
        
        </>
  )
}

export default UserActivities