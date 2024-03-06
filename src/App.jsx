import React, { useState } from "react";
import { TodoList } from "./todoList";
import { AddSection } from "./addSection";
import "./styles.scss";

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'buy a bread',
      completed: true
    },
    {
      id: 2,
      text: 'meeting at school',
      completed: false
    }
  ]);
  const [text, setText] = useState('');
  const [isActive, setIsAcive] = useState(false);
  function addTodo(todo) {
    if (text !== '') {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos([...todos, newTodo]);
    setText('');
  }
  };

  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
};

function toggleCompleted(id) {
  setTodos(todos.map(todo => {
  if (todo.id === id) {
  return {...todo, completed: !todo.completed};
  } else {
  return todo;
  } 
  }));
  }

  return (
  <div className="app">
    <h1>Todo List</h1>
    <AddSection
    text={text}
    setText={setText}
    addTodo={addTodo}
    />
    <TodoList 
    todos={todos}  
    deleteTodo={deleteTodo} 
    toggleCompleted={toggleCompleted}
    />
    </div>
  );
}
