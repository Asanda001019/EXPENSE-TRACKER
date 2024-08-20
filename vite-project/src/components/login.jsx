import React from 'react'
import {Link ,useNavigate} from "react-router-dom"

function Login (){

const goToHomePage =useNavigate()
  


  return (
    <div>
        
        <h1>Login Page</h1>

        <button onClick={()=>goToHomePage("/home")}> Go to home page</button>
<br></br>
        <Link to="/signUp">Dont't have an account: Sign Up</Link>
        
    </div>
  )
}

export default Login