
import React, {useState, useEffect} from 'react'
import { getUsers, editUser } from '../../api/api'

import {  useParams } from 'react-router-dom'
import userIcon from '../../images/usersstatus.png'




const initialValues = {
    
    message: ""
    

}
const RejectedRemote = () => {
    
   const [reject, setReject] = useState(initialValues);
   const {id} = useParams();
   
 

const { message} = reject

useEffect(() => {
    loadRejectData();
},[])
  const loadRejectData = async()=>{
      const response = await getUsers(id);
      setReject(response.data);
  }

  const handleChange = e => {
       
    const {name, value} = e.target
    setReject({
      ...reject,
      [name]: value
    })
  }

  const editRemoteDetails = async () => {
       
    const newReject = { status: false,  reason: " ", request: message, percentage: reject.percentage, name:reject.name, email:reject.email, password:reject.password, role:reject.role,
  gender:reject.gender, birthdate:reject.birthdate, nationality:reject.nationality, floorNr: reject.floorNr, building:reject.building,office:reject.office, remote:false}
      await editUser(id,newReject);
     
  }
  const handleSubmit =(e) => {
      e.preventDefault();
    
  }
        
    return (

        <>
    
       
    
        <div className="office-wrapperapproval">
       
        <div className="office-containerapproval">
    
    
        
            
                <div className="office-cardapproval"> 
                <div className="profilepic">
                 <h2>{reject.name} </h2>
                 <img src={userIcon} alt="user profile"></img>
                 </div>
                 <p> {reject.reason}</p>
             
             </div>
           
           <form onSubmit = {handleSubmit} className="text">
          <label for="rejectedReason">Reason of reject:</label>
          <textarea value={message} onChange={handleChange} id="rejectedReason" name="rejectedreason" rows="6" cols="50"></textarea>
          <button onClick={editRemoteDetails}>Submit</button>
          </form>
        
      
       </div>
       
    
    </div>
    
        
        </>
      )
    }

export default RejectedRemote