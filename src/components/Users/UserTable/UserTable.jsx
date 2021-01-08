import React, { useEffect, useState } from 'react';
import { arrayOf, bool, func, shape } from 'prop-types';
import * as R from 'ramda';
import { makeStyles, Table, TableBody } from '@material-ui/core';
import { LoadingRows, TableHeader, UserRows } from './TableComponents';

const useStyles = makeStyles(theme => ({
  actionRow: {
    width: theme.spacing(14),
  },
  tableRoot: {
    '& td': {
      overflowWrap: 'break-word',
    },
    tableLayout: 'fixed',
    width: '100%',
  },
  checkboxRow: {
    textAlign: 'center',
    width: theme.spacing(7),
  },
}));

const UserTable = props => {
  const [sortAsc, setSortAsc] = useState(true);
  const [orderBy, setOrderBy] = useState('lastName');
  const { actionRow, checkboxRow, tableRoot } = useStyles();
  const direction = sortAsc ? 'asc' : 'desc';
  const { fetchUsers, setDrawerOpen, setUserId, users, usersPending } = props;

  const handleRequestSort = value => {
    if (value === orderBy) return setSortAsc(R.not);
    return setOrderBy(value);
  };

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
      <TableHeader
        actionRow={actionRow}
        checkboxRow={checkboxRow}
        direction={direction}
        onRequestSort={handleRequestSort}
        orderBy={orderBy}
      />
      <TableBody>
        {usersPending ? (
          <LoadingRows />
        ) : (
          <UserRows checkboxRow={checkboxRow} onEditUser={handleEditUser} users={users} />
        )}
      </TableBody>
    </Table>
  );
};

UserTable.propTypes = {
  fetchUsers: func.isRequired,
  users: arrayOf(shape({})).isRequired,
  setDrawerOpen: func.isRequired,
  setUserId: func.isRequired,
  usersPending: bool.isRequired,
};

export default UserTable;
