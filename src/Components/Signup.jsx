import Swap from './Swap.jsx'
import './Form.css'
import { useState } from 'react'



const Signup=({setswap,swap})=>{
  const [Name,setName]=useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")
  
  const inpName=(event)=>{
  
  let value = event.target.value
  setName(value)
  
}

 const createPassword =(event)=>{
   let value = event.target.value
   setPassword(value)
 }
 
 
 const setConfirm =(event)=>{
   let value = event.target.value
   setConfirmPassword(value)
 }
 
 const isFormValid = Name.length >= 4 && password.length >= 6 && password === confirmPassword;

  return(
  <div className="wrapper">
    <Swap setswap={setswap} swap={swap}></Swap>
  
      <form action="#">
        <div className="input-box">
          <input type="text" placeholder="Enter your name" onInput={inpName}required />
         {Name.length < 4 ? <span class="error">*Name should be 4 character long</span> :true}
          
        </div>
        <div className="input-box">
          <input type="email" placeholder="Enter your email" required />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Create password" onInput={createPassword} required />
          {password.length < 6 ? <span class="error">*Password should be 6 character long</span> :true}
          
        </div>
        <div className="input-box">
          <input type="password" placeholder="Confirm password" onInput={setConfirm} required />
          {password !== confirmPassword && password.length >5 && (
        <span className="error">*Password didn't match</span>
      )}
        </div>
  
        <div className="input-box button">
          <input type="submit" value="Register Now"disabled={!isFormValid}/>
        </div>

      </form>
    </div>
    )
}

export default Signup;