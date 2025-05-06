// import React , {useState} from "react";

// export const TodoForm = ({addTodo}) => {
//     const [newTask, setNewTask] = useState("");

//     const handleChange = e => {
//         e.preventDefault();
//         if(newTask){
//             addTodo(newTask);
//             setNewTask("");
//         }
//     }
//     return(
//         <form className = 'TodoForm' onSubmit={handleChange}>
//             <input type = "text" className = 'todo-input' value = {newTask} onChange={(e) => setNewTask(e.target.value)} placeholder = "Add New Task" />
//             <button type = "submit" className="todo-btn">Add</button>
//         </form>
//     )
// }

import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        if (value) {
          // add todo
          addTodo(value);
          // clear form after submission
          setValue('');
        }
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='What is the task today?' />
    <button type="submit" className='todo-btn'>Add Task</button>
  </form>
  )
}