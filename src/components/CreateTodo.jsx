import React, { useState } from "react";
import TodoButtons from "./TodoButtons";

const CreateTodo = ({todos, setTodos, newTodo, setNewTodo, setModalOpen, username, currentDate, errors, setErrors}) => {
    
    return (
        <div className="todo-app__create">
            <div className="app-container app-container__create">
                <div className="todo-app__create-inputs">
                    <input className={errors.title ? 'todo-app__create-input_error' : ''} onChange={(e) => setNewTodo({...newTodo, title: e.target.value})} placeholder={errors.title ? 'Please enter the name of todo!' : 'Task name here...'} type="text"/>
                    <textarea onChange={(e) => setNewTodo({...newTodo, description: e.target.value})} rows='4' placeholder="Description"></textarea>
                </div>
                <TodoButtons 
                    todos={todos}
                    setTodos={setTodos}
                    newTodo={newTodo}
                    setModalOpen={setModalOpen}
                    username={username}
                    currentDate={currentDate}
                    errors={errors}
                    setErrors={setErrors}
                />
            </div>
        </div>
    );
};

export default CreateTodo;