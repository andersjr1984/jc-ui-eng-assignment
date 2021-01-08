import React, { useEffect } from 'react';
import { bool, func, string } from 'prop-types';
import { Drawer, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  paper: {
    width: '300px',
  },
});

const UserDrawer = props => {
  const { fetchIndividualUser, resetDrawerData, setDrawerOpen, userId, drawerOpen } = props;
  const isEdit = !!userId;
  const { paper } = useStyles();

  const handleClose = () => {
    setDrawerOpen(false);
    // just so the display doesn't change on fade out
    setTimeout(() => {
      resetDrawerData();
    }, 500);
  };

  // Fetch individual user when we have an id (not when creating)
  useEffect(() => {
    userId && fetchIndividualUser(userId);
  }, [fetchIndividualUser, userId]);

  return (
    <Drawer anchor="right" classes={{ paper }} onClose={handleClose} open={drawerOpen}>
      {isEdit ? 'Edit' : 'Create'}
    </Drawer>
  );
};

UserDrawer.propTypes = {
  fetchIndividualUser: func.isRequired,
  userId: string,
  drawerOpen: bool.isRequired,
  resetDrawerData: func.isRequired,
  setDrawerOpen: func.isRequired,
};

UserDrawer.defaultProps = {
  userId: undefined,
};

export default UserDrawer;
