import React from "react";
import './styles.css';

const InputField = () => {
    return <form className="input">
        <input type="input" placeholder="Wpisz zadanie" className="input__box"/>
        <button className="input_submit" type="submit">OK</button>
    </form>
};

export default InputField