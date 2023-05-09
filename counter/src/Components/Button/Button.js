import React from "react";
import "./Button.css"

const Button = (props) => {
    return (
        <button onClick={props.click} className="add-btn">{props.text}</button>
    )
};


export default Button;