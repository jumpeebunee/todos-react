import React from "react";
import cl from "./AppModal.module.css";

const AppModal = ({children, modalOpen, setModalOpen}) => {

    const rootClasses = [cl.appModal];

    if (modalOpen) rootClasses.push(cl.appModal_open);

    return (
        <div onClick={() => setModalOpen(false)} className={rootClasses.join(' ')}>
            <div onClick={(e) => e.stopPropagation()} className={cl.appModalContent}>
                {children}
            </div>
        </div>
    );
};

export default AppModal;