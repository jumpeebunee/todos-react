import React from "react";
import RadioButton from "./UI/RadioButton/Checkbox";
import CalendarIcon from "../assets/img/calendar.svg";
import UserIcon from "../assets/img/user.svg";

const TodoItem = () => {
    return (
        <li className="todo-app__item">
            <RadioButton/>
            <div className="todo-app__item-main">
                <h3>Learn javascripit and typescript</h3>
                <p>At the Frontendconf 2021 conference, showed the pros and cons of TypeScript</p>
                <div className="todo-app__item-about">
                    <div className="todo-app__item-info todo-app__item-calendar">
                        <span style={{backgroundImage: `url(${CalendarIcon})`}}></span>
                        <div>25 Feb 2022</div>
                    </div>
                    <div className="todo-app__item-about-dot"></div>
                    <div className="todo-app__item-info todo-app__item-user">
                        <span style={{backgroundImage: `url(${UserIcon})`}}></span>
                        <div>Ben Horn</div>
                    </div>
                </div>
            </div>
        </li>
    );
};  

export default TodoItem;