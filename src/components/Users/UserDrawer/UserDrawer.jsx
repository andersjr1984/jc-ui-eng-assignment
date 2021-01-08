import React, { useEffect, useState } from 'react';
import { bool, func, shape, string } from 'prop-types';
import {
  Box,
  Button,
  CircularProgress,
  Drawer,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import * as R from 'ramda';

import { Close } from '@material-ui/icons';
import { Form } from './components';
import { formOrder } from '../const';

const useStyles = makeStyles(theme => ({
  paper: {
    width: '300px',
  },
  formStyle: {
    '& >div': {
      width: '100%',
    },
    height: '100%',
    overflowY: 'auto',
    padding: theme.spacing(0, 2),
  },
  headerText: {
    margin: 'auto 0',
    width: '100%',
  },
}));

const UserDrawer = props => {
  const {
    addUser,
    updateUser,
    fetchIndividualUser,
    resetDrawerData,
    setDrawerOpen,
    userData,
    userDataPending,
    userId,
    drawerOpen,
  } = props;
  const isEdit = !!userId;
  const { formStyle, headerText, paper } = useStyles();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
  });
  const pendingData = isEdit && userDataPending;
  const isNotUpdated = R.whereEq(formData, userData);
  const isNotValid = R.o(R.any(R.isEmpty), R.values)(formData);
  const disableSubmit = isNotUpdated || isNotValid;

  const handleChange = ({ value, name }) => setFormData(R.assoc(name, value));

  const handleClose = () => {
    setDrawerOpen(false);
    // just so the display doesn't change on fade out
    setTimeout(() => {
      resetDrawerData();
    }, 500);
  };

  const handleSubmit = async () => {
    const submitSuccess = isEdit ? await updateUser(formData, userId) : await addUser(formData);
    if (submitSuccess) handleClose();
  };

  // Fetch individual user when we have an id (not when creating)
  useEffect(() => {
    userId && fetchIndividualUser(userId);
  }, [fetchIndividualUser, userId]);

  useEffect(() => {
    setFormData(R.pick(R.pluck('item', formOrder), userData));
  }, [userData]);

  return (
    <Drawer anchor="right" classes={{ paper }} onClose={handleClose} open={drawerOpen}>
      <Box display="flex" height="40px" justifyContent="space-between" py={1}>
        <Typography align="center" classes={{ root: headerText }} variant="h5">
          {isEdit ? 'Edit' : 'Create'} User
        </Typography>
        <IconButton onClick={handleClose}>
          <Close />
        </IconButton>
      </Box>
      {pendingData ? (
        <Box alignItems="center" display="flex" height="100%" justifyContent="center">
          <CircularProgress />
        </Box>
      ) : (
        <Form formData={formData} formStyle={formStyle} onChange={handleChange} />
      )}
      <Box display="flex" height="40px" justifyContent="center" py={1}>
        <Button color="primary" disabled={disableSubmit} onClick={handleSubmit} variant="contained">
          Submit
        </Button>
      </Box>
    </Drawer>
  );
};

UserDrawer.propTypes = {
  addUser: func.isRequired,
  updateUser: func.isRequired,
  fetchIndividualUser: func.isRequired,
  userData: shape({}).isRequired,
  userDataPending: bool.isRequired,
  userId: string,
  drawerOpen: bool.isRequired,
  resetDrawerData: func.isRequired,
  setDrawerOpen: func.isRequired,
};

UserDrawer.defaultProps = {
  userId: undefined,
};

export default UserDrawer;
