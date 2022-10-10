import React from "react";
import SecondButton from "./UI/SecondButton/SecondButton";
import calednarIcon from "../assets/img/calendarNone.svg";
import userIcon from "../assets/img/user.svg";
import AppButton from "./UI/AppButton/AppButton";

const TodoButtons = () => {
    return (
        <div className="todo-app__create-buttons">
            <div className="todo-app__create-buttons-change">
                <SecondButton icon={calednarIcon}>Due Date</SecondButton>
                <SecondButton icon={userIcon}>Assign to</SecondButton>
            </div>
            <AppButton>Add todo</AppButton>
        </div>
    );
};

export default TodoButtons;