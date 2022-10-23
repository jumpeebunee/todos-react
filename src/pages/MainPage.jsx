import React, { useMemo, useState } from "react";
import CreateTodo from "../components/CreateTodo";
import TodoHeader from "../components/TodoHeader";
import TodoList from "../components/TodoList";
import CompletedTodosList from "../components/CompletedTodosList"
import AppButton from "../components/UI/AppButton/AppButton";
import AppInput from "../components/UI/AppInput/AppInput";
import AppModal from "../components/UI/AppModal/AppModal";

const MainPage = () => {

    const demoTodos = [
        {
            id: 1,
            title: 'Learn javascripit and typescript',
            description: 'At the Frontendconf 2021 conference, showed the pros and cons of TypeScript',
            date: 'Oct 25 2022',
            username: 'Ben Horn',
        },
        {
            id: 2,
            title: 'Create Landing page',
            description: '',
            date: 'Oct 20 2022',
            username: 'Ben Horn',
        },
        {
            id: 3,
            title: 'Learn React Hooks',
            description: 'Need for making amazing apps',
            date: 'Nov 13 2022',
            username: 'Ben Horn',
        },
    ];
    const demoCompletedTodos = [
        {
            id: 4,
            title: 'Create todo-app',
            description: 'Create new project in react',
            date: 'Oct 13 2022',
            username: 'Ben Horn',
        },
    ];

    const options = { year: 'numeric', month: 'short', day: 'numeric' };

    const [todos, setTodos] = useState((localStorage.getItem('todos')) ? JSON.parse(localStorage.getItem('todos')) : demoTodos);
    const [completedTodos, setCompletedTodos] = useState((localStorage.getItem('completedTodos')) ? JSON.parse(localStorage.getItem('completedTodos')) : demoCompletedTodos);
    
    const [modalOpen, setModalOpen] = useState(false);
    const [newTodo, setNewTodo] = useState({id: '', title: '', description: '', username: '', date: ''});
    const [username, setUsername] = useState('Default Name');
    const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString('en-US', options).split(',').join(''));
    const [currentTab, setCurrentTab] = useState('todos');

    function changeDate(e) {
        setCurrentDate(new Date(e).toLocaleDateString('en-US', options).split(',').join(''));
    };

    const removeTodo = (id) => {
        const filteredTodos = todos.filter(item => item.id !== id);
        const fileredCompletedTodos = todos.filter(item => item.id === id);

        setTodos(filteredTodos);
        setCompletedTodos([...completedTodos, ...fileredCompletedTodos]);
    };

    useMemo(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    },[todos]);

    useMemo(() => {
        localStorage.setItem('completedTodos', JSON.stringify(completedTodos));
    },[completedTodos])

    return (
        <div className="main-container">
            <div className="todo-app">
                <div>
                    <TodoHeader 
                        totalTodos={todos.length}
                        totalCompletedTodos={completedTodos.length}
                        currentTab={currentTab}
                        setCurrentTab={setCurrentTab}
                        setCompletedTodos={setCompletedTodos}
                    />
                    {currentTab === 'todos'
                        ? <TodoList todos={todos} removeTodo={removeTodo}/> 
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