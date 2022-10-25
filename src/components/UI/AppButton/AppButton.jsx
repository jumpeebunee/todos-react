import React from "react";
import cl from "./AppButton.module.css";

const AppButton = ({children, ...props}) => {
    return (
        <button {...props} className={cl.button}>{children}</button>
    );
};

export default AppButton;