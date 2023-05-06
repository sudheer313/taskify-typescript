import React, { useState } from "react";

interface TaskItemProps {
  title: string;
  onRemove: () => void;
  onModify: (newTitle: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ title, onRemove, onModify }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [editing, setEditing] = useState(false);

  const handleModify = () => {
    onModify(newTitle);
    setEditing(false);
  };

  return (
    <div>
      {editing ? (
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onBlur={handleModify}
          onKeyDown={(e) => e.key === "Enter" && handleModify()}
        />
      ) : (
        <span onDoubleClick={() => setEditing(true)}>{title}</span>
      )}
      <button onClick={onRemove}>Remove</button>
      <button onClick={() => setEditing(!editing)}>
        {editing ? "Cancel" : "Modify"}
      </button>
    </div>
  );
};
export default TaskItem;
