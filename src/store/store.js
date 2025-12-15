import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../components/ReduxTodo/todoSlice';

export const store = configureStore({
  reducer: { todos: todoReducer }
});
