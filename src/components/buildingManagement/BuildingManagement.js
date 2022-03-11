import React, {useState, useEffect} from 'react'
import { getBuildings, deleteBuilding } from '../../api/api'
import {FaUserPlus} from 'react-icons/fa'
import { VscActivateBreakpoints } from 'react-icons/vsc'
import {AiOutlineUsergroupDelete} from 'react-icons/ai'
import {FiEdit} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import {MdAddBusiness} from 'react-icons/md'


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

        const deleteBuildingData = async (id) => {
            await deleteBuilding(id)
            getAllBuildings();
        }

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
          } else if (val.name.toLowerCase().includes(searchName.toLowerCase())) {
          return val
        }
      }).map(building => (
              <tr>
                  <td>{building.name}</td>
                  <td>{building.address}</td>
                  <td>{building.floors}</td>
                  
                  <td> <Link to={`/editBuilding/${building.id}`} > <FiEdit className="icons"/> </Link>   <AiOutlineUsergroupDelete className="icons" onClick={()=>deleteBuildingData(building.id)}/></td>
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