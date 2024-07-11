import { ADD_TASK, DELETE_TASK } from '../actions/taskActions';
const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TASK:
        const newTasks = [...state.tasks, action.payload];
        localStorage.setItem('tasks', JSON.stringify(newTasks)); 
        return {
          ...state,
          tasks: newTasks,
        };
      case DELETE_TASK:
        const updatedTasks = state.tasks.filter(task => task.id !== action.payload);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks)); 
        return {
          ...state,
          tasks: updatedTasks,
        };
      default:
        return state;
    }
  };
  
  export default taskReducer;