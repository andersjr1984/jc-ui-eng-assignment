/* eslint-disable no-param-reassign */
import { createSelector, createSlice } from '@reduxjs/toolkit';
import * as R from 'ramda';
import http from '../../../utils/http';
import { filterPredicate } from './filterSlice';

const initialState = {
  users: [],
  usersPending: true,
};

const reducers = {
  setUsers: R.assoc('users'),
  setUsersPending: R.assoc('usersPending'),
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: R.map(singleReducer => R.flip(R.useWith(singleReducer, [R.prop('payload')])), reducers),
});

const getUnfilteredUsers = R.path(['user', 'users']);
export const getUsers = createSelector(filterPredicate, getUnfilteredUsers, R.filter);
export const getUsersPending = R.path(['user', 'usersPending']);

export const { setUsers, setUsersPending } = userSlice.actions;

export const fetchUsers = () => dispatch => {
  const url = 'systemusers';
  const response = http.get(url);
  response
    .then(({ data: { results } }) => {
      dispatch(setUsers(results));
      dispatch(setUsersPending(false));
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error(error);
    });
};

export const deleteUser = id => dispatch => {
  dispatch(setUsersPending(true));
  const url = `systemusers/${id}`;
  const response = http.delete(url);
  return response
    .then(() => {
      dispatch(fetchUsers());
      return true;
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error(error);
      dispatch(setUsersPending(false));
      return false;
    });
};

export default userSlice.reducer;
