import React from "react";
import "./styles.css"
const InputFeild = () =>{
    return <form className='navigation'>
        <button  className="MenuAdmin"><a  href="">strona</a></button>
        <button  className="kalendarzAdmin"><a href="">kalendarz</a></button>
        <button  className="zadaniAdmina"><a href="">zadania</a></button>
        <button  className="kontaktAdmin"><a href="">kontakt</a></button>

    </form>
}

export default InputFeild;