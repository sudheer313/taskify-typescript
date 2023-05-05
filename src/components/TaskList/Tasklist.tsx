import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import TaskForm from '../TaskForm/TaskForm';

interface TaskListProps {
  tasks: { id: string; title: string }[];
  onRemoveTask: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  const handleRemove = (id: string) => {
    console.log("Remove task with id:", id);
    // Implement task removal logic
  };

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} title={task.title} onRemove={() => handleRemove(task.id)} />
      ))}
    </div>
  );
};

export default TaskList;
