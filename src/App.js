import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css'; // Import your custom styles here

function App() {
  const initializeTasks = () => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    return storedTasks;
  };

  return (
    <div className="App">
      <div className="todo-container">
        <h1 className="todo-heading">Simple To-Do App</h1>
        <TaskInput />
        <TaskList initialTasks={initializeTasks()} />
      </div>
    </div>
  );
}

export default App;
