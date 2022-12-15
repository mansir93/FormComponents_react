import './App.css'; 
import {useState} from "react"; 
import {validateEmail} from "../src/utils"; 
 
const PasswordErrorMessage = () => { 
 return ( 
   <p className="FieldError">Password should have at least 8 characters</p> 
 ); 
}; 
 
function App() { 
 const [firstName, setFirstName] = useState(""); 
 const [lastName, setLastName] = useState(""); 
 const [email, setEmail] = useState(""); 
 const [password, setPassword] = useState({ 
   value: "", 
   isTouched: false, 
 }); 
 const [role, setRole] = useState("role"); 

 const getIsFormValid = () => { 
   return ( 
     firstName && 
     validateEmail(email) && 
     password.value.length >= 8 && 
     role !== "role" 
   ); 
 }; 
 
 const clearForm = () => { 
   setFirstName(""); 
   setLastName(""); 
   setEmail(""); 
   setPassword({ 
     value: "", 
     isTouched: false, 
   }); 
   setRole("role"); 
 }; 
 
 const handleSubmit = (e) => { 
   e.preventDefault(); 
   alert("Account created!"); 
   clearForm(); 
 }; 
 
 return ( 
   <div className="App"> 

     <form onSubmit={handleSubmit}>
       
       <fieldset>

          <h2>Sign Up</h2>

          <div className="Field"> 
              <label htmlFor='firstname'> First name <sup>*</sup> </label> 
              <input 
                id='firstname'
                value={firstName} 
                onChange={(e) => { 
                  setFirstName(e.target.value); 
                }} 
                placeholder="First name" 
              /> 
          </div>
          
          <div className="Field"> 
            <label htmlFor='lastname'>Last name</label> 
            <input
              id='lastname' 
              value={lastName} 
              onChange={(e) => { 
                setLastName(e.target.value); 
              }} 
              placeholder="Last name" 
            /> 
          </div>
          
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
          
          <div className="Field"> 
            <label> 
              Role <sup>*</sup> 
            </label> 
            <select value={role} onChange={(e) => setRole(e.target.value)}> 
              <option value="role">Role</option> 
              <option value="individual">Individual</option> 
              <option value="business">Business</option> 
            </select> 
          </div>
          
          <button type="submit" disabled={!getIsFormValid()}> 
            Create account 
          </button> 

       </fieldset> 
     </form> 

   </div> 
 ); 
} 

export default App; 