import React, {useState, useEffect} from 'react'
import { getUsers } from '../../api/api'
import {Pagination} from 'react-custom-pagination'
import { Link } from 'react-router-dom'
import userIcon from '../../images/usersstatus.png'
import Remote from './Remote'
import Status from './Status'

const UserStatus = () => {
    
    const[currentPage, setCurrentPage] = useState(1)
    const[postsPerPage] = useState(4);

    const[searchName, setSearchName] = useState('');


    const [users, setUsers] = useState([]);
    useEffect(() => {
    getAllUsers();
    
    }, [])
        const getAllUsers = async () => {
         const response =  await getUsers();
     setUsers(response.data)
    
    
        }


        const indexOfLastPost = currentPage * postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage;
      const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost)
      const paginate = (number) => {
        setCurrentPage(number)
      }
  return (
      <>

   

    <div className="office-wrapperuser">
    <div className='inputs'>
    <label htmlFor='findUser'>Find User: </label>
    <input type="text" name="findUser" onChange={(event) => {setSearchName(event.target.value)}}/>
    </div>
    <div className="office-containeruser">


    {
       currentPosts.filter((val) => {
          if(searchName == "") {
            return val
          } else if (val.name.toLowerCase().includes(searchName.toLowerCase())) {
          return val
        }

    }).map(user => (
       <div className="office-carduser"> 
       <img src={userIcon} alt="user profile"></img>
        <h2>{user.name}  <Status active={user.status} /></h2>
       
        <h3>Works at: {user.building}, {user.office}</h3>
        
        <h3>Remote Work: <Remote active= {user.remote} />
         </h3>
        
    </div>
  ))
    }
    

   </div>
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
 

export default UserStatus