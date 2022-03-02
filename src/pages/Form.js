import React, {useState} from 'react'
import FormLogin from '../components/loginForm/FormLogin'
import Success from './Success';

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    function submitForm() {
        setIsSubmitted(true);
    }
  return (

<div>
    {!isSubmitted ? (
        <FormLogin submitForm={submitForm} />) :
        (<Success />)}
    
</div>

   
  )
}

export default Form