import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../redux/userSlice';
import counterReducer from "./counterSlice"

const store = configureStore({
  reducer: {
    users: usersReducer,
    counter: counterReducer,
  },
});

export default store;
