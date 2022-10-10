import React from "react";
import cl from "./AppButton.module.css";

const AppButton = ({children}) => {
    return (
        <button className={cl.button}>{children}</button>
    );
};

export default AppButton;