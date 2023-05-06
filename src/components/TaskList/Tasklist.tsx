import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import TaskForm from "../TaskForm/TaskForm";

interface TaskListProps {
  tasks: { id: string; title: string }[];
  onRemoveTask: (id: string) => void;
  onModifyTask: (id: string, newTitle: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onRemoveTask,
  onModifyTask,
}) => {
  // Implement task removal logic
  const handleRemove = (id: string) => {
    onRemoveTask(id);
  };

  return (
    <div>
      <ol>
        {tasks.map((task) => (
          <li key={task.id}>
            <TaskItem
              title={task.title}
              onRemove={() => handleRemove(task.id)}
              onModify={(newTitle) => onModifyTask(task.id, newTitle)}
            />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TaskList;
