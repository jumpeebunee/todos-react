import React from "react";
import SecondButton from "./UI/SecondButton/SecondButton";
import calednarIcon from "../assets/img/calendarNone.svg";
import userIcon from "../assets/img/user.svg";
import AppButton from "./UI/AppButton/AppButton";

const TodoButtons = ({todos, setTodos, newTodo, setModalOpen, username, currentDate}) => {

    function addNewTodo() {
        if (new Date(currentDate).getTime() - new Date().getTime() > 0) {

        };
        setTodos([...todos, {...newTodo,  date: currentDate, username: username}]);
    };

    return (
        <div className="todo-app__create-buttons">
            <div className="todo-app__create-buttons-change">
                <SecondButton onClick={() => setModalOpen(true)} icon={calednarIcon}>Due Date</SecondButton>
                <SecondButton onClick={() => setModalOpen(true)} icon={userIcon}>Assign to</SecondButton>
            </div>
            <AppButton disabled={newTodo.title.length <= 0 ? true : false} onClick={() => addNewTodo()}>Add todo</AppButton>
        </div>
    );
};

export default TodoButtons;