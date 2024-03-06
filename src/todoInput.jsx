import React from "react";

export function TodoItem({ todo, deleteTodo, toggleCompleted}) {
    function handleChange() {
        toggleCompleted(todo.id);
    }
    return (
        <div className="todo-item">
                <input
            type="checkbox"
            checked={todo.completed}
            onChange={handleChange}
            />
            <p>{todo.text}</p>
            <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>delete</button>
        </div>
    )
}