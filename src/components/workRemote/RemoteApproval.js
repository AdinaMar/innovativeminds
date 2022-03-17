import React, {useState, useEffect} from 'react'
import { getUsers } from '../../api/api'
import {Pagination} from 'react-custom-pagination'
import { Link } from 'react-router-dom'
import userIcon from '../../images/usersstatus.png'
import axios from 'axios'




const RemoteApproval = () => {

  
    
    const[currentPage, setCurrentPage] = useState(1)
    const[postsPerPage] = useState(4);
    
   
    

 

    const [requests, setRequests] = useState([]);
    useEffect(() => {
    getAllUsers();
    
    }, [])
        const getAllUsers = async () => {
         const response =  await getUsers();
     setRequests(response.data)
    
    
        }


        const indexOfLastPost = currentPage * postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage;
      const currentPosts = requests.slice(indexOfFirstPost, indexOfLastPost)
      const paginate = (number) => {
        setCurrentPage(number)
      }


const approveRemote = async (id) => {
  const res = await axios.patch(`http://localhost:3006/${id}`, {remote: true})
  setRequests(res);
}
      
  return (
    <>

   

    <div className="office-wrapperapproval">
   
    <div className="office-containerapproval">


    {
       currentPosts.map(user => {
        return !user.reason == ' ' ? (
            <div className="office-cardapproval"> 
            <div className="profilepic">
             <h2>{user.name} </h2>
             <img src={userIcon} alt="user profile"></img>
             </div>
             <p> {user.reason}</p>
             <div className="buttons">
     <button onClick={() => approveRemote(user.id)}>Approve</button>
   <button> <Link to={`/RejectedRemote/${user.id}`} className="link">Reject</Link></button> 
     </div>
         </div>
        ) : null;
      
    })
    }
  
   </div>
   <div className="pagination">
          <Pagination  totalPosts = {requests.length}
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