import React from "react";

interface TaskItemProps {
  title: string;
  onRemove: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ title, onRemove }) => {
  return (
    <div>
      <span>{title}</span>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
};

export default TaskItem;
