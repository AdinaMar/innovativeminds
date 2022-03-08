import React, { useEffect } from 'react'
import {useTable, useGlobalFilter, usePagination} from 'react-table'
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
import AddUser from '../../../pages/AddUser'
import { useState } from 'react'
import api from '../../../api/users'





const UsersManagement = () => {

  const [users, setUsers] = useState([])


const columns = useMemo(() => COLUMNS, [])
const data = users; {/*useMemo(() => users, []) */}
 const {
  getTableProps,
  getTableBodyProps,
  headerGroups,
  page,
  nextPage,
  previousPage,
  canNextPage,
  canPreviousPage,
  prepareRow,
  state,
  setGlobalFilter
}  = useTable({
    columns,

    data
  }, useGlobalFilter, usePagination)

const {globalFilter} = state



const retriveUsers = async () => {
  const response = await api.get("/users");
  return response.data;
}

useEffect(() => {
  const getAllUsers = async () => {
    const allUsers = await retriveUsers();
    if(allUsers) setUsers(allUsers)
  }

  getAllUsers();
}, []);

  return (
    
    <div className='management-wrapper'>
      <div className="find-users">
    
      <GlobalFilter  filter={globalFilter} setFilter={setGlobalFilter}/>
      
      
        <Link to="/UsersManagement/AddUser">
         
 <FaUserPlus className="add-user" />  </Link>
 
 
 
</div>

<table {...getTableProps()}>
  <thead>
  {
    headerGroups.map(headerGroup=>(
      <tr {...headerGroup.getHeaderGroupProps()}>
        {
          headerGroup.headers.map( column => (
            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
          ))
        }
        
      </tr>
    ))
  }
  
  </thead>
<tbody {...getTableBodyProps()}>
  {
    page.map(row => {
      prepareRow(row)
      return(
        <tr {...row.getRowProps()}>
          {
            row.cells.map((cell)=> {
              return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
          
              
            })
          }


        
      </tr>
      )
    })
  }
 
    </tbody>
</table>


<div className="next-previous">
  <button className="pagination" onClick={()=> previousPage()} disabled={!canPreviousPage}><IoIosArrowBack className="arrow"/></button>
  <button className="pagination" onClick={()=>nextPage()} disabled={!canNextPage}><IoIosArrowForward className="arrow"/></button>
  </div>


















       
      {/* <table>

         <tr>
           <th>User</th>
           <th>Email</th>
           <th>Role</th>
           <th>Gender</th>
           <th>Nationality</th>
           <th>Birth-Date</th>
         </tr>



         {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.email}</td>
              <td>{val.role}</td>

              <td>{val.gender}</td>
              <td>{val.nationality}</td>
              <td>{val.birthDate}</td>
              <td><button>EDIT</button>
              <button>Activate</button>
              <button>De-activate</button>
              </td>
              
              
            </tr>
          )
        })}





      </table> */ }
       
     

  
{/*<Route path="/UsersManagement" >
<Route path="/UsersManagement/AddUser" element={<AddUser/>} />
</Route>
</Routes> */}
       </div>
  )
} 

export default UsersManagement