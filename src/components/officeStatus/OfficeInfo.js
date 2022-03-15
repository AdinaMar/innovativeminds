import React, { useEffect } from 'react'
import { getAllOffices} from '../../api/api'
import {   Link, useParams } from 'react-router-dom'
import { useState } from 'react'




const OfficeInfo = () => {

    const[office, setOffice] = useState([])
    const {id} = useParams();


    useEffect(() => {
        loadOfficeData();
    }, []);

    const loadOfficeData = async () => {
const response = await getAllOffices(id);
setOffice(response.data);
    }


  return (
    <div className="info-wrapper">
        <h1>Office Details:</h1>
<div className="info-container">
    <div className="infos">

<h2>{office.name}</h2>
<p>Building: {office.building}</p>
<p>Floor Nr: {office.floorNr}</p>
<p>Office Admin: {office.officeAdministrator}</p>
<p>Total desks: { office.desks}</p>
<p>Free desks: {office.usableDesks - office.usedDesks}</p>
<p>Usable desks: {office.usableDesks}</p>
    </div>

    <div className="list-users">
        <h4>All Users:</h4>
        {
            office.employees?.map(employee => (
                <p>{employee.employee}</p>
            )
            )
        }

    </div>

    
</div>

<div className="percentage">
        <div className="occupation">
            <p>Occupation Percentage: {Math.round((office.usedDesks/office.usableDesks)*100)}%</p>
        </div>
        <div className="occupied">
            <p>Occupied Desks: {office.usedDesks}</p>
        </div>
        
            </div>

            <Link to={`/editOffice/${office.id}`}><button>EDIT</button></Link>
    </div>
  )
}

export default OfficeInfo