/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import * as R from 'ramda';
import axios from 'axios';
import { baseApiUrl } from '../../utils/const';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    usersPending: true,
  },
  reducers: {
    setUsers: (state, { payload }) => {
      state.users = payload;
    },
    setUsersPending: (state, { payload }) => {
      state.usersPending = payload;
    },
  },
});

export const getUsers = R.path(['user', 'users']);
export const getUsersPending = R.path(['user', 'usersPending']);

export const { setUsers, setUsersPending } = userSlice.actions;

export const fetchUsers = () => (dispatch) => {
  const url = `${baseApiUrl}/systemusers`;
  const response = axios.get(url);
  response.then(({ data }) => {
    dispatch(setUsers(data));
    dispatch(setUsersPending(false));
  }).catch((error) => {
    // Todo: error handling? set snackbar message
    console.error(error);
  });
};

export default userSlice.reducer;
