import React from 'react'
import background from "../../images/officeBackground.jpg";
import Typical from 'react-typical';
import useForm from './useForm';
import validate from './validateInfo'

const FormLogin = ({submitForm}) => {

    const {handleChange, values, handleSubmit, errors} = useForm(submitForm,validate)
  return (
      <div className="wrapper">
    <div className="container">
    <img src={background} alt="office-background"/>
    <div className="overlay">
        <h2>Office Space</h2>
    </div>
    </div>
    <div className='form-container'>
        <form className="form" onSubmit={handleSubmit}>
            <h1>
           
            <Typical 
            loop={Infinity}
            wrapper="b"
            steps={["Welcome!", 1000]} /></h1>

            <div className="form-inputs">
            <div className="inputs">
                <label htmlFor='email' className="form-label">E-mail address:</label>

                <input type="email" className="form-input" name="email" placeholder='Enter Your E-mail' id='email' value={values.email} onChange={handleChange}/>
                {errors.email && <p>{errors.email}</p>}
            </div>


            <div className="inputs">
                <label htmlFor='password' className="form-label">Password:</label>

                <input type="password" className="form-input" name="password" placeholder='Enter Your Password' id='password' value={values.password} onChange={handleChange}/>
                {errors.password && <p>{errors.password}</p>}
            </div>
            <button className="input-btn" type="submit">LOGIN</button>
            </div>
        </form>
    </div>
</div>
  )
}

export default FormLogin