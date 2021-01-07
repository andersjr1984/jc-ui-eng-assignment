/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import * as R from 'ramda';
import http from '../../utils/http';

const initialState = {
  users: [],
  usersPending: true,
};

const reducers = {
  setUsers: (state, { payload }) => {
    state.users = payload;
  },
  setUsersPending: (state, { payload }) => {
    state.usersPending = payload;
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers,
});

export const getUsers = R.path(['user', 'users']);
export const getUsersPending = R.path(['user', 'usersPending']);

export const { setUsers, setUsersPending } = userSlice.actions;

export const fetchUsers = () => (dispatch) => {
  const url = 'systemusers';
  const response = http.get(url);
  response.then(({ data: { results } }) => {
    dispatch(setUsers(results));
    dispatch(setUsersPending(false));
  }).catch((error) => {
    // Todo: error handling? set snackbar message
    console.error(error);
  });
};

export default userSlice.reducer;
