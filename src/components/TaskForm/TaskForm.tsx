import React, {useState} from "react";
import styles from './TaskForm.module.css'

interface TaskFormProps{
    onAddTask:(title:string)=>void;
}

const TaskForm:React.FC<TaskFormProps>=({onAddTask})=>{
    const[title,setTitle]=useState("")
    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(title.trim()){
            onAddTask(title.trim());
            setTitle('')
        }
    }
    
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.target.value);
    }
    
    return(
        <form onSubmit={handleSubmit} className={styles.taskForm}>
        <input
        type="text"
        value={title}
        onChange={handleChange}
        placeholder="Enter task title...."
        className={styles.input}
        />
        <button type="submit" className={styles.addButton}>
        Add Task
        </button>
        </form>
    )
}




export default TaskForm