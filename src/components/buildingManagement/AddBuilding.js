import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addBuilding } from '../../api/api'


const initialValues = {
   buildingName:"",
   address:"",
   floors:""
    
}


    
    

const AddBuilding = () => {


    const[building, setBuilding] = useState(initialValues)
    const{buildingName, address, floors} = building
  
    
    const navigate = useNavigate();

    const handleChange = e => {
     
        const {name, value} = e.target
        setBuilding({
          ...building,
          [name]: value
        })
      }

      const addBuildingDetails = async () => {
      
        const newBuilding = {name:buildingName, address: address, floors:floors}
          await addBuilding(newBuilding);
          navigate("/BuildingManagement")
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        addBuildingDetails();
      }



  return (
    <div className="addbuildingWrapper">
<div className='addBuildingContainer'>
        <h1>Add Building</h1>
<p>* Can not be empty</p>
    <form onSubmit={handleSubmit}>
        <div className="building">
        <div className="buildings">
     <label htmlFor='buildingName'>Building Name:*</label>
     <input type="text" name="buildingName" required value={buildingName} onChange={handleChange}/>
     </div>

     <div className="buildings">
     <label htmlFor='floors'>Floors:*</label>
     <input type="text" name="floors" required value={floors} onChange={handleChange} />
     </div>
     <div className="buildings">
     <label htmlFor='address'>Building address:*</label>
     <input type="text" name="address" required  value={address} onChange={handleChange} />
     </div>

     
<button type='submit'>Add Building</button>


     </div>

    </form>
    </div>
        
        </div>
  )
}

export default AddBuilding