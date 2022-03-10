import {  Table, TableBody, TableCell, TableHead, tr } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { VscActivateBreakpoints } from 'react-icons/vsc'
import {AiOutlineUsergroupDelete} from 'react-icons/ai'
import {FiEdit} from 'react-icons/fi'
import { deleteUser, getUsers } from '../../../api/api'
import { Link } from 'react-router-dom';
import {FaUserPlus} from 'react-icons/fa'
import {Pagination} from 'react-custom-pagination'
{/*import {useTable, useGlobalFilter, usePagination} from 'react-table'
import { useMemo } from 'react'
import { COLUMNS } from '../../columns'
import { VscActivateBreakpoints } from 'react-icons/vsc'
import {AiOutlineUsergroupDelete} from 'react-icons/ai'
import {FiEdit} from 'react-icons/fi'
import GlobalFilter from './GlobalFilter'
import {IoIosArrowBack} from 'react-icons/io'
import {IoIosArrowForward} from 'react-icons/io'
import {FaUserPlus} from 'react-icons/fa'
import { Link, Route, Routes, Outlet } from 'react-router-dom'
import AddUser from '../../../pages/AddUser' */}






const UsersManagement = () => {

 
  const[currentPage, setCurrentPage] = useState(1)
  const[postsPerPage] = useState(10);

  const[searchName, setSearchName] = useState('');


  const [users, setUsers] = useState([]);
  useEffect(() => {
  getAllUsers();
  
  }, [])
      const getAllUsers = async () => {
       const response =  await getUsers();
   setUsers(response.data)
  
  
      }
  
      const deleteUserData = async (id) => {
          await deleteUser(id)
          getAllUsers();
      }

      const indexOfLastPost = currentPage * postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage;
      const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost)
      const paginate = (number) => {
        setCurrentPage(number)
      }
  
    return (
      <>
     

      <div className="management-wrapper">

        <div className='find-users'>
          <label htmlFor='findUser'>Find User: </label>
          <input type="text" name="findUser" onChange={(event) => {setSearchName(event.target.value)}}></input>
      <Link to="/addUser">
       <FaUserPlus className="add-user"/> </Link>

       </div>

      <table>
  <thead>
      <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Role</th>
          <th>Nationality</th>
          <th>Birth Date</th>
          <th> </th>
          
      </tr>
  </thead>
  <tbody>
      {
       currentPosts.filter((val) => {
          if(searchName == "") {
            return val
          } else if (val.name.toLowerCase().includes(searchName.toLowerCase())) {
          return val
        }
      }).map(user => (
              <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>{user.gender}</td>
                  <td>{user.nationality}</td>
                  <td>{user.birthdate}</td>
                  <td> <Link to={`/editUser/${user.id}`} > <FiEdit className="icons"/> </Link> <VscActivateBreakpoints className="icons"/>  <AiOutlineUsergroupDelete className="icons" onClick={()=>deleteUserData(user.id)}/></td>
              </tr>
          ))
      }
  </tbody>
          </table>
<div className="pagination">
          <Pagination  totalPosts = {users.length}
           postsPerPage = {postsPerPage}
           paginate = {paginate} 
           selectColor = "#008B8B"
           bgColor="grey"/>
           </div>
           
          </div>
          </>
    )
  }
  
  {/*return (
    <>
    
    {(isActive ? (
      <UsersManagement users={users} isActive={isActive} setIsActive={setIsActive} /> ) :
      (<Routes>
        <Route path="AddUser" element={<AddUser users={users} setUsers={setUsers} setIsActive={setIsActive}/>} />
      </Routes>)
    )
    
  
  }
    
  </> */ }
   
 

export default UsersManagement