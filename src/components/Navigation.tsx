import React from "react";
import "./styles.css"
const InputFeild = () =>{
    return <form className='navigation'>
        <button  className="Menu"><a  href="">strona</a></button>
        <button  className="kalendarz"><a href="">kalendarz</a></button>
        <button  className="zadania"><a href="">zadania</a></button>
        <button  className="kontakt"><a href="">kontakt</a></button>
        <button  className="rejestracja"><a href="">rejestracja godzin</a></button>

    </form>
}

export default InputFeild;