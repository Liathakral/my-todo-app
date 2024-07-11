// Action Types
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
// Action Creators
export const addTask = (taskName) => ({
  type: ADD_TASK,
  payload: {
    id: new Date().getTime(),
    name: taskName,
  },
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});

export const toggleComplete = (taskId) => {
    return {
      type: 'TOGGLE_COMPLETE',
      payload: taskId
    };
  };
  