/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import * as R from 'ramda';
import http from '../../../utils/http';

const initialState = {
  drawerOpen: false,
  userData: {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
  },
  userDataPending: true,
  userId: '',
};

const reducers = {
  resetDrawerData: () => initialState,
  setDrawerOpen: R.assoc('drawerOpen'),
  setUserData: R.assoc('userData'),
  setUserDataPending: R.assoc('userDataPending'),
  setUserId: R.assoc('userId'),
};

export const userSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: R.map(singleReducer => R.flip(R.useWith(singleReducer, [R.prop('payload')])), reducers),
});

export const getDrawerOpen = R.path(['drawer', 'drawerOpen']);
export const getUserId = R.path(['drawer', 'userId']);
export const getUserData = R.path(['drawer', 'userData']);
export const getUserDataPending = R.path(['drawer', 'userDataPending']);

export const {
  resetDrawerData,
  setDrawerOpen,
  setUserData,
  setUserDataPending,
  setUserId,
} = userSlice.actions;

export const fetchIndividualUser = id => dispatch => {
  const url = `systemusers/${id}`;
  const response = http.get(url);
  response
    .then(({ data }) => {
      dispatch(setUserData(data));
      dispatch(setUserDataPending(false));
    })
    .catch(error => {
      // Todo: error handling? set snackbar message
      console.error(error);
    });
};

export default userSlice.reducer;
