import React, { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/Tasklist';

interface Task{
  id:string;
  title:string;
}

const App:React.FC = () =>{
  const [tasks,setTasks]=useState<Task[]>([]);
  const addTask=(title:string)=>{
    const newTask:Task={id:Date.now().toString(), title};
    setTasks((prevTasks)=>[...prevTasks,newTask])
  }

  const removeTask=(id:string)=>{
    setTasks((prevTask)=>prevTask.filter((task)=>task.id!==id))
  }
  return (
    <div >
      <h1>WElcome to Taskify</h1>
      <TaskForm onAddTask={addTask}/>
      <TaskList tasks={tasks} onRemoveTask={removeTask}/>
   </div>

  );
}

export default App;
