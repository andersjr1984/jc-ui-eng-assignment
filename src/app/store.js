import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../components/Users/store/userSlice';
import drawerReducer from '../components/Users/store/drawerSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    drawer: drawerReducer,
  },
});
