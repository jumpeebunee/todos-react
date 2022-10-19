import React from "react";
import RadioButton from "./UI/RadioButton/Checkbox";
import CalendarIcon from "../assets/img/calendar.svg";
import UserIcon from "../assets/img/user.svg";

const TodoItem = ({title, description, date, username}) => {
    return (
        <li className="todo-app__item">
            <RadioButton/>
            <div className="todo-app__item-main">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="todo-app__item-about">
                    <div className="todo-app__item-info todo-app__item-calendar">
                        <span style={{backgroundImage: `url(${CalendarIcon})`}}></span>
                        <div>{date}</div>
                    </div>
                    <div className="todo-app__item-about-dot"></div>
                    <div className="todo-app__item-info todo-app__item-user">
                        <span style={{backgroundImage: `url(${UserIcon})`}}></span>
                        <div>{username}</div>
                    </div>
                </div>
            </div>
        </li>
    );
};  

export default TodoItem;