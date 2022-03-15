import React, {useState, useEffect} from 'react'
import { getBuildings, deleteBuilding } from '../../api/api'
import {FaUserPlus} from 'react-icons/fa'
import { VscActivateBreakpoints } from 'react-icons/vsc'
import {AiOutlineUsergroupDelete} from 'react-icons/ai'
import {FiEdit} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import {MdAddBusiness} from 'react-icons/md'
import axios from 'axios'

const BuildingManagement = () => {

    const[searchName, setSearchName] = useState('');


    const [buildings, setBuildings] = useState([]);
    useEffect(() => {
    getAllBuildings();
    
    }, [])
        const getAllBuildings = async () => {
         const response =  await getBuildings();
     setBuildings(response.data)
    
    
        }


        const deleteBuildingData = async (buildingId) => {
            /* await deleteBuilding(id); */
            axios({
              method: 'delete',
              headers:{'Content-Type': 'application/json; charset=utf-8'},
              url: "http://localhost:8080/management/building", 
              data: null,
              params: {
                id: buildingId
              }    
            })
            getAllBuildings()  
          }







      {/*  const deleteBuildingData = async (id) => {
            await deleteBuilding(id)
            getAllBuildings();
        } */}

    return( 
        <>
<div className="building-wrapper">

<div className='find-users'>
          <label htmlFor='findUser'>Find Building: </label>
          <input type="text" name="findUser" onChange={(event) => {setSearchName(event.target.value)}}></input>
      <Link to="/addBuilding">
       <MdAddBusiness className="add-user"/> </Link>

       </div>


        <table>
  <thead>
      <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Floors</th>
          <th> </th>
          
      </tr>
  </thead>
  <tbody>
      {
       buildings.filter((val) => {
          if(searchName == "") {
            return val
          } else if (val.buildingName.toLowerCase().includes(searchName.toLowerCase())) {
          return val
        }
      }).map(building => (
              <tr>
                  <td>{building.buildingName}</td>
                  <td>{building.address}</td>
                  <td>{building.floorCount}</td>
                  
                  <td> <Link to={`/editBuilding/${building.buildingId}`} > <FiEdit className="icons"/> </Link>   <AiOutlineUsergroupDelete className="icons" onClick={()=>deleteBuildingData(building.buildingId)}/></td>
              </tr>
          ))
      }
  </tbody>
          </table>
           
        </div>
        </>
    )
}

export default BuildingManagement