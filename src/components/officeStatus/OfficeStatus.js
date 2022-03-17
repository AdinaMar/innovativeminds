import React, {useState, useEffect} from 'react'
import { getAllOffices } from '../../api/api'
import {Pagination} from 'react-custom-pagination'
import { Link } from 'react-router-dom'
import OfficeInfo from './OfficeInfo'
import officestatushere from '../../images/office.jpg'






const OfficeStatus = () => {
    const[currentPage, setCurrentPage] = useState(1)
    const[postsPerPage] = useState(4);

    const[searchName, setSearchName] = useState('');


    const [offices, setOffices] = useState([]);
    useEffect(() => {
    getOffices();
    
    }, [])
        const getOffices = async () => {
         const response =  await getAllOffices();
     setOffices(response.data)
    
    
        }


        const indexOfLastPost = currentPage * postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage;
      const currentPosts = offices.slice(indexOfFirstPost, indexOfLastPost)
      const paginate = (number) => {
        setCurrentPage(number)
      }
  return (
      <>

   

    <div className="office-wrapper">
    <div className='inputs'>
    <label htmlFor='findUser'>Find Office: </label>
    <input type="text" name="findUser" onChange={(event) => {setSearchName(event.target.value)}}/>
    </div>
    <div className="office-container">


    {
       currentPosts.filter((val) => {
          if(searchName == "") {
            return val
          } else if (val.name.toLowerCase().includes(searchName.toLowerCase())) {
          return val
        }
    }).map(office => (
       <Link to={`/officeInfo/${office.id}`} className="office-card"> 
       <img src={officestatushere} alt="office"></img>
        <h2>{office.name}</h2>
        <h4>Floor Nr: {office.floorNr}</h4>
        <h3>Building: {office.building}</h3>
        <h3>Office Admin: {office.officeAdministrator} </h3>
    </Link>
  ))
    }
    

   </div>
   <div className="pagination">
          <Pagination  totalPosts = {offices.length}
           postsPerPage = {postsPerPage}
           paginate = {paginate} 
           selectColor = "#008B8B"
           bgColor="grey"/>
           </div>

</div>

    
    </>
  )
}

export default OfficeStatus