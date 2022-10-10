import React from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
    return (
        <div className="app-container"> 
            <ul className="todo-app_list">
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
            </ul>
        </div>
    );
};

export default TodoList;