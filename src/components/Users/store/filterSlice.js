/* eslint-disable no-param-reassign */
import { createSelector, createSlice } from '@reduxjs/toolkit';
import * as R from 'ramda';

const initialState = {
  filterBy: 'None',
  filterTerm: '',
};

const reducers = {
  setFilterBy: R.assoc('filterBy'),
  setFilterTerm: R.assoc('filterTerm'),
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: R.map(singleReducer => R.flip(R.useWith(singleReducer, [R.prop('payload')])), reducers),
});

export const getFilterBy = R.path(['filter', 'filterBy']);
export const getFilterTerm = R.path(['filter', 'filterTerm']);

const filterTermFunction = R.o(R.includes, getFilterTerm);

// if the second arg, filterBy, is 'None', return true always
const shouldFilter = R.ifElse(R.flip(R.equals('None')), R.T, R.propSatisfies);

// tests to see if the filterBy prop includes the filter term
export const filterPredicate = createSelector(filterTermFunction, getFilterBy, shouldFilter);

export const { setFilterBy, setFilterTerm } = filterSlice.actions;

export default filterSlice.reducer;
