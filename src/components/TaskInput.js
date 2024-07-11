import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions/taskActions';

const TaskInput = () => {
  const dispatch = useDispatch();
  const [taskText, setTaskText] = useState('');

  const handleChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() !== '') {
      dispatch(addTask(taskText));
      saveTasksToLocalStorage(); 
      setTaskText(''); 
    }
  };

  const saveTasksToLocalStorage = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const newTask = { id: tasks.length + 1, text: taskText, completed: false };
    localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
  };

  return (
    <form onSubmit={handleSubmit} className="task-input-container">
      <input
        type="text"
        className="task-input"
        placeholder="Add a new task..."
        value={taskText}
        onChange={handleChange}
      />
      <button type="submit" className="task-input-button">
        Add Task
      </button>
    </form>
  );
};

export default TaskInput;
