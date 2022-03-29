import React from "react";
import "./styles.css"
const InputFeild = () =>{
    return <form className='AddTask'>
         <a>Nazwa zadania</a>
         <input type='Nazwa' placeholder="Nazwa" className="NazwaBox"/>
         <a>Typ zadania</a>
         <input type='Typ' placeholder="Typ" className="TypBox"/>
         <a>Typ zadania</a>
         <input type='Pacownik' placeholder="Pacownik" className="PacownikBox"/>
         <a>Pacownik</a>
         <input type='Termin' placeholder="Termin" className="TerminBox"/>

         <button  className="loginButton">Dodaj</button>

    </form>
  



}

export default InputFeild;