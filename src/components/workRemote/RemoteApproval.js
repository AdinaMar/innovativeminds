import React, {useState, useEffect} from 'react'
import { getUsers,editUser } from '../../api/api'
import {Pagination} from 'react-custom-pagination'
import { Link } from 'react-router-dom'
import userIcon from '../../images/usersstatus.png'





const RemoteApproval = () => {

  
    
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

   

    <div className="office-wrapperapproval">
    <div className='inputs'>
    <label htmlFor='findUser'>Find User: </label>
    <input type="text" name="findUser" onChange={(event) => {setSearchName(event.target.value)}}/>
    </div>
    <div className="office-containerapproval">


    {
       currentPosts.filter((val) => {
          if(searchName == "") {
            return val
          } else if (val.name.toLowerCase().includes(searchName.toLowerCase())) {
          return val
        }
 }).map(user => {
        return !user.reason == '' ? (
            <div className="office-cardapproval"> 
            <div className="profilepic">
             <h2>{user.name} </h2>
             <img src={userIcon} alt="user profile"></img>
             </div>
             <p> {user.reason}</p>
             <div className="buttons">
     <button>Approve</button>
   <button> <Link to={`/useredRemote/${user.id}`} className="link">user</Link></button> 
     </div>
         </div>
        ) : null;
      
    })
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
 

export default RemoteApproval