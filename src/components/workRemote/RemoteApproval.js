import React, {useState, useEffect} from 'react'
import { getUsers,editUser } from '../../api/api'
import {Pagination} from 'react-custom-pagination'
import { Link } from 'react-router-dom'
import userIcon from '../../images/usersstatus.png'
import { getRequests, editRequest } from '../../api/api'




const RemoteApproval = () => {

  
    
    const[currentPage, setCurrentPage] = useState(1)
    const[postsPerPage] = useState(4);
    
   
    

 

    const [requests, setRequests] = useState([]);
    useEffect(() => {
    getAllRequests();
    
    }, [])
        const getAllRequests = async () => {
         const response =  await getRequests();
     setRequests(response.data)
    
    
        }


        const indexOfLastPost = currentPage * postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage;
      const currentPosts = requests.slice(indexOfFirstPost, indexOfLastPost)
      const paginate = (number) => {
        setCurrentPage(number)
      }



      
  return (
    <>

   

    <div className="office-wrapperapproval">
   
    <div className="office-containerapproval">


    {
       currentPosts.map(user => {
        return !user.motivation == '' ? (
            <div className="office-cardapproval"> 
            <div className="profilepic">
             <h2>{user.senderId} </h2>
             <img src={userIcon} alt="user profile"></img>
             </div>
             <p> {user.motivation}</p>
             <div className="buttons">
     <button>Approve</button>
   <button> <Link to={`/useredRemote/${user.requestId}`} className="link">user</Link></button> 
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