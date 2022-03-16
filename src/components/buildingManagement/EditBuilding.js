import React, { useEffect } from 'react'
import { editBuilding, getBuildings} from '../../api/api'
import {  useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'





const initialValues = {
    buildingName:"",
    address:"",
    floors:""
     
 }


const EditBuilding = () => {

    const[building, setBuilding] = useState(initialValues)
    const{buildingName,address,floors} = building
    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        loadBuildingData();
    }, []);

    const loadBuildingData = async () => {
const response = await getBuildings(id);
setBuilding(response.data);
    }

    const handleChange = e => {
       
        const {name, value} = e.target
        setBuilding({
          ...building,
          [name]: value
        })
      }

      

      const editBuildingDetails = async () => {
     
        const newBuilding = {buildingId: id, buildingName:buildingName, address:address, floorCount:floors}
          await editBuilding(newBuilding);
         navigate("/BuildingManagement")
      } 

      const handleSubmit = (e) => {
        e.preventDefault();
        editBuildingDetails();
    }



  return (


    <div className="addbuildingWrapper">
    <div className='addBuildingContainer'>
            <h1>Edit Building</h1>
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
    
         
    <button type='submit'>Edit Building</button>
    
    
         </div>
    
        </form>
        </div>
            
            </div>
     
  )
}

export default EditBuilding