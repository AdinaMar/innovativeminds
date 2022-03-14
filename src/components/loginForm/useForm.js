
import { useState, useEffect, useRef } from 'react'
import { useContext } from 'react';
import AuthContext from './context/AuthProvider'
import axios from 'axios';

const loginURL ='/auth';

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

    const handleSubmit = async (e) =>{
        e.preventDefault();
try {
        const response = await axios.post(loginURL,
        JSON.stringify({email:values.email, password: values.password}),
        {
            headers: {"Content-Type": "application/json"},
            withCredentials: true
        }
        );
        const accessToken = response?.data?.accessToken;
        const roles = response?.data?.role;
        setAuth({email:values.email, password:values.password, accessToken, roles})
        setErrors(validate(values));
        setIsSubmitting(true);
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