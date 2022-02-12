import React, { useState } from "react";
import { Task } from "../../typings/Task";

import "./TaskForm.scss";

interface TaskFormProps {
  className?: string;
  onSubmit: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ className = "", onSubmit }) => {
  const [task, setTask] = useState("");

  return (
    <form onSubmit={(submitEvent) => {
      submitEvent.preventDefault();
      onSubmit(task);
    }}>
      <input className={`TaskForm ${className}`} type="text" placeholder="Note" onChange={e => setTask(e.target.value)} />
      <button type="submit" hidden>Submit</button>
    </form>
  );
};

export default TaskForm;
