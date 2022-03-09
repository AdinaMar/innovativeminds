import React, {useState} from 'react'
import api from '../api/users'
import { useNavigate } from 'react-router-dom'


const AddUser = ({users, setUsers, setIsActive}) => {
  


  const [user, setUser] = useState({
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

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const id = users.length ? users[users.length -1].id + 1 : 1;
    const newUser = {id, name: user.firstName + ' ' + user.lastName, email: user.email, role: user.role, gender: user.gender, nationality: user.nationality, birthdate: user.date};
  try {
    const response = await api.post("/users", newUser)
    const allUsers = [...users, response.data];
    setUsers(allUsers);
    setUser({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    gender:"",
    nationality:"",
    date:""
    })
    setIsActive(true)
    navigate(-1)
  } catch(err) {
    console.log(`Error: ${err.message}`)
  }

  }


  return (
    <div className="addUser-container">
      <div className='addUser-wrapper'>
      <h1>Add User</h1>
      <form onSubmit={ handleSubmit }>
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
           <option value="">Select</option>
           <option value="Employee">Employee</option>
           <option value="Admin">Admin</option>
           <option value="OfficeAdmin">Office-Admin</option>
           </select>
           </div>
           <div className='single-role'>
         <label htmlFor="gender">Gender:</label>
         <select name="gender" value={user.gender} onChange={handleChange}>
         <option value="">Select</option>
           <option value="Female">Female</option>
           <option value="Male">Male</option>
           <option value="Other">Other</option>
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
           <button type='submit'>ADD</button>
       </form>
       
      </div>
      </div>
  )
}

export default AddUser