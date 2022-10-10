import React from "react";
import TodoList from "../components/TodoList";

const MainPage = () => {
    return (
        <div className="main-container">
            <div className="todo-app">
                <div className="app-container todo-header">
                    <div className="todo-header__info">
                        <h2>Todos</h2>
                        <span>3</span>
                    </div>
                </div>
                <div className="app-container"> 
                    <TodoList/>
                </div>
            </div>
        </div>
    )
};

export default MainPage;