import React from "react";
import "./styles.css"
const InputFeild = () =>{
    return <form className='login'>
         <input type='login' placeholder="Login" className="loginBox"/>
         <input type='password' placeholder="Password" className="PasswordBox"/>
         <button  className="loginButton">logowanie</button>
         <a href={''}>problem z logowaniem?</a>
    </form>
  



}

export default InputFeild;