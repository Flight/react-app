import React from "react";
import { Task } from "../../typings/Task";

import "./TaskList.scss";

interface TaskListItemProps {
  task: Task;
  onTaskChange: (task: Task) => void;
}

const TaskListItem: React.FC<TaskListItemProps> = ({ task, onTaskChange }) => (
  <li>
    <input type="text" value={task} onChange={(event) => {
      onTaskChange(event.currentTarget.value);
    }} />
  </li>
);

interface TaskListProps {
  className?: string;
  tasks: Task[];
  onTaskChange: (value: Task, index: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ className = "", tasks, onTaskChange }) => {
  return (
    <ul className={className}>
      {tasks.map((task: Task, index: number) => <TaskListItem task={task} key={index} onTaskChange={(newValue) => onTaskChange(newValue, index)} />)};
    </ul>
  );
};

export default TaskList;
