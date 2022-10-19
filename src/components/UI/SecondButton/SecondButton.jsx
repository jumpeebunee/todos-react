import React from "react";
import cl from "./SecondButton.module.css";

const SecondButton = ({children, icon, ...props}) => {
    return (
        <button {...props} className={cl.button}>
            <span style={{backgroundImage: `url(${icon})`}} className={cl.buttonIcon}></span>
            <div className={cl.buttonText}>{children}</div>
        </button>
    );
};

export default SecondButton;