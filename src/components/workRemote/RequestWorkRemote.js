import React from 'react'
import { addRemote} from '../../api/api'
import { useState } from 'react'


const initialValues = {
    percentage: "",
    message: ""
}

const RequestWorkRemote = () => {

 
        const[request, setRequest] = useState(initialValues);

        const handleChange = e => {
         
            const {name, value} = e.target
            setRequest({
              ...request,
              [name]: value
            })
          }
    const{percentage, message} = request;
    const addRequestDetails = async () => {
        const newRequest={percentage: percentage, status: "pending",  motivation: message, responseMotivation: ""}
        await addRemote(newRequest);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        addRequestDetails();
    }

    
  
    return (
    

            <div className="requestRemote-container">
            <div className='requestRemote-wrapper'>
            <h1>Request to work remote</h1>
           
           <form onSubmit={handleSubmit}>
            {/*<form onSubmit={handleSubmit}>*/}

            <div className="firstline">
                <div className="procentage">
                <label htmlFor="nrprocentage">Percentage of remote work time: </label>
                <input type="text" name="nrprocentage" value={percentage} onChange={handleChange}/>
</div>
                {/* <input type="text" name="nrprocentage" value={nrprocentage} onChange={handleChange}/>*/}
               {/* 

                 */}  
              {/*  <div className='month'>
            

                <label htmlFor="month"> for month</label>

                    {/*<select name="month" value={month} onChange={handleChange}>
                        
                    <option value="">Select</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                    </select>*/}

                    {/*<select name="month" >
                        
                        <option value="">Select</option>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                        </select>*/}


             </div>

                <div className="secondline">
                 
                     <div className="reason">
                 
                        <label htmlFor="reason">Reason of request:</label>
           
                    
                        {/*<input type="text" name="reason" value={reason} onChange={handleChange} />*/}
                        <textarea value={message} onChange={handleChange}> </textarea> 
                    
                    </div>

            
                </div>
            
            

                
                <button type='submit' className="button-submit">Submit</button>
                {/*</form>*/}
             </form>
            </div>
            </div>
               

    )
}
   
 

export default RequestWorkRemote