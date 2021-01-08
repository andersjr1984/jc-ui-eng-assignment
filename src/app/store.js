import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../components/Users/store/userSlice';
import drawerReducer from '../components/Users/store/drawerSlice';
import filterReducer from '../components/Users/store/filterSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    drawer: drawerReducer,
    filter: filterReducer,
  },
});
