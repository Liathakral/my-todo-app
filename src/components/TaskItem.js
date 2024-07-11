import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleComplete } from '../redux/actions/taskActions';
import './TaskItem.css'
const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const [completed, setCompleted] = useState(task.completed);

  const handleCompleteToggle = () => {
    dispatch(toggleComplete(task.id));
    setCompleted(!completed);
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <li className={`task-item ${completed ? 'completed' : ''}`}>
      <div className="task-item-text">{task.name}</div>
      <div className="task-item-actions">
        <button className="complete-button" onClick={handleCompleteToggle}>
          {completed ? 'Undo' : 'Complete'}
        </button>
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
