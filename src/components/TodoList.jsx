import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({todos, removeTodo}) => {
    return (
        <div className="app-container"> 
            <ul className="todo-app_list">
                {todos.map(todo => 
                    <TodoItem
                        key={todo.id + todo.title}
                        title={todo.title}
                        description={todo.description}
                        username={todo.username}
                        date={todo.date}
                        id={todo.id}
                        removeTodo={removeTodo}
                    />
                )}
            </ul>
        </div>
    );
};

export default TodoList;