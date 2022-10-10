import React from "react";
import cl from "./Checkbox.module.css"

const RadioButton = () => {
    return (
        <label className={cl.checkboxButton}>
            <input className={cl.checkboxButtonInput} type="checkbox"/>
            <span className={cl.checkboxButtonIcon}></span>
        </label>
    );
};

export default RadioButton;