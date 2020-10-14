import React from 'react';
import TodoItem from './TodoItem';
// import { v4 as uuidv4 } from 'uuid';

export default function TodoList({ todos, setTodos, filteredList }) {
    return (
        <div>
            <div className="todo-container">
                <ul className="todo-list">
                    {filteredList.map(todo => (
                        <TodoItem key={ todo.id } setTodos={ setTodos } todos={ todos } todo={ todo }/>
                    ))}
                </ul>
            </div>
        </div>
    );
};
