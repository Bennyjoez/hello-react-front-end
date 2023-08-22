import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './messageReducer';

const store = configureStore({
  reducer: messageReducer,
});

export default store;
