import React from "react";
import TodoButtons from "./TodoButtons";

const CreateTodo = () => {
    return (
        <div className="todo-app__create">
            <div className="app-container app-container__create">
                <div className="todo-app__create-inputs">
                    <input placeholder="Task name here..." type="text"/>
                    <textarea reows='4' placeholder="Description"></textarea>
                </div>
                <TodoButtons/>
            </div>
        </div>
    );
};

export default CreateTodo;