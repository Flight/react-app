import React, { useState } from "react";
import "./App.scss";

import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";

import type { Task } from "./typings/Task";

const App: React.FC = () => {
  const [taskList, setTaskList] = useState<Task[]>([]);

  return (
    <main className="App">
      <div className="App__center">
        <TaskForm onSubmit={(task) => {
          setTaskList([...taskList, task]);
        }} />
        <button type="button" onClick={() => {
          console.log(taskList);
        }}>Submit</button>
        <TaskList tasks={taskList} onTaskChange={(value, index) => {
          const newTaskList = [...taskList];

          newTaskList[index] = value;
          setTaskList(newTaskList);
        }} />
      </div>
    </main>
  );
};

export default App;
