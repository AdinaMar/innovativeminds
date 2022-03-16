import React, {useState, useEffect} from 'react'
import {AiOutlineUsergroupDelete} from 'react-icons/ai'
import {FiEdit} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import {MdAddBusiness} from 'react-icons/md'
import { getAllOffices, deleteOffice } from '../../api/api'

import axios from 'axios'

const OfficeManagement = () => {

const[searchName, setSearchName] = useState('');


    const [offices, setOffices] = useState([]);
    useEffect(() => {
    getOffices();
    
    }, [])
        const getOffices = async () => {
         const response =  await getAllOffices();
     setOffices(response.data)
    
    
        }

        {/*const deleteOfficeData = async (id) => {
            await deleteOffice(id)
            getAllOffices();
        } */ }
        const deleteOfficeData = async (officeId) => {
            /* await deleteBuilding(id); */
          await deleteOffice(id);
            getAllOffices();
          }
  return (
    <>
    <div className="building-wrapper">
    
    <div className='find-users'>
              <label htmlFor='findUser'>Find Office: </label>
              <input type="text" name="findUser" onChange={(event) => {setSearchName(event.target.value)}}></input>
          <Link to="/addOffice">
           <MdAddBusiness className="add-user"/> </Link>
    
           </div>
    
    
            <table>
      <thead>
          <tr>
              <th>Name</th>
              <th>Building Name</th>
              <th>Floor nr</th>
              <th>Total Desks </th>
              <th>Usable Desks </th>
              <th>Office Admin </th>
              
          </tr>
      </thead>
      <tbody>
          {
           offices.filter((val) => {
              if(searchName == "") {
                return val
              } else if (val.officeName.toLowerCase().includes(searchName.toLowerCase())) {
              return val
            }
          }).map(office => (
                  <tr>
                      <td>{office.officeName}</td>
                      <td>{office.building.buildingName}</td>
                      <td>{office.floorNumber}</td>
                      <td>{office.deskCount}</td>
                      <td>{office.usableDeskCount}</td>
                      <td>{office.officeAdmin.fristName}</td>
                      
                      <td> <Link to={`/editOffice/${office.officeId}`} > <FiEdit className="icons"/> </Link>   <AiOutlineUsergroupDelete className="icons" onClick={()=>deleteOfficeData(office.officeId)}/></td>
                  </tr>
              ))
          }
      </tbody>
              </table>
               
            </div>
            </>
  )
}

export default OfficeManagement