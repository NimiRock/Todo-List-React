import React from 'react';

export default function TodoItem({ todo, todos, setTodos }) {
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{todo.text}</li>
            <button className="complete-btn" onClick={() => {
                setTodos(todos.map((item) => {
                    if(item.id === todo.id) {
                        return {
                            ...item, completed: !item.completed
                        }
                    }
                    return item
                }))
            }}>
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={() => {
                setTodos(todos.filter(el => el.id !== todo.id));
            }}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}
