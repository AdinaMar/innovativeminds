import React, {useState} from 'react'
import api from '../api/users'
import uuid from 'react-native-uuid';
import { addUser } from '../api/users';

const AddUser = () => {
  
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    gender:"",
    nationality:"",
    date:""
  })

  const [users, setUsers] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    gender:"",
    nationality:"",
    date:""
  })

  const handleChange = e => {
    const {name, value} = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  const addUserDetails = async() => {
    await addUser(user);
    
  }
 { /*const addUser =  async (user) => {
    const request = {
      id: uuid(),
      ...user
    } 

    const response = await api.post("/users", request)
    setUsers([...users, response]);

  } */ }
  return (
    <div className="addUser-container">
      <div className='addUser-wrapper'>
      <h1>Add User</h1>
      <form>
     <div className="names">
       <div className="firstlastname">
       <label htmlFor="firstName">First Name:</label>
       <input type="text" name="firstName" value={user.firstName} onChange={handleChange}/>
       </div>
       <div className='firstlastname'>
       <label htmlFor="lastName">Last Name:</label>
       <input type="text" name="lastName" value={user.lastName} onChange={handleChange}/>
       </div>
       </div>

       <div className="firstlastname">
       <label htmlFor="email">E-mail Address:</label>
       <input type="email" name="email" value={user.email} onChange={handleChange} />
       </div>

       <div className="roles">
         <div className="single-role">
         <label htmlFor="role">Role:</label>
         <select name="role" value={user.role} onChange={handleChange}>
           <option value="employee">Employee</option>
           <option value="admin">Admin</option>
           <option value="officeAdmin">Office-Admin</option>
           </select>
           </div>
           <div className='single-role'>
         <label htmlFor="gender">Gender:</label>
         <select name="gender" value={user.gender} onChange={handleChange}>
           <option value="female">Female</option>
           <option value="male">Male</option>
           <option value="other">Other</option>
           </select>
         </div>
         </div>

         <div className='birth'>
           <div className="birthNationality">
           <label htmlFor='date'>Birth Date:</label>
           <input type="date" name="date" value={user.date} onChange={handleChange} />
           </div>
           <div className='birthNationality'>
           <label htmlFor='nationality'>Nationality:</label>
           <input type="text" name="nationality" value={user.nationality} onChange={handleChange}></input>
           </div>
           </div>
           
       </form>
       <button onClick={()=> addUserDetails()}>ADD</button>
      </div>
      </div>
  )
}

export default AddUser