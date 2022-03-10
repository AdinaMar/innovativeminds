import React, { useEffect } from 'react'
import { useState } from 'react'
import { editUser, getUsers } from '../api/api'
import {  useNavigate, useParams } from 'react-router-dom'


const initialValues = {
    firstName: "",
    lastName: "",
    email:"",
    role:"",
    gender:"",
    date:"",
    nationality:""
    
}
const EditUser = () => {
    
    const[user, setUser] = useState(initialValues)
    const{firstName, lastName, email, role, gender, date, nationality} = user
    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        loadUserData();
    }, []);

    const loadUserData = async () => {
const response = await getUsers(id);
setUser(response.data);
    }

    const handleChange = e => {
       
        const {name, value} = e.target
        setUser({
          ...user,
          [name]: value
        })
      }

      

      const editUserDetails = async () => {
       
        const newUser = {name:firstName + " " + lastName, email:email, role:role, gender:gender, date:date, nationality: nationality}
          await editUser(id,newUser);
         navigate("/UsersManagement")
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        editUserDetails();
    }
  return (
    <div className="addUser-container">
    <div className='addUser-wrapper'>
    <h1>Edit User</h1>
    <form onSubmit={handleSubmit}>
   <div className="names">
     <div className="firstlastname">
     <label htmlFor="firstName">First Name:</label>
     <input type="text" name="firstName" value={firstName} onChange={handleChange}/>
     </div>
     <div className='firstlastname'>
     <label htmlFor="lastName">Last Name:</label>
     <input type="text" name="lastName" value={lastName} onChange={handleChange}/>
     </div>
     </div>

     <div className="firstlastname">
     <label htmlFor="email">E-mail Address:</label>
     <input type="email" name="email" value={email} onChange={handleChange} />
     </div>

     <div className="roles">
       <div className="single-role">
       <label htmlFor="role">Role:</label>
       <select name="role" value={role} onChange={handleChange}>
         <option value="">Select</option>
         <option value="Employee">Employee</option>
         <option value="Admin">Admin</option>
         <option value="OfficeAdmin">Office-Admin</option>
         </select>
         </div>
         <div className='single-role'>
       <label htmlFor="gender">Gender:</label>
       <select name="gender" value={gender} onChange={handleChange}>
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
         <input type="date" name="date" value={date} onChange={handleChange} />
         </div>
         <div className='birthNationality'>
         <label htmlFor='nationality'>Nationality:</label>
         <input type="text" name="nationality" value={nationality} onChange={handleChange}></input>
         </div>
         </div>
         <button type='submit'>EDIT</button>
     </form>
     
    </div>
    </div>
  )
}

export default EditUser