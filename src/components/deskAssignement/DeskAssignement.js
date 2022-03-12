import React, {useState, useEffect} from 'react'
import { getBuildings, getUsers, editUser } from '../../api/api';




const initialValues = {
  building:"",
  floor:"",
  office:"",
  desk:""

   
}




const DeskAssignement = () => {

 

  const[user,setUser] = useState(initialValues)
  const{name, floor, office, desk} = user
const [users, setUsers] = useState([])
const[searchName, setSearchName] = useState('');

  const [buildings, setBuildings] = useState([]);
  
  useEffect(() => {
  getAllBuildings();
  getAllUsers();
  
  }, [])
      const getAllBuildings = async () => {
       const response =  await getBuildings();
   setBuildings(response.data)



      }

      const getAllUsers = async () => {
        const response =  await getUsers();
    setUsers(response.data)
   
   
       }
       const handleChange = e => {
     
        const {name, value} = e.target
        setUser({
          ...user,
          [name]: value
        })
      }
     
  


  return (
    <div className="assignment-wrapper"> 
    <h1>Assign Desk</h1>
    <div className="container-assignment">
        
        <form>
     <div className="selects">
        <div className="selected">
        <label htmlFor='building'>Building:</label>
           <select name="building" onChange={handleChange}>
             {
               buildings.map(building => (
                <option value={building.name}>{building.name}</option>
               ))
             }
           
            </select>
        </div>

        <div className="selected">
        <label htmlFor='floor'>Floor:</label>
            <select name="floor" onChange={handleChange} >
           
          <option value="zeroFloor"> </option>
            <option value="firstoption">1</option>
            <option value="secondoption">2</option> 
             </select>
        </div>

        <div className="selected">
        <label htmlFor='office'>Office:</label>
            <select name="office" onChange={handleChange}>
        <option value="zeroFloor"> </option>
        <option value="officefirst">First Name</option>
        <option value="officesecond">Second Name</option>
        </select>
        </div>

        <div className="selected">
        <label htmlFor='desk'>Desk:</label>
            <select name="desk" onChange={handleChange}>
        <option value="zeroFloor"> </option>
        <option value="officefirst">First Name</option>
        <option value="officesecond">Second Name</option>
        </select>
        </div>
        </div>

        <div className="selectUser">
            <label htmlFor='user'>Find User:</label>
            <input type="text" name="user" onChange={(event) => {setSearchName(event.target.value)}}></input>
            {
       users.filter((val) => {
          if(searchName == "") {
            return ""
          } else if (val.name.toLowerCase().includes(searchName.toLowerCase())) {
          return val
        }
      }).map(user => (
      <p>{user.name}</p>
          ))
      }
      
                
 </div>
 <button type="submit">Assign</button>
 </form>
        </div>
        
        </div>
    
    

  )
}


export default DeskAssignement