import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import TaskForm from "../TaskForm/TaskForm";

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
      <ol>
        {tasks.map((task) => (
          <li key={task.id}>
            <TaskItem
              title={task.title}
              onRemove={() => handleRemove(task.id)}
            />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TaskList;
