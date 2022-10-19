import React, { useState } from "react";
import TodoButtons from "./TodoButtons";

const CreateTodo = ({todos, setTodos, modalOpen, setModalOpen, username, currentDate}) => {

    const [newTodo, setNewTodo] = useState({id: '', title: '', description: '', username: '', date: ''});

    return (
        <div className="todo-app__create">
            <div className="app-container app-container__create">
                <div className="todo-app__create-inputs">
                    <input onChange={(e) => setNewTodo({...newTodo, title: e.target.value})} placeholder="Task name here..." type="text"/>
                    <textarea onChange={(e) => setNewTodo({...newTodo, description: e.target.value})} rows='4' placeholder="Description"></textarea>
                </div>
                <TodoButtons 
                    todos={todos}
                    setTodos={setTodos}
                    newTodo={newTodo}
                    setNewTodo={setNewTodo}
                    modalOpen={modalOpen}
                    setModalOpen={setModalOpen}
                    username={username}
                    currentDate={currentDate}
                />
            </div>
        </div>
    );
};

export default CreateTodo;