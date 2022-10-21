import React, { useState } from "react";
import CreateTodo from "../components/CreateTodo";
import TodoHeader from "../components/TodoHeader";
import TodoList from "../components/TodoList";
import CompletedTodosList from "../components/CompletedTodosList"
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
            date: '25 Oct 2022',
            username: 'Ben Horn',
        },
        {
            id: 2,
            title: 'Create Landing page',
            description: '',
            date: '20 Oct 2022',
            username: 'Ben Horn',
        },
        {
            id: 3,
            title: 'Learn React Hooks',
            description: 'Need for making amazing apps',
            date: '13 Nov 2022',
            username: 'Ben Horn',
        },
        
    ]);
    const [completedTodos, setCompletedTodos] = useState([
        {
            id: 1,
            title: 'Create todo-app',
            description: 'Create new project in react',
            date: '13 Oct 2022',
            username: 'Ben Horn',
        },
    ]);
    
    const [modalOpen, setModalOpen] = useState(false);
    const [newTodo, setNewTodo] = useState({id: '', title: '', description: '', username: '', date: ''});
    const [username, setUsername] = useState('Default Name');
    const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString('en-US', options).split(',').join(''));
    const [currentTab, setCurrentTab] = useState('todos');

    function changeDate(e) {
        setCurrentDate(new Date(e).toLocaleDateString('en-US', options).split(',').join(''));
    };
    
    return (
        <div className="main-container">
            <div className="todo-app">
                <div>
                    <TodoHeader 
                        totalTodos={todos.length}
                        totalCompletedTodos={completedTodos.length}
                        currentTab={currentTab}
                        setCurrentTab={setCurrentTab}
                    />
                    {currentTab === 'todos'
                        ? <TodoList todos={todos}/> 
                        : <CompletedTodosList todos={completedTodos}/>
                    }
                </div>
                <CreateTodo
                    todos={todos}
                    setTodos={setTodos}
                    newTodo={newTodo}
                    setNewTodo={setNewTodo}
                    setModalOpen={setModalOpen}
                    username={username}
                    currentDate={currentDate}
                />
            </div>
            <AppModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                <AppInput setValue={setUsername} style={{marginBottom: '15px'}} type="text" placeholder="Username"/>
                <AppInput setValue={(e) => changeDate(e)} style={{marginBottom: '15px'}} type="date" placeholder="Date"/>
                <AppButton onClick={() => setModalOpen(false)} style={{width: '100%'}}>Change</AppButton>
            </AppModal>
        </div>
    );
};

export default MainPage;