import React from 'react'
import { useState } from 'react'

import {  useNavigate } from 'react-router-dom'
import { addOffice } from '../../api/api'

const initialValues = {
    name: "",
    buildingName: "",
    floor:"",
    totalDesks:"",
    usableDesks:"",
    adminOffice:""
    
}

const AddOffice = () => {
 

   
        
        const[office, setOffice] = useState(initialValues)
        const{name,buildingName,floor,totalDesks,usableDesks,adminOffice} = office
      
        
        const navigate = useNavigate();
    
        const handleChange = e => {
         
            const {name, value} = e.target
            setOffice({
              ...office,
              [name]: value
            })
          }
    
          
    
          const addOfficeDetails = async () => {
            const newOffice = {
              officeName: name,
              floorNumber: floor,
              deskCount: totalDesks,
              usableDeskCount: usableDesks,
              occupiedDeskCount: 0,
              officeAdmin: {
                userId: 2,
                fristName: adminOffice,
                lastName: '',
                email: '',
                password: '',
                dateOfBirth: '',
                nationality: '',
                accountEnabled: true,
                remoteWorkPercentage: 72,
                authority: {
                  authorityId: 2,
                  role: 'Office Admin'
                }
              },
              building: {
                buildingId: 2,
                buildingName: buildingName,
                floorCount: 23,
                address: 'Strada Principala 127'
              },    
              
             
              usedDesks: 0,
              desks: [],
            };
            await addOffice(newOffice);
            navigate('/officeManagement');
          };
    
          const handleSubmit = (e) => {
            e.preventDefault();
            addOfficeDetails();
          }
    return (


    <div className="addUser-container">
      <div className='addUser-wrapper'>
      <h1>Add Office</h1>
      <form onSubmit={handleSubmit}>
     <div className="names">
       <div className="firstlastname">
       <label htmlFor="name">Office Name:</label>
       <input type="text" name="name" value={name} onChange={handleChange}/>
       </div>
       <div className='firstlastname'>
       <label htmlFor="buildingName">Building:</label>
       <input type="text" name="buildingName" value={buildingName} onChange={handleChange}/>
       </div>
       </div>
<div className="email-password">
       <div className="firstlastname">
       <label htmlFor="floor">Floor Nr:</label>
       <input type="text" name="floor" value={floor} onChange={handleChange} />
       </div>

<div className="password">
<label htmlFor="totalDesks">Total Desks:</label>
       <input type="text" name="totalDesks" value={totalDesks} onChange={handleChange} />
       </div>
  </div>
       <div className="email-password">
         <div className="firstlastname">
         <label htmlFor="usableDesks">Usable Desks:</label>
        <input type="text" name="usableDesks" value={usableDesks} onChange={handleChange} />
           </div>
         
        

         <div className='firstlastname'>
           <div className="firstlastname">
           <label htmlFor='adminOffice'>Office Admin:</label>
           <input type="text" name="adminOffice" value={adminOffice} onChange={handleChange} />
           </div>
           </div>
           </div>

          
           <button type='submit' className="button-office">ADD OFFICE</button>
       </form>
       
      </div>
      </div>
  )
}
 

export default AddOffice