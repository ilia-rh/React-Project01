import React from "react";
import "./Counter.css"

const Counter = (props) => {
    return (
        <p className="counter">Counter : {props.text}</p>
    )
};


export default Counter;