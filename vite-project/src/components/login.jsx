import React from 'react'
import {Link, useHistory} from "react-router-dom"

function Login (){

const goToHomePage =(()=>{
  history.push("/home")
})

  return (
    <div>
        
        <h1>Lodin Page</h1>

        <button onClick={goToHomePage}>Go to home page</button>
<br></br>
        <Link to="/signUp">Dont't have an account: Sign Up</Link>
        
    </div>
  )
}

export default Login