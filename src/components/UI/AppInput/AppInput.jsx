import React from "react";
import cl from "./AppInput.module.css";

const AppInput = ({value, setValue, ...props}) => {
    return (
        <input {...props} value={value} onChange={(e) => setValue(e.target.value)} className={cl.appInput}/>
    );
};

export default AppInput;