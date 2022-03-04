import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'



const UserActivities = () => {
  return (
      <>
    <div className="activities-wrapper">
   {/*<AiOutlineClose className="close-menu"/> */}
        <div className="activities-container">
        <div className="single-activity">
            <p>Users Management</p>
            </div>

            <div className="single-activity">
            <p>Building Management</p>
            </div>

            <div className="single-activity">
            <p>Office Management</p>
            </div>

            <div className="single-activity">
            <p>Office Status</p>
            </div>

            <div className="single-activity">
            <p>Desk Assigment</p>
            </div>

            <div className="single-activity">
            <p>Remote work approval</p>
            </div>

            <div className="single-activity">
            <p>Users Status</p>
            </div>

           

           
        
            </div>
        </div>
        </>
  )
}

export default UserActivities