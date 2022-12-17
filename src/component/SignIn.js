import React,{ useState } from 'react'
import { validateEmail } from "../utils";
import "../App.css";

const PasswordErrorMessage = () => { 
    return ( 
      <p className="FieldError">Password should have at least 8 characters</p> 
    ); 
   };

const SignIn = () => {

    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");

    const getIsFormValid = () => {  
        return ( 
          validateEmail(email) && 
          password.value.length >= 8         
        ); 
      };
    
    const clearForm = () => { 
        setEmail(""); 
        setPassword("");  
      }; 


    const handleSubmit = (e) => { 
        e.preventDefault();
        alert("Login Successfully"); 
        clearForm(); 
      }; 
      

  return (
    <div className="App"> 

     <form onSubmit={handleSubmit}>
       
       <fieldset>

          <h2>Sign In</h2>
          
          <div className="Field"> 
            <label htmlFor='email'> Email address <sup>*</sup> </label> 
            <input
              id='email'
              value={email} 
              onChange={(e) => { 
                setEmail(e.target.value); 
              }} 
              placeholder="Email address" 
            /> 
          </div>
          
          <div className="Field"> 
            <label htmlFor='password'> Password <sup>*</sup> </label> 
            <input 
              id='password'
              value={password.value} 
              type="password" 
              onChange={(e) => { 
                setPassword({ ...password, value: e.target.value }); 
              }} 
              onBlur={() => { 
                setPassword({ ...password, isTouched: true }); 
              }} 
              placeholder="Password" 
            />
            {password.isTouched && password.value.length < 8 ? ( 
              <PasswordErrorMessage /> 
            ) : null} 
          </div>         
          
          <button type="submit" disabled={!getIsFormValid()}> 
            Create account 
          </button> 

       </fieldset> 
     </form> 

   </div> 
  )
}

export default SignIn;