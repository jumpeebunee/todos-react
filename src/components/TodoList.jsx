import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import TodoItem from "./TodoItem";

const TodoList = ({todos, removeTodo}) => {
    return (
        <div className="app-container"> 
            <ul className="todo-app_list">
                <TransitionGroup>
                    {todos.map(todo => 
                        <CSSTransition key={todo.id} timeout={500} classNames="todo">
                            <TodoItem
                                title={todo.title}
                                description={todo.description}
                                username={todo.username}
                                date={todo.date}
                                id={todo.id}
                                removeTodo={removeTodo}
                            />
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </ul>
        </div>
    );
};

export default TodoList;