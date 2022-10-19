import React, { useState } from "react";
import CreateTodo from "../components/CreateTodo";
import TodoHeader from "../components/TodoHeader";
import TodoList from "../components/TodoList";
import AppButton from "../components/UI/AppButton/AppButton";
import AppInput from "../components/UI/AppInput/AppInput";
import AppModal from "../components/UI/AppModal/AppModal";

const MainPage = () => {

    const options = {year: 'numeric', month: 'short', day: 'numeric' };

    const [todos, setTodos] = useState([
        {
            id: 1,
            title: 'Learn javascripit and typescript',
            description: 'At the Frontendconf 2021 conference, showed the pros and cons of TypeScript',
            date: '25 Feb 2022',
            username: 'Ben Horn',
        },
        {
            id: 2,
            title: 'Create Landing page',
            description: '',
            date: '29 Feb 2022',
            username: 'Ben Horn',
        },
        {
            id: 3,
            title: 'Learn React Hooks',
            description: 'Need for making amazing websites',
            date: '25 Mar 2022',
            username: 'Ben Horn',
        },
        
    ]);
    
    const [modalOpen, setModalOpen] = useState(false);
    const [username, setUsername] = useState('Default Name');
    const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString('en-US', options).split(',').join(''));

    function changeDate(e) {
        setCurrentDate(new Date(e).toLocaleDateString('en-US', options).split(',').join(''));
    };
    
    return (
        <div className="main-container">
            <div className="todo-app">
                <div>
                    <TodoHeader/>
                    <TodoList todos={todos}/>
                </div>
                <CreateTodo
                    todos={todos}
                    setTodos={setTodos}
                    modalOpen={modalOpen}
                    setModalOpen={setModalOpen}
                    username={username}
                    currentDate={currentDate}
                />
            </div>
            <AppModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                <AppInput setValue={setUsername} style={{marginBottom: '15px'}} type="text" placeholder="Username"/>
                <AppInput setValue={(e) => changeDate(e)} style={{marginBottom: '15px'}} type="date" placeholder="Date"/>
                <AppButton style={{width: '100%'}}>Change</AppButton>
            </AppModal>
        </div>
    )
};

export default MainPage;