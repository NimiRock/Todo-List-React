import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

export default function App() {
  const [inputText, setinputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filteredList, setFilteredList] = useState([]);
  console.log(todos)
  console.log(filteredList)
  
  // Run once when the app starts
  useEffect(() => {
    getLocalTodos();
  }, [])

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, filterStatus]);

  const filterHandler = () => {
    switch (filterStatus) {
      case "completed":
        setFilteredList(todos.filter(todo => todo.completed === true));
        break;
      
      case "uncompleted":
        setFilteredList(todos.filter(todo => todo.completed === false));
        break;

      default:
        setFilteredList(todos);
        break;
    }
  }

  // Save to local
  const saveLocalTodos = () => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }else{
      localStorage.setItem('todos', JSON.stringify([]));
    }
  }

  // Get from local storage
  const getLocalTodos = () => {
    setTodos(JSON.parse(localStorage.getItem('todos')));
  }


  return (
    <div>
      <header>
        <h1>Nimrod's Todo List</h1>
      </header>
      <Form setinputText={ setinputText } setTodos={ setTodos } todos={ todos } inputText={ inputText } setFilterStatus={ setFilterStatus } />
      <TodoList setTodos={ setTodos } todos={ todos } filteredList={ filteredList } />
    </div>
  );
};