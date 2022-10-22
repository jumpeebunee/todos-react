import React from "react";

const TodoHeader = ({totalTodos, totalCompletedTodos, currentTab, setCurrentTab, setCompletedTodos}) => {
    return (
        <div className="app-container todo-header">
            <div className="todo-header__buttons">
                <button onClick={() => setCurrentTab('todos')} className={currentTab === 'todos' ? 'todo-header__info todo-header__info_active' : 'todo-header__info'}>
                    <h2>Todos</h2>
                    <span>{totalTodos}</span>
                </button>
                <button onClick={() => setCurrentTab('completed')} className={currentTab === 'completed' ? 'todo-header__info todo-header__info_active' : 'todo-header__info'}>
                    <h2>Completed</h2>
                    <span>{totalCompletedTodos}</span>
                </button>
            </div>
            <button className="todo-header__clear" onClick={() => setCompletedTodos([])}></button>
        </div>
    );
};

export default TodoHeader;