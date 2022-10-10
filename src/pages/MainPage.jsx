import React, { useState } from "react";
import CreateTodo from "../components/CreateTodo";
import TodoHeader from "../components/TodoHeader";
import TodoList from "../components/TodoList";

const MainPage = () => {

    const [todos, setTodos] = useState([
        {
            id: 1,
            title: 'Learn javascripit and typescript',
            description: 'At the Frontendconf 2021 conference, showed the pros and cons of TypeScript',
            date: '25 Feb 2022',
            username: 'Ben Horn',
        },
        {
            id: 2,
            title: 'Create Landing page',
            description: '',
            date: '29 Feb 2022',
            username: 'Ben Horn',
        },
        {
            id: 3,
            title: 'Learn React Hooks',
            description: 'Need for making amazing websites',
            date: '25 Mar 2022',
            username: 'Ben Horn',
        },
        
    ]);

    return (
        <div className="main-container">
            <div className="todo-app">
                <div>
                    <TodoHeader/>
                    <TodoList todos={todos}/>
                </div>
                <CreateTodo/>
            </div>
        </div>
    )
};

export default MainPage;