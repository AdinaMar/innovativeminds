import React from 'react'

const AddUser = () => {
  return (
    <div className="addUser-container">
      <div className='addUser-wrapper'>
      <h1>Add User</h1>
      <form>
     <div className="names">
       <div className="firstlastname">
       <label htmlFor="fname">First Name:</label>
       <input type="text" name="fname"/>
       </div>
       <div className='firstlastname'>
       <label htmlFor="lname">Last Name:</label>
       <input type="text" name="lname"/>
       </div>
       </div>

       <div className="firstlastname">
       <label htmlFor="emailadd">E-mail Address:</label>
       <input type="email" name="emailadd" />
       </div>

       <div className="roles">
         <div className="single-role">
         <label htmlFor="role">Role:</label>
         <select name="role">
           <option value="employee">Employee</option>
           <option value="admin">Admin</option>
           <option value="officeAdmin">Office-Admin</option>
           </select>
           </div>
           <div className='single-role'>
         <label htmlFor="gender">Gender:</label>
         <select name="gender">
           <option value="female">Female</option>
           <option value="male">Male</option>
           <option value="other">Other</option>
           </select>
         </div>
         </div>

         <div className='birth'>
           <div className="birthNationality">
           <label htmlFor='date'>Birth Date:</label>
           <input type="date" name="date" />
           </div>
           <div className='birthNationality'>
           <label htmlFor='nationality'>Nationality:</label>
           <input type="text" name="nationality"></input>
           </div>
           </div>
           
       </form>
       <button>ADD</button>
      </div>
      </div>
  )
}

export default AddUser