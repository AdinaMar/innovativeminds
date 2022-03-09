import React, { useEffect } from 'react'
import { useState } from 'react'
import api from '../../../api/users'
import {Routes, Route} from 'react-router-dom'
import UserTable from '../../../pages/UserTable'
import AddUser from '../../../pages/AddUser'

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
  const [isActive, setIsActive] = useState(true);
  
  const [users, setUsers] = useState([])



useEffect(() => {
  const getAllUSers = async () => {
    try {
      const response = await api.get("/users");
      setUsers(response.data);
    } catch(err) {
      if(err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Err: ${err.message}`);
      }
    }
  }
  getAllUSers();
}, []);

 const handleDelete = async (id) =>{
 try {
   await api.delete(`/users/${id}`);
   const usersList = users.filter(user => user.id !== id);
   setUsers(usersList);
 }catch (err) {
   console.log(`Err: ${err.message}`);
 }

}

  return (
    <>
    
    {(isActive ? (
      <UserTable users={users} isActive={isActive} setIsActive={setIsActive} /> ) :
      (<Routes>
        <Route path="AddUser" element={<AddUser users={users} setUsers={setUsers} setIsActive={setIsActive}/>} />
      </Routes>)
    )
    
  
  }
    
  </>
   
      
  )
}

export default UsersManagement