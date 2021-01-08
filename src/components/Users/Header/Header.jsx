import {
  Box,
  IconButton,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { func, string } from 'prop-types';
import React from 'react';
import * as R from 'ramda';

const useStyles = makeStyles({
  filterStyles: {
    width: '40%',
  },
});

const filterOptions = [
  { value: 'None', label: 'None' },
  { value: 'email', label: 'E-Mail' },
  { value: 'id', label: 'ID' },
];

const Header = ({ filterBy, filterTerm, setDrawerOpen, setFilterBy, setFilterTerm }) => {
  const { filterStyles } = useStyles();

  const handleFilterByChange = ({ target: { value } }) => {
    setFilterTerm('');
    setFilterBy(value);
  };

  const handleFilterTermChange = R.o(setFilterTerm, R.path(['target', 'value']));

  return (
    <>
      <Box display="flex" justifyContent="space-between" width="100%">
        <Typography variant="h5">User List</Typography>
        <IconButton onClick={() => setDrawerOpen(true)}>
          <Add />
        </IconButton>
      </Box>
      <Box display="flex" justifyContent="space-between" width="100%">
        <Select className={filterStyles} onChange={e => handleFilterByChange(e)} value={filterBy}>
          {filterOptions.map(({ value, label }) => (
            <MenuItem key={label} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
        <TextField
          className={filterStyles}
          disabled={filterBy === 'None'}
          label="Filter Term"
          onChange={handleFilterTermChange}
          value={filterTerm}
        />
      </Box>
    </>
  );
};

Header.propTypes = {
  setDrawerOpen: func.isRequired,
  filterBy: string.isRequired,
  filterTerm: string.isRequired,
  setFilterBy: func.isRequired,
  setFilterTerm: func.isRequired,
};

export default Header;
