
import { useState, useEffect, useRef } from 'react'
import { useContext } from 'react';
import AuthContext from './context/AuthProvider'
import axios from 'axios';


const useForm = (callback,validate) => {



    const {setAuth} = useContext(AuthContext);


    const [values, setValues] = useState({
        email: '' ,
        password: ''
    })

    const [errors, setErrors] = useState({});
    const[isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const{name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

const login = async () => {
    try {
  
        const response = await axios.post("http://localhost:8080/login",
        JSON.stringify({email:values.email, password: values.password}),
        {
            headers: {
               
            "Content-Type": "application/json"},
            withCredentials: false
        }
        );
        const accessToken = response?.data?.accessToken;
        const roles = response?.data?.role;
        console.log(accessToken);
        setAuth({email:values.email, password:values.password, accessToken, roles})
       
      
        
}catch ( err) {
    
  if(!err?.response) {
      setErrors("No server found")
  }else if(err.response?.status === 400) {
      setErrors("Missing username or password");
  } else if(err.response?.status === 401) {
  setErrors("Unauthorized");
  } else {
      setErrors("Login Failed");
  }
        
    }
}







    const handleSubmit =  (e) =>{
        
        e.preventDefault();
        login();
        setErrors(validate(values));
        setIsSubmitting(true);

    }
   

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    },
[errors]
);

    return {handleChange, values, handleSubmit, errors}
}

export default useForm