import React, { useState } from "react";
import TodoButtons from "./TodoButtons";

const CreateTodo = () => {

    const [newTodo, setNewTodo] = useState({id: null, title: '', description: '', date: '', username: ''});

    return (
        <div className="todo-app__create">
            <div className="app-container app-container__create">
                <div className="todo-app__create-inputs">
                    <input onChange={(e) => setNewTodo({...newTodo, title: e.target.value})} placeholder="Task name here..." type="text"/>
                    <textarea onChange={(e) => setNewTodo({...newTodo, description: e.target.value})} reows='4' placeholder="Description"></textarea>
                </div>
                <TodoButtons/>
            </div>
        </div>
    );
};

export default CreateTodo;