import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../components/UserTable/userSlice';

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
