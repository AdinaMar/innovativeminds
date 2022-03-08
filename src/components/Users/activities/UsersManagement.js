import React from 'react'
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

const datas = [
  {name: "Adina Martiniuc",
   email: "adinamartiniuc25@gmail.com",
   role: "admin",
   gender: "Female",
   nationality: "Romanian",
   birthdate: "26/03/1997",
   buttons: <div className='icons'> <FiEdit/> <VscActivateBreakpoints/>  <AiOutlineUsergroupDelete/> </div>
   
},

{name: "Adina Martiniuc",
email: "adinamartiniuc25@gmail.com",
role: "employee",
gender: "Female",
nationality: "Romanian",
birthdate: "26/03/1997",
buttons: <div className='icons'> <FiEdit/> <VscActivateBreakpoints/>  <AiOutlineUsergroupDelete/> </div>
},

{name: "Alina Martiniuc",
email: "adinamartiniuc25@gmail.com",
role: "admin",
gender: "Female",
nationality: "Romanian",
birthdate: "26/03/1997",
buttons: <div className='icons'> <FiEdit/> <VscActivateBreakpoints/>  <AiOutlineUsergroupDelete/> </div>
},

{name: "Sara Martiniuc",
email: "adinamartiniuc25@gmail.com",
role: "office-admin",
gender: "Female",
nationality: "Romanian",
birthdate: "26/03/1997",
buttons: <div className='icons'> <FiEdit/> <VscActivateBreakpoints/>  <AiOutlineUsergroupDelete/> </div>
},
{name: "Dorin Tudose",
email: "adinamartiniuc25@gmail.com",
role: "office-admin",
gender: "Female",
nationality: "Romanian",
birthdate: "26/03/1997",
buttons: <div className='icons'> <FiEdit/> <VscActivateBreakpoints/>  <AiOutlineUsergroupDelete/> </div>
},
{name: "Camelia Cojocaru",
email: "adinamartiniuc25@gmail.com",
role: "office-admin",
gender: "Female",
nationality: "Romanian",
birthdate: "26/03/1997",
buttons: <div className='icons'> <FiEdit/> <VscActivateBreakpoints/>  <AiOutlineUsergroupDelete/> </div>
},
{name: "Madalina Martiniuc",
email: "adinamartiniuc25@gmail.com",
role: "office-admin",
gender: "Female",
nationality: "Romanian",
birthdate: "26/03/1997",
buttons: <div className='icons'> <FiEdit/> <VscActivateBreakpoints/>  <AiOutlineUsergroupDelete/> </div>
},
{name: "Ionela Martiniuc",
email: "adinamartiniuc25@gmail.com",
role: "office-admin",
gender: "Female",
nationality: "Romanian",
birthdate: "26/03/1997",
buttons: <div className='icons'> <FiEdit/> <VscActivateBreakpoints/>  <AiOutlineUsergroupDelete/> </div>
},
{name: "Madalina Martiniuc",
email: "adinamartiniuc25@gmail.com",
role: "office-admin",
gender: "Female",
nationality: "Romanian",
birthdate: "26/03/1997",
buttons: <div className='icons'> <FiEdit/> <VscActivateBreakpoints/>  <AiOutlineUsergroupDelete/> </div>
},
{name: "Sara Martiniuc",
email: "adinamartiniuc25@gmail.com",
role: "office-admin",
gender: "Female",
nationality: "Romanian",
birthdate: "26/03/1997",
buttons: <div className='icons'> <FiEdit/> <VscActivateBreakpoints/>  <AiOutlineUsergroupDelete/> </div>
},
{name: "Adina Martiniuc",
email: "adinamartiniuc25@gmail.com",
role: "office-admin",
gender: "Female",
nationality: "Romanian",
birthdate: "26/03/1997",
buttons: <div className='icons'> <FiEdit/> <VscActivateBreakpoints/>  <AiOutlineUsergroupDelete/> </div>
},
{name: "Serena Martiniuc",
email: "adinamartiniuc25@gmail.com",
role: "office-admin",
gender: "Female",
nationality: "Romanian",
birthdate: "26/03/1997",
buttons: <div className='icons'> <FiEdit/> <VscActivateBreakpoints/>  <AiOutlineUsergroupDelete/> </div>
},


]



const UsersManagement = () => {
const columns = useMemo(() => COLUMNS, [])
const data = useMemo(() => datas, [])
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



  return (
    
    <div className='management-wrapper'>
      <div className="find-users">
    
      <GlobalFilter  filter={globalFilter} setFilter={setGlobalFilter}/>
      <span className="hovertext">
      
        <Link to="/UsersManagement/AddUser">
         
 <FaUserPlus className="add-user" />  </Link>
 
 Add New User!</span> 
 
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