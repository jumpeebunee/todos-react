import React from "react";
import cl from "./AppInput.module.css";

const AppInput = ({setValue, ...props}) => {
    return (
        <input {...props}  onChange={(e) => setValue(e.target.value)} className={cl.appInput}/>
    );
};

export default AppInput;