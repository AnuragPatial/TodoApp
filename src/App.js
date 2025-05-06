import React from 'react';

import './App.css';

import { TodoWrapperAPI } from './components/TodoWrapperAPI';
import { TodoWrapperLocalStorage } from './components/TodoWrapperLocalStorage';
import { useState } from 'react';
// function App() {
//   console.log("rrrrrr")
//   // const values = useState("Ankit");
//   // values[0];
//   // values[2]();
//  const [name, a1] = useState("Ankit");
//  const [name2, a2] = useState("Sandeeep");
//  const [name3, a3] = useState("Dragon");
//  const [name4, a4] = useState("Team Lead");

// async function changeName(){
//   a1("kartik"); 
//   await fetch ('https://fakestoreapi.com/products');
//   a2("kartik2"); 
//   a3("kartik3"); 
//   a4("kartik4"); 
// }
// async function changeNameAgain(){
//   a1("Anit"); 
//   await fetch ('https://fakestoreapi.com/products');
//   a2("Sandeep"); 
//   a3("Dragon"); 
//   a4("Team Lead"); 
// }
//   return (
//     <div className="App">
//       <h1>Hello {name} </h1>
//       <h1>Hello {name2}</h1>
//       <h1>Hello {name3}</h1>
//       <h1>Hello {name4}</h1>
//       <button onClick={changeName}>click</button>
//       <button onClick={changeNameAgain}>click</button>
//     </div>
//   );
// }

// export default App;

// function App(){
//   const [count , setCount] = useState(4);
//   function decrement(){
//     setCount(count - 1);
//   }
//   function increment(){
//     setCount(count + 1);
//   }
  
//   return(
//     <>
//     <button onClick = {decrement}>-</button>
//     <span>{count}</span>
//     <button onClick = {increment}>+</button>
//     </>
//   )
// }

// export default App;


// function App() {
//   const [newTask, setNewTask] = useState('');
//   const [tasks, setTask ] = useState([]);
//   const [deletedTasks, setDeletedTasks] = useState([]);

//   const addTask = () =>{
//     if(newTask.trim() !== ''){
//       setTask([...tasks,{text:newTask, completed: false}]);
//       setNewTask('');
//     }
//   }
//   const toggleTask = (index) =>{
//     const updatedTasks = [...tasks];
//     updatedTasks[index].completed = !updatedTasks[index].completed;
//     setTask(updatedTasks);
//   }
//   const deleteTask = (index) => {
//     const deleteToTask = tasks[index];
//     setDeletedTasks([...deletedTasks, deleteToTask]);
//     const updatedTasks = [...tasks];
//     updatedTasks.splice(index,1);
//     setTask(updatedTasks);
//   } 
//   return (
//     <div className='App'>
//       <h1>ToDoList</h1>
//       <input type = "text" value = {newTask} onChange = {(e) => setNewTask(e.target.value)} placeholder = "Add a new Task" />
//       <button onClick={addTask}>Add</button>
//       <ul>
//         {tasks.map((task, index) => (
//           <li key = {index}>
//             <input type = "checkbox" checked = {task.completed} onChange={()=> toggleTask(index)} />
//             <span style = {{textDecoration: task.completed ? 'line-through' : 'none'}}>
//               {task.text}
//             </span>
//             <button onClick={() => deleteTask(index)}>Delete</button>
//           </li>
//         ))}
        
//       </ul>
//       <h2>Deleted Tasks</h2>
//       <ul>
//         {deletedTasks.map((task, index)=>(
//           <li key = {index}>
//             <span>{task.text}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }


// // function App(){
// //   function f2(){
// //     return(<h1>Anurag</h1>)
// //   }
  
// //   function f1(){
    
// //     const arr = [1,23,4,6,6,7,8];
// //     const arr1 = ["a","b"];
// //     // const array = [3,35,35,35,32,25,26,87];
// //     // const length = arr.length;
// //     const arr2 = [];
// //     // const arrowf = arr.filter((element)=>
// //     //   element % 2 === 0
// //     // )
// //     return arr.includes("a");

    
//   //   let sum = 0;
//   //   // let sum = arr.concat(array);
//   //   for(let i = 1;i<arr.length;i+=2){
//   //      sum += arr[i];
//   //   }

//   //  return sum;
    
// //(a===25)? <h1>Bhuvin</h1>:<h2>{f2()}</h2>
   
// //   }
  
// //   return(
// //     <div>
// //       {f1()}
// //     </div>
// //   )
// // }
// import './App.css';
// import { TodoWrapper } from './components/TodoWrapper';

function App() {
  return (
    <div className="App">
      <TodoWrapperLocalStorage />
    </div>
  );
}

export default App;
