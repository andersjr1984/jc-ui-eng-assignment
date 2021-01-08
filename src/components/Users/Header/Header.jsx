import { Box, IconButton, Typography } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { func } from 'prop-types';
import React from 'react';

const Header = ({ setDrawerOpen }) => (
  <Box display="flex" justifyContent="space-between" width="100%">
    <Typography variant="h5">User List</Typography>
    <IconButton onClick={() => setDrawerOpen(true)}>
      <Add />
    </IconButton>
  </Box>
);

Header.propTypes = {
  setDrawerOpen: func.isRequired,
};

export default Header;
