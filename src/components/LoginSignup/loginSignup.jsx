import React, { useState } from 'react'
import './loginSignup.css'
import user_icon from '../assets/email.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'


const LoginSignup = () => {

    const [action, setAction] = useState("Login");

  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action === "Login"? <div></div> : <div className="input">
                <img src={user_icon} />
                <input type="text" placeholder='Name'/>
            </div>}
            

            <div className="input">
                <img src={email_icon} />
                <input type="email" placeholder='Email'/>
            </div>

            <div className="input">
                <img src={password_icon} />
                <input type="password" placeholder='Password'/>
            </div>
        </div>

        {action === "Login"? <div className="forgot-password">
            Lost Password <span>Click Here</span>
        </div> : <div></div>}
        

        <div className="submit-container">
            <div className={action === "Login"? "submitgray":"submit"} onClick={()=>{
                setAction("Sign Up")
            }}>Sign Up</div>
            <div className={action === "Sign Up"? "submitgray":"submit"} onClick={()=>{
                setAction("Login")
            }}>Log In</div>
        </div>
    </div>
  )
}

export default LoginSignup