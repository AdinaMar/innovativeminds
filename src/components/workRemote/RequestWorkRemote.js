import React from 'react'



const RequestWorkRemote = () => {

 
        


    
  
    return (
    

            <div className="requestRemote-container">
            <div className='requestRemote-wrapper'>
            <h1>Request to work remote</h1>
           
           <form>
            {/*<form onSubmit={handleSubmit}>*/}

            <div className="firstline">
                <div className="procentage">
                <label htmlFor="nrprocentage">Percentage of remote work time: </label>
                <input type="text" name="nrprocentage"/>
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
                        <textarea> </textarea> 
                    
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