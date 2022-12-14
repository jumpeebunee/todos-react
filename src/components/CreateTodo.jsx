import React from "react";
import TodoButtons from "./TodoButtons";

const CreateTodo = ({todos, setTodos, newTodo, setNewTodo, setModalOpen, username, currentDate}) => {
    
    return (
        <div className="todo-app__create">
            <div className="app-container app-container__create">
                <div className="todo-app__create-inputs">
                    <input value={newTodo.title} onChange={(e) => setNewTodo({...newTodo, title: e.target.value})} placeholder='Task name here...' type="text"/>
                    <textarea value={newTodo.description} onChange={(e) => setNewTodo({...newTodo, description: e.target.value})} rows='4' placeholder="Description"></textarea>
                </div>
                <TodoButtons 
                    todos={todos}
                    setTodos={setTodos}
                    newTodo={newTodo}
                    setNewTodo={setNewTodo}
                    setModalOpen={setModalOpen}
                    username={username}
                    currentDate={currentDate}
                />
            </div>
        </div>
    );
};

export default CreateTodo;