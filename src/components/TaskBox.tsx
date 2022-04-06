import React from "react";
import "./styles.css"

const InputFeild = () =>{
    return (

        <form className='TaskBox'>

        <button  className="BezPracownika">Zadania Bez Pracownika</button>
        <button  className="ZPracownikiem">Zadania Z Pracownikiem</button>
        <button  className="Dodaj">Dodaj</button>

        </form>
    )
}

export default InputFeild;