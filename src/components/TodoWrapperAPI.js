import React, { useState, useEffect } from 'react';
import { TodoForm } from './TodoForm';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
import axios from 'axios';

const API_URL = 'http://localhost:3001/todos';

export const TodoWrapperAPI = () => {
    const [todos, setTodos] = useState([]);

    // Fetch todos (GET API)
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(API_URL); // Using Fetch API for GET requests
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
    fetchTodos();
  }, []);

  // Add a new todo using Axios (POST API)
  const addTodo = async (task) => {
    try {
      const newTodo = { task, completed: false, isEditing: false };
      const response = await axios.post(API_URL, newTodo); // Axios POST request
      setTodos([...todos, response.data]); // Update the todos state with the newly added todo
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

    const toggleComplete = (id) => {
        const todoToUpdate = todos.find((todo) => todo.id === id);
        const updatedTodo = { ...todoToUpdate, completed: !todoToUpdate.completed };
    
        setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
    };
    
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    
    const editTodo = (id) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)));
    };
    
    const editTask = (task, id) => {
        const updatedTodo = todos.find((todo) => todo.id === id);
        updatedTodo.task = task;
        updatedTodo.isEditing = false;
    
        setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
    };
    

    // const toggleComplete = async (id) => {
    //     try {
    //         const todoToUpdate = todos.find((todo) => todo.id === id);
    //         const updatedTodo = { ...todoToUpdate, completed: !todoToUpdate.completed };

    //         await fetch(`${API_URL}/${id}`, {
    //             method: 'PUT',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify(updatedTodo),
    //         });

    //         setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
    //     } catch (error) {
    //         console.error('Error toggling todo complete:', error);
    //     }
    // };

    // const deleteTodo = async (id) => {
    //     try {
    //         await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    //         setTodos(todos.filter((todo) => todo.id !== id));
    //     } catch (error) {
    //         console.error('Error deleting todo:', error);
    //     }
    // };

    // const editTodo = (id) => {
    //     setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)));
    // };

    // const editTask = async (task, id) => {
    //     try {
    //         const updatedTodo = todos.find((todo) => todo.id === id);
    //         updatedTodo.task = task;
    //         updatedTodo.isEditing = false;

    //         await fetch(`${API_URL}/${id}`, {
    //             method: 'PUT',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify(updatedTodo),
    //         });

    //         setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
    //     } catch (error) {
    //         console.error('Error editing todo:', error);
    //     }
    // };

    return (
        <div className="TodoWrapper">
            <h1>Get Things Done!</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo) =>
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={todo} key={todo.id} />
                ) : (
                    <Todo
                        task={todo}
                        key={todo.id}
                        toggleComplete={toggleComplete}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                    />
                )
            )}
        </div>
    );
};
