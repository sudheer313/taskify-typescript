import React from 'react';
import './App.css';
import TaskForm from './components/TaskForm/TaskForm';

const App:React.FC = () =>{
  return (
    <div >
      <h1>WElcome to Taskify</h1>
      <TaskForm onAddTask={(title)=>console.log('Task added:', title)}/>
   </div>

  );
}

export default App;
