import React from "react";
import "./styles.css"
const InputFeild = () =>{
    return <form className='AddTask'>
         <a>Nazwa zadania</a>
         <input type='Nazwa' placeholder="Nazwa" className="NazwaBox"/>
         <a>Typ zadania</a>
         <input type='Typ' placeholder="Typ" className="TypBox"/>
         <a>Status zadania</a>
         <input type='Status' placeholder="Status" className="StatusBox"/>
         <a>Pacownik</a>
         <input type='Pacownik' placeholder="Pacownik" className="PacownikBox"/>
         <a>Ilość godzin</a>
         <input type='Termin' placeholder="Termin" className="TerminBox"/>
         <a>Pioryter</a>
         <input type='Pioryter' placeholder="Pioryter" className="PioryterBox"/>

         <button  className="loginButton">Dodaj</button>

    </form>
  



}

export default InputFeild;