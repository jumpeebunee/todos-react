import React from "react";
import CompletedTodoItem from "../components/CompletedTodoItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const TodoList = ({todos}) => {
    return (
        <div className="app-container"> 
            <ul className="todo-app_list">
                <TransitionGroup>
                    {todos.map(todo => 
                        <CSSTransition key={todo.id} timeout={500} classNames="todo">
                            <CompletedTodoItem
                                title={todo.title}
                                description={todo.description}
                                username={todo.username}
                                date={todo.date}
                            />
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </ul>
        </div>
    );
};

export default TodoList;