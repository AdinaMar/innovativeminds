import React, { useEffect } from 'react'
import { editOffice, getOffices} from '../../api/api'
import {  useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'



const initialValues = {
    name: "",
    buildingName: "",
    floor:"",
    totalDesks:"",
    usableDesks:"",
    adminOffice:""
    
}

const EditOffice = () => {


    const[office, setOffice] = useState(initialValues)
    const{name, buildingName, floor, totalDesks, usableDesks, adminOffice} = office
    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        loadOfficeData();
    }, []);

    const loadOfficeData = async () => {
const response = await getOffices(id);
setOffice(response.data);
    }

    const handleChange = e => {
       
        const {name, value} = e.target
        setOffice({
          ...office,
          [name]: value
        })
      }

      

      const editOfficeDetails = async () => {
       
        const newOffice = {name:name, floorNr:floor, building:buildingName, desks:totalDesks, usableDesks:usableDesks,officeAdministrator:adminOffice}
          await editOffice(id,newOffice);
         navigate("/officeManagement")
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        editOfficeDetails();
    }


  return (
    <div className="addUser-container">
    <div className='addUser-wrapper'>
    <h1>Edit Office</h1>
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

        
         <button type='submit' className="button-office">EDIT OFFICE</button>
     </form>
     
    </div>
    </div>
)
}
     
  
 

export default EditOffice