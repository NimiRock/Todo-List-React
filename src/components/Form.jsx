import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Form({ setinputText, inputText, setTodos, todos, setFilterStatus }) {

    return (
        <div>
            <form>
                <input type="text" className="todo-input" value={ inputText } onChange={(e) => setinputText(e.target.value)} />
                <button type="submit" className="todo-button" onClick={(e) => {
                    e.preventDefault();
                    setTodos([...todos,
                        {
                            text: inputText,
                            completed: false,
                            id: uuidv4()
                        }]);
                    setinputText("");
                }}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select name="todos" className="filter-todo" onChange={(e) => {
                        setFilterStatus(e.target.value)
                    }}>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    );
};
