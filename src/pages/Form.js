import React, {useState} from 'react'
import FormLogin from '../components/loginForm/FormLogin'
import HomeUser from './HomeUser';

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    function submitForm() {
        setIsSubmitted(true);
    }
  return (

<div>
    {!isSubmitted ? (
        <FormLogin submitForm={submitForm} />) :
        (<HomeUser/>)}
    
</div>

   
  )
}

export default Form