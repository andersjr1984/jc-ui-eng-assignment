import React, { useEffect } from 'react';
import { arrayOf, bool, func, shape } from 'prop-types';
import { makeStyles, Table, TableBody, TableHead, useMediaQuery } from '@material-ui/core';
import { LoadingRows, TableHeader, UserRows } from './components';

const useStyles = makeStyles(theme => ({
  actionRow: {
    textAlign: 'center',
    width: theme.spacing(14),
  },
  tableRoot: {
    '& td': {
      '& button svg': {
        fill: theme.palette.primary.main,
      },
      '& button.edit:hover svg': {
        fill: theme.palette.secondary.main,
      },
      '& button.delete:hover svg': {
        fill: theme.palette.error.main,
      },
      overflowWrap: 'break-word',
    },
    '& tbody tr:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.table,
    },
    '& th': {
      fontWeight: 700,
    },
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(2),
    tableLayout: 'fixed',
    width: '100%',
  },
  checkboxRow: {
    textAlign: 'center',
    width: theme.spacing(7),
  },
}));

const UserTable = props => {
  const { actionRow, checkboxRow, tableRoot } = useStyles();
  const { deleteUser, fetchUsers, setDrawerOpen, setUserId, users, usersPending } = props;
  const smUp = useMediaQuery(theme => theme.breakpoints.up('sm'));

  const handleEditUser = id => {
    setDrawerOpen(true);
    setUserId(id);
  };

  // Fetch Users on initial render
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <Table classes={{ root: tableRoot }}>
      <TableHead>
        <TableHeader actionRow={actionRow} smUp={smUp} />
      </TableHead>
      <TableBody>
        {usersPending ? (
          <LoadingRows smUp={smUp} />
        ) : (
          <UserRows
            checkboxRow={checkboxRow}
            onDeleteUser={deleteUser}
            onEditUser={handleEditUser}
            smUp={smUp}
            users={users}
          />
        )}
      </TableBody>
    </Table>
  );
};

UserTable.propTypes = {
  deleteUser: func.isRequired,
  fetchUsers: func.isRequired,
  users: arrayOf(shape({})).isRequired,
  setDrawerOpen: func.isRequired,
  setUserId: func.isRequired,
  usersPending: bool.isRequired,
};

export default UserTable;
