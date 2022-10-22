import React from "react";
import cl from "./Checkbox.module.css"

const RadioButton = (props) => {
    return (
        <label className={cl.checkboxButton}>
            <input {...props} className={cl.checkboxButtonInput} type="checkbox"/>
            <span className={cl.checkboxButtonIcon}></span>
        </label>
    );
};

export default RadioButton;