import React from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
    return (
        <ul className="todo-app_list">
            <TodoItem/>
        </ul>
    );
};

export default TodoList;