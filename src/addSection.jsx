import React from "react";

export function AddSection({ text, setText, addTodo }) {
    return (
        <div className="addSection">
        <input 
        value={text}
        onChange={e => setText(e.target.value)}
        />
        <button onClick={() => addTodo(text)}>Add Task</button>
        </div>
    )
}