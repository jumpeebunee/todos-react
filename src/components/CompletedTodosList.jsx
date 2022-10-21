import React from "react";
import CompletedTodoItem from "../components/CompletedTodoItem";

const TodoList = ({todos}) => {
    return (
        <div className="app-container"> 
            <ul className="todo-app_list">
                {todos.map(todo => 
                    <CompletedTodoItem
                        key={todo.id + todo.title}
                        title={todo.title}
                        description={todo.description}
                        username={todo.username}
                        date={todo.date}
                    />
                )}
            </ul>
        </div>
    );
};

export default TodoList;