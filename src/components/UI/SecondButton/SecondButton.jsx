import React from "react";
import cl from "./SecondButton.module.css";

const SecondButton = ({children, icon}) => {
    console.log(icon)
    return (
        <button className={cl.button}>
            <span style={{backgroundImage: `url(${icon})`}} className={cl.buttonIcon}></span>
            <div className={cl.buttonText}>{children}</div>
        </button>
    );
};

export default SecondButton;