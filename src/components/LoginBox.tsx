import React from "react";
import "./styles.css"
const InputFeild = () =>{
    return <form className='login'>
         <a>Login</a>
         <input type='Login' placeholder="Login" className="loginBox"/>
         <a>Hasło</a>
         <input type='Password' placeholder="Hasło" className="PasswordBox"/>
         <button  className="loginButton">logowanie</button>
         {<a href={''}>problem z logowaniem?</a> }
    </form>
  



}

export default InputFeild;