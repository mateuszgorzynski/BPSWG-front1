import React from "react";
import "./styles.css"
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-dark-indigo/theme.css';
import 'primereact/resources/primereact.css';
import { Button } from 'primereact/button';

const InputFeild = () =>{
    return <form className='login'>
         <a>Login</a>
         <input type='Login' placeholder="Login" className="loginBox"/>
         <a>Hasło</a>
         <input type='Password' placeholder="Hasło" className="PasswordBox"/>
         <Button label="Logowanie" className="loginButton"/>
         <Button label="Problem z logowaniem?" className="loginButton p-button-danger"/>
    </form>
  



}

export default InputFeild;