import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  completed: []
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTask(state, action) {
      state.tasks.push({ id: Date.now(), text: action.payload });
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter(t => t.id !== action.payload);
      state.completed = state.completed.filter(t => t.id !== action.payload);
    },
    markComplete(state, action) {
      const task = state.tasks.find(t => t.id === action.payload);
      if(task){
        state.completed.push(task);
        state.tasks = state.tasks.filter(t => t.id !== action.payload);
      }
    }
  }
});

export const { addTask, deleteTask, markComplete } = todoSlice.actions;
export default todoSlice.reducer;
