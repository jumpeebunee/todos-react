import React from "react";
import CreateTodo from "../components/CreateTodo";
import TodoHeader from "../components/TodoHeader";
import TodoList from "../components/TodoList";

const MainPage = () => {
    return (
        <div className="main-container">
            <div className="todo-app">
                <div>
                    <TodoHeader/>
                    <TodoList/>
                </div>
                <CreateTodo/>
            </div>
        </div>
    )
};

export default MainPage;