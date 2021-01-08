import { Button, ButtonGroup, Dialog, makeStyles, Typography } from '@material-ui/core';
import { func, string } from 'prop-types';
import React from 'react';

const useStyles = makeStyles(theme => ({
  dialog: {
    padding: theme.spacing(2),
  },
  bgRoot: {
    marginTop: theme.spacing(2),
    marginLeft: 'auto',
  },
}));

const DeleteDialog = ({ deleteId, onConfirm, onClose }) => {
  const open = !!deleteId;
  const { bgRoot, dialog } = useStyles();

  return (
    <Dialog classes={{ paper: dialog }} onClose={onClose} open={open}>
      <Typography align="center">Are you sure you want to delete this user?</Typography>
      <ButtonGroup classes={{ root: bgRoot }}>
        <Button color="primary" onClick={onConfirm} variant="contained">
          Confirm
        </Button>
        <Button color="secondary" onClick={onClose} variant="contained">
          Cancel
        </Button>
      </ButtonGroup>
    </Dialog>
  );
};

DeleteDialog.propTypes = {
  deleteId: string.isRequired,
  onConfirm: func.isRequired,
  onClose: func.isRequired,
};

export default DeleteDialog;
