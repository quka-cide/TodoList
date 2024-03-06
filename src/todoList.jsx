import React from "react";
import { useState } from "react";
import { TodoItem } from "./todoInput";

export function TodoList({ deleteTodo, toggleCompleted, todos }) {
    const getClassname = () => {
        return todos.length > 0 ? 'active' : 'noActive';
    }

    return (
        <div className={getClassname()}>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    toggleCompleted={toggleCompleted}
                />
            ))}
        </div>
    )
}

// export function TodoList({ deleteTodo, toggleCompleted, todos }) {
//     const getClassname = (todo) => {
//         return todos.includes(todo ? 'active' : 'noActive')
//     }
//    return (
//     <div className={getClassname(todo)}>
//         {todos.map(todo => (
//             <TodoItem
//             key={todo.id}
//             todo={todo}
//             deleteTodo={deleteTodo}
//             toggleCompleted={toggleCompleted}
//             />
//         ))}
//     </div>
//    )
// }