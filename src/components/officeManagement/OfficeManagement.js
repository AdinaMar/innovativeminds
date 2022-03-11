import React, {useState, useEffect} from 'react'
import {AiOutlineUsergroupDelete} from 'react-icons/ai'
import {FiEdit} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import {MdAddBusiness} from 'react-icons/md'
import { getOffices, deleteOffice } from '../../api/api'



const OfficeManagement = () => {

const[searchName, setSearchName] = useState('');


    const [offices, setOffices] = useState([]);
    useEffect(() => {
    getAllOffices();
    
    }, [])
        const getAllOffices = async () => {
         const response =  await getOffices();
     setOffices(response.data)
    
    
        }

        const deleteOfficeData = async (id) => {
            await deleteOffice(id)
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
              } else if (val.name.toLowerCase().includes(searchName.toLowerCase())) {
              return val
            }
          }).map(office => (
                  <tr>
                      <td>{office.name}</td>
                      <td>{office.building}</td>
                      <td>{office.floorNr}</td>
                      <td>{office.desks}</td>
                      <td>{office.usableDesks}</td>
                      <td>{office.officeAdministrator}</td>
                      
                      <td> <Link to={`/editOffice/${office.id}`} > <FiEdit className="icons"/> </Link>   <AiOutlineUsergroupDelete className="icons" onClick={()=>deleteOfficeData(office.id)}/></td>
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